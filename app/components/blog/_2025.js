import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import Page from "../Page"
import DispatchContext from "../../DispatchContext"
import StateContext from "../../StateContext"
import GTag from "../GTag"

function Blogs2025() {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)

  appState.backgroundStyle == "light" ? (document.body.classList.remove("dark"), document.body.classList.add("light")) : (document.body.classList.remove("light"), document.body.classList.add("dark"))

  useEffect(() => {
    appDispatch({ type: "backgroundStyleChange", color: "light" })
  }, [])

  return (
    <Page title="Blog 2025">
      <GTag></GTag>
      <div className="wrapper wrapper__article">
        <h1 className="headline__h1-cg">Blog List 2025</h1>
        <div className="row row--gutters">
          <div className="row__colspan-4">
            <h2 className="headline__h2">Responsive Images</h2>
            <p>March 25</p>
          </div>
          <div className="row__colspan-8">
            <h3 className="headline__h3">Choosing Resolution Switching Breakpoints</h3>
            <p className="dropCap">The question of how many breakpoints are needed and how to choose them comes up a lot when creating a responsive design that includes resolution switching of images. This three-part post describes a technique based on an analysis of device sizes as one way to answer the question and summarizes a few other ideas for choosing breakpoints.</p>
            <p>
              <Link to="/blog/2025/01/resolution-switching-images">Choosing Resolution Switching Breakpoints...</Link>
            </p>
          </div>

          <div className="row__colspan-4"></div>
          <div className="row__colspan-8">&nbsp;</div>
        </div>
      </div>
    </Page>
  )
}

export default Blogs2025
