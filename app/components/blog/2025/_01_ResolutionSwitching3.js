import React, { useContext, useEffect, useRef } from "react"
import Page from "../../Page"
import DispatchContext from "../../../DispatchContext"
import StateContext from "../../../StateContext"
import Breadcrumb from "../../Breadcrumb"
import { HashLink } from "react-router-hash-link"
import { useLocation } from "react-router-dom"
import GTag from "../../GTag"
import GStructuredData from "../../GStructuredData"

function BlogJan2025_ResSwitching3() {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)
  const location = useLocation()

  appState.backgroundStyle == "light" ? (document.body.classList.remove("dark"), document.body.classList.add("light")) : (document.body.classList.remove("light"), document.body.classList.add("dark"))

  useEffect(() => {
    appDispatch({ type: "backgroundStyleChange", color: "light" })
    appDispatch({ type: "selectMenu", selectedMenu: "2025" })
    appDispatch({ type: "menuActiveCategory", menuActiveCategory: "1" })
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

  const breadcrumbs = [
    { id: 0, toText: "Home", toUrl: "/" },
    { id: 1, toText: "Blog", toUrl: "/blog" },
    { id: 2, toText: "2025", toUrl: "/blog/2025" },
    { id: 3, toText: "Choosing ...Part 1", toUrl: "/blog/2025/01/resolution-switching-images" },
    { id: 4, toText: "Choosing ...Part 2", toUrl: "/blog/2025/01/resolution-switching-images-part2" },
    { id: 5, toText: "Choosing Resolution Switching Breakpoints - Part 3", toUrl: "" }
  ]

  return (
    <Page title="Choosing Resolution Switching Breakpoints Part 2">
      <GTag></GTag>
      <GStructuredData type="BlogPosting" datePublished="2025-03-20T08:01:24-07:00" dateModified="2025-11-10T14:20:04-08:00" headline="Choosing Resolution Switching Breakpoints for Responsive Images Part 3"></GStructuredData>
      <meta name="description" content="An analysis of device sizes is used to determine the breakpoints for resolution switching of images in a responsive design" />
      <div className="wrapper wrapper__article">
        <Breadcrumb breadcrumbs={breadcrumbs} />
        <h1 className="headline__h1-cg">Choosing Resolution Switching Breakpoints - Part 3</h1>
        <div className="headline__author">Gregory Swanson | Updated November 10, 2025</div>
        <div className="row row--gutters">
          <div className="row__colspan-4">
            <h2 className="headline__h2-contents">Contents</h2>
            <ul className="list--ul">
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
          <div className="row__colspan-8" id="portraitSizes">
            <h3 className="headline__h3">Sizes for Portrait Orientation</h3>
            <p className="dropCap">
              While images in landscape orientation displayed full screen should have <code>sizes</code> set to 100vw, images that have a portrait orientation must use a max-height media query in the <code>sizes</code> attribute. The max-height media query allows you to tell the browser to use an image of a specific width when the viewport is up to a certain height.
            </p>
          </div>

          <div className="row__colspan-4" id="portraitSizes"></div>
          <div className="row__colspan-8">
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
              <HashLink smooth to="/blog/2025/01/resolution-switching-images#ideasPerfBudget">
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
              When saving images and perhaps converting them to a newer format such as WEBP, compression must be adjusted to get the size within the range indicated in the table above (see
              <HashLink smooth to="/blog/2025/01/resolution-switching-images-part2#tblImageSizes">
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

export default BlogJan2025_ResSwitching3
