import React, { useContext, useEffect } from "react"
import { HashLink } from "react-router-hash-link"
import Page from "../Page"
import DispatchContext from "../../DispatchContext"
import StateContext from "../../StateContext"
import GTag from "../GTag"
import GStructuredData from "../GStructuredData"

function ProcessModels() {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)

  appState.backgroundStyle == "light" ? (document.body.classList.remove("dark"), document.body.classList.add("light")) : (document.body.classList.remove("light"), document.body.classList.add("dark"))

  useEffect(() => {
    appDispatch({ type: "backgroundStyleChange", color: "light" })
  }, [])

  return (
    <Page title="Process Models">
      <GTag></GTag>
      <GStructuredData type="Article" datePublished="2025-03-06T08:26:21-08:00" headline="Software Process Models"></GStructuredData>
      <meta name="description" content="Software process models" />
      <div className="wrapper wrapper__article">
        <h1 className="headline__h1-cg">Process Models</h1>
        <div className="headline__author">Gregory Swanson | updated February 19, 2025</div>
        <div className="row row--gutters">
          <div className="row__colspan-4">
            <h2 className="headline__h2-contents">Contents</h2>
            <ul className="list--ul">
              <li className="list list--toc">
                <HashLink to="#reqdocs" className="list--toc--a">
                  Process Models
                </HashLink>
              </li>
              <li className="list list--toc">
                <HashLink to="#notes" className="list--toc--a">
                  References
                </HashLink>
              </li>
            </ul>
          </div>
          <div className="row__colspan-7">
            <p>....</p>
          </div>
          <div className="row__colspan-1"></div>
          <div className="row__colspan-12" id="reqdocs">
            <h2 className="headline__h2">Process Models</h2>
          </div>

          <div className="row__colspan-1"></div>
          <div className="row__colspan-10"></div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12 row__margin-bottom-0" id="notes">
            <h3 className="headline__h3">Notes</h3>
          </div>

          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <ol>
              <li id="footnote1">
                <span className="footnote__ref">
                  <HashLink to="#note1" className="footnote--cite">
                    ^
                  </HashLink>
                  First note
                </span>
              </li>
            </ol>
          </div>
          <div className="row__colspan-1"></div>
        </div>
      </div>
    </Page>
  )
}
export default ProcessModels
