import React, { useContext } from "react"
import { Link } from "react-router-dom"
import DispatchContext from "../DispatchContext"
import StateContext from "../StateContext"

function Logo({ CloseMenu = { CloseMenu } }) {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)
  const assetsPath = window.location.protocol + "//" + window.location.host + "/assets/images/"
  const logoDark = assetsPath + "logo-dark.svg"
  const logoLite = assetsPath + "logo.svg"

  function updateMenu() {
    appDispatch({ type: "selectMenu", selectedMenu: "" })
    CloseMenu()
  }

  return (
    <div className="site-header__logo">
      <Link to="/" id="header-logo-link" tabIndex="0" onClick={updateMenu}>
        <img src={appState.backgroundStyle == "dark" ? logoDark : logoLite} width="220" height="53" className="logo" alt="Swanson Software logo" title="Swanson Software home" />
      </Link>
    </div>
  )
}
export default Logo
