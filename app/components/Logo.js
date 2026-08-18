import React, { useContext, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import DispatchContext from "../DispatchContext.js"
import StateContext from "../StateContext.js"

function Logo({ CloseMenu = { CloseMenu } }) {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)
  const currBreadcrumbStyle = useRef("site-header__breadcrumb")
  const logoDark = "/assets/images/logo-dark.svg"
  const logoLite = "/assets/images/logo.svg"
  const taglineDark = "/assets/images/tagline-dark.svg"
  const taglineLite = "/assets/images/tagline.svg"

  function updateMenu() {
    appDispatch({ type: "selectMenu", selectedMenu: "" })
    CloseMenu()
  }
  function handleFocus() {
    window.scrollTo(0, 0)
    let siteHeader = document.querySelector(".site-header")
    let breadcrumb = document.getElementById("breadcrumb")
    let breadcrumbStyle = ""

    if (breadcrumb) {
      breadcrumbStyle = breadcrumb.classList.toString()
      breadcrumb.classList.remove("site-header__breadcrumb__fixed")
      breadcrumb.classList.remove("site-header__breadcrumb--is-hidden")
    } else {
      breadcrumbStyle = appState.breadcrumbClass
    }
    if (breadcrumbStyle.includes("site-header__breadcrumb__fixed")) {
      let classlist = breadcrumbStyle.split(" ")
      let filtered = classlist.filter(classname => classname !== "site-header__breadcrumb__fixed")
      breadcrumbStyle = filtered.join(" ")
    }
    if (breadcrumbStyle.includes("site-header__breadcrumb--is-hidden")) {
      let classlist = breadcrumbStyle.split(" ")
      let filtered = classlist.filter(classname => classname !== "site-header__breadcrumb--is-hidden")
      breadcrumbStyle = filtered.join(" ")
    }
    appDispatch({ type: "updateBreadcrumbClass", class: breadcrumbStyle })

    // show header
    if (siteHeader && siteHeader.classList.contains("site-header--collapse")) {
      siteHeader.classList.remove("site-header--collapse")
      siteHeader.classList.add("site-header--expand")
    }
  }

  useEffect(() => {
    currBreadcrumbStyle.current = appState.breadcrumbClass
  }, [appState.breadcrumbClass])

  return (
    <div className="site-header__logo">
      <Link to="/" id="header-logo-link" tabIndex="0" onFocus={handleFocus} onClick={updateMenu}>
        <img src={appState.backgroundStyle == "dark" ? logoDark : logoLite} width="220" height="53" className="logo" alt="Swanson Software" title="Logo" />
        <img src={appState.backgroundStyle == "dark" ? taglineDark : taglineLite} width="215" height="20" className="tagline" alt="About Software Construction" title="Tagline" />
      </Link>
    </div>
  )
}
export default Logo
