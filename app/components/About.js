import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import Page from "./Page"
import DispatchContext from "../DispatchContext"
import StateContext from "../StateContext"
import Breadcrumb from "./Breadcrumb"
import GTag from "./GTag"

function About() {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)

  appState.backgroundStyle == "light" ? (document.body.classList.remove("dark"), document.body.classList.add("light")) : (document.body.classList.remove("light"), document.body.classList.add("dark"))

  const main = document.querySelector("#maincontent")
  if (main) {
    main.style.height = ""
  }

  useEffect(() => {
    appDispatch({ type: "backgroundStyleChange", color: "light" })
    appDispatch({ type: "selectMenu", selectedMenu: "" })
    appDispatch({ type: "menuActiveCategory", menuActiveCategory: "-1" })
    appDispatch({ type: "homePageClass", homePageClass: "page" })
    const app = document.getElementById("app")
    if (app) {
      app.focus()
    }
  }, [])

  const breadcrumbs = [
    { id: 0, toText: "Home", toUrl: "/" },
    { id: 1, toText: "About Swanson Software", toUrl: "" }
  ]

  return (
    <Page title="About Us">
      <GTag></GTag>
      <meta name="description" content="About Swanson Software" />
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <div className="wrapper wrapper__article" id="maincontent">
        <h1 className="headline__h1">About Swanson Software</h1>
        <div className="row row--gutters">
          <div className="row__colspan-4">
            <h2 className="headline__h2">What is Swanson Software</h2>
          </div>
          <div className="row__colspan-8">
            <h3 className="headline__h3">Not a business</h3>
            <p>SwansonSoftware.com is not a business, it is my personal Web site. You will find no advertisements on this site, it is not a source of income.</p>
          </div>
          <div className="row__colspan-4"></div>
          <div className="row__colspan-8">
            <h3 className="headline__h3">Mission</h3>
            <p>To disseminate the principles and practices of software construction that lead to quality software and successful projects.</p>
          </div>

          <div className="row__colspan-4">
            <h2 className="headline__h2">Background</h2>
          </div>
          <div className="row__colspan-8">
            <p>I have worked in software development for many years, for companies of all sizes, and I have seen the tools and processes evolve. The evolution has been dramatic: the first programming I did was Fortran on punch cards, where program code was written first on graph paper for use when punching the cards; later I programmed on a teletype with a modem connected to a time share computer where the source code was stored, and the executable was punched out on paper tape. The first PCs I programmed on had a monochrome character user interface, and the text editors didn’t have syntax highlighting or contextual help. Later the graphical user interface became ubiquitous, applications became harder to write, and code editors and development environments gradually improved with syntax highlighting, context-sensitive help, and later code hints, and they became more expensive. There were no good alternatives to expensive integrated development environments for some time, but open-source software took off, and now we have Visual Studio Code, a free code editor that supports syntax highlighting, code suggestions and auto completion, context sensitive command help, embedded source control with Git and more. Visual Studio Code is what I use now, and a free Git account to store project files in the cloud on github.</p>
          </div>

          <div className="row__colspan-4"></div>
          <div className="row__colspan-8">
            <h3 className="headline__h3">Historical Perspective</h3>
            <p>Years ago, companies I worked for didn't use applications to track software bugs. Bugs were tracked in a text file or spreadsheet, or not at all. From 1997 through 1999 I worked for an insurance company that didn’t track software bugs; a colleague of mine, a business analyst who doubled as QA engineer, kept a spreadsheet of bugs for his own use. Today we have web-based applications for tracking bugs and for source control, many with free plans.</p>

            <p>We have learned about software life cycles and design patterns, and how to improve programming skills with reviews. Yet, things still go wrong; and when they go right, perhaps no one knows why. Too often projects are not finished on time, or a product release is buggy, or performance is unacceptable. These are the issues SwansonSoftware strives to address, through articles that gather many of the best sources that have stood the test of time, and through anecdotes from experience.</p>
          </div>

          <div className="row__colspan-4">
            <h2 className="headline__h2">Social</h2>
          </div>
          <div className="row__colspan-8">
            <Link className="social" to="https://www.youtube.com/channel/UCP0ZqbwKwrFb98I4_UueOaQ" rel="noopener noreferrer" target="_blank" title="Swanson YouTube Channel">
              <span className="accessibility--hidden">Go to Gregory Swanson YouTube Channel.</span>
              <svg height="36px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M186.8 202.1l95.2 54.1-95.2 54.1V202.1zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-42 176.3s0-59.6-7.6-88.2c-4.2-15.8-16.5-28.2-32.2-32.4C337.9 128 224 128 224 128s-113.9 0-142.2 7.7c-15.7 4.2-28 16.6-32.2 32.4-7.6 28.5-7.6 88.2-7.6 88.2s0 59.6 7.6 88.2c4.2 15.8 16.5 27.7 32.2 31.9C110.1 384 224 384 224 384s113.9 0 142.2-7.7c15.7-4.2 28-16.1 32.2-31.9 7.6-28.5 7.6-88.1 7.6-88.1z" />
              </svg>
            </Link>

            <Link className="social" to="https://www.facebook.com/gregory.swanson.315" rel="noopener noreferrer" target="_blank" title="Swanson Facebook page">
              <span className="accessibility--hidden">Go to Gregory Swanson Facebook page.</span>
              <svg height="36px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default About
