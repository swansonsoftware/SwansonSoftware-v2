import React, { useContext, useEffect } from "react"
import InitializePage from "../InitializePage.js"
import { Link } from "react-router-dom"
import Page from "../Page.js"
import DispatchContext from "../../DispatchContext.js"
import StateContext from "../../StateContext.js"
import Breadcrumb from "../Breadcrumb.js"
import GTag from "../GTag.js"

function Principles() {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)

  appState.backgroundStyle == "light" ? (document.body.classList.remove("dark"), document.body.classList.add("light")) : (document.body.classList.remove("light"), document.body.classList.add("dark"))

  InitializePage({ backgroundStyleChangeColor: "light", selectMenu: "Principles", menuActiveCategory: "0", homePageClass: "page", scrollTop: true })

  const breadcrumbs = [
    { id: 0, toText: "Home", toUrl: "/" },
    { id: 1, toText: "Principles", toUrl: "" }
  ]

  return (
    <Page title="Principles">
      <GTag></GTag>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <div className="wrapper wrapper__article" id="maincontent" tabIndex={-1}>
        <h1 className="headline__h1-cg">Principles</h1>
        <h2 className="headline__h2">On the Principles of Software Development</h2>
        <p>There are some things that others in software development have said and that should be remembered.</p>

        <div className="row row__margin-bottom-0 row--gutters">
          <div className="row__colspan-5">
            <h2 className="headline__h2-contents">
              <Link to="/principles/design">Software Design</Link>
            </h2>
          </div>
          <div className="row__colspan-7">
            <p>This article explores software design, beginning with an answer to the question, “what is software design” and a description of the properties of a good design. It continues by describing analysis and design activities, presenting software design principles and strategies including decomposition and composition, modularity, and abstraction, discussing design methods with emphasis on structured and object-oriented design, and concludes with the product of software design: the technical specification.</p>
          </div>
        </div>
        <div className="row row__margin-bottom-0 row--gutters">
          <div className="row__colspan-5">
            <h2 className="headline__h2-contents">
              <Link to="/principles/lifecycle">Software Life Cycle</Link>
            </h2>
          </div>
          <div className="row__colspan-7">
            <p>A definition of the software life cycle, its origin, and its role as metamodel for creating life cycle models. Categories of life cycle models are described, and a few life cycle models are described.</p>
          </div>
        </div>
        <div className="row row__margin-bottom-0 row--gutters">
          <div className="row__colspan-5">
            <h2 className="headline__h2-contents">
              <Link to="/principles/reviews">Software Reviews</Link>
            </h2>
          </div>
          <div className="row__colspan-7">
            <p>The benefits you get from software reviews, review types, and the review process.</p>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default Principles
