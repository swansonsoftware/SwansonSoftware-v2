import React, { useContext, useEffect, useState, useRef } from "react"
import DispatchContext from "../DispatchContext"
import StateContext from "../StateContext"
import Logo from "./Logo"
import HeaderMenuIcon from "./HeaderMenuIcon"
import TopnavMenu from "./TopnavMenu"

function Header() {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)

  const [siteHeaderClass, setSiteHeaderClass] = useState("site-header site-header--expand")
  const siteHeaderClassExpanded = useRef("site-header site-header--expand")
  const siteHeaderClassCollapsed = useRef("site-header site-header--collapse")
  const breadcrumbHidden = useRef(false)
  const currBreadcrumbStyle = useRef("site-header__breadcrumb")
  const menuIconState = useRef("site-header__menu-icon--collapsed")
  const menuIconStyle = useRef(appState.backgroundStyle == "dark" ? "site-header__menu-icon--dark" : "")

  function CloseMenu() {
    appDispatch({ type: "menuOverlay", menuOverlay: "lightbox__menu-overlay" })
    appDispatch({ type: "menuListClassByIconState", class: "disclosure-nav nav__topnav nav__menu-content nav__menu-content--icon-hidden" })
    appDispatch({ type: "menuDropdownActiveTopic", menuDropdownActiveTopic: "" })
    appDispatch({ type: "updateBreadcrumbClass", class: currBreadcrumbStyle.current })
    ShowHamburgerMenuIcon()
  }

  function ShowHamburgerMenuIcon() {
    menuIconState.current = "site-header__menu-icon--collapsed"
    appDispatch({ type: "mobileMenuIconState", mobileMenuIconState: "site-header__menu-icon " + menuIconStyle.current + " " + menuIconState.current })
  }

  function updateSiteHeaderClass(expanded) {
    if (expanded) {
      setSiteHeaderClass(siteHeaderClassExpanded.current)
    } else {
      setSiteHeaderClass(siteHeaderClassCollapsed.current)
    }
  }

  let scrollIntervalMS = 400

  function Throttle() {
    let currentMs = new Date().getMilliseconds()
    let breadcrumbStyle = appState.breadcrumbClass
    if (currentMs >= scrollIntervalMS) {
      SetHeaderVisibility(breadcrumbStyle)
    } else {
      if (window.scrollY < 50) {
        setSiteHeaderClass(siteHeaderClassExpanded.current)
        if (breadcrumbStyle.includes("site-header__breadcrumb__fixed")) {
          let classlist = breadcrumbStyle.split(" ")
          let filtered = classlist.filter(classname => classname !== "site-header__breadcrumb__fixed")
          breadcrumbStyle = filtered.join(" ")
          appDispatch({ type: "updateBreadcrumbClass", class: breadcrumbStyle })
        }
      }
    }
  }

  let prevScrollpos = window.scrollY

  function SetHeaderVisibility(breadcrumbStyle) {
    var currentScrollPos = window.scrollY
    const antiBounceBuffer = 10 //reduces bounce when scrolling to top on touch screens

    if (prevScrollpos > currentScrollPos) {
      //scrolling up
      setSiteHeaderClass(siteHeaderClassExpanded.current)
      if (breadcrumbHidden.current != true) {
        if (breadcrumbStyle.includes("site-header__breadcrumb__fixed")) {
          let classlist = breadcrumbStyle.split(" ")
          let filtered = classlist.filter(classname => classname !== "site-header__breadcrumb__fixed")
          breadcrumbStyle = filtered.join(" ")
        }
        if (currBreadcrumbStyle.current.includes("site-header__breadcrumb--dark-bg") && !breadcrumbStyle.includes("site-header__breadcrumb--dark-bg")) {
          breadcrumbStyle += " site-header__breadcrumb--dark-bg"
        }
        appDispatch({ type: "updateBreadcrumbClass", class: breadcrumbStyle })
      }
    } else {
      //scrolling down
      if (prevScrollpos + 5 < currentScrollPos && currentScrollPos > antiBounceBuffer) {
        setSiteHeaderClass(siteHeaderClassCollapsed.current)
        if (breadcrumbHidden.current != true) {
          if (!breadcrumbStyle.includes("site-header__breadcrumb__fixed")) {
            breadcrumbStyle += " site-header__breadcrumb__fixed"
          }
          if (currBreadcrumbStyle.current.includes("site-header__breadcrumb--dark-bg") && !breadcrumbStyle.includes("site-header__breadcrumb--dark-bg")) {
            breadcrumbStyle += " site-header__breadcrumb--dark-bg"
          }
          appDispatch({ type: "updateBreadcrumbClass", class: breadcrumbStyle })
        }
        appDispatch({ type: "menuDropdownActiveTopic", menuDropdownActiveTopic: "" })
        appDispatch({ type: "menuOverlay", menuOverlay: "lightbox__menu-overlay" })
      }
    }
    prevScrollpos = currentScrollPos
  }

  const scrollListener = new AbortController()
  useEffect(() => {
    window.addEventListener("scroll", Throttle, { signal: scrollListener.signal })
    return () => scrollListener.abort()
  }, [])

  useEffect(() => {
    if (appState.backgroundStyle == "dark") {
      setSiteHeaderClass("site-header site-header--expand site-header--dark")
      siteHeaderClassExpanded.current = "site-header site-header--expand site-header--dark"
      siteHeaderClassCollapsed.current = "site-header site-header--collapse site-header--dark"
      currBreadcrumbStyle.current = "site-header__breadcrumb site-header__breadcrumb--dark-bg"
      menuIconStyle.current = "site-header__menu-icon--dark"
    } else {
      setSiteHeaderClass("site-header site-header--expand")
      siteHeaderClassExpanded.current = "site-header site-header--expand"
      siteHeaderClassCollapsed.current = "site-header site-header--collapse"
      currBreadcrumbStyle.current = "site-header__breadcrumb"
      menuIconStyle.current = ""
    }
    appDispatch({ type: "updateBreadcrumbClass", class: currBreadcrumbStyle.current })
    appDispatch({ type: "mobileMenuIconState", mobileMenuIconState: "site-header__menu-icon " + menuIconStyle.current + " " + menuIconState.current })
  }, [appState.backgroundStyle])

  return (
    <>
      <div className={appState.menuOverlay} id="overlay"></div>
      <header role="banner" className={siteHeaderClass}>
        <div className="wrapper--site-header">
          <Logo CloseMenu={CloseMenu} />
          <HeaderMenuIcon />
          <TopnavMenu CloseMenu={CloseMenu} updateSiteHeaderClass={updateSiteHeaderClass} />
        </div>
      </header>
    </>
  )
}
export default Header
