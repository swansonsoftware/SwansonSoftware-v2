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
  const breadcrumbFixed = useRef(false)
  const breadcrumbHidden = useRef(false)
  const currBreadcrumbStyle = useRef("site-header__breadcrumb")
  const menuIconState = useRef("site-header__menu-icon--collapsed")
  const menuIconStyle = useRef(appState.backgroundStyle == "dark" ? "site-header__menu-icon--dark" : "")

  function CloseMenu() {
    appDispatch({ type: "menuOverlay", menuOverlay: "lightbox__menu-overlay" })
    appDispatch({ type: "menuListClassByIconState", class: "disclosure-nav nav__topnav nav__menu-content nav__menu-content--icon-hidden" })
    appDispatch({ type: "menuDropdownActiveTopic", menuDropdownActiveTopic: "" })
    updateBreadcrumbStyle(false, false, false)
    ShowHamburgerMenuIcon()
  }

  function ShowHamburgerMenuIcon() {
    menuIconState.current = "site-header__menu-icon--collapsed"
    appDispatch({ type: "mobileMenuIconState", mobileMenuIconState: "site-header__menu-icon " + menuIconStyle.current + " " + menuIconState.current })
  }

  function updateBreadcrumbStyle(scrollup, fixed, hidden) {
    var breadcrumbStyle = currBreadcrumbStyle.current
    let breadcrumbLink = document.querySelector("#breadcrumb-link")

    //10/28/25 scrollup not needed

    if (fixed != null) {
      if (fixed === true) {
        breadcrumbFixed.current = true
        breadcrumbStyle += " site-header__breadcrumb__fixed"
      } else if (fixed === false) {
        breadcrumbFixed.current = false
      } else {
        if (breadcrumbFixed.current == true) {
          breadcrumbStyle += " site-header__breadcrumb__fixed"
        }
      }
    }

    if (hidden != null) {
      if (hidden === true) {
        breadcrumbHidden.current = true
        breadcrumbStyle += " site-header__breadcrumb--is-hidden"
        if (breadcrumbLink) {
          breadcrumbLink.tabIndex = "-1"
        }
      } else if (hidden === false) {
        breadcrumbHidden.current = false
        if (breadcrumbLink) {
          breadcrumbLink.tabIndex = "0"
        }
      } else {
        if (breadcrumbHidden.current == true) {
          breadcrumbStyle += " site-header__breadcrumb--is-hidden"
        }
      }
    }
    let breadcrumb = document.getElementById("breadcrumb")
    if (breadcrumb) {
      breadcrumbStyle += " site-header__breadcrumb--transparent"
    }

    appDispatch({ type: "updateBreadcrumbClass", class: breadcrumbStyle })
  }

  function updateSiteHeaderClass(expanded) {
    if (expanded) {
      setSiteHeaderClass(siteHeaderClassExpanded.current)
    } else {
      setSiteHeaderClass(siteHeaderClassCollapsed.current)
    }
  }

  let scrollIntervalMS = 300

  function Throttle() {
    let millisecondsSincLastCall = 0
    let currentMs = new Date().getMilliseconds()
    if (currentMs - millisecondsSincLastCall >= scrollIntervalMS) {
      millisecondsSincLastCall = currentMs
      SetHeaderVisibility()
    } else {
      if (window.scrollY < 50) {
        setSiteHeaderClass(siteHeaderClassExpanded.current)
        updateBreadcrumbStyle(false, false, "")
      }
    }
  }

  let prevScrollpos = window.scrollY

  function SetHeaderVisibility() {
    var currentScrollPos = window.scrollY
    const antiBounceBuffer = 10 //reduces bounce when scrolling to top on touch screens

    if (prevScrollpos > currentScrollPos) {
      //scrolling up
      setSiteHeaderClass(siteHeaderClassExpanded.current)
      if (breadcrumbHidden.current != true) {
        updateBreadcrumbStyle(false, false, "")
      }
    } else {
      //scrolling down
      if (prevScrollpos + 5 < currentScrollPos && currentScrollPos > antiBounceBuffer) {
        setSiteHeaderClass(siteHeaderClassCollapsed.current)
        if (breadcrumbHidden.current != true) {
          updateBreadcrumbStyle(false, true, "")
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
    updateBreadcrumbStyle("", "", "")
    appDispatch({ type: "mobileMenuIconState", mobileMenuIconState: "site-header__menu-icon " + menuIconStyle.current + " " + menuIconState.current })
  }, [appState.backgroundStyle])

  return (
    <>
      <div className={appState.menuOverlay} id="overlay"></div>
      <header className={siteHeaderClass}>
        <div className="wrapper--site-header">
          <Logo CloseMenu={CloseMenu} />
          <HeaderMenuIcon updateBreadcrumbStyle={updateBreadcrumbStyle} />
          <TopnavMenu CloseMenu={CloseMenu} updateBreadcrumbStyle={updateBreadcrumbStyle} updateSiteHeaderClass={updateSiteHeaderClass} />
        </div>
      </header>
    </>
  )
}
export default Header
