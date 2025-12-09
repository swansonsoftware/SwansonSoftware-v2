import React, { useContext, useEffect } from "react"
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
  }, [])

  return (
    <Page title="Home">
      <GTag></GTag>
      <GStructuredData type="WebSite" name="SwansonSoftware"></GStructuredData>
      <CanonicalLink href="https://swansonsoftware.com"></CanonicalLink>
      <meta name="description" content="SwansonSoftware is on a mission to disseminate the principles and practices of software construction that lead to quality software and successful projects." />

      <div className="wrapper--home-page">
        <div className="row row--gutters">
          <div className="row__colspan-8">
            <p>Artisans in the crafts choose their materials carefully to achieve specific results: ease of tooling the material, durability of the product, beauty. Likewise, software developers choose their materials based on the results they wish to achieve: robustness and security, interoperability, and ease of coding.</p>
            <p>To software developers, the programming language is the medium, and frameworks, algorithms, APIs and libraries, and data are the materials. The wrong framework is one that will be obsolete soon, shortening the lifespan of the application. The wrong API or library has limitations that your application will be locked in to. The wrong algorithm will have a security vulnerability that will require extra work to fix, and a new release of the product.</p>
            <p>Choosing the right materials is crucial for an application’s success. Unlike traditional crafts where the tools and materials don’t change much throughout an artisan’s career, the tools and materials of software development change constantly, and it’s crucial to a developer’s career success that they learn about these changes.</p>
            <p>SwansonSoftware was created to disseminate information about the principles and practices of software construction, including some of the tools and materials that are used.</p>
          </div>
          <div className="row__colspan-4"></div>
        </div>
      </div>
    </Page>
  )
}

export default Home
