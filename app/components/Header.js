import React, { useContext, useEffect, useState } from "react"
import StateContext from "../StateContext"
import Logo from "./Logo"
import HeaderMenuIcon from "./HeaderMenuIcon"
import TopnavMenu from "./TopnavMenu"

function Header() {
  const appState = useContext(StateContext)
  const [isMenuExpanded, setIsMenuExpanded] = useState(false)

  // const SHOW = true
  const HIDE = false

  function SetMenu(expandedState) {
    setIsMenuExpanded(isme => (isme = expandedState))
  }

  function CloseMenu() {
    // console.log("CloseMenu")
    ShrinkDropdownMenu()
    MenuOverlayDisplay(HIDE)
    MenuContentDisplay(HIDE)
    Show_Hamburger_MenuIcon()
    UnRotateMenuIcon()
    let breadcrumb = document.querySelector(".site-header__breadcrumb")
    if (breadcrumb) {
      breadcrumb.classList.remove("site-header__breadcrumb--is-hidden")
    }
  }

  function Show_Hamburger_MenuIcon() {
    let siteHeaderMenuIcon = document.querySelector(".site-header__menu-icon--expanded")
    if (siteHeaderMenuIcon) {
      siteHeaderMenuIcon.classList.remove("site-header__menu-icon--expanded")
      siteHeaderMenuIcon.classList.add("site-header__menu-icon--collapsed")
      siteHeaderMenuIcon.setAttribute("aria-label", "Open menu")
      MenuOverlayDisplay(HIDE)
    }
  }

  function MenuOverlayDisplay(visible) {
    let overlay = document.querySelector(".lightbox__menu-overlay")

    if (overlay) {
      if (visible) {
        if (!overlay.classList.contains("lightbox__menu-overlay--visible")) {
          overlay.classList.add("lightbox__menu-overlay--visible")
        }
        // document.body.classList.add("no-scroll") can't do this because it makes the menu jump on X.
      } else {
        // console.log("hide menu")
        if (overlay.classList.contains("lightbox__menu-overlay--visible")) {
          overlay.classList.remove("lightbox__menu-overlay--visible")
        }
        if (document.body.classList.contains("no-scroll")) {
          document.body.classList.remove("no-scroll")
        }
      }
    }
  }

  function UnRotateMenuIcon() {
    // Un-rotate any rotated menu icon
    let rotatedIcons = document.querySelectorAll(".nav__button--icon-rotate-180")
    if (rotatedIcons) {
      rotatedIcons.forEach(ri => {
        ri.classList.remove("nav__button--icon-rotate-180")
      })
    }
  }

  function ShrinkDropdownMenu() {
    let pageOverlays = document.querySelectorAll(".site-header__menu-dropdown")
    if (pageOverlays) {
      pageOverlays.forEach(pageOverlay => {
        if (pageOverlay.classList.contains("site-header__menu-dropdown--visible")) {
          pageOverlay.classList.remove("site-header__menu-dropdown--visible")
        }
        if (pageOverlay.children[0].children[1].classList.contains("col-2--grow")) {
          pageOverlay.children[0].children[1].classList.remove("col-2--grow")
        }
        if (pageOverlay.children[0].children[1].classList.contains("col-2--shrink")) {
          pageOverlay.children[0].children[1].classList.remove("col-2--shrink")
        }
      })
    }
    const menu = document.getElementById("exTest")
    if (menu) {
      if (menu.classList.contains("nav__menu-content--allow-scroll")) {
        menu.classList.remove("nav__menu-content--allow-scroll")
      }
    }
  }

  function MenuContentDisplay(visible) {
    const menu = document.getElementById("exTest")
    if (menu) {
      if (visible) {
        let mode = "" // It seems a kludge to need this, to get around react state (mis?)management
        document.body.classList.contains("dark") ? (mode = "dark") : (mode = "light")
        menu.classList.remove("nav__menu-content--icon-hidden")
        menu.classList.add("nav__menu-content--icon-visible")
        if (mode == "dark") {
          menu.classList.add("nav__menu-content--icon-visible--dark")
        }
      } else {
        menu.classList.remove("nav__menu-content--icon-visible--dark")
        menu.classList.remove("nav__menu-content--icon-visible")
        menu.classList.add("nav__menu-content--icon-hidden")
      }
    }
  }

  const scrollListener = new AbortController()
  useEffect(() => {
    window.addEventListener("scroll", Throttle, { signal: scrollListener.signal })
    return () => scrollListener.abort()
  }, [])

  useEffect(() => {
    setIsMenuExpanded(isme => (isme = appState.isMenuOpen))
  }, [appState.isMenuOpen])

  let scrollIntervalMS = 500

  function Throttle() {
    // let millisecondsSincLastCall = 0
    // let currentMs = new Date().getMilliseconds()
    // if (currentMs - millisecondsSincLastCall >= scrollIntervalMS) {
    //   millisecondsSincLastCall = currentMs
    //   SetHeaderVisibility()
    // }
    // The above throttle doesn't always work, sometimes the timer takes too long to resolve causing the header to not reappear
    SetHeaderVisibility()
  }

  let prevScrollpos = window.scrollY

  function SetHeaderVisibility() {
    var currentScrollPos = window.scrollY
    const antiBounceBuffer = 10 //reduces bounce when scrolling to top on touch screens
    let siteHeader = document.querySelector(".site-header")
    let breadcrumb = document.getElementById("breadcrumb")

    if (prevScrollpos > currentScrollPos) {
      //scrolling up
      if (siteHeader.classList.contains("site-header--collapse")) {
        siteHeader.classList.remove("site-header--collapse")
        siteHeader.classList.add("site-header--expand")
        if (breadcrumb) {
          breadcrumb.classList.remove("site-header__breadcrumb__fixed")
          breadcrumb.classList.add("site-header__breadcrumb__scroll-up")
        }
      }
      if (breadcrumb && currentScrollPos < 100) {
        breadcrumb.classList.remove("site-header__breadcrumb__scroll-up")
      }
    } else {
      //scrolling down
      if (prevScrollpos + 5 < currentScrollPos && currentScrollPos > antiBounceBuffer) {
        if (siteHeader.classList.contains("site-header--expand")) {
          siteHeader.classList.remove("site-header--expand")
          siteHeader.classList.add("site-header--collapse")
        }
        if (breadcrumb) {
          breadcrumb.classList.add("site-header__breadcrumb__fixed")
          breadcrumb.classList.remove("site-header__breadcrumb__scroll-up")
        }
        setIsMenuExpanded(isme => (isme = false))
      }
    }
    prevScrollpos = currentScrollPos
  }

  return (
    <>
      <div className="lightbox__menu-overlay" id="overlay"></div>
      <header className={appState.backgroundStyle == "dark" ? "site-header site-header--expand site-header--dark" : "site-header site-header--expand"}>
        <div className="wrapper--site-header">
          <Logo CloseMenu={CloseMenu} />
          <HeaderMenuIcon />
          <TopnavMenu isMenuExpanded={isMenuExpanded} setIsMenuExpanded={SetMenu} CloseMenu={CloseMenu} ShrinkDropdownMenu={ShrinkDropdownMenu} UnRotateMenuIcon={UnRotateMenuIcon} LightboxOverlayDisplay={MenuOverlayDisplay} NavMenuContentDisplay={MenuContentDisplay} Show_Hamburger_MenuIcon={Show_Hamburger_MenuIcon} />
        </div>
      </header>
    </>
  )
}
export default Header
