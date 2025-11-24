import React, { useContext, useEffect, useState, useRef } from "react"
import DispatchContext from "../DispatchContext"
import StateContext from "../StateContext"

function HeaderMenuIcon(props) {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)
  const [menuIconBaseClass, setMenuIconBaseClass] = useState("site-header__menu-icon")
  const menuIconState = useRef("site-header__menu-icon--collapsed")
  const [menuBgColor, setMenuBgColor] = useState(appState.backgroundStyle == "dark" ? "site-header__menu-icon--dark" : "")

  const [ariaLabel, setAriaLabel] = useState("Open menu")
  const HIDE_BREADCRUMB = true
  const SHOW_BREADCRUMB = false

  function ToggleMenuIcon(e) {
    e.preventDefault
    if (e.code == "Enter" || e.type == "click") {
      let menuIconCollapsed = document.querySelector(".site-header__menu-icon--collapsed")
      let menuButtons = document.querySelectorAll(".nav__button")
      if (menuIconCollapsed) {
        appDispatch({ type: "menuListClassByIconState", class: "disclosure-nav nav__topnav nav__menu-content nav__menu-content--icon-visible" + (appState.backgroundStyle == "dark" ? " nav__menu-content--icon-visible--dark" : "") })
        menuIconState.current = "site-header__menu-icon--expanded"
        setAriaLabel("Close menu")
        appDispatch({ type: "menuOverlay", menuOverlay: "lightbox__menu-overlay lightbox__menu-overlay--visible" })
        if (menuButtons) {
          menuButtons.forEach(button => {
            button.tabIndex = 0
          })
        }
        props.updateBreadcrumbStyle("", "", HIDE_BREADCRUMB)
        // if (slideshowCaptionBox) {
        //   slideshowCaptionBox.style.zIndex = "0"
        // }
      } else {
        appDispatch({ type: "menuListClassByIconState", class: "disclosure-nav nav__topnav nav__menu-content nav__menu-content--icon-hidden" })
        menuIconState.current = "site-header__menu-icon--collapsed"
        setAriaLabel("Open menu")
        appDispatch({ type: "menuDropdownActiveTopic", menuDropdownActiveTopic: "" })
        appDispatch({ type: "menuOverlay", menuOverlay: "lightbox__menu-overlay" })
        if (menuButtons) {
          //prevent tabbing to hidden menu buttons
          menuButtons.forEach(button => {
            button.tabIndex = -1
          })
        }
        props.updateBreadcrumbStyle("", "", SHOW_BREADCRUMB)
        // if (slideshowCaptionBox) {
        //   slideshowCaptionBox.style.zIndex = "1"
        // }
      }
      // console.log("HeaderMenuIcon: ToggleMenuIcon - appDispatch mobileMenuIconState: " + menuIconBaseClass + ", " + menuBgColor + ", " + menuIconState.current)
      appDispatch({ type: "mobileMenuIconState", mobileMenuIconState: menuIconBaseClass + " " + menuBgColor + " " + menuIconState.current })
    }
  }

  useEffect(() => {
    setMenuBgColor(appState.backgroundStyle == "dark" ? "site-header__menu-icon--dark" : "")
    appDispatch({ type: "mobileMenuIconState", mobileMenuIconState: menuIconBaseClass + " " + menuBgColor + " " + menuIconState.current })
  }, [appState.backgroundStyle])

  return <button tabIndex={0} aria-label={ariaLabel} onClick={ToggleMenuIcon} className={appState.mobileMenuIconState}></button>
}

export default HeaderMenuIcon
