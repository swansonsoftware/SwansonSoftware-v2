import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import Page from "../Page"
import DispatchContext from "../../DispatchContext"
import StateContext from "../../StateContext"

function Blogs2025() {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)

  appState.backgroundStyle == "light" ? (document.body.classList.remove("dark"), document.body.classList.add("light")) : (document.body.classList.remove("light"), document.body.classList.add("dark"))

  useEffect(() => {
    appDispatch({ type: "backgroundStyleChange", color: "light" })
  }, [])

  return (
    <Page title="Blog 2025">
      <div className="wrapper wrapper__article">
        <h1 className="headline__h1-cg">Blog List 2025</h1>
        <div className="row row--gutters">
          <div className="row__col-span-4 row__margin-bottom-0">
            <h2 className="headline__h2">Resolution Switching Images</h2>
          </div>
          <div className="row__col-span-8 row__margin-bottom-0">
            <h3 className="headline__h3">Choosing Resolution Switching Breakpoints</h3>
            <p>The question of how to choose breakpoints when resolution switching images on a webpage comes up a lot, and frankly the solutions recommended by so many experts fall far short. </p>
            <p>
              <Link to="/blog/2025/01/resolution-switching-images">Resolution Switching...</Link>
            </p>
          </div>

          <div className="row__col-span-4 row__margin-bottom-0"></div>
          <div className="row__col-span-8 row__margin-bottom-0">&nbsp;</div>

          <div className="row__col-span-4 row__margin-bottom-0">
            <h2 className="headline__h2">Time vs. Quality</h2>
          </div>
          <div className="row__col-span-8 row__margin-bottom-0">
            <h3 className="headline__h3">Time for Commenting Code</h3>
            <p>Sometimes code is written in a way that makes it look inefficient, wrong, or just plain confusing. There is risk that sometime in the future a bug will be created by some unknowing developer who attempts to "fix" it. This is where a well-written comment is needed, and it takes time, time that is difficult to anticipate and quantify in the sprint timeline.</p>
            <p>
              <Link to="/blog/2025/02/time-vs-quality">Time vs. Quality...</Link>
            </p>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default Blogs2025
