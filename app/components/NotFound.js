import React, { useContext, useEffect } from "react"
import InitializePage from "./InitializePage"
import { Link } from "react-router-dom"
import DispatchContext from "../DispatchContext"
import StateContext from "../StateContext"
import Page from "./Page"

function NotFound() {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)

  appState.backgroundStyle == "light" ? (document.body.classList.remove("dark"), document.body.classList.add("light")) : (document.body.classList.remove("light"), document.body.classList.add("dark"))

  InitializePage({ backgroundStyleChangeColor: "light", selectMenu: "", menuActiveCategory: "-1", homePageClass: "page", scrollTop: true })

  return (
    <Page title="404 - Page Not Found">
      <h1>404</h1>
      <p>The page you’re looking for doesn’t exist.</p>

      <Link to="/" className="button">
        Return Home
      </Link>
      <p>If you typed the address manually, double‑check the spelling.</p>
    </Page>
  )
}

export default NotFound
