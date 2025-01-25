import React, { useContext, useEffect } from "react"
import Page from "../../Page"
import DispatchContext from "../../../DispatchContext"
import StateContext from "../../../StateContext"
import Breadcrumb from "../../Breadcrumb"

function BlogJan2025_TimeVsQuality() {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)

  appState.backgroundStyle == "light" ? (document.body.classList.remove("dark"), document.body.classList.add("light")) : (document.body.classList.remove("light"), document.body.classList.add("dark"))

  useEffect(() => {
    appDispatch({ type: "backgroundStyleChange", color: "light" })
  }, [])

  function GenerateDate(date) {
    //generates format like 2025-01-19T09:56:01-08:00
    //                      2025-01-19T08:00:00-08:00
    var tzo = -date.getTimezoneOffset(),
      dif = tzo >= 0 ? "+" : "-",
      pad = function (num) {
        return (num < 10 ? "0" : "") + num
      }

    return date.getFullYear() + "-" + pad(date.getMonth() + 1) + "-" + pad(date.getDate()) + "T" + pad(date.getHours()) + ":" + pad(date.getMinutes()) + ":" + pad(date.getSeconds()) + dif + pad(Math.floor(Math.abs(tzo) / 60)) + ":" + pad(Math.abs(tzo) % 60)
  }

  // var dt = new Date()
  // console.log(GenerateDate(dt))

  useEffect(() => {
    //add structured data
    let structuredDataText = `{
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Time vs. Quality",
      "datePublished": "2025-01-19T09:56:01-08:00",
      "author": [{
          "@type": "Person",
          "name": "Gregory Swanson",
          "url": "https://www.linkedin.com/in/gregory-swanson-7b92b68/"
        }]
    }`
    //"dateModified": "....",
    const script = document.createElement("script")
    script.setAttribute("type", "application/ld+json")
    script.setAttribute("id", "structure")
    script.textContent = structuredDataText
    document.head.appendChild(script)
    return () => document.head.removeChild(script)
  }, [])

  return (
    <Page title="Time vs. Quality">
      <meta name="description" content="Time vs. quality in software development" />
      <div className="wrapper wrapper__article">
        <Breadcrumb to="/blog/2025" linktext="Blog List 2025" />
        <h1 className="headline__h1-cg">Time vs. Quality</h1>
        <div className="row row--gutters">
          <div className="row__col-span-4 row__margin-bottom-0">
            <h2 className="headline__h2">Time vs. Quality</h2>
          </div>
          <div className="row__col-span-8 row__margin-bottom-0">
            <h3 className="headline__h3">Time for Commenting Code</h3>
            <p>Sometimes code is written in a way that makes it look inefficient, wrong, or just plain confusing. There is risk that sometime in the future a bug will be created by some unknowing developer who attempts to "fix" it. This is where a well-written comment is needed, and it takes time, time that is difficult to anticipate and quantify in the sprint timeline.</p>
            <p>But in the heat of the sprint and expecially when running late, what happens? A code review would flag the need for comments, but no successful software company does code reviews because anything that slows the release is an opening for competitors.</p>
            <p>In these situations, the comment cannot be replaced by a software requirements document, if there is one, and the details in the comment cannot be captured in source control or bug systems.</p>
            <p>Let's say the developer enters a bug number in an abbreviated comment, so in the future anyone can look up the bug number and find the full details about the code and why it is the way it is. But bug tracking systems are not permanent; a company I worked for switched bug tracking systems at least 3 times as it grew, so entering a bug number in the code may not help in the future.</p>
          </div>

          <div className="row__col-span-4 row__margin-bottom-0"></div>
          <div className="row__col-span-8 row__margin-bottom-0">
            <h3 className="headline__h3">Time for Code Reviews</h3>
            <p>Code reviews are...</p>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default BlogJan2025_TimeVsQuality
