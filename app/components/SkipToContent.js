import React, { useContext, useEffect } from "react"
import { HashLink } from "react-router-hash-link"
import StateContext from "../StateContext"

function SkipToContent() {
  const appState = useContext(StateContext)

  function showHeader() {
    // Same as when scrolling up
    let siteHeader = document.querySelector(".site-header")

    if (siteHeader.classList.contains("site-header--collapse")) {
      siteHeader.classList.remove("site-header--collapse")
      siteHeader.classList.add("site-header--expand")
      window.scrollTo(0, 0)
    }
  }

  const focusListener = new AbortController()
  useEffect(() => {
    // nav__button
    let skipToButton = document.querySelector(".accessibility__skiptocontent")
    if (skipToButton) {
      skipToButton.addEventListener("focus", showHeader, { signal: focusListener.signal })

      return () => focusListener.abort()
    }
  }, [])

  return (
    <HashLink id="skiptocontent" to="#maincontent" className={appState.backgroundStyle == "dark" ? "accessibility__skiptocontent accessibility__skiptocontent--dark" : "accessibility__skiptocontent"}>
      Skip to main content
    </HashLink>
  )
}
export default SkipToContent
