import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import Page from "../Page"
import DispatchContext from "../../DispatchContext"
import StateContext from "../../StateContext"
import Breadcrumb from "../Breadcrumb"
import GTag from "../GTag"

function Blog() {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)

  appState.backgroundStyle == "light" ? (document.body.classList.remove("dark"), document.body.classList.add("light")) : (document.body.classList.remove("light"), document.body.classList.add("dark"))

  useEffect(() => {
    appDispatch({ type: "backgroundStyleChange", color: "light" })
    appDispatch({ type: "selectMenu", selectedMenu: "Blog" })
    appDispatch({ type: "menuActiveCategory", menuActiveCategory: "1" })
  }, [])

  const breadcrumbs = [
    { id: 0, toText: "Home", toUrl: "/" },
    { id: 1, toText: "Blog", toUrl: "/blog" }
  ]

  return (
    <Page title="Blog">
      <GTag></GTag>
      <div className="wrapper wrapper__article">
        <Breadcrumb breadcrumbs={breadcrumbs} />
        <h1 className="headline__h1-cg">Blog</h1>
        <h2 className="headline__h2">Rants and Ruminations</h2>
        <p>I have worked in software development for several decades and there are some things I would like to say.</p>

        <div className="row row__margin-bottom-0 row--gutters">
          <div className="row__colspan-4">
            <h2 className="headline__h2-contents">
              <Link to="/blog/2025">2025</Link>
            </h2>
          </div>
          <div className="row__colspan-8">
            <p>I think that some of the ideas recently being circulated about choosing breakpoints for resolution switching of images are not quite right. I explain why in Choosing Resolution Switching Breakpoints.</p>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default Blog
