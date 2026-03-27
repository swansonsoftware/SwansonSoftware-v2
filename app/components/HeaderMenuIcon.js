import React, { useContext, useEffect, useState, useRef } from "react"
import DispatchContext from "../DispatchContext"
import StateContext from "../StateContext"

function HeaderMenuIcon(props) {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)
  const menuIconBaseClass = useRef("site-header__menu-icon")
  const menuIconState = useRef("site-header__menu-icon--collapsed")
  const [menuBgColor, setMenuBgColor] = useState(appState.backgroundStyle == "dark" ? "site-header__menu-icon--dark" : "")
  const [ariaLabel, setAriaLabel] = useState("Open menu")

  function ToggleMenuIcon(e) {
    e.preventDefault
    if (e.code == "Enter" || e.type == "click") {
      let menuIconCollapsed = document.querySelector(".site-header__menu-icon--collapsed")
      let menuButtons = document.querySelectorAll(".nav__button")

      if (menuIconCollapsed) {
        setAriaLabel("Close menu")
        if (menuButtons) {
          menuButtons.forEach(button => {
            button.tabIndex = 0
          })
        }
      } else {
        setAriaLabel("Open menu")
        if (menuButtons) {
          //prevent tabbing to hidden menu buttons
          menuButtons.forEach(button => {
            button.tabIndex = -1
          })
        }
      }
      props.ToggleMenuIcon()
    }
  }

  useEffect(() => {
    setMenuBgColor(appState.backgroundStyle == "dark" ? "site-header__menu-icon--dark" : "")
    appDispatch({ type: "mobileMenuIconState", mobileMenuIconState: menuIconBaseClass.current + " " + menuBgColor + " " + menuIconState.current })
  }, [appState.backgroundStyle])

  return <button tabIndex={0} aria-label={ariaLabel} onClick={ToggleMenuIcon} className={appState.mobileMenuIconState}></button>
}

export default HeaderMenuIcon
