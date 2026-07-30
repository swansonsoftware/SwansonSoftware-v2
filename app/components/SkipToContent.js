import React, { useContext, useEffect, useRef } from "react"
import DispatchContext from "../DispatchContext"
import { HashLink } from "react-router-hash-link"
import StateContext from "../StateContext"

function SkipToContent() {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)
  const appBackgroundColor = useRef("light")

  function handleClick() {
    let siteHeader = document.querySelector(".site-header")
    if (siteHeader.classList.contains("site-header--expand")) {
      let baseclass = ""
      if (document.body.scrollHeight <= window.innerHeight + 100) {
        baseclass = "site-header"
      } else {
        baseclass = "site-header site-header--collapse"
      }
      if (appBackgroundColor.current == "dark") {
        appDispatch({ type: "headerVisClass", headerVisClass: baseclass + " site-header--dark" })
      } else {
        appDispatch({ type: "headerVisClass", headerVisClass: baseclass })
      }

      window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }
    let breadcrumbStyle = appState.breadcrumbClass
    if (appBackgroundColor.current == "dark") {
      if (!breadcrumbStyle.includes("site-header__breadcrumb--dark-bg")) {
        breadcrumbStyle += " site-header__breadcrumb--dark-bg"
      }
    }
    // Hide the breadcrumb, as we hid the header
    if (!breadcrumbStyle.includes("site-header__breadcrumb__fixed")) {
      breadcrumbStyle += " site-header__breadcrumb__fixed"
    }
    appDispatch({ type: "updateBreadcrumbClass", class: breadcrumbStyle })
  }

  const clickListener = new AbortController()
  useEffect(() => {
    let skipToButton = document.querySelector(".accessibility__skiptocontent")
    if (skipToButton) {
      skipToButton.addEventListener("click", handleClick, { signal: clickListener.signal })

      return () => clickListener.abort()
    }
  }, [])

  useEffect(() => {
    if (appState.backgroundStyle == "dark") {
      appBackgroundColor.current = "dark"
    } else {
      appBackgroundColor.current = "light"
    }
  }, [appState.backgroundStyle])

  return (
    <HashLink id="skiptocontent" to="#maincontent" className={appState.backgroundStyle == "dark" ? "accessibility__skiptocontent accessibility__skiptocontent--dark" : "accessibility__skiptocontent"}>
      Skip to main content
    </HashLink>
  )
}
export default SkipToContent
