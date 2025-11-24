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
          <div className="row__colspan-4">
            <p>Software development has been called craft. It's true, much like culinary technique, software development takes skill and judgment, which are refined and improved over time.</p>
          </div>
          <div className="row__colspan-4"></div>
          <div className="row__colspan-4"></div>

          <div className="row__colspan-4"></div>
          <div className="row__colspan-4"></div>
          <div className="row__colspan-4">
            <p>Historically, artisans who worked with wood, clay, or metal would go through an apprenticeship to learn the craft. In software, we have mentorship, code reviews, and open-source collaboration.</p>
          </div>

          <div className="row__colspan-4">
            <p>What about software engineering? While craft emphasizes creativity and intuition, engineering emphasizes mathematical solutions, predictability, and measurability. Software development blends both.</p>
          </div>
          <div className="row__colspan-4"></div>
          <div className="row__colspan-4"></div>
        </div>
      </div>
    </Page>
  )
}

export default Home
