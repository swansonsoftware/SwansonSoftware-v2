import React, { useContext, useEffect, useRef } from "react"
import Page from "../../Page"
import DispatchContext from "../../../DispatchContext"
import StateContext from "../../../StateContext"
import Breadcrumb from "../../Breadcrumb"
import ImageBlock from "../../ImageBlock"
import { HashLink } from "react-router-hash-link"
import { useLocation } from "react-router-dom"
import GTag from "../../GTag"
import GStructuredData from "../../GStructuredData"

function BlogJan2025_ResSwitching2() {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)
  const location = useLocation()

  appState.backgroundStyle == "light" ? (document.body.classList.remove("dark"), document.body.classList.add("light")) : (document.body.classList.remove("light"), document.body.classList.add("dark"))

  useEffect(() => {
    appDispatch({ type: "backgroundStyleChange", color: "light" })
  }, [])

  //could add a new component:
  //function ScrollToAnchor() {
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1))
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" })
        }, 100)
      }
    }
  }, [location])
  //       return null;
  // }

  return (
    <Page title="Choosing Resolution Switching Breakpoints Part 2">
      <GTag></GTag>
      <GStructuredData type="BlogPosting" datePublished="2025-03-20T08:01:24-07:00" dateModified="2025-03-25T09:20:18-07:00" headline="Choosing Resolution Switching Breakpoints for Responsive Images"></GStructuredData>
      <meta name="description" content="An analysis of device sizes is used to determine the breakpoints for resolution switching of images in a responsive design" />
      <div className="wrapper wrapper__article">
        <Breadcrumb to="/blog/2025/01/resolution-switching-images" linktext="Resolution Switching Images (Part 1)" />
        <h1 className="headline__h1-cg">Choosing Resolution Switching Breakpoints - Part 2</h1>
        <div className="headline__author">Gregory Swanson | March 25, 2025</div>
        <div className="row row--gutters">
          <div className="row__colspan-4">
            <h2 className="headline__h2-contents">Contents</h2>
            <ul className="list--ul">
              <li className="list list--toc">
                <HashLink to="#findingBrkpts" className="list--toc--a">
                  Finding Breakpoints Through Analysis of Device Screen Sizes
                </HashLink>
                <ul>
                  <li className="list list--toc">
                    <HashLink to="#screenSizeGroups" className="list--toc--a">
                      Screen Size Groups
                    </HashLink>
                  </li>
                  <li className="list list--toc">
                    <HashLink to="#listBrkpts" className="list--toc--a">
                      The List of Breakpoints
                    </HashLink>
                  </li>
                  <li className="list list--toc">
                    <HashLink to="#tblImageSizes" className="list--toc--a">
                      Table of Image Sizes
                    </HashLink>
                  </li>
                </ul>
              </li>
              <li className="list list--toc">
                <HashLink to="/blog/2025/01/resolution-switching-images-part3" className="list--toc--a">
                  Next: Part 3
                </HashLink>
              </li>
            </ul>
          </div>
          <div className="row__colspan-8" id="findingBrkpts">
            <h3 className="headline__h3">Finding Breakpoints Through Analysis of Device Screen Sizes</h3>
            <p className="dropCap">Any discussion about choosing breakpoints for resolution switching is difficult because assumptions need to be made that impact the choice of breakpoints. There may be no single correct way to choose breakpoints that covers all situations. </p>
            <h3 className="headline__h3 headline__h3--xtra-pad">Two Cases</h3>
            <p>I will cover two cases:</p>
            <ol>
              <li className="list">
                Images in a landscape orientation show full screen width (or as best as possible depending on the image aspect ratio) with <code>sizes</code> attribute set to 100vw
              </li>
              <li className="list">
                Images in portrait orientation show full screen height and each image specified in the <code>srcset</code> attribute has a corresponding size in the <code>sizes</code> attribute, using a media query with max-height
              </li>
            </ol>
          </div>

          <div className="row__colspan-4"></div>
          <div className="row__colspan-8">
            <p>
              To extend this technique for other situations you can use the same images in the{" "}
              <HashLink smooth to="#tblImageSizes">
                Table of Image Sizes
              </HashLink>{" "}
              below, or your own version of it, but with different media queries in the <code>sizes</code> attribute.{" "}
            </p>
            <h3 className="headline__h3">A List of Device Screen Sizes</h3>
            <p className="dropCap">To approach this in a pragmatic, organized way, we will group devices by their screen size. To illustrate, consider two copies of an image: one that is 412px wide and one that is 430px wide. The difference in file size between the two is not enough to be concerned about, so we might group those. Our grouping is a bit different though, because we consider more sizes as will be shown below.</p>
            <p>Using online sources and the list of devices in a browser’s device emulator (located in the developer console), and ignoring devices more than say 10 years old, a good sampling of screen sizes (including DPR (Device Pixel Ratio) multiples) is:</p>
            <table className="table table--no-border table--cell-border-dark">
              <thead className="table--light-blue">
                <tr>
                  <th>Screen Size</th>
                  <th>Device</th>
                  <th>DPR</th>
                </tr>
              </thead>
              <tbody className="table--alternate-row-color">
                <tr>
                  <td>320x607</td>
                  <td>iPhone 12 Mini</td>
                  <td>3 (960x1821)</td>
                </tr>
                <tr>
                  <td>320x658</td>
                  <td>Galaxy S9+</td>
                  <td>4.5 (1440x2961)</td>
                </tr>
                <tr>
                  <td>344x882</td>
                  <td>Galaxy Z Fold 5</td>
                  <td>2.6 (894x2293)</td>
                </tr>
                <tr>
                  <td>353x745</td>
                  <td>Pixel 4</td>
                  <td>3 (1059x2235)</td>
                </tr>
                <tr>
                  <td>360x640</td>
                  <td>Moto G4</td>
                  <td>3 (1080x1920)</td>
                </tr>
                <tr>
                  <td>360x740</td>
                  <td>Samsung Galaxy S8+</td>
                  <td>4 (1440x2960)</td>
                </tr>
                <tr>
                  <td>375x667</td>
                  <td>iPhone SE</td>
                  <td>2 (750x1334)</td>
                </tr>
                <tr>
                  <td>390x844</td>
                  <td>iPhone 12 Pro</td>
                  <td>3 (1170x2532)</td>
                </tr>
                <tr>
                  <td>393x786</td>
                  <td>Pixel 3, Pixel 3 XL</td>
                  <td>2.8 (1100x2200)</td>
                </tr>
                <tr>
                  <td>393x852</td>
                  <td>iPhone 15</td>
                  <td>3 (1179x2556)</td>
                </tr>
                <tr>
                  <td>411x731</td>
                  <td>Pixel 2</td>
                  <td>2.6 (1068x1900)</td>
                </tr>
                <tr>
                  <td>412x914</td>
                  <td>Galaxy A51/71</td>
                  <td>2.6 (1071x2376)</td>
                </tr>
                <tr>
                  <td>412x915</td>
                  <td>Pixel 7</td>
                  <td>2.6 (1071x2379)</td>
                </tr>
                <tr>
                  <td>412x915</td>
                  <td>Samsung Galaxy S20 Ultra (1442x3202)</td>
                  <td>3.5</td>
                </tr>
                <tr>
                  <td>414x896</td>
                  <td>iPhone XR</td>
                  <td>2 (828x1792)</td>
                </tr>
                <tr>
                  <td>430x932</td>
                  <td>iPhone 14 Pro Max</td>
                  <td>3 (1290x2796)</td>
                </tr>
                <tr>
                  <td>540x720</td>
                  <td>Surface Duo</td>
                  <td>2.5 (1350x1800)</td>
                </tr>
                <tr>
                  <td>712x1138</td>
                  <td>Galaxy Tab S4</td>
                  <td>2.3 (1637x2617)</td>
                </tr>
                <tr>
                  <td>750x1334</td>
                  <td>DPR iPhone SE</td>
                  <td></td>
                </tr>
                <tr>
                  <td>768x1024</td>
                  <td>iPad Mini</td>
                  <td>2 (1536x2048)</td>
                </tr>
                <tr>
                  <td>800x1280</td>
                  <td>Kinde Fire HDX</td>
                  <td>2 (1600x2560)</td>
                </tr>
                <tr>
                  <td>820x1180</td>
                  <td>iPad Air</td>
                  <td>2 (1640x2360)</td>
                </tr>
                <tr>
                  <td>828x1792</td>
                  <td>DPR iPhone XR</td>
                  <td></td>
                </tr>
                <tr>
                  <td>853x1280</td>
                  <td>Asus Zenbook Fold</td>
                  <td>1.5 (1279x1920)</td>
                </tr>
                <tr>
                  <td>894x2293</td>
                  <td>DPR Galaxy Z Fold 5</td>
                  <td></td>
                </tr>
                <tr>
                  <td>912x1368</td>
                  <td>Surface Pro 7</td>
                  <td>2 (1824x2736)</td>
                </tr>
                <tr>
                  <td>960x1821</td>
                  <td>DPR iPhone 12 Mini</td>
                  <td></td>
                </tr>
                <tr>
                  <td>1024x1366</td>
                  <td>iPad Pro</td>
                  <td>2 (2048x2732)</td>
                </tr>
                <tr>
                  <td>1059x2235</td>
                  <td>DPR Pixel 4</td>
                  <td></td>
                </tr>
                <tr>
                  <td>1068x1900</td>
                  <td>DPR Pixel 2</td>
                  <td></td>
                </tr>
                <tr>
                  <td>1071x2376</td>
                  <td>DPR Galaxy A</td>
                  <td></td>
                </tr>
                <tr>
                  <td>1071x2379</td>
                  <td>DPR Pixel 7</td>
                  <td></td>
                </tr>
                <tr>
                  <td>1080x1920</td>
                  <td>DPR Moto G4; HD monitor, portrait orientation</td>
                  <td></td>
                </tr>
                <tr>
                  <td>1100x2200</td>
                  <td>DPR Pixel 3, Pixel 3 XL</td>
                  <td></td>
                </tr>
                <tr>
                  <td>1170x2532</td>
                  <td>DPR iPhone 12 Pro</td>
                  <td></td>
                </tr>
                <tr>
                  <td>1179x2556</td>
                  <td>DPR iPhone 15</td>
                  <td></td>
                </tr>
                <tr>
                  <td>1279x1920</td>
                  <td>DPR Asus Zenbook Fold</td>
                  <td></td>
                </tr>
                <tr>
                  <td>1290x2796</td>
                  <td>DPR iPhone 14 Pro Max</td>
                  <td></td>
                </tr>
                <tr>
                  <td>1350x1800</td>
                  <td>DPR Surface Duo</td>
                  <td></td>
                </tr>
                <tr>
                  <td>1366x768</td>
                  <td>11-inch laptop display</td>
                  <td></td>
                </tr>
                <tr>
                  <td>1440x900</td>
                  <td>13-inch laptop display</td>
                  <td></td>
                </tr>
                <tr>
                  <td>1440x2960</td>
                  <td>DPR Galaxy S8+</td>
                  <td></td>
                </tr>
                <tr>
                  <td>1440x2961</td>
                  <td>DPR Galaxy S9+</td>
                  <td></td>
                </tr>
                <tr>
                  <td>1442x3202</td>
                  <td>DPR Galaxy S20 Ultra</td>
                  <td></td>
                </tr>
                <tr>
                  <td>1536x2048</td>
                  <td>DPR iPad Mini</td>
                  <td></td>
                </tr>
                <tr>
                  <td>1600x2560</td>
                  <td>DPR Kindle Fire HDX</td>
                  <td></td>
                </tr>
                <tr>
                  <td>1637x2617</td>
                  <td>DPR Galaxy Tab S4</td>
                  <td></td>
                </tr>
                <tr>
                  <td>1640x2360</td>
                  <td>DPR iPad Air</td>
                  <td></td>
                </tr>
                <tr>
                  <td>1680x1050</td>
                  <td>15-inch laptop display</td>
                  <td></td>
                </tr>
                <tr>
                  <td>1824x2736</td>
                  <td>DPR Surface Pro 7</td>
                  <td></td>
                </tr>
                <tr>
                  <td>1900x1200</td>
                  <td>17-inch laptop display</td>
                  <td></td>
                </tr>
                <tr>
                  <td>1920x1080</td>
                  <td>Standard Desktop HD (landscape orientation)</td>
                  <td>1</td>
                </tr>

                <tr>
                  <td>2048x2732</td>
                  <td>DPR iPad Pro</td>
                  <td></td>
                </tr>
                <tr>
                  <td>2880x1920</td>
                  <td>Surface Pro 9</td>
                  <td></td>
                </tr>
                <tr>
                  <td>3840x2160</td>
                  <td>4k monitor (landscape orientation)</td>
                  <td>1</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row__colspan-12" id="screenSizeGroups"></div>
          <div className="row__colspan-4">
            <h3 className="headline__h3">Screen Size Groups</h3>
          </div>
          <div className="row__colspan-8">
            <h3 className="headline__h3">A Grouped List of Screen Sizes</h3>
            <p className="dropCap">From the above table we can create groups by removing duplicates and combining nearby sizes. We will consider all unique portrait and landscape orientation widths because we can expect images of both orientations, and because users can rotate the device and view an image in either orientation.</p>
            <p>Here is the grouping I came up with and it is arbitrary; you could make the grouping more granular, less granular, or specify different values for groups:</p>

            <table className="table table--no-border table--cell-border-dark">
              <thead className="table--light-blue">
                <tr>
                  <th>Screen Size</th>
                  <th>Orientation</th>
                  <th>Size Group (Breakpoint)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="table--row-color-shadow">
                  <td>320x607</td>
                  <td>P</td>
                  <td>320</td>
                </tr>
                <tr className="table--row-color-shadow">
                  <td>320x658</td>
                  <td>P</td>
                  <td>320</td>
                </tr>
                <tr>
                  <td>344x882</td>
                  <td>P</td>
                  <td>360</td>
                </tr>
                <tr>
                  <td>353x745</td>
                  <td>P</td>
                  <td>360</td>
                </tr>
                <tr>
                  <td>360x640</td>
                  <td>P</td>
                  <td>360</td>
                </tr>
                <tr>
                  <td>360x740</td>
                  <td>P</td>
                  <td>360</td>
                </tr>
                <tr className="table--row-color-shadow">
                  <td>375x667</td>
                  <td>P</td>
                  <td>393</td>
                </tr>
                <tr className="table--row-color-shadow">
                  <td>390x844</td>
                  <td>P</td>
                  <td>393</td>
                </tr>
                <tr className="table--row-color-shadow">
                  <td>393x786</td>
                  <td>P</td>
                  <td>393</td>
                </tr>
                <tr className="table--row-color-shadow">
                  <td>393x852</td>
                  <td>P</td>
                  <td>393</td>
                </tr>
                <tr>
                  <td>411x731</td>
                  <td>P</td>
                  <td>432</td>
                </tr>
                <tr>
                  <td>412x914</td>
                  <td>P</td>
                  <td>432</td>
                </tr>
                <tr>
                  <td>412x915</td>
                  <td>P</td>
                  <td>432</td>
                </tr>
                <tr>
                  <td>412x915</td>
                  <td>P</td>
                  <td>432</td>
                </tr>
                <tr>
                  <td>414x896</td>
                  <td>P</td>
                  <td>432</td>
                </tr>
                <tr>
                  <td>430x932</td>
                  <td>P</td>
                  <td>432</td>
                </tr>
                <tr className="table--row-color-shadow">
                  <td>540x720</td>
                  <td>P</td>
                  <td>608</td>
                </tr>
                <tr className="table--row-color-shadow">
                  <td>607</td>
                  <td>L</td>
                  <td>608</td>
                </tr>
                <tr>
                  <td>640</td>
                  <td>L</td>
                  <td>672</td>
                </tr>
                <tr>
                  <td>658</td>
                  <td>L</td>
                  <td>672</td>
                </tr>
                <tr>
                  <td>667</td>
                  <td>L</td>
                  <td>672</td>
                </tr>
                <tr className="table--row-color-shadow">
                  <td>712x1138</td>
                  <td>P</td>
                  <td>768</td>
                </tr>
                <tr className="table--row-color-shadow">
                  <td>720</td>
                  <td>L</td>
                  <td>768</td>
                </tr>
                <tr className="table--row-color-shadow">
                  <td>731</td>
                  <td>L</td>
                  <td>768</td>
                </tr>
                <tr className="table--row-color-shadow">
                  <td>740</td>
                  <td>L</td>
                  <td>768</td>
                </tr>
                <tr className="table--row-color-shadow">
                  <td>750x1334</td>
                  <td>P</td>
                  <td>768</td>
                </tr>
                <tr className="table--row-color-shadow">
                  <td>768x1024</td>
                  <td>P</td>
                  <td>768</td>
                </tr>
                <tr className="table--row-color-shadow">
                  <td>768x1366</td>
                  <td>P</td>
                  <td>768</td>
                </tr>
                <tr>
                  <td>786</td>
                  <td>L</td>
                  <td>896</td>
                </tr>
                <tr>
                  <td>800x1280</td>
                  <td>P</td>
                  <td>896</td>
                </tr>
                <tr>
                  <td>820x1180</td>
                  <td>P</td>
                  <td>896</td>
                </tr>
                <tr>
                  <td>828x1792</td>
                  <td>P</td>
                  <td>896</td>
                </tr>
                <tr>
                  <td>844</td>
                  <td>L</td>
                  <td>896</td>
                </tr>
                <tr>
                  <td>852</td>
                  <td>L</td>
                  <td>896</td>
                </tr>
                <tr>
                  <td>853x1280</td>
                  <td>P</td>
                  <td>896</td>
                </tr>
                <tr>
                  <td>894x2293</td>
                  <td>P</td>
                  <td>896</td>
                </tr>
                <tr>
                  <td>896</td>
                  <td>L</td>
                  <td>896</td>
                </tr>
                <tr className="table--row-color-shadow">
                  <td>900x1440</td>
                  <td>P</td>
                  <td>960</td>
                </tr>
                <tr className="table--row-color-shadow">
                  <td>912x1368</td>
                  <td>P</td>
                  <td>960</td>
                </tr>
                <tr className="table--row-color-shadow">
                  <td>915</td>
                  <td>L</td>
                  <td>960</td>
                </tr>
                <tr className="table--row-color-shadow">
                  <td>932</td>
                  <td>L</td>
                  <td>960</td>
                </tr>
                <tr className="table--row-color-shadow">
                  <td>960x1821</td>
                  <td>P</td>
                  <td>960</td>
                </tr>
                <tr>
                  <td>1024x1366</td>
                  <td>P</td>
                  <td>1180</td>
                </tr>
                <tr>
                  <td>1050x1680</td>
                  <td>P</td>
                  <td>1180</td>
                </tr>
                <tr>
                  <td>1059x2235</td>
                  <td>P</td>
                  <td>1180</td>
                </tr>
                <tr>
                  <td>1068x1900</td>
                  <td>P</td>
                  <td>1180</td>
                </tr>
                <tr>
                  <td>1071x2376</td>
                  <td>P</td>
                  <td>1180</td>
                </tr>
                <tr>
                  <td>1071x2379</td>
                  <td>P</td>
                  <td>1180</td>
                </tr>
                <tr>
                  <td>1080x1920</td>
                  <td>P</td>
                  <td>1180</td>
                </tr>
                <tr>
                  <td>1100x2200</td>
                  <td>P</td>
                  <td>1180</td>
                </tr>
                <tr>
                  <td>1138</td>
                  <td>L</td>
                  <td>1180</td>
                </tr>
                <tr>
                  <td>1170x2532</td>
                  <td>P</td>
                  <td>1180</td>
                </tr>
                <tr>
                  <td>1179x2556</td>
                  <td>P</td>
                  <td>1180</td>
                </tr>
                <tr className="table--row-color-shadow">
                  <td>1200x1900</td>
                  <td>P</td>
                  <td>1290</td>
                </tr>
                <tr className="table--row-color-shadow">
                  <td>1279x1920</td>
                  <td>P</td>
                  <td>1290</td>
                </tr>
                <tr className="table--row-color-shadow">
                  <td>1280</td>
                  <td>L</td>
                  <td>1290</td>
                </tr>
                <tr className="table--row-color-shadow">
                  <td>1290x2796</td>
                  <td>P</td>
                  <td>1290</td>
                </tr>
                <tr>
                  <td>1334</td>
                  <td>L</td>
                  <td>1368</td>
                </tr>
                <tr>
                  <td>1350x1800</td>
                  <td>P</td>
                  <td>1368</td>
                </tr>
                <tr>
                  <td>1366x768</td>
                  <td>L</td>
                  <td>1368</td>
                </tr>
                <tr>
                  <td>1368</td>
                  <td>L</td>
                  <td>1368</td>
                </tr>
                <tr className="table--row-color-shadow">
                  <td>1440x900</td>
                  <td>L</td>
                  <td>1442</td>
                </tr>
                <tr className="table--row-color-shadow">
                  <td>1440x2960</td>
                  <td>P</td>
                  <td>1442</td>
                </tr>
                <tr className="table--row-color-shadow">
                  <td>1440x2961</td>
                  <td>P</td>
                  <td>1442</td>
                </tr>
                <tr className="table--row-color-shadow">
                  <td>1442x3202</td>
                  <td>P</td>
                  <td>1442</td>
                </tr>
                <tr>
                  <td>1536x2048</td>
                  <td>P</td>
                  <td>1600</td>
                </tr>
                <tr>
                  <td>1600x2560</td>
                  <td>P</td>
                  <td>1600</td>
                </tr>
                <tr className="table--row-color-shadow">
                  <td>1637x2617</td>
                  <td>P</td>
                  <td>1852</td>
                </tr>
                <tr className="table--row-color-shadow">
                  <td>1640x2360</td>
                  <td>P</td>
                  <td>1852</td>
                </tr>
                <tr className="table--row-color-shadow">
                  <td>1680x1050</td>
                  <td>L</td>
                  <td>1852</td>
                </tr>
                <tr className="table--row-color-shadow">
                  <td>1792</td>
                  <td>L</td>
                  <td>1852</td>
                </tr>
                <tr className="table--row-color-shadow">
                  <td>1800</td>
                  <td>L</td>
                  <td>1852</td>
                </tr>
                <tr className="table--row-color-shadow">
                  <td>1821</td>
                  <td>L</td>
                  <td>1852</td>
                </tr>
                <tr className="table--row-color-shadow">
                  <td>1824x2736</td>
                  <td>P</td>
                  <td>1852</td>
                </tr>
                <tr>
                  <td>1900x1200</td>
                  <td>L</td>
                  <td>1920</td>
                </tr>
                <tr>
                  <td>1920x1080</td>
                  <td>L</td>
                  <td>1920</td>
                </tr>
                <tr className="table--row-color-shadow">
                  <td>2048x1536</td>
                  <td>L</td>
                  <td>2120</td>
                </tr>
                <tr className="table--row-color-shadow">
                  <td>2048x2732</td>
                  <td>P</td>
                  <td>2120</td>
                </tr>
                <tr>
                  <td>2160x3840</td>
                  <td>P</td>
                  <td>2379</td>
                </tr>
                <tr>
                  <td>2200</td>
                  <td>L</td>
                  <td>2379</td>
                </tr>
                <tr>
                  <td>2235</td>
                  <td>L</td>
                  <td>2379</td>
                </tr>
                <tr>
                  <td>2293</td>
                  <td>L</td>
                  <td>2379</td>
                </tr>
                <tr>
                  <td>2360</td>
                  <td>L</td>
                  <td>2379</td>
                </tr>
                <tr>
                  <td>2376</td>
                  <td>L</td>
                  <td>2379</td>
                </tr>
                <tr>
                  <td>2379</td>
                  <td>L</td>
                  <td>2379</td>
                </tr>
                <tr className="table--row-color-shadow">
                  <td>2532</td>
                  <td>L</td>
                  <td>2560</td>
                </tr>
                <tr className="table--row-color-shadow">
                  <td>2556</td>
                  <td>L</td>
                  <td>2560</td>
                </tr>
                <tr className="table--row-color-shadow">
                  <td>2560</td>
                  <td>L</td>
                  <td>2560</td>
                </tr>
                <tr>
                  <td>2617</td>
                  <td>L</td>
                  <td>2796</td>
                </tr>
                <tr>
                  <td>2732x2048</td>
                  <td>L</td>
                  <td>2796</td>
                </tr>
                <tr>
                  <td>2736</td>
                  <td>L</td>
                  <td>2796</td>
                </tr>
                <tr>
                  <td>2796</td>
                  <td>L</td>
                  <td>2796</td>
                </tr>
                <tr className="table--row-color-shadow">
                  <td>2880x1920</td>
                  <td>P</td>
                  <td>2961</td>
                </tr>
                <tr className="table--row-color-shadow">
                  <td>2960</td>
                  <td>L</td>
                  <td>2961</td>
                </tr>
                <tr className="table--row-color-shadow">
                  <td>2961</td>
                  <td>L</td>
                  <td>2961</td>
                </tr>
                <tr>
                  <td>3202</td>
                  <td>L</td>
                  <td>3240</td>
                </tr>
                <tr>
                  <td>3840x2160</td>
                  <td>L</td>
                  <td>3840</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="row__colspan-4" id="listBrkpts">
            <h3 className="headline__h3">The List of Breakpoints</h3>
          </div>
          <div className="row__colspan-8">
            <p className="dropCap">From the above table we have 23 groups, or breakpoints. This list is long, but for many image situations only part of the list is needed:</p>
            <table className="table table--no-border table--cell-border-dark">
              <thead className="table--light-blue">
                <tr>
                  <th>Group</th>
                </tr>
              </thead>
              <tbody className="table--alternate-row-color">
                <tr>
                  <td>320</td>
                </tr>
                <tr>
                  <td>360</td>
                </tr>
                <tr>
                  <td>393</td>
                </tr>
                <tr>
                  <td>432</td>
                </tr>
                <tr>
                  <td>608</td>
                </tr>
                <tr>
                  <td>672</td>
                </tr>
                <tr>
                  <td>768</td>
                </tr>
                <tr>
                  <td>896</td>
                </tr>
                <tr>
                  <td>960</td>
                </tr>
                <tr>
                  <td>1180</td>
                </tr>
                <tr>
                  <td>1290</td>
                </tr>
                <tr>
                  <td>1368</td>
                </tr>
                <tr>
                  <td>1442</td>
                </tr>
                <tr>
                  <td>1600</td>
                </tr>
                <tr>
                  <td>1852</td>
                </tr>
                <tr>
                  <td>1920</td>
                </tr>
                <tr>
                  <td>2120</td>
                </tr>
                <tr>
                  <td>2379</td>
                </tr>
                <tr>
                  <td>2560</td>
                </tr>
                <tr>
                  <td>2796</td>
                </tr>
                <tr>
                  <td>2961</td>
                </tr>
                <tr>
                  <td>3240</td>
                </tr>
                <tr>
                  <td>3840</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row__colspan-4" id="tblImageSizes">
            <h3 className="headline__h3">Table of Image Sizes</h3>
          </div>
          <div className="row__colspan-8">
            <p className="dropCap">For this example and for the album on this website, the photos we have include three common photo aspect ratios: 16:9, 4:3, and 3:2. Breakpoints are based on image width and are the same for each aspect ratio. The table includes a Size Compressed column; the size indicated is what to try for when compressing the image. The compressed sizes are arbitrary, but they are reasonable, and I used them for the album on this website. </p>
            <p>Again, you would likely not use all these sizes most of the time. For images that will display full screen, just the sizes from 1180 width and up would do because most devices today have a DPR of 2 or higher, so the browser will never download the smaller sizes.</p>
            <p className="note dropCapNote">
              <span className="note">One caveat with this technique is that there is no way to prevent a device with high DPR, say 3 or 4, from downloading the 3x or 4x copy.</span>
              <span className="note">
                To illustrate, take a device like the Samsung Galaxy S9 that has DPR 4.5. Create a webpage with an image that has a <code>srcset</code> with all the image sizes from the table and <code>sizes="100vw"</code>, rotate the device so the long side is horizontal, then load the page in the device’s browser. The screen size is 658px wide by 320px high. The table does not have a 658px wide image, but the next image larger than 658px is 672 x 378, and so the browser chooses that as the basis for the DPR calculation (the DPR calculation is{" "}
                <HashLink smooth to="/blog/2025/01/resolution-switching-images-part3#anotherExample">
                  explained below
                </HashLink>
                ):
              </span>
              <span className="note">4.5 x 672 = 3024</span>
              <span className="note">The table does not have an image that is 3024px wide; the next largest image is 3240 x 1822, so the browser downloads that. Nobody can tell the difference between an image at 2x and one at 4x on a 658px x 320px screen, so it would be a smaller hit on the user’s data plan if we could make the browser choose, say, the 2x copy or next largest (2 x 672 = 1344, so the 1368 x 769 copy).</span>
            </p>
            <p>For completeness, all the breakpoints are shown in the table, and as I mentioned above, the breakpoints are a bit arbitrary because of the way I did the grouping. This is a presentation of the technique, and you can use it to create your own list.</p>

            <table className="table table--no-border table--cell-border-dark-no-align">
              <thead className="table--light-blue">
                <tr>
                  <th>Landscape</th>
                  <th>Portrait</th>
                  <th>Size Compressed (kb)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="table--row-color-shadow">
                  <td className="table--center">16:9 (1.777)</td>
                  <td className="table--center">9:16 (0.5625)</td>
                  <td></td>
                </tr>
                <tr>
                  <td>3840 x 2160</td>
                  <td>2160 x 3840</td>
                  <td>&lt; 500</td>
                </tr>
                <tr>
                  <td>3240 x 1822</td>
                  <td>1822 x 3240</td>
                  <td>&lt; 450</td>
                </tr>
                <tr>
                  <td>2960 x 1665</td>
                  <td>1665 x 2960</td>
                  <td>&lt; 400</td>
                </tr>
                <tr>
                  <td>2796 x 1573</td>
                  <td>1573 x 2796</td>
                  <td>&lt; 350</td>
                </tr>
                <tr>
                  <td>2560 x 1440</td>
                  <td>1440 x 2560</td>
                  <td>&lt; 300</td>
                </tr>
                <tr>
                  <td>2379 x 1338</td>
                  <td>1338 x 2379</td>
                  <td>&lt; 285</td>
                </tr>
                <tr>
                  <td>2120 x 1192</td>
                  <td>1192 x 2120</td>
                  <td>&lt; 250</td>
                </tr>
                <tr>
                  <td>1920 x 1080</td>
                  <td>1080 x 1920</td>
                  <td>&lt; 220</td>
                </tr>
                <tr>
                  <td>1852 x 1042</td>
                  <td>1042 x 1852</td>
                  <td>&lt; 210</td>
                </tr>
                <tr>
                  <td>1600 x 900</td>
                  <td>900 x 1600</td>
                  <td>&lt; 190</td>
                </tr>
                <tr>
                  <td>1442 x 811</td>
                  <td>811 x 1442</td>
                  <td>&lt; 160</td>
                </tr>
                <tr>
                  <td>1368 x 769</td>
                  <td>769 x 1368</td>
                  <td>&lt; 150</td>
                </tr>
                <tr>
                  <td>1290 x 726</td>
                  <td>726 x 1290</td>
                  <td>&lt; 140</td>
                </tr>
                <tr>
                  <td>1180 x 664</td>
                  <td>664 x 1180</td>
                  <td>&lt; 120</td>
                </tr>
                <tr>
                  <td>960 x 540</td>
                  <td>540 x 960</td>
                  <td>&lt; 90</td>
                </tr>
                <tr>
                  <td>896 x 504</td>
                  <td>504 x 896</td>
                  <td>&lt; 85</td>
                </tr>
                <tr>
                  <td>768 x 432</td>
                  <td>432 x 768</td>
                  <td>&lt; 65</td>
                </tr>
                <tr>
                  <td>672 x 378</td>
                  <td>378 x 672</td>
                  <td>&lt; 50</td>
                </tr>
                <tr>
                  <td>608 x 342</td>
                  <td>342 x 608</td>
                  <td>&lt; 45</td>
                </tr>
                <tr>
                  <td>432 x 243</td>
                  <td>243 x 432</td>
                  <td>&lt; 35</td>
                </tr>
                <tr>
                  <td>393 x 221</td>
                  <td>221 x 393</td>
                  <td>&lt; 30</td>
                </tr>
                <tr>
                  <td>360 x 202</td>
                  <td>202 x 360</td>
                  <td>&lt; 25</td>
                </tr>
                <tr>
                  <td>320 x 180</td>
                  <td>180 x 320</td>
                  <td>&lt; 20</td>
                </tr>
                <tr className="table--row-color-shadow">
                  <td className="table--center">3:2 (1.5)</td>
                  <td className="table--center">2:3 (0.666)</td>
                  <td></td>
                </tr>
                <tr>
                  <td>3840 x 2560</td>
                  <td>2560 x 3840</td>
                  <td>&lt; 500</td>
                </tr>
                <tr>
                  <td>3240 x 2160</td>
                  <td>2160 x 3240</td>
                  <td>&lt; 450</td>
                </tr>
                <tr>
                  <td>2960 x 1973</td>
                  <td>1973 x 2960</td>
                  <td>&lt; 400</td>
                </tr>
                <tr>
                  <td>2796 x 1864</td>
                  <td>1864 x 2796</td>
                  <td>&lt; 350</td>
                </tr>
                <tr>
                  <td>2560 x 1707</td>
                  <td>1707 x 2560</td>
                  <td>&lt; 300</td>
                </tr>
                <tr>
                  <td>2379 x 1586</td>
                  <td>1586 x 2379</td>
                  <td>&lt; 285</td>
                </tr>
                <tr>
                  <td>2120 x 1413</td>
                  <td>1413 x 2120</td>
                  <td>&lt; 250</td>
                </tr>
                <tr>
                  <td>1920 x 1280</td>
                  <td>1280 x 1920</td>
                  <td>&lt; 220</td>
                </tr>
                <tr>
                  <td>1852 x 1235</td>
                  <td>1235 x 1852</td>
                  <td>&lt; 210</td>
                </tr>
                <tr>
                  <td>1600 x 1067</td>
                  <td>1067 x 1600</td>
                  <td>&lt; 190</td>
                </tr>
                <tr>
                  <td>1442 x 961</td>
                  <td>961 x 1442</td>
                  <td>&lt; 160</td>
                </tr>
                <tr>
                  <td>1368 x 912</td>
                  <td>912 x 1368</td>
                  <td>&lt; 150</td>
                </tr>
                <tr>
                  <td>1290 x 860</td>
                  <td>860 x 1290</td>
                  <td>&lt; 140</td>
                </tr>
                <tr>
                  <td>1180 x 787</td>
                  <td>787 x 1180</td>
                  <td>&lt; 120</td>
                </tr>
                <tr>
                  <td>960 x 640</td>
                  <td>640 x 960</td>
                  <td>&lt; 90</td>
                </tr>
                <tr>
                  <td>896 x 597</td>
                  <td>597 x 896</td>
                  <td>&lt; 85</td>
                </tr>
                <tr>
                  <td>768 x 512</td>
                  <td>512 x 768</td>
                  <td>&lt; 65</td>
                </tr>
                <tr>
                  <td>672 x 448</td>
                  <td>448 x 672</td>
                  <td>&lt; 50</td>
                </tr>
                <tr>
                  <td>608 x 405</td>
                  <td>405 x 608</td>
                  <td>&lt; 45</td>
                </tr>
                <tr>
                  <td>432 x 288</td>
                  <td>288 x 432</td>
                  <td>&lt; 35</td>
                </tr>
                <tr>
                  <td>393 x 262</td>
                  <td>262 x 393</td>
                  <td>&lt; 30</td>
                </tr>
                <tr>
                  <td>360 x 240</td>
                  <td>240 x 360</td>
                  <td>&lt; 25</td>
                </tr>
                <tr>
                  <td>320 x 213</td>
                  <td>213 x 320</td>
                  <td>&lt; 20</td>
                </tr>
                <tr className="table--row-color-shadow">
                  <td className="table--center">4:3 (1.333)</td>
                  <td className="table--center">3:4 (0.75)</td>
                  <td></td>
                </tr>
                <tr>
                  <td>3840 x 2880</td>
                  <td>2880 x 3840</td>
                  <td>&lt; 500</td>
                </tr>
                <tr>
                  <td>3240 x 2430</td>
                  <td>2430 x 3240</td>
                  <td>&lt; 450</td>
                </tr>
                <tr>
                  <td>2960 x 2220</td>
                  <td>2220 x 2960</td>
                  <td>&lt; 400</td>
                </tr>
                <tr>
                  <td>2796 x 2097</td>
                  <td>2097 x 2796</td>
                  <td>&lt; 350</td>
                </tr>
                <tr>
                  <td>2560 x 1920</td>
                  <td>1920 x 2560</td>
                  <td>&lt; 300</td>
                </tr>
                <tr>
                  <td>2379 x 1784</td>
                  <td>1784 x 2379</td>
                  <td>&lt; 285</td>
                </tr>
                <tr>
                  <td>2120 x 1590</td>
                  <td>1590 x 2120</td>
                  <td>&lt; 250</td>
                </tr>
                <tr>
                  <td>1920 x 1440</td>
                  <td>1440 x 1920</td>
                  <td>&lt; 220</td>
                </tr>
                <tr>
                  <td>1852 x 1389</td>
                  <td>1389 x 1852</td>
                  <td>&lt; 210</td>
                </tr>
                <tr>
                  <td>1600 x 1200</td>
                  <td>1200 x 1600</td>
                  <td>&lt; 190</td>
                </tr>
                <tr>
                  <td>1442 x 1082</td>
                  <td>1082 x 1442</td>
                  <td>&lt; 160</td>
                </tr>
                <tr>
                  <td>1368 x 1026</td>
                  <td>1026 x 1368</td>
                  <td>&lt; 150</td>
                </tr>
                <tr>
                  <td>1290 x 968</td>
                  <td>968 x 1290</td>
                  <td>&lt; 140</td>
                </tr>
                <tr>
                  <td>1180 x 885</td>
                  <td>885 x 1180</td>
                  <td>&lt; 120</td>
                </tr>
                <tr>
                  <td>960 x 720</td>
                  <td>720 x 960</td>
                  <td>&lt; 90</td>
                </tr>
                <tr>
                  <td>896 x 672</td>
                  <td>672 x 896</td>
                  <td>&lt; 85</td>
                </tr>
                <tr>
                  <td>768 x 576</td>
                  <td>576 x 768</td>
                  <td>&lt; 65</td>
                </tr>
                <tr>
                  <td>672 x 504</td>
                  <td>504 x 672</td>
                  <td>&lt; 50</td>
                </tr>
                <tr>
                  <td>608 x 456</td>
                  <td>456 x 608</td>
                  <td>&lt; 45</td>
                </tr>
                <tr>
                  <td>432 x 324</td>
                  <td>324 x 432</td>
                  <td>&lt; 35</td>
                </tr>
                <tr>
                  <td>393 x 295</td>
                  <td>295 x 393</td>
                  <td>&lt; 30</td>
                </tr>
                <tr>
                  <td>360 x 270</td>
                  <td>270 x 360</td>
                  <td>&lt; 25</td>
                </tr>
                <tr>
                  <td>320 x 240</td>
                  <td>240 x 320</td>
                  <td>&lt; 20</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="row_colspan-2"></div>
          <div className="row__colspan-10">
            <h3 className="headline__h3">
              <HashLink to="/blog/2025/01/resolution-switching-images-part3" className="list--toc--a">
                Next: Part 3
              </HashLink>
            </h3>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default BlogJan2025_ResSwitching2
