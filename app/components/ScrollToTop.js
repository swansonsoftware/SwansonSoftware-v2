import React, { useContext, useEffect, useRef, useState } from "react"
import StateContext from "../StateContext"

function ScrollToTop() {
  const appState = useContext(StateContext)
  const [visible, setVisible] = useState(false)
  const sentinelRef = useRef(null)
  const [scrollBtnClass, setScrollBtnClass] = useState("nav__scrollToTop")

  useEffect(() => {
    const sentinel = sentinelRef.current

    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0]
        // user has scrolled past sentinel
        setVisible(!entry.isIntersecting)
      },
      {
        root: null,
        threshold: 0.1 // 10%
      }
    )

    if (sentinel) observer.observe(sentinel)

    return () => {
      if (sentinel) observer.unobserve(sentinel)
    }
  }, [])

  useEffect(() => {
    if (appState.backgroundStyle == "dark") {
      setScrollBtnClass("nav__scrollToTop nav__scrollToTop--dark")
    } else {
      setScrollBtnClass("nav__scrollToTop")
    }
  }, [appState.backgroundStyle])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  return (
    <>
      <div ref={sentinelRef} style={{ height: "1px" }} />

      <button
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        tabIndex={visible ? 0 : -1}
        className={scrollBtnClass}
        style={{
          opacity: visible ? 1 : 0,
          pointerEvents: visible ? "auto" : "none"
        }}
      >
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={"nav__button--icon-rotate-180"}>
          <path d="m14.673 4.579-6.527 6.842M1.327 4.586l6.819 6.835" className={appState.backgroundStyle == "dark" ? "nav__button--icon-stroke--dark" : "nav__button--icon-stroke"} />
        </svg>
        Top
      </button>
    </>
  )
}

export default ScrollToTop
