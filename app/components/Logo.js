import React, { useContext } from "react"
import { Link } from "react-router-dom"
import StateContext from "../StateContext"

function Logo({ CloseMenu = { CloseMenu } }) {
  const appState = useContext(StateContext)
  const assetsPath = window.location.protocol + "//" + window.location.host + "/assets/images/"
  const logoDark = assetsPath + "logo-dark.svg"
  const logoLite = assetsPath + "logo.svg"

  return (
    <div className="site-header__logo">
      <Link to="/" id="header-logo-link" tabIndex="0" onClick={CloseMenu}>
        <img src={appState.backgroundStyle == "dark" ? logoDark : logoLite} width="220" height="53" alt="Swanson Software logo" title="Swanson Software home" />
      </Link>
    </div>
  )
}
export default Logo
