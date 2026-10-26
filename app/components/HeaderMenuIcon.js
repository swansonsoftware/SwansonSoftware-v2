import React, { useContext, useEffect, useRef, useState } from "react"
import DispatchContext from "../DispatchContext.js"
import StateContext from "../StateContext.js"

function HeaderMenuIcon(props) {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)
  const menuIconBaseClass = useRef("site-header__menu-icon")
  const [ariaLabel, setAriaLabel] = useState("Open menu")
  const menuIconState = appState.mobileMenuIconState.includes("--expanded") ? "site-header__menu-icon--expanded" : "site-header__menu-icon--collapsed"
  const menuBgColor = appState.backgroundStyle === "dark" ? "site-header__menu-icon--dark" : ""

  function ToggleMenuIcon(e) {
    e.preventDefault()

    if (e.code === "Enter" || e.type === "click") {
      const isCollapsed = menuIconState.includes("--collapsed")

      setAriaLabel(isCollapsed ? "Close menu" : "Open menu")

      const newState = isCollapsed ? "site-header__menu-icon--expanded" : "site-header__menu-icon--collapsed"

      appDispatch({
        type: "mobileMenuIconState",
        mobileMenuIconState: `${menuIconBaseClass.current} ${menuBgColor} ${newState}`
      })

      if (props.ToggleMenuIcon) {
        props.ToggleMenuIcon()
      }
    }
  }

  // Sync background color changes into global menu state
  useEffect(() => {
    const updated = `${menuIconBaseClass.current} ${menuBgColor} ${menuIconState}`
    appDispatch({
      type: "mobileMenuIconState",
      mobileMenuIconState: updated
    })
  }, [appState.backgroundStyle])

  return <button tabIndex={0} aria-label={ariaLabel} onClick={ToggleMenuIcon} className={appState.mobileMenuIconState}></button>
}

export default HeaderMenuIcon
