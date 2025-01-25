import React, { useContext, useEffect } from "react"
import Page from "../../Page"
import DispatchContext from "../../../DispatchContext"
import StateContext from "../../../StateContext"
import Breadcrumb from "../../Breadcrumb"

function BlogJan2025_ResSwitching() {
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
      "headline": "Resolution Switching Images",
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
    <Page title="Resolution Switching Images">
      <meta name="description" content="Resolution switching images, choosing breakpoints" />
      <div className="wrapper wrapper__article">
        <Breadcrumb to="/blog/2025" linktext="Blog List 2025" />
        <h1 className="headline__h1-cg">Resolution Switching Images</h1>
        <div className="row row--gutters">
          <div className="row__col-span-4 row__margin-bottom-0">
            <h2 className="headline__h2">Resolution Switching Breakpoints</h2>
          </div>
          <div className="row__col-span-8 row__margin-bottom-0">
            <h3 className="headline__h3">The Problem Choosing Breakpoints</h3>
            <p>The question of how to choose breakpoints when resolution switching images on a webpage comes up a lot, and frankly the solutions recommended by so many experts fall far short. </p>
            <p>We want the browser to download the smallest image that will fit the display so that we are not wasting the user’s bandwidth, so we need a set of images that will cover the devices we want to support. We also want to keep the list as short as possible, to save us work.</p>
          </div>
          <div className="row__col-span-4 row__margin-bottom-0">
            <h2 className="headline__h2">How the browser uses srcset and sizes</h2>
          </div>
          <div className="row__col-span-8 row__margin-bottom-0">
            <h3 className="headline__h3">Img Element srcset and sizes</h3>
            <p></p>
          </div>
          <div className="row__col-span-4 row__margin-bottom-0">
            <h2 className="headline__h2">A Table of Breakpoints</h2>
          </div>
          <div className="row__col-span-8 row__margin-bottom-0">
            <h3 className="headline__h3">Choosing Breakpoints</h3>
            <p>We want the browser to download the smallest image that will fit the display so that we are not wasting the user's bandwidth, so we need a set of images that will cover the devices we want to support. We also want to keep the list as short as possible, to save us work.</p>
            <p>Here is a short list of some recent devices, taken from Chrome’s Emulated Devices list. For our photo site we use screen size as the maximum image size; for other purposes, images displayed on web pages may use just a portion of the screen and the largest image in the set might only be 1280px.</p>
            <p>table</p>
            <p>Start by listing each unique width - both landscape and portrait for mobile devices because they can be rotated to view in either portrait or landscape - and include the DPR. Then create groups where the sizes are close. For example, portrait sizes of 320, 344, and 360 are close so create a group under the largest size 360. There are some portrait sizes that can’t be grouped with another portrait size but could fall under a landscape group instead. Here is a set of groups created from the above list (this is not the only way the groups can be formed):</p>
          </div>
          <div className="row__col-span-4 row__margin-bottom-0">
            <h2 className="headline__h2"></h2>
          </div>
          <div className="row__col-span-8 row__margin-bottom-0">
            <h3 className="headline__h3">Consider Image Aspect Ratio</h3>
            <p></p>
          </div>
          <div className="row__col-span-4 row__margin-bottom-0">
            <h2 className="headline__h2"></h2>
          </div>
          <div className="row__col-span-8 row__margin-bottom-0">
            <h3 className="headline__h3">Portrait and Landscape sizes</h3>
            <p></p>
          </div>
          <div className="row__col-span-4 row__margin-bottom-0">
            <h2 className="headline__h2">Topic</h2>
          </div>
          <div className="row__col-span-8 row__margin-bottom-0">
            <h3 className="headline__h3">Heading</h3>
            <p></p>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default BlogJan2025_ResSwitching
