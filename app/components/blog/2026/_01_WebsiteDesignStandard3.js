import React, { useContext, useEffect, useRef } from "react"
import InitializePage from "../../InitializePage.js"
import { Link } from "react-router-dom"
import Page from "../../Page.js"
import DispatchContext from "../../../DispatchContext.js"
import StateContext from "../../../StateContext.js"
import Breadcrumb from "../../Breadcrumb.js"
import { HashLink } from "react-router-hash-link"
import Note from "../../Note.js"
import Footnote from "../../Footnote.js"
import GTag from "../../GTag.js"
import GStructuredData from "../../GStructuredData.js"

function Blog2026_01_WebsiteDesignStandard3() {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)

  appState.backgroundStyle == "light" ? (document.body.classList.remove("dark"), document.body.classList.add("light")) : (document.body.classList.remove("light"), document.body.classList.add("dark"))

  InitializePage({ backgroundStyleChangeColor: "light", selectMenu: "2026", menuActiveCategory: "1", homePageClass: "page", scrollTop: true })

  const breadcrumbs = [
    { id: 0, toText: "Home", toUrl: "/" },
    { id: 1, toText: "Blog", toUrl: "/blog" },
    { id: 2, toText: "2026", toUrl: "/blog/2026" },
    { id: 3, toText: "...Part 1", toUrl: "/blog/2026/01/elements-of-a-standard-for-website-design-part1-conventions" },
    { id: 4, toText: "...Part 2", toUrl: "/blog/2026/01/elements-of-a-standard-for-website-design-part2-accessibility" },
    { id: 5, toText: "Part 3: ARIA", toUrl: "" }
  ]

  const notes = [
    { id: 1, listId: "footnote1", noteId: "#note1", text1: "Horton, S. and Sloan, D., What Every Engineer Should Know About Digital Accessibility. CRC Press, 2024. Chap. 6.", text1IsLink: false, text1Link: "" },
    { id: 2, listId: "footnote2", noteId: "#note2", text1: "Accessible Rich Internet Applications (WAI-ARIA) 1.2", text1IsLink: true, text1Link: "https://www.w3.org/TR/wai-aria-1.2/" },
    { id: 3, listId: "footnote3", noteId: "#note3", text1: "ARIA Authoring Practices Guide | APG | WAI | W3C", text1IsLink: true, text1Link: "https://www.w3.org/WAI/ARIA/apg/" },
    { id: 4, listId: "footnote4", noteId: "#note4", text1: "Read Me First | APG | WAI | W3C", text1IsLink: true, text1Link: "https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/" },
    { id: 5, listId: "footnote5", noteId: "#note5", text1: "Accessible Rich Internet Applications (WAI-ARIA) 1.3", text1IsLink: true, text1Link: "https://w3c.github.io/aria/#intro_ria_accessibility" },
    { id: 6, listId: "footnote6", noteId: "#note6", text1: "See ", text1IsLink: false, text1Link: "", text2: "General Principles: Principles: ARIA Landmarks Example", text2IsLink: true, text2Link: "https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/general-principles.html" },
    { id: 7, listId: "footnote7", noteId: "#note7", text1: "See section 8.5 Conflicts with Host Language Semantics in ", text1IsLink: false, text1Link: "", text2: "Accessible Rich Internet Applications (WAI-ARIA) 1.2", text2IsLink: true, text2Link: "https://www.w3.org/TR/wai-aria-1.2/#host_general_conflict", text3: "“When a feature in the host language with identical role semantics and values is available, and the author has no compelling reason to avoid using the host language feature, authors SHOULD use the host language features rather than repurpose other elements with WAI-ARIA.”", text3IsLink: false, text3Link: "" }
  ]

  return (
    <Page title="Elements of a Standard for Website Design Part 3: ARIA">
      <GTag></GTag>
      <GStructuredData type="BlogPosting" datePublished="2026-10-19T12:46:43-07:00" headline="Elements of a Standard for Website Design Part 3: ARIA"></GStructuredData>
      <meta name="description" content="This article presents the essential ARIA that websites need." />
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <div className="wrapper wrapper__article" id="maincontent" tabIndex={-1}>
        <h1 className="headline__h1-cg">Elements of a Standard for Website Design</h1>
        <h2 className="headline__h2">Part 3: ARIA</h2>
        <div className="headline__author">Gregory Swanson | Published October 19, 2026</div>

        <div className="row row--gutters">
          <div className="row__colspan-5">
            <h2 className="headline__h2-contents">Contents</h2>
            <ul className="list--ul">
              <li className="list list--toc">
                <HashLink smooth to="#ariaessentials" className="list--toc--a">
                  ARIA Essentials
                </HashLink>
                <ul>
                  <li className="list list--toc">
                    <HashLink smooth to="#landmarks" className="list--toc--a">
                      Landmarks
                    </HashLink>
                  </li>
                  <li className="list list--toc">
                    <HashLink smooth to="#keyboardsupport" className="list--toc--a">
                      Keyboard Support
                    </HashLink>
                  </li>
                  <li className="list list--toc">
                    <HashLink smooth to="#nativehtml" className="list--toc--a">
                      Use Native HTML
                    </HashLink>
                  </li>
                  <li className="list list--toc">
                    <HashLink smooth to="#hidedecorativeicons" className="list--toc--a">
                      Hide Decorative Icons
                    </HashLink>
                  </li>
                </ul>
              </li>
              <li className="list list--toc">
                <HashLink smooth to="#notes" className="list--toc--a">
                  Notes
                </HashLink>
              </li>
              <li className="list list--toc">
                <hr className="list--toc-hr"></hr>
              </li>
              <li className="list list--toc">
                <HashLink to="/blog/2026/01/elements-of-a-standard-for-website-design-part1-conventions" className="list--toc--a">
                  Part 1: Conventions
                </HashLink>
              </li>
              <li className="list list--toc">
                <HashLink to="/blog/2026/01/elements-of-a-standard-for-website-design-part2-accessibility" className="list--toc--a">
                  Part 2: Accessibility
                </HashLink>
              </li>
              <li className="list list--toc">Part 3: ARIA</li>
            </ul>
          </div>
          <div className="row__colspan-6">
            <p className="dropCap">
              This ARIA post was supposed to be part of <i>Elements of a Standard for Website Design Part 2: Accessibility</i>, but that post was already long, and ARIA (Accessible Rich Internet Applications) is a subject rich enough to deserve a series of blog posts of its own. However, a blog post about accessibility is not complete without a discussion of ARIA.
            </p>
            <p>
              Ideally, “If you build HTML, you should be adept at using ARIA to enhance UI accessibility...”<Footnote footnoteId={1}></Footnote>, but realistically, the time it takes to become adept at using ARIA is time taken away from becoming adept at JavaScript or CSS or staying on top of changes to your favorite development platform. On top of that, testing of ARIA is essential, and requires using assistive technology that has its own learning curve.
            </p>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p>
              There are good ARIA references<Footnote footnoteId={2}></Footnote> and programming guides<Footnote footnoteId={3}></Footnote>, but what is needed is something like an <i>ARIA essentials for websites</i>, for those who want to provide the benefits of ARIA but don’t have time to spend learning about it. They say “no ARIA is better than bad ARIA”<Footnote footnoteId={4}></Footnote>, what we need is the good ARIA; show me that, not a million rules. To that end, the next section presents what I find to be the ARIA Essentials.
            </p>
            <p>Many accessibility improvements can be experienced without the help of assistive technology such as a screen reader, but to experience how ARIA affects a web page you need to use assistive technology. Therefore, before adding any ARIA, it would be best to experience how a screen reader interprets your webpages without ARIA. And since we are taking the time to test, a good way to emphasize the importance of alt text, form field labels, etc., is to experience the screen reader’s interpretation with and without those elements. To make that easy, I have created three test pages you can use to see how they sound when read by a screen reader:</p>
            <ul>
              <li className="list">
                <Link target="_blank" to="https://swansonsoftware.com/accessibility-test-a.html">
                  Accessibility test page a
                </Link>{" "}
                - no alt text or title text or ARIA is used. This is the worst-case scenario for anyone relying on assistive technologies: a web page created by someone who has little understanding of HTML or Accessibility. Form fields have no labels, images have no alt text, buttons are empty.
              </li>
              <li className="list">
                <Link target="_blank" to="https://swansonsoftware.com/accessibility-test-b.html">
                  Accessibility test page b
                </Link>{" "}
                - this page builds on the contents of test page a by adding alt text and title text.
              </li>
              <li className="list">
                <Link target="_blank" to="https://swansonsoftware.com/accessibility-test-c.html">
                  Accessibility test page c
                </Link>{" "}
                - this page builds on test page b with the addition of ARIA.
              </li>
            </ul>
            <p>Start the screen reader that comes with your operating system, then open the above pages in the order they are presented.</p>

            <h2 className="headline__h2" id="ariaessentials" tabIndex={-1}>
              ARIA Essentials
            </h2>

            <p className="dropCap">
              Standard HTML does not provide a lot of interface elements that web developers need, like a menu bar, an accordion that expands to show content, a collapsible tree, tabs, sliders, and spinbuttons. Web developers have learned how to create these “widgets” using standard HTML, CSS, JavaScript, SVG, and perhaps images. But in the context of a widget, the semantics of the HTML elements used in these widgets are no longer that of standard HTML, preventing assistive technologies from determining correct interface behavior. This is when ARIA is needed. To make these widgets “accessible, usable, and interoperable with assistive technologies”<Footnote footnoteId={5}></Footnote>, developers must indicate the appropriate ARIA role(s) including any ARIA attributes and state required by the role(s).
            </p>
            <p>
              If you do nothing else with ARIA, the single best thing you can do is to add landmarks. You will have made the structure of your web pages much easier to follow for readers as well as easier to navigate (using a browser extension such as{" "}
              <Link className="wrapper__article__outbound" to="https://microsoftedge.microsoft.com/addons/detail/skiptojs-for-microsoft-e/ljimnmfdebledgndinpmilpbmkfamicg">
                SkipTo.js for Microsoft Edge - Microsoft Edge Addons
              </Link>
              ).
            </p>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <h3 className="headline__h3" id="landmarks" tabIndex={-1}>
              Landmarks
            </h3>
            <p className="dropCap">A basic webpage design has sections for the header, navigation menu, main content, and footer. These sections are known as ARIA landmarks. The HTML5 specification added elements for these sections, and assistive technologies recognize them and announce them. Therefore, your first foray into ARIA is to use these elements instead of generic &lt;div&gt; elements. These elements make the code easier to read as well.</p>
            <p className="note">
              <h4 className="headline__h4">Landmark Roles</h4>
              <Footnote footnoteId={6}></Footnote>{" "}
              <ul>
                <li className="list">Banner - &lt;header&gt;</li>
                <li className="list">Complementary - &lt;aside&gt;</li>
                <li className="list">Contentinfo - &lt;footer&gt;</li>
                <li className="list">Form - &lt;form&gt;</li>
                <li className="list">Main - &lt;main&gt;</li>
                <li className="list">Navigation - &lt;nav&gt;</li>
                <li className="list">Region - &lt;section&gt;</li>
                <li className="list">Search - &lt;search&gt;</li>
              </ul>
            </p>
            <p>While you should indicate a landmark using the HTML element intended for the purpose (&lt;nav&gt;, &lt;main&gt;, &lt;footer&gt;, etc.), another way that works is to use a generic DIV element and give it an ARIA role (&lt;div role=“navigation”&gt;, &lt;div role=“main”&gt;, &lt;div role=“contentinfo”&gt;, etc.)</p>
            <p>Some landmarks may occur more than once on a page, and when they do, they should be given a unique label:</p>
            <pre className="page__code">&lt;section aria-labelledby="region1"&gt;</pre>
            <p>When using the newer HTML elements, don’t add an ARIA role because assistive technology will announce the element twice. It was standard practice to add the role when HTML5 was introduced, but that was over 10 years ago.</p>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <h3 className="headline__h3" id="keyboardsupport" tabIndex={-1}>
              Keyboard Support
            </h3>
            <p className="dropCap">For many features we find on web pages today, support for keyboard navigation is so poor that it would be better to work on that than to add ARIA. For example, it is pointless to add ARIA that provides context during keyboard navigation to a menu that does not support keyboard navigation through the menu items.</p>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-1" id="annoyingforscreenreaderusers"></div>
          <div className="row__colspan-10">
            <h3 className="headline__h3" id="nativehtml" tabIndex={-1}>
              Use Native HTML
            </h3>
            <p className="dropCap">
              If you can use native HTML with the semantics and behavior you require already built in, instead of re-purposing an element and adding ARIA to make it accessible, then do so.<Footnote footnoteId={7}></Footnote>
            </p>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <h3 className="headline__h3" id="hidedecorativeicons" tabIndex={-1}>
              Hide Decorative Icons
            </h3>
            <p className="dropCap">You should hide decorative images and icons because some screen readers uselessly announce them as “unlabeled graphic”. Examples of icons used for decoration:</p>
            <ul>
              <li className="list">menu arrows indicating submenu open status</li>
              <li className="list">arrow icon on back-to-top buttons</li>
              <li className="list">icons for VCR buttons</li>
            </ul>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12 row__margin-bottom-0">
            <h3 className="headline__h3" id="notes" tabIndex={-1}>
              Notes
            </h3>
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
export default Blog2026_01_WebsiteDesignStandard3
