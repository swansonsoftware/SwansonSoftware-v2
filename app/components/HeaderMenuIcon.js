import React, { useContext } from "react"
import StateContext from "../StateContext"

function HeaderMenuIcon() {
  const appState = useContext(StateContext)

  // Event listener is added in TopnavMenu.js (function ToggleMenuIcon)
  return <button tabIndex={0} aria-label="Open menu" className={appState.backgroundStyle == "dark" ? "site-header__menu-icon site-header__menu-icon--dark site-header__menu-icon--collapsed" : "site-header__menu-icon site-header__menu-icon--collapsed"}></button>
}

export default HeaderMenuIcon
