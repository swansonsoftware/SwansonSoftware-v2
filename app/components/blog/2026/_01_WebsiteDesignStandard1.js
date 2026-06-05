import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import Page from "../../Page"
import DispatchContext from "../../../DispatchContext"
import StateContext from "../../../StateContext"
import Breadcrumb from "../../Breadcrumb"
import { HashLink } from "react-router-hash-link"
import Note from "../../Note"
import Footnote from "../../Footnote"
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
    {
      id: 12,
      listId: "footnote12",
      noteId: "#note12",
      text1: (
        <>
          Krug, 2014, chapter 3; however, “…there will be cases where things will be clearer if you make them <i>slightly</i> inconsistent. Here’s the rule to keep in mind: CLARITY TRUMPS CONSISTENCY”
        </>
      ),
      text1IsLink: false,
      text1Link: "",
      text2: "",
      text2IsLink: false,
      text2Link: "",
      text3: "",
      text3IsLink: false,
      text3Link: ""
    },
    { id: 13, listId: "footnote13", noteId: "#note13", text1: "Krug, 2014, chapter 12; Firth, chapter 2.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 14, listId: "footnote14", noteId: "#note14", text1: "Sizes specified in pixel units blocks adjustments that should occur when users change their device settings, forcing them to use zoom instead (Firth, chapter 3); “…almost every site I go to still fails my three-second accessibility test—increasing the size of type.” Krug, 2014, chapter 12.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 15, listId: "footnote15", noteId: "#note15", text1: "“...low contrast text...was found on 83.6% of the one million most popular website's home pages, making it the most commonly detected accessibility issue.” Firth, chapter 3.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 16, listId: "footnote16", noteId: "#note16", text1: "Krug, 2014, chapter 12; Firth, 2024, chapter 2.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 17, listId: "footnote17", noteId: "#note17", text1: "Firth, 2024, chapter 2.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 18, listId: "footnote18", noteId: "#note18", text1: "See ", text1IsLink: false, text1Link: "", text2: "https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/", text2IsLink: true, text2Link: "https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/", text3: "", text3IsLink: false, text3Link: "" },
    { id: 19, listId: "footnote19", noteId: "#note19", text1: "Firth, 2024, chapter 2.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" }
  ]

  return (
    <Page title="Elements of a Standard for Website Design Part 1: Conventions">
      <GTag></GTag>
      <GStructuredData type="BlogPosting" datePublished="2026-05-01T11:19:28-07:00" dateModified="2026-06-05T11:01:56-07:00" headline="Elements of a Standard for Website Design Part 1: Conventions"></GStructuredData>
      <meta name="description" content="Elements of a standard for website design, including conventions for website useability, accessibility, and design." />
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <div className="wrapper wrapper__article" id="maincontent" tabIndex={-1}>
        <h1 className="headline__h1-cg">Elements of a Standard for Website Design</h1>
        <h2 className="headline__h2">Part 1: Conventions</h2>
        <div className="headline__author">Gregory Swanson | Updated June 5, 2026</div>

        <div className="row row--gutters">
          <div className="row__colspan-5">
            <h2 className="headline__h2-contents">Contents</h2>
            <ul className="list--ul">
              <li className="list list--toc">
                <HashLink smooth to="#whofor" className="list--toc--a">
                  Who This Post is For
                </HashLink>
              </li>
              <li className="list list--toc">
                <HashLink smooth to="#conventions" className="list--toc--a">
                  Conventions
                </HashLink>
                <ul>
                  <li className="list list--toc">
                    <HashLink smooth to="#basicAccessibility" className="list--toc--a">
                      Basic Accessibility
                    </HashLink>
                  </li>
                  <li className="list list--toc">
                    <HashLink smooth to="#validatePages" className="list--toc--a">
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
              <li className="list list--toc">
                <HashLink to="/blog/2026/01/elements-of-a-standard-for-website-design-part2-accessibility" className="list--toc--a">
                  Part 2: Accessibility
                </HashLink>
              </li>
            </ul>
          </div>
          <div className="row__colspan-6">
            <p className="dropCap">In this post, I present a vision for a standard on website design. Why do we need a standard for website design? Because the ecosystem for web development is huge, and a web developer can spend all their time learning how to put a website together with HTML, CSS, and JavaScript, but not know that you should not skip heading levels, or what breadcrumbs are and when and how they should appear, or what a favicon does, or whether it is appropriate to use the mailto: attribute in a &lt;a&gt; element, and so many other points that should be considered.</p>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p>I have found that there are few if any credible sources on the internet that tell you what needs to go into a website, what are all the pieces that need to be there for a good site. For a site that serves as your company’s brochure of services, what accessibility features does it need? What kind of navigation? How should menu dropdowns work, should the user have to click on the menu to make it expand (the standard for PC applications), or should the menu expand when the cursor hovers over it? What about a search feature, what about a Contact Us page?</p>
            <p>Ideas for this vision come from pioneers and experts in useability and accessibility. This will be a multi-part post starting with the following topics:</p>
            <ul>
              <li className="list">Part 1: Conventions. Conventions are the elements that should be present in every website and the metaphors used in their presentation, elements that cover basic accessibility, and page validation to ensure there are no errors in the code.</li>
              <li className="list">Part 2: Accessibility. Improving accessibility for users with access needs improves useability for everyone.</li>
              <li className="list">Part 3: UI Components. Standard UI (user interface) components for websites.</li>
            </ul>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <h3 className="headline__h3" id="whofor">
              Who This Post is For
            </h3>
            <ul>
              <li className="list">The novice. The novice is not a web developer and needs to make a website and wants to know what common features should be included.</li>
              <li className="list">The self-taught web developer. This web developer has some experience, perhaps significant experience, but is not sure if there are any conventions they don’t know about, or that they know about but have been ignoring and should be using.</li>
              <li className="list">The curious professional. The curious professional web developer has on-the-job web development experience, but when they see an article like this, they can’t resist reading it to see if there is anything they don’t already know, or to see if it misses something important.</li>
            </ul>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-1" id="conventions"></div>
          <div className="row__colspan-10">
            <h2 className="headline__h2">Conventions</h2>
            <p className="dropCap">We should agree to a few conventions that every website should follow. These are features that users have come to expect, and they expect them to work in a standard way, because they have seen and used them on many websites.</p>
            <p>Every website should have:</p>
            <ul>
              <li className="list">
                An ID, a.k.a. Logo, in the top left corner <Footnote footnoteId={1}></Footnote>
              </li>
              <li className="list">
                A tagline.<Footnote footnoteId={2}></Footnote> A tagline is a short phrase that summarizes the business or enterprise, it should be right next to the Site ID. A tagline is not a motto, it’s a “value proposition.”<Footnote footnoteId={3}></Footnote> Example: fueleconomy.gov (
                <Link className="wrapper__article__outbound" to="https://fueleconomy.gov">
                  https://fueleconomy.gov/
                </Link>
                ), tagline “the official U.S. government source for fuel economy information”
              </li>
              <li className="list">
                “Persistent navigation”, the website’s navigation elements that include the logo, navigation bar, search, and any utilities such as a sign in link and the shopping cart.<Footnote footnoteId={4}></Footnote>{" "}
                <ul>
                  <li className="list">
                    The persistent navigation should appear in the same place on every page.<Footnote footnoteId={5}></Footnote>{" "}
                  </li>
                  <li className="list">
                    The navigation bar is a horizontal bar at top or a vertical bar on the left and has visual indicators to show which menu item is selected, including the top-level category and the sub-menu level(s) if there are any.<Footnote footnoteId={6}></Footnote>
                  </li>
                  <li className="list">
                    Breadcrumbs, supplemental to a navigation bar or perhaps instead of a navigation bar on small sites, breadcrumbs indicate where you are on the website, with the current page shown as the last breadcrumb in bold and without a hyperlink and all other breadcrumbs in normal font with a hyperlink, and each breadcrumb separated by a separator, preferably an angle bracket.<Footnote footnoteId={7}></Footnote>
                  </li>
                </ul>
              </li>
              <li className="list">
                A search feature if the site is large enough to warrant one<Footnote footnoteId={8}></Footnote>
              </li>
              <li className="list">
                A “Home” button or link<Footnote footnoteId={9}></Footnote>, preferably in the primary navigation and as the root link in the breadcrumbs
              </li>
              <li className="list">
                A page name on every page<Footnote footnoteId={10}></Footnote>, displayed at heading level 1, and no other level 1 topic headers on the page<Footnote footnoteId={11}></Footnote>
              </li>
            </ul>
            <p>
              While working out the above conventions for a website, follow standard metaphors for operation and appearance of elements (a couple examples: use a shopping cart for selling products, and use a magnifying glass icon for search)<Footnote footnoteId={12}></Footnote> because non-standard mechanisms may reduce useability.
            </p>

            <h3 className="headline__h3" id="basicAccessibility">
              Basic Accessibility
            </h3>
            <p className="dropCap">Every website should provide at least the minimum in accessibility features, which are:</p>
            <ul>
              <li className="list">
                A Skip to Content button that is the first button in the tab order, and which appears when a user selects the tab button after the page loads<Footnote footnoteId={13}></Footnote> (unless you have a cookie policy popup, in which case the buttons on the popup should be first, followed by the Skip to Content button)
              </li>
              <li className="list">
                Appropriate font size and line spacing specified in relative units<Footnote footnoteId={14}></Footnote>
              </li>
              <li className="list">
                Adequate contrast between text and background<Footnote footnoteId={15}></Footnote>
              </li>
              <li className="list">
                Alt text for images<Footnote footnoteId={16}></Footnote>
              </li>
              <li className="list">
                Proper heading structure, with at least one and no more than one &lt;h1&gt; tag, no skipping heading levels, and no fake headings (text in any element other than a h1, h2, h3, h4, h5, or h6 element made to appear like a heading), so that screen reader software works correctly and because some users with vision impairments use headings to both understand and to navigate a page<Footnote footnoteId={17}></Footnote>
              </li>
            </ul>
            <p>
              In addition to the above accessibility features, websites should have good Aria markup or no Aria markup.<Footnote footnoteId={18}></Footnote>
            </p>

            <h3 className="headline__h3" id="validatePages">
              Validate Pages
            </h3>
            <p className="dropCap">Finally, every page of a website should be tested with the common validators before publishing the site for the first time, and thereafter new pages and pages that are changed should be tested, and any errors or warnings listed by the validators should be investigated and fixed if possible:</p>
            <ul>
              <li className="list">
                The W3C Markup Validation Service (
                <Link className="wrapper__article__outbound" to="https://validator.w3.org">
                  https://validator.w3.org/
                </Link>
                ) will check your HTML or XHTML markup for issues, and they have other validators for CSS, RSS feeds, etc. Each page of a website should be validated to make sure that there are no missing closing tags and that tags and their properties are used correctly. Incorrect HTML can confuse and even break screen readers.<Footnote footnoteId={19}></Footnote>
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
          <div className="row__colspan-1"></div>

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
