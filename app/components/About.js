import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import Page from "./Page"
import DispatchContext from "../DispatchContext"
import StateContext from "../StateContext"

function About() {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)
  // console.log("about - appState.backgroundStyle: " + appState.backgroundStyle)
  appState.backgroundStyle == "light" ? (document.body.classList.remove("dark"), document.body.classList.add("light")) : (document.body.classList.remove("light"), document.body.classList.add("dark"))

  const main = document.querySelector("#maincontent")
  if (main) {
    main.style.height = ""
  }

  useEffect(() => {
    // console.log("About.js > useEffect - appDispatch: set backgroundStyle light")
    appDispatch({ type: "backgroundStyleChange", color: "light" })
  }, [])

  return (
    <Page title="About Us">
      <div className="wrapper wrapper__article">
        <h1 className="headline__h1">About Swanson Software</h1>
        <div className="row row--gutters">
          <div className="row__col-span-4 row__margin-bottom-0">
            <h2 className="headline__h2">What is Swanson Software</h2>
          </div>
          <div className="row__col-span-8 row__margin-bottom-0">
            <h3 className="headline__h3">Not a business</h3>
            <p>SwansonSoftware.com is not a business, it is my personal Web site. You will find no advertisements on this site, it is not a source of income.</p>
          </div>
          <div className="row__col-span-4 row__margin-bottom-0"></div>
          <div className="row__col-span-8 row__margin-bottom-0">
            <h3 className="headline__h3">Mission</h3>
            <p>To disseminate the principles and practices of software construction.</p>
          </div>

          <div className="row__col-span-4 row__margin-bottom-0"></div>
          <div className="row__col-span-8 row__margin-bottom-0">&nbsp;</div>

          <div className="row__col-span-4 row__margin-bottom-0">
            <h2 className="headline__h2">Background</h2>
          </div>
          <div className="row__col-span-8 row__margin-bottom-0">
            <p>I haved worked in software development for over 30 years, for companies of all sizes from 2 developers to hundreds, and I have seen the tools and processes evolve. The evolution has been dramatic: the first programs I wrote were on punch cards, and now I use SVN and github to store work on network servers or the internet.</p>
          </div>

          <div className="row__col-span-4 row__margin-bottom-0"></div>
          <div className="row__col-span-8 row__margin-bottom-0">
            <h3 className="headline__h3">Historical Perspective</h3>
            <p>Long ago, we didn't use applications to track software bugs. Bugs were tracked in a text file or spreadsheet. Source code control was a manual process, there was no application for that. Software editing was done in a character-based terminal connected to a main frame, or in a command window on a pc, or on a teletype that used paper feed instead of a display monitor, or with a text editor. Code editors did not highlight syntax or provide any help with spelling.</p>

            <p>Today we use applications for tracking bugs and for source control; we have development environments that not only highlight syntax, but provide suggestions on syntax alternatives, fix mistakes, and much more.</p>

            <p>We also learned about software life cycles and design, and how to improve programming skills with reviews. That learning, however, is spread piecemeal on the internet and in dozens of books.</p>
          </div>

          <div className="row__col-span-4 row__margin-bottom-0"></div>
          <div className="row__col-span-8 row__margin-bottom-0">&nbsp;</div>

          <div className="row__col-span-4 row__margin-bottom-0">
            <h2 className="headline__h2">Social</h2>
          </div>
          <div className="row__col-span-8 row__margin-bottom-0">
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
