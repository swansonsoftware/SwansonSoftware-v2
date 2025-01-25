import React, { useContext, useEffect } from "react"
import DispatchContext from "../DispatchContext"
import StateContext from "../StateContext"

function Home() {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)
  // console.log("Home - appState.backgroundStyle: " + appState.backgroundStyle)
  appState.backgroundStyle == "light" ? (document.body.classList.remove("dark"), document.body.classList.add("light")) : (document.body.classList.remove("light"), document.body.classList.add("dark"))

  useEffect(() => {
    appDispatch({ type: "backgroundStyleChange", color: "dark" })
  }, [])

  useEffect(() => {
    document.title = `SwansonSoftware`
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    //add structured data
    let structuredDataText = `{
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "SwansonSoftware",
      "url": "https://www.swansonsoftware.com/",
    }`
    //"dateModified": "....",
    const script = document.createElement("script")
    script.setAttribute("type", "application/ld+json")
    script.setAttribute("id", "structure")
    script.textContent = structuredDataText
    document.head.appendChild(script)
    return () => document.head.removeChild(script)
  }, [])

  return (
    <>
      <div className="wrapper wrapper--banner">
        <meta name="description" content="Swanson Software, disseminating knowledge in the craft of software construction" />
        <div className="banner__darkBackground banner__text-content">
          <h1 className="banner__title">Welcome to Swanson Software</h1>
          <p className="banner__subtitle">Disseminating knowledge in the craft of software construction</p>
        </div>
      </div>
    </>
  )
}

export default Home
