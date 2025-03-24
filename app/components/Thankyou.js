import React, { useContext, useEffect } from "react"
import Page from "./Page"
import DispatchContext from "../DispatchContext"
import StateContext from "../StateContext"
import GTag from "./GTag"

function Thankyou() {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)

  appState.backgroundStyle == "light" ? (document.body.classList.remove("dark"), document.body.classList.add("light")) : (document.body.classList.remove("light"), document.body.classList.add("dark"))

  useEffect(() => {
    appDispatch({ type: "backgroundStyleChange", color: "light" })
  }, [])

  return (
    <Page title="Thankyou">
      <GTag></GTag>
      <meta name="description" content="Thank you" />
      <div className="wrapper wrapper__article">
        <h1 className="headline__h1-cg">Thank you</h1>
        <p>Thanks for contacting Swanson Software. If you requested a response, you can expect one within a few days if you provided an email.</p>
      </div>
    </Page>
  )
}

export default Thankyou
