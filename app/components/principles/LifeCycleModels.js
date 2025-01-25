import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import Page from "../Page"
import DispatchContext from "../../DispatchContext"
import StateContext from "../../StateContext"

function LifecycleModels() {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)

  appState.backgroundStyle == "light" ? (document.body.classList.remove("dark"), document.body.classList.add("light")) : (document.body.classList.remove("light"), document.body.classList.add("dark"))

  useEffect(() => {
    appDispatch({ type: "backgroundStyleChange", color: "light" })
  }, [])

  return (
    <Page title="Lifecycle Models" background="dark">
      <meta name="description" content="Software life cycle models" />
      <meta name="keywords" content="software life cycle, software life cycle models, software process" />
      <div className="wrapper wrapper__article">
        <h1 className="headline__h1">Lifecycle Models</h1>
      </div>
    </Page>
  )
}
export default LifecycleModels
