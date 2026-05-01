import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import Page from "../Page"
import DispatchContext from "../../DispatchContext"
import StateContext from "../../StateContext"
import Breadcrumb from "../Breadcrumb"
import GTag from "../GTag"

function Blogs2026() {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)

  appState.backgroundStyle == "light" ? (document.body.classList.remove("dark"), document.body.classList.add("light")) : (document.body.classList.remove("light"), document.body.classList.add("dark"))

  useEffect(() => {
    appDispatch({ type: "backgroundStyleChange", color: "light" })
    appDispatch({ type: "selectMenu", selectedMenu: "2026" })
    appDispatch({ type: "menuActiveCategory", menuActiveCategory: "1" })
    appDispatch({ type: "homePageClass", homePageClass: "page" })
    appDispatch({ type: "scrollTop", scrollTop: true })
    const app = document.getElementById("app")
    if (app) {
      app.focus()
    }
  }, [])

  const breadcrumbs = [
    { id: 0, toText: "Home", toUrl: "/" },
    { id: 1, toText: "Blog", toUrl: "/blog" },
    { id: 2, toText: "2026", toUrl: "/blog/2026" }
  ]

  return (
    <Page title="2026 Blog">
      <GTag></GTag>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <div className="wrapper wrapper__article" id="maincontent">
        <h1 className="headline__h1-cg">2026</h1>
        <div className="row row--gutters">
          <div className="row__colspan-4">
            <h2 className="headline__h2">May 1</h2>
            <p></p>
          </div>
          <div className="row__colspan-8">
            <h3 className="headline__h3">Elements of a Standard for Website Design</h3>
            <p className="dropCap">In this multi-part post, I present a vision for a standard on website design. Ideas for this vision come from pioneers and experts in useability and accessibility.</p>
            <p>
              <Link to="/blog/2026/01/elements-of-a-standard-for-website-design-part1-conventions">Part 1: Conventions</Link>
            </p>
          </div>

          <div className="row__colspan-4"></div>
          <div className="row__colspan-8">&nbsp;</div>
        </div>
      </div>
    </Page>
  )
}

export default Blogs2026
