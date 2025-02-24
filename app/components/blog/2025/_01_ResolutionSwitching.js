import React, { useContext, useEffect, useRef } from "react"
import Page from "../../Page"
import DispatchContext from "../../../DispatchContext"
import StateContext from "../../../StateContext"
import Breadcrumb from "../../Breadcrumb"
import ImageBlock from "../../ImageBlock"
import OverlayOpener from "../../../assets/scripts/modules/OverlayOpener"
import ImageLightboxOverlay from "../../ImageLighboxOverlay"
import { HashLink } from "react-router-hash-link"

function BlogJan2025_ResSwitching() {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)
  const selectedImage = useRef(null)

  appState.backgroundStyle == "light" ? (document.body.classList.remove("dark"), document.body.classList.add("light")) : (document.body.classList.remove("light"), document.body.classList.add("dark"))

  useEffect(() => {
    appDispatch({ type: "backgroundStyleChange", color: "light" })
  }, [])

  function GetSelectedImage() {
    return selectedImage.current
  }

  function FindButtonElement(obj) {
    let node = obj,
      i = 0
    if (node.nodeName != "BUTTON") {
      do {
        i++
        node = node.parentElement
        if (!node) {
          return null
        }
        if (i > 10) {
          return null
        }
      } while (node.nodeName != "BUTTON")
    }

    return node
  }

  function OpenOverlay(e, image) {
    if (e.code == "Enter" || e.type == "click") {
      selectedImage.current = FindButtonElement(e.target)

      let opener = new OverlayOpener(e, image)
      opener.openOverlay()
    }
  }

  function GenerateDate() {
    //generates format like 2025-01-19T09:56:01-08:00
    //                      2025-01-19T08:00:00-08:00
    let date = new Date()
    var tzo = -date.getTimezoneOffset(),
      dif = tzo >= 0 ? "+" : "-",
      pad = function (num) {
        return (num < 10 ? "0" : "") + num
      }

    return date.getFullYear() + "-" + pad(date.getMonth() + 1) + "-" + pad(date.getDate()) + "T" + pad(date.getHours()) + ":" + pad(date.getMinutes()) + ":" + pad(date.getSeconds()) + dif + pad(Math.floor(Math.abs(tzo) / 60)) + ":" + pad(Math.abs(tzo) % 60)
  }

  // var dt = new Date()
  console.log(GenerateDate())

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
    const script = document.createElement("script")
    script.setAttribute("type", "application/ld+json")
    script.setAttribute("id", "structure")
    script.textContent = structuredDataText
    document.head.appendChild(script)
    return () => document.head.removeChild(script)
  }, [])

  const imgborder = {
    border: "1px solid black"
  }

  const images = [{ id: 1, lazy: false, src: "../../../../assets/images/blog/2025/_01_sbgs-example-thumbnail.webp", srcset: "../../../../assets/images/blog/2025/_01_sbgs-example-thumbnail.webp 320w, ../../../../assets/images/blog/2025/_01_sbgs-example-672.webp 672w, ../../../../assets/images/blog/2025/_01_sbgs-example-768.webp 768w, ../../../../assets/images/blog/2025/_01_sbgs-example-960.webp 960w", width: "320", height: "213", alt: "Developer console of browser showing an image displayed at 360 pixels width but is 5712 pixels wide and 30.6 Mb in size", dataOrientation: "", dataPortraitsizes: "", captionHeading: "", caption: "A 30 Mb image is used, even for a 320px wide mobile phone screen. This is a senseless waste of bandwidth, and it takes several seconds for the image to appear.", dataSrcset: "320=320x213;360=360x240;393=393x262;432=432x288;608=608x405;672=672x448;768=768x512;896=896x597;960=960x640", sizes: "(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw" }]

  return (
    <Page title="Choosing Resolution Switching Breakpoints">
      <ImageLightboxOverlay />
      <meta name="description" content="Resolution switching images, choosing breakpoints" />
      <meta name="keywords" content="resolution switching, choosing breakpoints" />
      <div className="wrapper wrapper__article">
        <Breadcrumb to="/blog/2025" linktext="Blog List 2025" />
        <h1 className="headline__h1-cg">Choosing Resolution Switching Breakpoints</h1>
        <div className="headline__author">Gregory Swanson | January 19, 2025</div>
        <div className="row row--gutters">
          <div className="row__colspan-4"></div>
          <div className="row__colspan-8">
            <p>The question of how many breakpoints are needed and how to choose them comes up a lot when doing resolution switching of images for a responsive design. This post describes a technique based on an analysis of device sizes to answer the question.</p>
            <p>For the album on this website, I have photos that display as a 320px wide thumbnail for preview, and when the user selects the image, a larger size will appear that fills the screen as best as it can depending on screen dimensions and the image aspect ratio. The goal is to optimize the image size for desktop and laptop screens as well as for tablets and mobile phones. I will cover images in both landscape and portrait orientation, and three aspect ratios.</p>
          </div>
          <div className="row__colspan-4">
            <h3 className="headline__h3">Don't do what these guys did!</h3>
            <ImageBlock key={images[0].id} image={images[0]}></ImageBlock>
          </div>
          <div className="row__colspan-8">
            <p>When we put an image on a webpage, if we only provide a single full-size image, say one that looks good when the page is viewed on our desktop machine, then users who view the page on a smaller mobile device must download the large image. That wastes their bandwidth and their data plan. However, if we provide a smaller image that looks good when viewed on a smaller device it might look grainy when viewed on a desktop machine. To solve this, we need a responsive image design where we provide copies of the image in different resolutions for the browser to choose from, and we use the image tag’s srcset and sizes attributes to provide hints to the browser.</p>
            <p>Support for these attributes is relatively recent, and now we can use them to provide a set of images; however, we need to have an idea of the image sizes to provide, and at what points (breakpoints) the browser should choose between images (resolution switching).</p>
            <hr></hr>
            <h3 className="headline__h3">What is a breakpoint?</h3>
            <p>In the context of resolution switching of images, a breakpoint is a viewport width at which the image source changes to better match the display size and resolution. The image sources are specified in the image tag’s srcset attribute.</p>
            <hr></hr>
            <p>We can’t provide an unlimited number of images, for example having breakpoints 1px apart; if wasted bandwidth means anything larger than the exact size needed, then we accept that there will be some wasted bandwidth. </p>
          </div>
          <div className="row__colspan-4">
            <h2 className="headline__h2">Some Ideas for Choosing Breakpoints</h2>
          </div>
          <div className="row__colspan-8">
            <h3 className="headline__h3">Choosing Breakpoints using a Performance Budget</h3>
            <p>The idea of using a performance budget to choose breakpoints makes perfect sense: breakpoints occur at intervals, say 20k. Thus, your srcset attribute includes images that differ by about 20k in size, regardless of the image resolution.</p>
            <p>This could work if the image does not need to fill the screen; you may only need two or three sizes of the image. However, it is not so easy in practice and if the image needs to fit the screen, this approach does not work:</p>
            <ul>
              <li className="list">To generate images at 20k sizes, you must resize the image, save it, then check the size and if it’s not 20k smaller (or larger depending on how you’re doing this) then you start over. You can’t know the compressed size of an image until you compress it, and each image compresses to a different degree based on the complexity of the image, which causes a lot of work and we want to avoid unnecessary work</li>
              <li className="list">Tools like Cloudinary.com’s Responsive Image Breakpoints Generator by Cloudinary can work if all you need is a small range of sizes. But when the range is large this tool won’t help: trials with a 5.8 Mb high resolution image generated a package of files where the images for larger screen sizes were much too large (from 500k to over 1Mb) and the images for smaller screen sizes were so grainy as to be useless</li>
              <li className="list">A 20 k performance budget creates nonsensical breakpoints at smaller image sizes, creating big jumps between breakpoints that has consequences related to DPR (explained below)</li>
            </ul>
            <h3 className="headline__h3">Choosing Breakpoints based on media condition</h3>
            <p>If your webpage follows a responsive column layout using media queries, breakpoints can come from the media queries. For example, a common size range today is:</p>
            <ul>
              <li className="list">Extra-small: up to 500px (mobile devices 320px to 480px)</li>
              <li className="list">Small: 500px to 1200px (tablets from about 481px to 768px and in landscape at 1024px)</li>
              <li className="list">Medium: 1200px to 1400px (smaller laptops)</li>
              <li className="list">Large: 1400px and larger (larger laptops and desktops from 1280px)</li>
            </ul>
            <p>Based on the common size range, we might use the following breakpoints: 480px, 768px, 1024px, and 1280px. If we have a thumbnail size image 320px wide, then the image srcset we would include copies at 480px wide, 768px wide, 1024px wide, and 1280px wide. The image tag’s sizes attribute might be:</p>
            <hr></hr>
            <code>sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"</code>
            <hr></hr>
            <p>Notes:</p>
            <ul>
              <li className="list">The image will take 100% of the screen on devices up to 480px wide, up to 50% on devices from 481px to 768px wide, 33% on screens from 769px to 1024px wide, and 25% on all larger screens.</li>
              <li className="list">The viewport widths become smaller as the max-width increases because the column count is increasing and taking a smaller percentage of the viewport width.</li>
            </ul>
            <p></p>
            <p>Then considering that most devices today have a DPR of 2 or higher, we have the following image widths, or breakpoints:</p>
            <table className="table table--no-border table--cell-border-dark">
              <tbody></tbody>
              <tr>
                <td>320px</td>
              </tr>
              <tr>
                <td>320 x 2 = 640px</td>
              </tr>
              <tr>
                <td>480px</td>
              </tr>
              <tr>
                <td>480 x 2 = 960px</td>
              </tr>
              <tr>
                <td>768px</td>
              </tr>
              <tr>
                <td>768 x 2 = 1536px</td>
              </tr>
              <tr>
                <td>1024px</td>
              </tr>
              <tr>
                <td>1024 x 2 = 2048px</td>
              </tr>
            </table>
            <p>This technique works best if the image is allowed to grow to fit the layout. </p>
          </div>
          <div className="row__colspan-4">
            <h2 className="headline__h2">Finding Breakpoints</h2>
          </div>
          <div className="row__colspan-8">
            <h3 className="headline__h3">Two Cases</h3>
            <p>There are two cases I will cover:</p>
            <ol>
              <li className="list">Images in a landscape orientation show full screen with no sizes attribute specified</li>
              <li className="list">Images in portrait orientation show full screen and each image specified in the srcset attribute has a corresponding size in the sizes attribute, using a media query with max-height</li>
            </ol>
            <h3 className="headline__h3">A List of Device Screen Sizes</h3>
            <p>To approach this in a pragmatic, organized way, we will group devices by their screen size. To illustrate, consider two copies of an image: one that is 412px wide and one that is 430px wide. The difference in file size between the two is not enough to be concerned about, so we might group those. Our grouping is a bit different though, because we consider more sizes as will be shown below.</p>
            <p>Using online sources and the list of devices in a browser’s device emulator (located in the developer console), and ignoring devices more than say 10 years old, a good sampling of screen sizes is:</p>
            <table className="table table--no-border table--cell-border-dark">
              <thead>
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
          <div className="row__colspan-12"></div>
          <div className="row__colspan-4">
            <h3 className="headline__h3">Screen Size Groups</h3>
          </div>
          <div className="row__colspan-8">
            <h3 className="headline__h3">A Grouped List of Screen Sizes</h3>
            <p>From the above table we can create groups by removing duplicates and combining nearby sizes. We will consider all unique portrait and landscape orientation widths because we can expect images of both orientations, and because users can rotate the device and view an image in either orientation.</p>
            <p>Here is the grouping I came up with and it is arbitrary; you could make the grouping more granular, less granular, or specify different values for groups:</p>

            <table className="table table--no-border table--cell-border-dark">
              <thead>
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

          <div className="row__colspan-4">
            <h2 className="headline__h2">The List of Breakpoints</h2>
          </div>
          <div className="row__colspan-8">
            <p>From the above table we have 23 groups, or breakpoints:</p>
            <table className="table table--no-border table--cell-border-dark">
              <thead>
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
          <div className="row__colspan-4">
            <h2 className="headline__h2">Be careful when specifying sizes</h2>
          </div>
          <div className="row__colspan-8">
            <p>When an image displays full screen there is usually no need to include the sizes attribute and including one may cause the browser to download a different image than you expect. (An exception to this is when the image is in portrait orientation with height larger than width. This is covered after the table of image sizes below.) For example, take an iPad Air 5th generation, with screen width 820px and DPR 2.0. Assume that you have 4 images in your source set: a small image for small screens, a 2x copy of that for screens with DPR 2, a large copy for desktops at 1920x1080, and an extra-large 2x copy of that for 4k screens at 3840x2160. Your srcset is:</p>
            <hr></hr>
            <code>srcset=”640.webp 640w, 1280.webp 1280w, 1920.webp 1920w, 3840.webp 3840w”</code>
            <hr></hr>
            <p>You include the following sizes attribute:</p>
            <hr></hr>
            <code>sizes=”(max-width: 640px) 640px, (max-width: 1280px) 1280px, (max-width: 1920px) 1920px, (max-width: 3840px) 3840px”</code>
            <hr></hr>
            <p>Seems benign, right? Because the iPad’s screen width is 820px, the media query (max-width: 1280px) 1280px comes into play. Because DPR = 2, the image that the browser selects to download is 3840.webp, because 2 x 1280 = 2560, and because the srcset does not include a 2560px image. The browser chooses the image next larger in size than 2560 to download. (By the way, if your source set and sizes stopped at 1920 then that file would be downloaded.) If your source set included a 820px image, then the calculation would be 2 x 820 = 1640 and the 1920px image would have been selected by the browser.</p>
          </div>
          <div className="row__colspan-4">
            <h2 className="headline__h2">Table of Image Sizes</h2>
          </div>
          <div className="row__colspan-8">
            <p>The photos we have include three common aspect ratios: 16:9, 4:3, and 3:2. The breakpoints are the same but the image sizes vary. For example, the above table shows a group at 1600px; for aspect ratio 16:9 we have 1600x900, for 4:3 we have 1600x1200, and for 3:2 we have 1600x1067.</p>

            <table className="table table--no-border table--cell-border-dark-no-align">
              <thead>
                <tr>
                  <th>Landscape</th>
                  <th>Portrait</th>
                  <th>Size Compressed (kb)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="table--row-color-shadow">
                  <td colSpan={3} className="table--center">
                    16:9, 9:16 (1.777, 0.5625)
                  </td>
                </tr>
                <tr>
                  <td>3840x2160</td>
                  <td></td>
                  <td>&lt; 500</td>
                </tr>
                <tr>
                  <td>3240 x 1822</td>
                  <td></td>
                  <td>&lt; 450</td>
                </tr>
                <tr>
                  <td>2960 x 1665</td>
                  <td></td>
                  <td>&lt; 400</td>
                </tr>
                <tr>
                  <td>2796 x 1573</td>
                  <td></td>
                  <td>&lt; 350</td>
                </tr>
                <tr>
                  <td>2560 x 1440</td>
                  <td></td>
                  <td>&lt; 300</td>
                </tr>
                <tr>
                  <td>2379 x 1338</td>
                  <td></td>
                  <td>&lt; 285</td>
                </tr>
                <tr>
                  <td>2120 x 1192</td>
                  <td></td>
                  <td>&lt; 250</td>
                </tr>
                <tr>
                  <td>1920 x 1080</td>
                  <td></td>
                  <td>&lt; 220</td>
                </tr>
                <tr>
                  <td>1852 x 1042</td>
                  <td></td>
                  <td>&lt; 210</td>
                </tr>
                <tr>
                  <td>1600 x 900</td>
                  <td></td>
                  <td>&lt; 190</td>
                </tr>
                <tr>
                  <td>1442 x 811</td>
                  <td></td>
                  <td>&lt; 160</td>
                </tr>
                <tr>
                  <td>1368 x 769</td>
                  <td></td>
                  <td>&lt; 150</td>
                </tr>
                <tr>
                  <td>1290 x 726</td>
                  <td></td>
                  <td>&lt; 140</td>
                </tr>
                <tr>
                  <td>1180 x 664</td>
                  <td></td>
                  <td>&lt; 120</td>
                </tr>
                <tr>
                  <td>960 x 540</td>
                  <td></td>
                  <td>&lt; 90</td>
                </tr>
                <tr>
                  <td>896 x 504</td>
                  <td></td>
                  <td>&lt; 85</td>
                </tr>
                <tr>
                  <td>768 x 432</td>
                  <td></td>
                  <td>&lt; 65</td>
                </tr>
                <tr>
                  <td>672 x 378</td>
                  <td></td>
                  <td>&lt; 50</td>
                </tr>
                <tr>
                  <td>608 x 342</td>
                  <td></td>
                  <td>&lt; 45</td>
                </tr>
                <tr>
                  <td>432 x 243</td>
                  <td></td>
                  <td>&lt; 35</td>
                </tr>
                <tr>
                  <td>393 x 221</td>
                  <td></td>
                  <td>&lt; 30</td>
                </tr>
                <tr>
                  <td>360 x 202</td>
                  <td></td>
                  <td>&lt; 25</td>
                </tr>
                <tr>
                  <td>320 x 180</td>
                  <td></td>
                  <td>&lt; 20</td>
                </tr>
                <tr className="table--row-color-shadow">
                  <td colSpan={3} className="table--center">
                    3:2, 2:3 (1.5, 0.666)
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>&lt; </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>&lt; </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>&lt; </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>&lt; </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>&lt; </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row__colspan-4">
            <h2 className="headline__h2">Sizes for Portrait Orientation</h2>
          </div>
          <div className="row__colspan-8">
            <p>Note that for a screen that is 3840 wide by 2560 high, the largest 3:2 portrait image will be 1707w x 2560h.</p>
            <p>While images with a landscape orientation will default to 100vw, images that have a portrait orientation must use a max-height media query.</p>
          </div>

          <div className="row__colspan-4">
            <h2 className="headline__h2">Compressing Images</h2>
          </div>
          <div className="row__colspan-8">
            <h3 className="headline__h3"></h3>
            <p>When converting images to WEBP format the compression is adjusted, when necessary, to get the size within the range indicated in our table. Our compression method is governed by two facts:</p>
            <ol>
              <li className="list">Smaller images require less compression than larger images</li>
              <li className="list">At a particular compression setting, an image with less visual diversity compresses to a smaller size than an image with more visual diversity</li>
            </ol>
            <p>Because of these facts, we use a sliding compression scale where compression is set higher for larger images and lower for smaller images.</p>
          </div>

          <div className="row__colspan-4">
            <h2 className="headline__h2">Automation</h2>
          </div>
          <div className="row__colspan-8">
            <h3 className="headline__h3">Automating Image Generation</h3>
            <p>Creating so many images to provide optimized resolution switching is not really feasible unless you can automate the task. Some image editing applications such as Corel PaintShop and Adobe Photoshop have a recording capability, where you record while performing these operations and save the recording as a script that can be played back. The recording must be edited to make it generic. For example, you make the script operate on a full-size image that is open in the application, resize it, create a new filename based on the new size, save it with the new filename, and repeat the operation in a loop to create a set of files in the sizes you need.</p>
            <p>PaintShop’s scripts are recorded (or written) in the Python language. Unfortunately, Corel’s PaintShop does not let you choose a compression factor while saving in WEBP format, but Adobe’s PhotoShop does.</p>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default BlogJan2025_ResSwitching
