import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import Page from "../Page"
import DispatchContext from "../../DispatchContext"
import StateContext from "../../StateContext"

function Requirements() {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)

  appState.backgroundStyle == "light" ? (document.body.classList.remove("dark"), document.body.classList.add("light")) : (document.body.classList.remove("light"), document.body.classList.add("dark"))

  useEffect(() => {
    appDispatch({ type: "backgroundStyleChange", color: "light" })
  }, [])

  return (
    <Page title="Requirements" background="dark">
      <meta name="description" content="Software requirements" />
      <meta name="keywords" content="software requirements, software process" />
      <div className="wrapper wrapper__article">
        <h1 className="headline__h1">Requirements</h1>
      </div>
    </Page>
  )
}
export default Requirements
