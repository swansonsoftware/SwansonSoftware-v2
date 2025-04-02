import React, { useContext, useEffect } from "react"
import DispatchContext from "../DispatchContext"
import StateContext from "../StateContext"
import Page from "./Page"

function NotFound() {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)

  appState.backgroundStyle == "light" ? (document.body.classList.remove("dark"), document.body.classList.add("light")) : (document.body.classList.remove("light"), document.body.classList.add("dark"))

  useEffect(() => {
    appDispatch({ type: "backgroundStyleChange", color: "light" })
  }, [])

  return (
    <Page title="404 - Page Not Found">
      <h1>Whoops, we cannot find that page.</h1>
    </Page>
  )
}

export default NotFound
