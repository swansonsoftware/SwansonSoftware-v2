import React, { useContext, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import Page from "../../Page"
import DispatchContext from "../../../DispatchContext"
import StateContext from "../../../StateContext"
import Breadcrumb from "../../Breadcrumb"
import { HashLink } from "react-router-hash-link"
import { useLocation } from "react-router-dom"
import Note from "../../Note"
import GTag from "../../GTag"
import GStructuredData from "../../GStructuredData"

function Blog2026_01_WebsiteDesignStandard1() {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)

  appState.backgroundStyle == "light" ? (document.body.classList.remove("dark"), document.body.classList.add("light")) : (document.body.classList.remove("light"), document.body.classList.add("dark"))

  useEffect(() => {
    appDispatch({ type: "backgroundStyleChange", color: "light" })
    appDispatch({ type: "selectMenu", selectedMenu: "2026" })
    appDispatch({ type: "menuActiveCategory", menuActiveCategory: "1" })
    appDispatch({ type: "homePageClass", homePageClass: "page" })
    appDispatch({ type: "scrollTop", scrollTop: true })
    const app = document.getElementById("app")
    if (app) {
      app.focus()
    }
  }, [])

  const breadcrumbs = [
    { id: 0, toText: "Home", toUrl: "/" },
    { id: 1, toText: "Blog", toUrl: "/blog" },
    { id: 2, toText: "2026", toUrl: "/blog/2026" },
    { id: 3, toText: "Part 1: Conventions", toUrl: "" }
  ]

  const notes = [
    { id: 1, listId: "footnote1", noteId: "#note1", text1: "Krug, Steve, 2014. Don't Make Me Think, Revisited: A Common Sense Approach to Web Usability (3rd Edition). New Riders. Chapter 3.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 2, listId: "footnote2", noteId: "#note2", text1: "Krug, 2014, chapter 7.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 3, listId: "footnote3", noteId: "#note3", text1: "Ibid.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 4, listId: "footnote4", noteId: "#note4", text1: "Krug, 2014, chapter 6.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 5, listId: "footnote5", noteId: "#note5", text1: "Krug, 2014, chapter 6.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 6, listId: "footnote6", noteId: "#note6", text1: "Krug, 2014, chapter 6.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 7, listId: "footnote7", noteId: "#note7", text1: "Krug, 2014, chapter 6.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 8, listId: "footnote8", noteId: "#note8", text1: "Krug, 2014, chapter 6.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 9, listId: "footnote9", noteId: "#note9", text1: "Krug, 2014, chapter 6.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 19, listId: "footnote10", noteId: "#note10", text1: "Krug, 2014, chapter 6.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 11, listId: "footnote11", noteId: "#note11", text1: "Firth, Ashley, 2024, Practical Web Accessibility: A Comprehensive Guide to Digital Inclusion, 2nd edition. Apress. Chapter 2.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 12, listId: "footnote12", noteId: "#note12", text1: "Krug, 2014, chapter 3; however, “…there will be cases where things will be clearer if you make them <i>slightly</i> inconsistent. Here’s the rule to keep in mind: CLARITY TRUMPS CONSISTENCY”", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 13, listId: "footnote13", noteId: "#note13", text1: "Krug, 2014, chapter 12; Firth, chapter 2.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 14, listId: "footnote14", noteId: "#note14", text1: "Sizes specified in pixel units blocks adjustments that should occur when users change their device settings, forcing them to use zoom instead (Firth, chapter 3); “…almost every site I go to still fails my three-second accessibility test—increasing the size of type.” Krug, 2014, chapter 12.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 15, listId: "footnote15", noteId: "#note15", text1: "“...low contrast text...was found on 83.6% of the one million most popular website's home pages, making it the most commonly detected accessibility issue.” Firth, chapter 3.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 16, listId: "footnote16", noteId: "#note16", text1: "Krug, 2014, chapter 12; Firth, 2024, chapter 2.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 17, listId: "footnote17", noteId: "#note17", text1: "See ", text1IsLink: false, text1Link: "", text2: "https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/", text2IsLink: true, text2Link: "https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/", text3: "", text3IsLink: false, text3Link: "" }
  ]

  return (
    <Page title="Part 1: Conventions">
      <GTag></GTag>
      <GStructuredData type="BlogPosting" datePublished="2026-05-01T11:19:28-07:00" headline="Elements of a Standard for Website Design"></GStructuredData>
      <meta name="description" content="Conventions for website useability and accessibility, and website design conventions." />
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <div className="wrapper wrapper__article" id="maincontent">
        <h1 className="headline__h1-cg">Part 1: Conventions</h1>
        <h2 className="headline__h2">From the Elements of a Standard for Website Design series</h2>
        <div className="headline__author">Gregory Swanson | Updated May 1, 2026</div>

        <div className="row row--gutters">
          <div className="row__colspan-6">
            <h2 className="headline__h2-contents">Contents</h2>
            <ul className="list--ul">
              <li className="list list--toc">
                <HashLink to="#whofor" className="list--toc--a">
                  Who This Post is For
                </HashLink>
              </li>
              <li className="list list--toc">
                <HashLink to="#conventions" className="list--toc--a">
                  Conventions
                </HashLink>
                <ul>
                  <li className="list list--toc">
                    <HashLink to="#basicAccessibility" className="list--toc--a">
                      Basic Accessibility
                    </HashLink>
                  </li>
                  <li className="list list--toc">
                    <HashLink to="#validatePages" className="list--toc--a">
                      Validate Pages
                    </HashLink>
                  </li>
                </ul>
              </li>
              <li className="list list--toc">
                <HashLink smooth to="#notes" href="#notes" className="list--toc--a">
                  Notes
                </HashLink>
              </li>
            </ul>
          </div>
          <div className="row__colspan-6" id="whofor">
            <p className="dropCap">In this post, I present a vision for a standard on website design. Ideas for this vision come from pioneers and experts in useability and accessibility.</p>
            <ul>
              <li className="list">Part 1: Conventions. Conventions are the elements that should be present in every website and the metaphors used in their presentation, elements that cover basic accessibility, and page validation to ensure there are no errors in the code.</li>
              <li className="list">Part 2: Accessibility. Improving accessibility for users with access needs improves useability for everyone</li>
              <li className="list">Part 3: UI Components. Standard UI (user interface) components for websites.</li>
            </ul>
          </div>
          <div className="row__colspan-4"></div>
          <div className="row__colspan-8">
            <h3 className="headline__h3">Who This Post is For</h3>
            <ul>
              <li className="list">The novice. The novice is not a web developer and needs to make a website and wants to know what common features should be included.</li>
              <li className="list">The self-taught web developer. This web developer has some experience, perhaps significant experience, but is not sure if there are any conventions they don’t know about, or that they know about but have been ignoring and should be using.</li>
              <li className="list">The curious professional. The curious professional web developer has on-the-job web development experience, but when they see an article like this, they can’t resist reading it to see if there is anything they don’t already know, or to see if it misses something important.</li>
            </ul>
          </div>
          <div className="row__colspan-4" id="conventions">
            <h2 className="headline__h2">Conventions</h2>
          </div>
          <div className="row__colspan-8">
            <p className="dropCap">We should agree to a few conventions that every website should follow. These are features that users have come to expect, and they expect them to work in a standard way, because they have seen and used them on many websites.</p>
            <p>Every website should have:</p>
            <ul>
              <li className="list">
                An ID, a.k.a. Logo, in the top left corner{" "}
                <HashLink to="#footnote1" className="footnote" id="note1">
                  <sup>[1]</sup>
                </HashLink>
              </li>
              <li className="list">
                A tagline.{" "}
                <HashLink to="#footnote2" className="footnote" id="note2">
                  <sup>[2]</sup>
                </HashLink>{" "}
                A tagline is a short phrase that summarizes the business or enterprise, it should be right next to the Site ID. A tagline is not a motto, it’s a “value proposition.”
                <HashLink to="#footnote3" className="footnote" id="note3">
                  <sup>[3]</sup>
                </HashLink>{" "}
                Example: fueleconomy.gov (
                <Link className="wrapper__article__outbound" to="https://fueleconomy.gov">
                  https://fueleconomy.gov/
                </Link>
                ), tagline “the official U.S. government source for fuel economy information”
              </li>
              <li className="list">
                “Persistent navigation”, the website’s navigation elements that include the logo, navigation bar, search, and any utilities such as a sign in link and the shopping cart.{" "}
                <HashLink to="#footnote4" className="footnote" id="note4">
                  <sup>[4]</sup>
                </HashLink>
                <ul>
                  <li className="list">
                    The persistent navigation should appear in the same place on every page.{" "}
                    <HashLink to="#footnote5" className="footnote" id="note5">
                      <sup>[5]</sup>
                    </HashLink>
                  </li>
                  <li className="list">
                    The navigation bar is a horizontal bar at top or a vertical bar on the left and has visual indicators to show which menu item is selected, including the top-level category and the sub-menu level(s) if there are any.{" "}
                    <HashLink to="#footnote6" className="footnote" id="note6">
                      <sup>[6]</sup>
                    </HashLink>
                  </li>
                  <li className="list">
                    Breadcrumbs, supplemental to a navigation bar or perhaps instead of a navigation bar on small sites, breadcrumbs indicate where you are on the website, with the current page shown as the last breadcrumb in bold and without a hyperlink and all other breadcrumbs in normal font with a hyperlink, and each breadcrumb separated by a separator, preferably an angle bracket.{" "}
                    <HashLink to="#footnote7" className="footnote" id="note7">
                      <sup>[7]</sup>
                    </HashLink>
                  </li>
                </ul>
              </li>
              <li className="list">
                A search feature if the site is large enough to warrant one{" "}
                <HashLink to="#footnote8" className="footnote" id="note8">
                  <sup>[8]</sup>
                </HashLink>
              </li>
              <li className="list">
                A “Home” button or link
                <HashLink to="#footnote9" className="footnote" id="note9">
                  <sup>[9]</sup>
                </HashLink>
                , preferably in the primary navigation and as the root link in the breadcrumbs
              </li>
              <li className="list">
                A page name on every page
                <HashLink to="#footnote10" className="footnote" id="note10">
                  <sup>[10]</sup>
                </HashLink>
                , displayed at heading level 1, and no other level 1 topic headers on the page{" "}
                <HashLink to="#footnote11" className="footnote" id="note11">
                  <sup>[11]</sup>
                </HashLink>
              </li>
            </ul>
            <p>
              While working out the above conventions for a website, follow standard metaphors for operation and appearance of elements (a couple examples: use a shopping cart for selling products, and use a magnifying glass icon for search)
              <HashLink to="#footnote12" className="footnote" id="note12">
                <sup>[12]</sup>
              </HashLink>{" "}
              because non-standard mechanisms may reduce useability.
            </p>

            <h3 className="headline__h3" id="basicAccessibility">
              Basic Accessibility
            </h3>
            <p className="dropCap">Every website should provide at least the minimum in accessibility features, which are:</p>
            <ul>
              <li className="list">
                A Skip to Content button that is the first button in the tab order, and which appears when a user selects the tab button after the page loads
                <HashLink to="#footnote13" className="footnote" id="note13">
                  <sup>[13]</sup>
                </HashLink>{" "}
                (unless you have a cookie policy popup, in which case the buttons on the popup should be first, followed by the Skip to Content button)
              </li>
              <li className="list">
                Appropriate font size and line spacing specified in relative units{" "}
                <HashLink to="#footnote14" className="footnote" id="note14">
                  <sup>[14]</sup>
                </HashLink>
              </li>
              <li className="list">
                Adequate contrast between text and background{" "}
                <HashLink to="#footnote15" className="footnote" id="note15">
                  <sup>[15]</sup>
                </HashLink>
              </li>
              <li className="list">
                Alt text for images{" "}
                <HashLink to="#footnote16" className="footnote" id="note16">
                  <sup>[16]</sup>
                </HashLink>
              </li>
            </ul>
            <p>
              In addition to the above accessibility features, websites should have good Aria markup or no Aria markup.
              <HashLink to="#footnote17" className="footnote" id="note17">
                <sup>[17]</sup>
              </HashLink>
            </p>

            <h3 className="headline__h3" id="validatePages">
              Validate Pages
            </h3>
            <p className="dropCap">Finally, every page of a website should be tested with the common validators before publishing the site for the first time, and thereafter pages should be tested when making changes to them, and any errors or warnings listed by the validators should be investigated and fixed if possible:</p>
            <ul>
              <li className="list">
                The W3C Markup Validation Service (
                <Link className="wrapper__article__outbound" to="https://validator.w3.org">
                  https://validator.w3.org/
                </Link>
                ) will check your HTML or XHTML markup for issues, and they have other validators for CSS, RSS feeds, etc. Each page of a website should be validated to make sure that there are no missing closing tags and that tags and their properties are used correctly.
              </li>
              <li className="list">
                WAVE Web Accessibility Evaluation Tools (
                <Link className="wrapper__article__outbound" to="https://wave.webaim.org">
                  https://wave.webaim.org/
                </Link>
                ) will check a web page for accessibility issues.
              </li>
              <li className="list">
                Google PageSpeed Insights (
                <Link className="wrapper__article__outbound" to="https://pagespeed.web.dev">
                  https://pagespeed.web.dev/
                </Link>
                ) reports on mobile and desktop performance for a page, such as First Contentful Paint, Cumulative Layout Shift, Time To First Byte, and other metrics.
              </li>
            </ul>

            <div className="note">
              <p className="dropCap">If the website was created using a WYSIWYG tool or content management tool such as WordPress, fixing issues may require changes to the theme.</p>
              <p>The Department of Justice has taken the stance that the Americans with Disabilities Act (ADA) applies to websites.</p>
            </div>
          </div>

          <div className="row__colspan-12 row__margin-bottom-0" id="notes">
            <h3 className="headline__h3">Notes</h3>
          </div>

          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <Note notes={notes} />
          </div>
          <div className="row__colspan-1"></div>
        </div>
      </div>
    </Page>
  )
}
export default Blog2026_01_WebsiteDesignStandard1
