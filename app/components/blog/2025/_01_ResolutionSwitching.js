import React, { useContext, useEffect, useRef } from "react"
import Page from "../../Page"
import DispatchContext from "../../../DispatchContext"
import StateContext from "../../../StateContext"
import Breadcrumb from "../../Breadcrumb"
import ImageBlock from "../../ImageBlock"
import ImageLightboxOverlay from "../../ImageLighboxOverlay"
import { HashLink } from "react-router-hash-link"
import { useLocation } from "react-router-dom"
import GTag from "../../GTag"
import GStructuredData from "../../GStructuredData"

function BlogJan2025_ResSwitching() {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)
  const selectedImage = useRef(null)
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

  const images = [{ id: 1, lazy: false, src: "../../../../assets/images/blog/2025/_01_sbgs-example-thumbnail.webp", width: "320", height: "213", alt: "Developer console of browser showing a small image displayed but is 30.6 Mb in size", dataOrientation: "", dataPortraitsizes: "", captionHeading: "", caption: "A 30 Mb image is used, even for a 320px wide mobile phone screen. This is a thoughtless waste of the user’s data plan, and it takes several seconds for the image to appear.", dataSrcset: "320=320x213;360=360x240;393=393x262;432=432x288;608=608x405;672=672x448;768=768x512;896=896x597;960=960x640" }]

  return (
    <Page title="Choosing Resolution Switching Breakpoints">
      <ImageLightboxOverlay />
      <GTag></GTag>
      <GStructuredData type="BlogPosting" datePublished="2025-03-20T08:01:24-07:00" dateModified="2025-05-30T08:31:00-07:00" headline="Choosing Resolution Switching Breakpoints for Responsive Images"></GStructuredData>
      <meta name="description" content="An analysis of device sizes is used to determine the breakpoints for resolution switching of images in a responsive design" />
      <div className="wrapper wrapper__article">
        <Breadcrumb to="/blog/2025" linktext="Blog List 2025" />
        <h1 className="headline__h1-cg">Choosing Resolution Switching Breakpoints</h1>
        <div className="headline__author">Gregory Swanson | Updated May 30, 2025</div>
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
                <HashLink to="/blog/2025/01/resolution-switching-images-part2" className="list--toc--a">
                  Next: Part 2
                </HashLink>
              </li>
            </ul>
          </div>
          <div className="row__colspan-8">
            <h3 className="headline__h3">Part 1 of 3</h3>
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
                A 20 kb performance budget creates nonsensical breakpoints at smaller image sizes, creating big jumps between breakpoints that has consequences related to DPR (
                <HashLink smooth to="/blog/2025/01/resolution-switching-images-part3#anotherExample">
                  explained below
                </HashLink>
                ) if you use the <code>sizes</code> attribute with anything other than the default 100vw
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

          <div className="row_colspan-2"></div>
          <div className="row__colspan-10" id="ideasMediaCondition">
            <h3 className="headline__h3">
              <HashLink to="/blog/2025/01/resolution-switching-images-part2" className="list--toc--a">
                Next: Part 2
              </HashLink>
            </h3>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default BlogJan2025_ResSwitching
