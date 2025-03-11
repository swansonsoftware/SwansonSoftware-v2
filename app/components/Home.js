import React, { useContext, useEffect } from "react"
import DispatchContext from "../DispatchContext"
import StateContext from "../StateContext"
import Page from "./Page"
import GTag from "./GTag"
import GStructuredData from "./GStructuredData"

function Home() {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)

  appState.backgroundStyle == "light" ? (document.body.classList.remove("dark"), document.body.classList.add("light")) : (document.body.classList.remove("light"), document.body.classList.add("dark"))

  useEffect(() => {
    appDispatch({ type: "backgroundStyleChange", color: "dark" })
  }, [])

  return (
    <Page title="Home">
      <GTag></GTag>
      <GStructuredData type="WebSite" name="SwansonSoftware"></GStructuredData>
      <div className="wrapper wrapper--banner">
        <meta name="description" content="Swanson Software, disseminating knowledge in the craft of software construction" />
        <picture className="banner__image">
          <source srcSet="../assets/images/0a-hero.webp" media="(min-width: 1380px)" width="1920" height="950"></source>
          <source srcSet="../assets/images/0a-hero--medium.webp" media="(min-width: 640px)" width="1380" height="950"></source>
          <img src="../assets/images/0a-hero--small.webp" width="640" height="660" alt="Kauai Beach moonrise"></img>
        </picture>
        <div className="banner__darkBackground banner__text-content">
          <h1 className="banner__title">Welcome to Swanson Software</h1>
          <p className="banner__subtitle">Disseminating knowledge in the craft of software construction</p>
        </div>
      </div>
    </Page>
  )
}

export default Home
