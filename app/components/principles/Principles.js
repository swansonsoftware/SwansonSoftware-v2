import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import Page from "../Page"
import DispatchContext from "../../DispatchContext"
import StateContext from "../../StateContext"
import Breadcrumb from "../Breadcrumb"
import GTag from "../GTag"

function Principles() {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)

  appState.backgroundStyle == "light" ? (document.body.classList.remove("dark"), document.body.classList.add("light")) : (document.body.classList.remove("light"), document.body.classList.add("dark"))

  useEffect(() => {
    appDispatch({ type: "backgroundStyleChange", color: "light" })
    appDispatch({ type: "selectMenu", selectedMenu: "Principles" })
    appDispatch({ type: "menuActiveCategory", menuActiveCategory: "0" })
  }, [])

  const breadcrumbs = [
    { id: 0, toText: "Home", toUrl: "/" },
    { id: 1, toText: "Principles", toUrl: "" }
  ]

  return (
    <Page title="Principles">
      <GTag></GTag>
      <div className="wrapper wrapper__article">
        <Breadcrumb breadcrumbs={breadcrumbs} />
        <h1 className="headline__h1-cg">Principles</h1>
        <h2 className="headline__h2">On the Principles of Software Development</h2>
        <p>I have worked in software development for several decades and there are some things I would like to say.</p>

        <div className="row row__margin-bottom-0 row--gutters">
          <div className="row__colspan-4">
            <h2 className="headline__h2-contents">
              <Link to="/principles/design">Software Design</Link>
            </h2>
          </div>
          <div className="row__colspan-8"></div>
        </div>
        <div className="row row__margin-bottom-0 row--gutters">
          <div className="row__colspan-12">
            <h2 className="headline__h2-contents">
              <Link to="/principles/lifecycle-models">Software Life Cycle Models</Link>
            </h2>
          </div>
        </div>
        <div className="row row__margin-bottom-0 row--gutters">
          <div className="row__colspan-12">
            <h2 className="headline__h2-contents">
              <Link to="/principles/reviews">Software Reviews</Link>
            </h2>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default Principles
