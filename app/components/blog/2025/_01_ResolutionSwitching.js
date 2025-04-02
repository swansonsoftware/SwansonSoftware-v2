import React, { useContext, useEffect, useRef } from "react"
import Page from "../../Page"
import DispatchContext from "../../../DispatchContext"
import StateContext from "../../../StateContext"
import Breadcrumb from "../../Breadcrumb"
import ImageBlock from "../../ImageBlock"
import ImageLightboxOverlay from "../../ImageLighboxOverlay"
import { HashLink } from "react-router-hash-link"
import GTag from "../../GTag"
import GStructuredData from "../../GStructuredData"

function BlogJan2025_ResSwitching() {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)
  const selectedImage = useRef(null)

  appState.backgroundStyle == "light" ? (document.body.classList.remove("dark"), document.body.classList.add("light")) : (document.body.classList.remove("light"), document.body.classList.add("dark"))

  useEffect(() => {
    appDispatch({ type: "backgroundStyleChange", color: "light" })
  }, [])

  const images = [{ id: 1, lazy: false, src: "../../../../assets/images/blog/2025/_01_sbgs-example-thumbnail.webp", width: "320", height: "213", alt: "Developer console of browser showing a small image displayed but is 30.6 Mb in size", dataOrientation: "", dataPortraitsizes: "", captionHeading: "", caption: "A 30 Mb image is used, even for a 320px wide mobile phone screen. This is a thoughtless waste of the user’s data plan, and it takes several seconds for the image to appear.", dataSrcset: "320=320x213;360=360x240;393=393x262;432=432x288;608=608x405;672=672x448;768=768x512;896=896x597;960=960x640" }]

  return (
    <Page title="Choosing Resolution Switching Breakpoints">
      <ImageLightboxOverlay />
      <GTag></GTag>
      <GStructuredData type="BlogPosting" datePublished="2025-03-20T08:01:24-07:00" dateModified="2025-03-25T09:20:18-07:00" headline="Choosing Resolution Switching Breakpoints for Responsive Images"></GStructuredData>
      <meta name="description" content="An analysis of device sizes is used to determine the breakpoints for resolution switching of images in a responsive design" />
      <div className="wrapper wrapper__article">
        <Breadcrumb to="/blog/2025" linktext="Blog List 2025" />
        <h1 className="headline__h1-cg">Choosing Resolution Switching Breakpoints</h1>
        <div className="headline__author">Gregory Swanson | March 25, 2025</div>
        <div className="row row--gutters">
          <div className="row__colspan-4">
            <h2 className="headline__h2-contents">Contents</h2>
            <ul className="list--ul">
              <li className="list list--toc">
                <HashLink to="#ideasForChoosingBrkpts" className="list--toc--a">
                  Ideas for Choosing Breakpoints
                </HashLink>
                <ul>
                  <li className="list list--toc">
                    <HashLink to="#ideasPerfBudget" className="list--toc--a">
                      A Performance Budget
                    </HashLink>
                  </li>
                  <li className="list list--toc">
                    <HashLink to="#ideasMediaCondition" className="list--toc--a">
                      Media Condition
                    </HashLink>
                  </li>
                </ul>
              </li>
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
                <HashLink to="#portraitSizes" className="list--toc--a">
                  Sizes for Portrait Orientation
                </HashLink>
              </li>
              <li className="list list--toc">
                <HashLink to="#dprAndSizes" className="list--toc--a">
                  DPR and Sizes
                </HashLink>
              </li>
              <li className="list list--toc">
                <HashLink to="#compressingImgs" className="list--toc--a">
                  Compressing Images
                </HashLink>
              </li>
              <li className="list list--toc">
                <HashLink to="#automation" className="list--toc--a">
                  Automation
                </HashLink>
              </li>
              <li className="list list--toc">
                <HashLink to="#refs" className="list--toc--a">
                  References
                </HashLink>
              </li>
            </ul>
          </div>
          <div className="row__colspan-8">
            <p className="dropCap">The question of how many breakpoints are needed and how to choose them comes up a lot when creating a responsive design that includes resolution switching of images. This post describes a technique based on an analysis of device sizes as one way to answer the question and summarizes a few other ideas for choosing breakpoints.</p>
            <p>For the album on this website, I have photos that display as a 320px wide thumbnail for preview, and when the user selects the image, a larger size will appear that fills the screen as best as possible depending on screen dimensions and the aspect ratio of the image. The goal is to optimize the image size for desktop and laptop screens as well as for tablets and mobile phones. I will cover images in both landscape and portrait orientation.</p>
          </div>
          <div className="row__colspan-4">
            <h3 className="headline__h3">Ouch! Don't do that!</h3>
            <ImageBlock key={images[0].id} image={images[0]}></ImageBlock>
          </div>
          <div className="row__colspan-8">
            <p>
              When we put an image on a webpage, if we only provide a single full-size image, say one that looks good when the page is viewed on our desktop monitor, then users who view the page on a smaller mobile device must download the large image. That wastes their bandwidth and uses up their data plan. However, if we only provide a smaller image that looks good when viewed on a smaller device it might look grainy when viewed on a desktop monitor. To solve this, we need a responsive image design where we provide copies of the image in different sizes so the browser can choose an appropriate image size for the user’s screen. We indicate the copies we have provided with the image tag’s <code>srcset</code> attribute, and we use the <code>sizes</code> attribute to provide hints to the browser about which copy we want it to use based on screen size.
            </p>
            <p>
              Although the <code>srcset</code> and <code>sizes</code> attributes are relatively new, support is now widespread and we can use them to provide a set of images; however, we need to have an idea of the image sizes to provide, and at what points (breakpoints) the browser should choose between images (resolution switching).
            </p>

            <p className="note">
              <span className="headline__h3">What is a breakpoint?</span>
              <br></br>In the context of resolution switching of images, a breakpoint is a viewport width at which the image source changes to better match the display size and resolution. The image sources are specified in the image tag’s <code>srcset</code> attribute, and the breakpoints are indicated with the image tag’s <code>sizes</code> attribute.
            </p>
          </div>
          <div className="row__colspan-4" id="ideasForChoosingBrkpts">
            <h2 className="headline__h2">Ideas for Choosing Breakpoints</h2>
          </div>
          <div className="row__colspan-8">
            <p className="dropCap">We can’t provide an unlimited number of images, for example having breakpoints 1px apart; so, let’s make a rule: if wasted bandwidth means anything larger than the exact size needed, then we accept that there will be some wasted bandwidth, but we try to minimize that.</p>
            <p>While researching this post I came across other ideas for choosing break points. Consider these as they might be appropriate for your situation.</p>
          </div>
          <div className="row__colspan-4">
            <p>
              Jason Grigsby describes this technique in his post{" "}
              <HashLink className="wrapper__article__outbound-link" to="https://cloudfour.com/thinks/responsive-images-101-part-9-image-breakpoints/">
                Responsive Images 101, Part 9: Image Breakpoints – Cloud Four.
              </HashLink>
            </p>
          </div>
          <div className="row__colspan-8" id="ideasPerfBudget">
            <h3 className="headline__h3">Choosing Breakpoints using a Performance Budget</h3>
            <p className="dropCap">
              The idea of using a performance budget to choose breakpoints makes perfect sense: breakpoints occur at intervals, say 20k. Thus, your <code>srcset</code> attribute includes images that differ by about 20k in size.
            </p>
            <p>This may be a solution when you only need a few sizes of the image. I could not make this approach work for images that span a large range of sizes to fit the screen; to summarize what I found:</p>
            <ul>
              <li className="list">
                To generate image copies at 20k intervals, you must resize the image, save it in a compressed format, then check the size and if it’s not 20k smaller (or larger depending on how you’re doing this) then you start over. Unless there is a tool that lets you specify the size to compress to (
                <HashLink className="wrapper__article__outbound-link" to="https://squoosh.app/">
                  Squoosh
                </HashLink>{" "}
                shows a preview of the compressed image and its approximate size but does not support automating via script), you can’t know the compressed size of an image until you compress it, and each image compresses to a different degree based on the complexity of the image, which causes a lot of work, and we want to avoid unnecessary work
              </li>
              <li className="list">
                Tools like Cloudinary.com’s{" "}
                <HashLink className="wrapper__article__outbound-link" to="https://www.responsivebreakpoints.com/">
                  Responsive Image Breakpoints Generator by Cloudinary
                </HashLink>{" "}
                can work if all you need is a small range of sizes. But when the range is large this tool won’t help. Trials with a 5.8 Mb high resolution image generated a package of files where the images for larger screen sizes were much too large (from 500k to over 1Mb) and trials on a compressed copy of the same image produced images for smaller screen sizes that were too grainy
              </li>
              <li className="list">
                A 20 kb performance budget creates nonsensical breakpoints at smaller image sizes, creating big jumps between breakpoints that has consequences related to DPR (<HashLink to="#anotherExample">explained below</HashLink>) if you use the <code>sizes</code> attribute with anything other than the default 100vw
              </li>
            </ul>
          </div>
          <div className="row__colspan-4">
            <p>
              I learned about this from imagekit.io’s post{" "}
              <HashLink className="wrapper__article__outbound-link" to="https://imagekit.io/responsive-images/">
                Responsive Images - A Reference Guide from A to Z
              </HashLink>
            </p>
          </div>
          <div className="row__colspan-8" id="ideasMediaCondition">
            <h3 className="headline__h3">Choosing Breakpoints based on media condition</h3>
            <p className="dropCap">If your webpage follows a responsive column layout using media queries, breakpoints can come from the media queries. For example, a common size range today is:</p>
            <ul>
              <li className="list">Extra-small: up to 500px (mobile devices 320px to 480px)</li>
              <li className="list">Small: 500px to 1200px (tablets from about 481px to 768px and in landscape at 1024px)</li>
              <li className="list">Medium: 1200px to 1400px (smaller laptops)</li>
              <li className="list">Large: 1400px and larger (larger laptops and desktops from 1280px)</li>
            </ul>
            <p>
              Based on the common size range, we might use the following breakpoints: 480px, 768px, 1024px, and 1280px. The image <code>srcset</code> includes copies at 320px wide, 480px wide, 768px wide, 1024px wide, and 1280px wide. The image tag’s <code>sizes</code> attribute might be:
            </p>

            <p className="code">sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"</p>

            <h4 className="headline__h4">Notes</h4>
            <ul>
              <li className="list">100vw means that the image will take 100% of the screen on devices up to 480px wide; 50vw means it will take up to 50% on devices from 481px to 768px wide; 33vw, 33% on screens from 769px to 1024px wide; and 25vw, 25% on all larger screens.</li>
              <li className="list">
                The vw is viewport width, and in the <code>sizes</code> attribute it gets smaller as the viewport width (max-width) increases because in a responsive column layout the column count increases as the screen width increases and as each column takes a smaller percentage of the viewport width, the column with the image is taking a smaller percentage of the viewport.
              </li>
            </ul>
            <p></p>
            <p>Then considering that most devices today have a DPR of 2 or higher, we have the following image widths, or breakpoints:</p>
            <ul>
              <li className="list">320px</li>
              <li className="list">320 x 2 = 640px</li>
              <li className="list">480px</li>
              <li className="list">480 x 2 = 960px</li>
              <li className="list">768px</li>
              <li className="list">768 x 2 = 1536px</li>
              <li className="list">1024px</li>
              <li className="list">1024 x 2 = 2048px</li>
            </ul>
            <p>
              With this technique you would include images at the above sizes and the previous image <code>srcset</code> should be updated to include the 2x copies at 640px wide, 960px wide, 1536px wide, and 2048px wide. The <code>sizes</code> value can stay the same.
            </p>
            <p>This technique works best if the image is allowed to grow to fit the layout. </p>
          </div>
          <div className="row__colspan-4" id="findingBrkpts">
            <h2 className="headline__h2">Finding Breakpoints Through Analysis of Device Screen Sizes</h2>
          </div>
          <div className="row__colspan-8">
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
            <p>
              To extend this technique for other situations you can use the same images in the{" "}
              <HashLink to="#tblImageSizes" className="list--toc--a">
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
                To illustrate, take a device like the Samsung Galaxy S9 that has DPR 4.5. Create a webpage with an image that has a <code>srcset</code> with all the image sizes from the table and <code>sizes="100vw"</code>, rotate the device so the long side is horizontal, then load the page in the device’s browser. The screen size is 658px wide by 320px high. The table does not have a 658px wide image, but the next image larger than 658px is 672 x 378, and so the browser chooses that as the basis for the DPR calculation (the DPR calculation is <HashLink to="#anotherExample">explained below</HashLink>):
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
          <div className="row__colspan-4" id="portraitSizes">
            <h2 className="headline__h2">Sizes for Portrait Orientation</h2>
          </div>
          <div className="row__colspan-8">
            <p className="dropCap">
              While images in landscape orientation displayed full screen should have <code>sizes</code> set to 100vw, images that have a portrait orientation must use a max-height media query in the <code>sizes</code> attribute. The max-height media query allows you to tell the browser to use an image of a specific width when the viewport is up to a certain height.
            </p>
            <p>
              The <code>sizes</code> for 3:4 (portrait) based on the above table is:
            </p>
            <p className="code">sizes="(max-height: 320px) 240px,(max-height: 360px) 270px,(max-height: 393px) 295px,(max-height: 432px) 324px,(max-height: 608px) 456px,(max-height: 672px) 504px,(max-height: 768px) 576px,(max-height: 896px) 672px,(max-height: 960px) 720px,(max-height: 1180px) 885px,(max-height: 1290px) 968px,(max-height: 1368px) 1026px,(max-height: 1442px) 1082px,(max-height: 1600px) 1200px,(max-height: 1852px) 1389px,(max-height: 1920px) 1440px,(max-height: 2120px) 1590px,(max-height: 2379px) 1784px,(max-height: 2560px) 1920px,(max-height: 2796px) 2097px,(max-height: 2960px) 2220px,(max-height: 3240px) 2430px,(max-height: 3840px) 2880px,2880px"</p>
            <p className="note dropCapNote">
              <span className="note">We are simply reversing the values from the portrait size to construct the media query.</span>
              <span className="note">
                For example, 720x960 <code>-&gt;</code> (max-height: 960px) 720px
              </span>
            </p>
            <p>
              To illustrate how this works, let’s say we have a standard 1920 x 1080 monitor, and we have a webpage with an image in 3:4 (portrait) orientation, with <code>srcset</code> that includes all the images in the table for 3:4, and a <code>sizes</code> attribute as shown above. When we view the image full screen, the media query <code>(max-height: 1180px) 885px</code> will come into play because the viewport is 1080px high, and the browser downloads the 885x1180 image.
            </p>
            <p>Using the developer console, we can enable device emulation and see what happens when we view the webpage on an iPhone 12 Pro with screen size 390w x 844h and DPR 3.0.</p>
            <p className="note">
              If you try this, be sure to disable caching in the developer console.<br></br>
              <br></br>In this test I used Chrome on Windows 10 and while the emulator is not a real device, my tests show identical results on a real iPhone, as well as with emulators in other browsers.
            </p>
            <p>
              Which image should be downloaded? 3 x 844 = 2532, so you might reasonably assume that the media query <code>(max-height: 2560px) 1920px</code> comes into play, and the 1920x2560 image should be downloaded. But it is not, the 2097x2796 is downloaded. Why? Because when <code>sizes</code> is present, the DPR calculation is not based on the screen size, it is based on the media query specified in the <code>sizes</code> attribute that is equal to or larger than the device screen size.
            </p>
            <p className="note">
              ..."when <code>sizes</code> is present, the DPR calculation is not based on the screen size, it is based on the media query specified in the <code>sizes</code> attribute that is equal to or larger than the device screen size."
            </p>
            <p>
              In this case the table above shows that we don’t have an image 844x390 (and our <code>srcset</code> is based on the table), and the next largest is 885x1180. Thus, the calculation is 885 x 3 = 2655, and the media query that comes into play is <code>(max-height: 2796px) 2097px</code>.
            </p>
            <p>More on this in the next topic, DPR and Sizes.</p>
          </div>
          <div className="row__colspan-4" id="dprAndSizes">
            <h2 className="headline__h2">DPR and Sizes</h2>
          </div>
          <div className="row__colspan-8">
            <h3 className="headline__h3 headline__h3--xtra-pad">
              Be careful when specifying <code>sizes</code>
            </h3>
            <p className="dropCap">
              When an image displays full screen it is overkill to specify anything other than 100vw for the <code>sizes</code> attribute and specifying anything other than 100vw may cause the browser to download a different image than you expect. (An exception to this is when the image is in portrait orientation with height larger than width, as described in the previous section Sizes for Portrait Orientation.) For example, take an iPad Air 5th generation, with screen width 820px and DPR 2.0.
            </p>
            <p className="note">
              <span className="headline__h3">What is DPR?</span>
              <br></br>
              DPR, or Device Pixel Ratio, also known as CSS pixel ratio, is the number of physical pixels that make up a CSS pixel in one direction of a screen (width or height). Higher resolution devices have a higher DPR.
            </p>
            <p>
              Assume that you have a <code>srcset</code> with 4 images: a small image for small screens, a 2x copy of that for screens with DPR 2, a large copy for desktops at 1920x1080, and an extra-large 2x copy of that for 4k screens at 3840x2160. Your <code>srcset</code> is:
            </p>

            <p className="code">srcset="640.webp 640w, 1280.webp 1280w, 1920.webp 1920w, 3840.webp 3840w"</p>

            <p>
              You include the following <code>sizes</code> attribute:
            </p>

            <p className="code">sizes="(max-width: 640px) 640px, (max-width: 1280px) 1280px, (max-width: 1920px) 1920px, (max-width: 3840px) 3840px"</p>
            <p className="note dropCapNote">
              Specifying <code>sizes</code> in this way is redundant. Instead, you should specify <code>sizes="100vw"</code>. If instead you want to instruct the browser to use a 1x or 2x image based on the screen size and device DPR you can do this: <code>sizes="(max-width: 640px) 1x, (max-width: 1280px) 2x, (max-width: 1920px) 1x, (max-width: 3840) 2x, 1x"</code>
            </p>
            <p>Seems benign, right? Because the iPad’s screen width is 820px, the media query (max-width: 1280px) 1280px comes into play.</p>
          </div>

          <div className="row__colspan-4">
            <p>
              I believe this is related to the dynamic x descriptors that Eric Portis mentioned in his blog{" "}
              <HashLink className="wrapper__article__outbound-link" to="https://observablehq.com/@eeeps/w-descriptors-and-sizes-under-the-hood">
                w descriptors and sizes: Under the hood.
              </HashLink>{" "}
            </p>
          </div>
          <div className="row__colspan-8">
            <p>
              Because DPR = 2, the image that the browser selects to download is 3840.webp, because 2 x 1280 = 2560, and because the <code>sizes</code> attribute indicates that everything between 1920px and 3840px should use the 3840px image. If instead you set <code>sizes</code> to 100vw then the browser will base the DPR calculation on screen width:
            </p>
            <p>2 x 820 = 1640</p>
            <p>
              And because <code>srcset</code> does not include a 1640px wide image the browser chooses the next largest image which is 1920px.
            </p>
            <h3 className="headline__h3 headline__h3--xtra-pad" id="anotherExample">
              Another Example
            </h3>
            <p>
              Let’s say you have a set of images that you want to display at 320px on small devices, 672px on small devices with retina screens, at 768px on larger tablets, and at 896px on larger monitors. Your <code>srcset</code> is:
            </p>
            <p className="code">srcset="img-320.webp 320w, img-672.webp 672w, img-768.webp 768w, img-896.webp 896w"</p>
            <p>
              and your <code>sizes</code> is:
            </p>
            <p className="code">sizes="(max-width: 320px) 320px, (max-width: 672px) 672px, (max-width: 768px) 768px, 896px"</p>
            <p>
              You test on a 360px wide, DPR 2 device and find that the 896px image is downloaded but you expected a smaller image. What’s going on? Remember that when <code>sizes</code> is present, the DPR calculation is not based on the screen size, it is based on the media query specified in the <code>sizes</code> attribute that is equal to or larger than the device screen size (mentioned in the previous section, Sizes for Portrait Orientation). In this case, the screen size is 360px and the media query equal to or larger is <code>(max-width: 672px) 672px</code>, and max-width x DPR (672 x 2) is 1344px. There is no 1344px wide image, the next largest image is 896px so the browser downloads that.
            </p>
            <p>How can we fix it? With a screen width of 360px and DPR 2, the best we can hope for is to create a media query that will make the browser download the 768px wide image. The 672px image is out of the question because 672 / DPR = 336, which is smaller than the device’s 360px wide screen. </p>
            <p>
              If you really want the smaller 768px image to download you are going to need to provide a copy between about 360px and (768 / DPR =) 384px. Remember the warning about “creating nonsensical breakpoints at smaller image sizes, creating big jumps between breakpoints that has consequences related to DPR” in the section{" "}
              <HashLink to="#ideasPerfBudget" className="list--toc--a">
                Choosing Breakpoints using a Performance Budget
              </HashLink>
              , this is what I was referring to. The difference between compressed images at 320px and 384px will usually if not always be less than 20k. At any rate, as a simple test just add a media query for 380px to the <code>sizes</code>, we can forego creating another image for this test:
            </p>
            <p className="code">sizes="(max-width: 320px) 320px, (max-width: 380px) 380px, (max-width: 672px) 672px, (max-width: 768px) 768px, 896px"</p>
            <p>This works, the browser downloads the smaller 768px image.</p>
            <p>I have checked this behavior and found that it’s the same in Chrome, Edge, and Firefox browsers on Windows 10, and in Safari on an iPad Air 5th generation and iPhone 12.</p>

            <p className="note">
              <b>Note:</b> When using srcset with width descriptors the sizes attribute must be present. While the value will default to 100vw if sizes is not present with srcset, and browsers appear to work fine without it, HTML validators will show an error.
            </p>
          </div>

          <div className="row__colspan-4" id="compressingImgs">
            <h2 className="headline__h2">Compressing Images</h2>
          </div>
          <div className="row__colspan-8">
            <p className="dropCap">
              When saving images and perhaps converting them to a newer format such as WEBP, compression must be adjusted to get the size within the range indicated in the table above (see{" "}
              <HashLink to="#tblImageSizes" className="list--toc--a">
                Table of Image Sizes
              </HashLink>
              . Two factors affect how much compression is needed:
            </p>
            <ol>
              <li className="list">Smaller images compress more easily than larger images</li>
              <li className="list">Given the same compression factor and image size, an image with less visual diversity compresses to a smaller size than an image with more visual diversity</li>
            </ol>
            <p>Because of these factors, it is necessary to use a sliding compression factor scale that varies both by the image's size and visual diversity. I have not found a tool that can automate this, although it might be possible with Adobe Photoshop (see the next section, Automation).</p>
          </div>

          <div className="row__colspan-4" id="automation">
            <h2 className="headline__h2">Automation</h2>
          </div>
          <div className="row__colspan-8">
            <h3 className="headline__h3 headline__h3--xtra-pad">Automating Image Generation</h3>
            <p className="dropCap">Creating so many images to provide optimized resolution switching is not really feasible unless you can automate the task. Some image editing applications such as Corel PaintShop and Adobe Photoshop have a recording capability, where you record while performing these operations on an image, creating a resized copy for each image size you need, then save the recording as a script that can be played back. The recording must be edited to make it generic.</p>
            <p>PaintShop's scripts are recorded (or written) in the Python language. Unfortunately, Corel's PaintShop does not let you choose a compression factor while saving in WEBP format, but Adobe's PhotoShop does.</p>
          </div>
          <div className="row__colspan-4" id="refs">
            <h3 className="headline__h3">References</h3>
          </div>
          <div className="row__colspan-8">
            <p>I used a lot of online resources when researching for this post and I would like to thank:</p>
            <p>
              Chris Coyier:{" "}
              <HashLink className="wrapper__article__outbound-link" to="https://css-tricks.com/a-guide-to-the-responsive-images-syntax-in-html/">
                HTML Responsive Images Guide | CSS-Tricks
              </HashLink>{" "}
            </p>
            <p>
              Jason Grigsby:{" "}
              <HashLink className="wrapper__article__outbound-link" to="https://cloudfour.com/thinks/responsive-images-101-part-9-image-breakpoints/">
                Responsive Images 101, Part 1: Definitions – Cloud Four
              </HashLink>{" "}
            </p>
            <p>
              Eric Portis{" "}
              <HashLink className="wrapper__article__outbound-link" to="https://observablehq.com/@eeeps/w-descriptors-and-sizes-under-the-hood">
                w descriptors and sizes: Under the hood
              </HashLink>
            </p>
            <p>
              <HashLink to="https://imagekit.io/responsive-images/">ImageKit.io: Responsive Images - A Reference Guide from A to Z | ImageKit.io</HashLink>
            </p>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default BlogJan2025_ResSwitching
