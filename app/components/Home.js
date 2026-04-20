import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import DispatchContext from "../DispatchContext"
import StateContext from "../StateContext"
import Page from "./Page"
import GTag from "./GTag"
import GStructuredData from "./GStructuredData"
import CanonicalLink from "./CanonicalLink"

function Home() {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)
  const assetsPath = window.location.protocol + "//" + window.location.host + "/assets/images/"
  // const brain = assetsPath + "brain-7842215.svg"
  // const tools = assetsPath + "website-6700615.svg"

  appState.backgroundStyle == "light" ? (document.body.classList.remove("dark"), document.body.classList.add("light")) : (document.body.classList.remove("light"), document.body.classList.add("dark"))

  useEffect(() => {
    appDispatch({ type: "backgroundStyleChange", color: "dark" })
    appDispatch({ type: "selectMenu", selectedMenu: "" })
    appDispatch({ type: "menuActiveCategory", menuActiveCategory: "-1" })
    appDispatch({ type: "homePageClass", homePageClass: "page page__home" })
    appDispatch({ type: "scrollTop", scrollTop: true })
    const app = document.getElementById("app")
    if (app) {
      app.focus()
    }
  }, [])

  return (
    <Page title="Home">
      <GTag></GTag>
      <GStructuredData type="WebSite" name="SwansonSoftware"></GStructuredData>
      <CanonicalLink href="https://swansonsoftware.com"></CanonicalLink>
      <meta name="description" content="SwansonSoftware is on a mission to disseminate the principles and practices of software construction that lead to quality software and successful projects." />

      <div className="wrapper wrapper--home-page" id="maincontent">
        <div className="row row--gutters">
          <div className="row__colspan-7">
            <h1 className="headline__h1-cg">Software Craftsmanship</h1>
            <p className="dropCap">In many ways, software development is a craft, and the materials of the craft are frameworks, algorithms, APIs and libraries, and data. Choosing the right materials is crucial for an application’s success. Unlike traditional crafts where the tools and materials change little throughout an artisan’s career, the tools for software development and the materials used to create software change constantly, and it is crucial to a developer’s career success that they learn about the changes important to them.</p>
            <p className="dropCap">Swanson Software was created to disseminate knowledge about software craftsmanship. The philosophy at swansonsoftware.com is that any statements of facts that do not originate here must be cited. This philosophy values the quality of sources as well.</p>
          </div>
          <div className="row__colspan-5">
            <div className="note note--dark">
              <h2 className="headline__h3-cg-home">April 8, 2025</h2>
              <p>
                A new paper, <Link to="/principles/lifecycle">Software Life Cycle</Link>, replaces the old paper Software Life Cycle Models. This new paper answers the question “What is software life cycle?” and presents the historical origins and development of software life cycle models.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default Home
