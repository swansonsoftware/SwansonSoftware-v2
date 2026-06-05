import React, { useContext, useEffect, useRef } from "react"
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

function Blog2026_01_WebsiteDesignStandard2() {
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
    { id: 3, toText: "...Part 1", toUrl: "/blog/2026/01/elements-of-a-standard-for-website-design-part1-conventions" },
    { id: 4, toText: "Part 2: Accessibility", toUrl: "" }
  ]

  const notes = [
    { id: 1, listId: "footnote1", noteId: "#note1", text1: "Practical Web Accessibility: A Comprehensive Guide to Digital Inclusion, 2nd edition, by Ashley Firth. Apress, 2024. Chapter 1.", text1IsLink: false, text1Link: "" },
    { id: 2, listId: "footnote2", noteId: "#note2", text1: "Ibid., chapter 2; source: WebAIM Screen Reader User Survey #9 (2021) (", text1IsLink: false, text1Link: "", text2: "https://webaim.org/projects/screenreadersurvey9/#progress", text2IsLink: true, text2Link: "https://webaim.org/projects/screenreadersurvey9/#progress", text3: ") A more recent survey (#10) from 2024 found 65% of users said accessibility on the web has stayed the same or gotten worse (https://webaim.org/projects/screenreadersurvey10/#progress)", text3IsLink: false, text3Link: "" },
    { id: 3, listId: "footnote3", noteId: "#note3", text1: "Firth, 2024, chapter 2; Krug, Steve, 2014, Don't Make Me Think, Revisited: A Common Sense Approach to Web Usability (3rd Edition), New Riders, chapter 12; Web Content Accessibility Guidelines (WCAG) 2.2: Background on WCAG 2 (", text1IsLink: false, text1Link: "", text2: "https://www.w3.org/TR/2024/REC-WCAG22-20241212/#background-on-wcag-2", text2IsLink: true, text2Link: "https://www.w3.org/TR/2024/REC-WCAG22-20241212/#background-on-wcag-2", text3: ")", text3IsLink: false, text3Link: "" },
    { id: 4, listId: "footnote4", noteId: "#note4", text1: "These goals are described in Web Content Accessibility Guidelines (WCAG) 2.2 (", text1IsLink: false, text1Link: "", text2: "https://www.w3.org/TR/2024/REC-WCAG22-20241212/", text2IsLink: true, text2Link: "https://www.w3.org/TR/2024/REC-WCAG22-20241212/", text3: ")", text3IsLink: false, text3Link: "" },
    { id: 5, listId: "footnote5", noteId: "#note5", text1: "Krug, 2014, chapter 12: “If web accessibility is going to become ubiquitous, it’s going to have to be easier to do. Screen readers and other adaptive technologies have to get smarter, the tools for building sites (like Dreamweaver) have to make it easier to code correctly for accessibility, and our design processes need to be updated to include thinking about accessibility from the beginning.”", text1IsLink: false, text1Link: "" },
    { id: 6, listId: "footnote6", noteId: "#note6", text1: "Discussed in Firth, 2024, chapter 1: Beyoncé’s website was the victim of a class action lawsuit because of its lack of accessibility: ", text1IsLink: false, text1Link: "", text2: "https://www.boia.org/blog/beyonces-website-the-focus-of-an-accessibility-lawsuit", text2IsLink: true, text2Link: "https://www.boia.org/blog/beyonces-website-the-focus-of-an-accessibility-lawsuit", text3: " and ", text3IsLink: false, text3Link: "", text4: "https://www.accessibility.com/digital-lawsuits/mary-parkwood-2019-01-4", text4IsLink: true, text4Link: "https://www.accessibility.com/digital-lawsuits/mary-parkwood-2019-01-4", text5: "; also ADA Website Accessibility Lawsuits: What Advertisers Need to Know (", text5IsLink: false, text5Link: "", text6: "https://advertisinglaw.fkks.com/post/102f6xu/ada-website-accessibility-lawsuits-what-advertisers-need-to-know)", text6IsLink: true, text6Link: "https://advertisinglaw.fkks.com/post/102f6xu/ada-website-accessibility-lawsuits-what-advertisers-need-to-know" },
    { id: 7, listId: "footnote7", noteId: "#note7", text1: "Firth, 2024, chapter 1.", text1IsLink: false, text1Link: "" },
    { id: 8, listId: "footnote8", noteId: "#note8", text1: "Ibid.", text1IsLink: false, text1Link: "" },
    { id: 9, listId: "footnote9", noteId: "#note9", text1: "Ibid.", text1IsLink: false, text1Link: "" },
    { id: 10, listId: "footnote10", noteId: "#note10", text1: "Data from ", text1IsLink: false, text1Link: "", text2: "https://webaim.org/projects/million/", text2IsLink: true, text2Link: "https://webaim.org/projects/million/" },
    { id: 11, listId: "footnote11", noteId: "#note11", text1: "https://webaim.org/projects/million/#contrast", text1IsLink: true, text1Link: "https://webaim.org/projects/million/#contrast", text2: "; referenced in Firth, 2024, chapter 3; see also Krug, 2014, chapters 12 and 13.", text2IsLink: false, text2Link: "" },
    { id: 12, listId: "footnote12", noteId: "#note12", text1: "Firth, 2024, chapter 3. Also, see an article on “different options and approaches to implementing a dark mode design”: ", text1IsLink: false, text1Link: "", text2: "https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/", text2IsLink: true, text2Link: "https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/" },
    { id: 13, listId: "footnote13", noteId: "#note13", text1: "Ibid.", text1IsLink: false, text1Link: "" },
    { id: 14, listId: "footnote14", noteId: "#note14", text1: "Ibid; Krug, 2014, chapter 12, “make your forms work with screen readers.”", text1IsLink: false, text1Link: "" },
    { id: 15, listId: "footnote15", noteId: "#note15", text1: "WebAIM's WCAG 2 Checklist (", text1IsLink: false, text1Link: "", text2: "https://webaim.org/standards/wcag/checklist#sc3.1.1", text2IsLink: true, text2Link: "https://webaim.org/standards/wcag/checklist#sc3.1.1", text3: ") See also ", text3IsLink: false, text3Link: "", text4: "https://webaim.org/techniques/language/", text4IsLink: true, text4Link: "https://webaim.org/techniques/language/" },
    { id: 16, listId: "footnote16", noteId: "#note16", text1: "The AIM score is visible in the WAVE web accessibility evaluation tool.", text1IsLink: false, text1Link: "" },
    { id: 17, listId: "footnote17", noteId: "#note17", text1: "Firth, 2024, chapter 2.", text1IsLink: false, text1Link: "" },
    { id: 18, listId: "footnote18", noteId: "#note18", text1: "Ibid.", text1IsLink: false, text1Link: "" },
    { id: 19, listId: "footnote19", noteId: "#note19", text1: "Krug, 2014, chapter 6.", text1IsLink: false, text1Link: "" },
    { id: 20, listId: "footnote20", noteId: "#note20", text1: "Firth, 2024, chapter 2.", text1IsLink: false, text1Link: "" },
    { id: 21, listId: "footnote21", noteId: "#note21", text1: "Ibid.", text1IsLink: false, text1Link: "" },
    { id: 22, listId: "footnote22", noteId: "#note22", text1: "Krug, 2014, chapter 12", text1IsLink: false, text1Link: "" },
    { id: 23, listId: "footnote23", noteId: "#note23", text1: "Firth, 2024, chapter 4. See ", text1IsLink: false, text1Link: "", text2: "Web Content Accessibility Guidelines (WCAG) 2.2", text2IsLink: true, text2Link: "https://www.w3.org/TR/2024/REC-WCAG22-20241212/", text3: ", section 2.4.11 Focus Not Obscured", text3IsLink: false, text3Link: "" },
    { id: 24, listId: "footnote24", noteId: "#note24", text1: "See ", text1IsLink: false, text1Link: "", text2: "Web Content Accessibility Guidelines (WCAG) 2.2", text2IsLink: true, text2Link: "https://www.w3.org/TR/2024/REC-WCAG22-20241212/#on-focus", text3: ", “Success Criterion 3.2.1 On Focus”", text3IsLink: false, text3Link: "" },
    { id: 25, listId: "footnote25", noteId: "#note25", text1: "Firth, 2024, chapter 4.", text1IsLink: false, text1Link: "" },
    { id: 26, listId: "footnote26", noteId: "#note26", text1: "Ibid., chapter 4.", text1IsLink: false, text1Link: "" },
    { id: 27, listId: "footnote27", noteId: "#note27", text1: "Ibid.", text1IsLink: false, text1Link: "" },
    { id: 28, listId: "footnote28", noteId: "#note28", text1: "Ibid.", text1IsLink: false, text1Link: "" },
    { id: 29, listId: "footnote29", noteId: "#note29", text1: "Ibid., chapter 3.", text1IsLink: false, text1Link: "" },
    { id: 30, listId: "footnote30", noteId: "#note30", text1: "Ibid.", text1IsLink: false, text1Link: "" },
    { id: 31, listId: "footnote31", noteId: "#note31", text1: "Ibid., chapter 3; Chris Lilley, “em, px, pt, cm, in …”, 2010-2025, W3C, ", text1IsLink: false, text1Link: "", text2: "https://www.w3.org/Style/Examples/007/units.en.html", text2IsLink: true, text2Link: "https://www.w3.org/Style/Examples/007/units.en.html", text3: ".", text3IsLink: false, text3Link: "" },
    { id: 32, listId: "footnote32", noteId: "#note32", text1: "Low Vision Accessibility Task Force (a Task Force of the Web Content Accessibility Guidelines Working Group), 2016. Accessibility Requirements for People with Low Vision.", text1IsLink: false, text1Link: "" },
    { id: 33, listId: "footnote33", noteId: "#note33", text1: "Firth, 2024, chapter 3. See also W3C ", text1IsLink: false, text1Link: "", text2: "Supplemental Guidance: Text Justification - Low Vision Accessibility Task Force", text2IsLink: true, text2Link: "https://www.w3.org/WAI/GL/low-vision-a11y-tf/wiki/Supplemental_Guidance:_Text_Justification", text3: ", and ", text3IsLink: false, text3Link: "", text4: "https://www.w3.org/WAI/WCAG21/Understanding/visual-presentation", text4IsLink: true, text4Link: "https://www.w3.org/WAI/WCAG21/Understanding/visual-presentation" },
    { id: 34, listId: "footnote34", noteId: "#note34", text1: "Ibid., chapter 3. There is an online tool: ", text1IsLink: false, text1Link: "", text2: "WebAIM: Contrast Checker", text2IsLink: true, text2Link: "https://webaim.org/resources/contrastchecker/" },
    { id: 35, listId: "footnote35", noteId: "#note35", text1: "Ibid., chapter 2.", text1IsLink: false, text1Link: "" },
    { id: 36, listId: "footnote36", noteId: "#note36", text1: "See ", text1IsLink: false, text1Link: "", text2: "https://www.w3.org/TR/2024/REC-WCAG22-20241212/#text-spacing", text2IsLink: true, text2Link: "https://www.w3.org/TR/2024/REC-WCAG22-20241212/#text-spacing" },
    { id: 37, listId: "footnote37", noteId: "#note37", text1: "See ", text1IsLink: false, text1Link: "", text2: "https://www.w3.org/TR/2024/REC-WCAG22-20241212/#visual-presentation ", text2IsLink: true, text2Link: "https://www.w3.org/TR/2024/REC-WCAG22-20241212/#visual-presentation" },
    { id: 38, listId: "footnote38", noteId: "#note38", text1: "The reasons are explained here: ", text1IsLink: false, text1Link: "", text2: "https://www.w3.org/WAI/WCAG21/Understanding/visual-presentation", text2IsLink: true, text2Link: "https://www.w3.org/WAI/WCAG21/Understanding/visual-presentation" },
    { id: 39, listId: "footnote39", noteId: "#note39", text1: "Firth, 2024, chapter 4.", text1IsLink: false, text1Link: "" },
    { id: 40, listId: "footnote40", noteId: "#note40", text1: "Ibid., chapter 3.", text1IsLink: false, text1Link: "" },
    { id: 41, listId: "footnote41", noteId: "#note41", text1: "Ibid., chapter 2.", text1IsLink: false, text1Link: "" },
    { id: 42, listId: "footnote42", noteId: "#note42", text1: "Ibid.", text1IsLink: false, text1Link: "" },
    { id: 43, listId: "footnote43", noteId: "#note43", text1: "Ibid., chapter 4.", text1IsLink: false, text1Link: "" }
  ]

  return (
    <Page title="Elements of a Standard for Website Design Part 2: Accessibility">
      <GTag></GTag>
      <GStructuredData type="BlogPosting" datePublished="2026-06-05T10:53:26-07:00" headline="Elements of a Standard for Website Design Part 2: Accessibility"></GStructuredData>
      <meta name="description" content="This article addresses the most common website accessibility issues. The result is an accessibility baseline that is not difficult to achieve." />
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <div className="wrapper wrapper__article" id="maincontent" tabIndex={-1}>
        <h1 className="headline__h1-cg">Elements of a Standard for Website Design</h1>
        <h2 className="headline__h2">Part 2: Accessibility</h2>
        <div className="headline__author">Gregory Swanson | Published June 5, 2026</div>

        <div className="row row--gutters">
          <div className="row__colspan-5">
            <h2 className="headline__h2-contents">Contents</h2>
            <ul className="list--ul">
              <li className="list list--toc">
                <HashLink smooth to="#currentstate" className="list--toc--a">
                  The Current State of Accessibility
                </HashLink>
              </li>
              <li className="list list--toc">
                <HashLink smooth to="#wcag" className="list--toc--a">
                  WCAG
                </HashLink>
              </li>
              <li className="list list--toc">
                <HashLink smooth to="#bigsix" className="list--toc--a">
                  The Big Six
                </HashLink>
                <ol className="toc">
                  <li className="list list--toc list--toc-numbered">
                    <HashLink smooth to="#lowcontrasttext" className="list--toc--a">
                      Low Contrast Text
                    </HashLink>
                  </li>
                  <li className="list list--toc list--toc-numbered">
                    <HashLink smooth to="#noalttext" className="list--toc--a">
                      Missing Alternative Text for Images
                    </HashLink>
                  </li>
                  <li className="list list--toc list--toc-numbered">
                    <HashLink smooth to="#noinputlabels" className="list--toc--a">
                      Missing Form Input Labels
                    </HashLink>
                  </li>
                  <li className="list list--toc list--toc-numbered">
                    <HashLink smooth to="#emptylinks" className="list--toc--a">
                      Empty Links
                    </HashLink>
                  </li>
                  <li className="list list--toc list--toc-numbered">
                    <HashLink smooth to="#emptybuttons" className="list--toc--a">
                      Empty Buttons
                    </HashLink>
                  </li>
                  <li className="list list--toc list--toc-numbered">
                    <HashLink smooth to="#nodoclang" className="list--toc--a">
                      Missing Document Language
                    </HashLink>
                  </li>
                </ol>
              </li>
              <li className="list list--toc">
                <HashLink smooth to="#mostannoying" className="list--toc--a">
                  The Most Annoying for Screen Reader Users
                </HashLink>
                <ol className="toc">
                  <li className="list list--toc list--toc-numbered" value={"7"}>
                    <HashLink smooth to="#badheading" className="list--toc--a">
                      Improper Heading Structure
                    </HashLink>
                  </li>
                  <li className="list list--toc list--toc-numbered">
                    <HashLink smooth to="#noskiplink" className="list--toc--a">
                      No Skip to Main Content button
                    </HashLink>
                  </li>
                  <li className="list list--toc list--toc-numbered">
                    <HashLink smooth to="#nokbdaccess" className="list--toc--a">
                      Content not accessible by keyboard
                    </HashLink>
                  </li>
                </ol>
              </li>
              <li className="list list--toc">
                <HashLink smooth to="#annoyingforgreateraudience" className="list--toc--a">
                  The Most Annoying for the Greater Audience
                </HashLink>
                <ol className="toc">
                  <li className="list list--toc list--toc-numbered" value={"10"}>
                    <HashLink smooth to="#smallfont" className="list--toc--a">
                      Small Font Size Specified in Pixel (px) Units
                    </HashLink>
                  </li>
                  <li className="list list--toc list--toc-numbered">
                    <HashLink smooth to="#lineheight" className="list--toc--a">
                      Line Height
                    </HashLink>
                  </li>
                </ol>
              </li>
              <li className="list list--toc">
                <HashLink smooth to="#additionalitems" className="list--toc--a">
                  Additional Items Important to Accessibility
                </HashLink>
                <ol className="toc">
                  <li className="list list--toc list--toc-numbered" value={"12"}>
                    <HashLink smooth to="#menuhovereffects" className="list--toc--a">
                      Menu Hover Effects
                    </HashLink>
                  </li>
                  <li className="list list--toc list--toc-numbered">
                    <HashLink smooth to="#color" className="list--toc--a">
                      Color
                    </HashLink>
                  </li>
                  <li className="list list--toc list--toc-numbered">
                    <HashLink smooth to="#clickarea" className="list--toc--a">
                      Click Area
                    </HashLink>
                  </li>
                  <li className="list list--toc list--toc-numbered">
                    <HashLink smooth to="#nativehtml" className="list--toc--a">
                      Use Native HTML Tags
                    </HashLink>
                  </li>
                  <li className="list list--toc list--toc-numbered">
                    <HashLink smooth to="#cssborder" className="list--toc--a">
                      CSS Border
                    </HashLink>
                  </li>
                </ol>
              </li>
              <li className="list list--toc">
                <HashLink smooth to="#notes" className="list--toc--a">
                  Notes
                </HashLink>
              </li>
              <li className="list list--toc">
                <HashLink to="/blog/2026/01/elements-of-a-standard-for-website-design-part1-conventions" className="list--toc--a">
                  Part 1: Conventions
                </HashLink>
              </li>
            </ul>
          </div>
          <div className="row__colspan-6">
            <p className="dropCap">Part 2 continues by extending the basic accessibility from Part 1 to an accessibility baseline for websites. Accessibility is a big topic that web developers may feel is burdensome to learn and a distraction from learning how to make things work with JavaScript, CSS, and their framework of choice. However, only 6 issues account for over 90% of accessibility errors on websites, and addressing those is a much easier goal to achieve, but we will go a little further and cover a handful of additional accessibility issues that are high on the list of annoyances, and not just for users with access needs.</p>
            <p>The sources for Part 2 provide the latest in-depth information if you are interested in learning more.</p>

            <h3 className="headline__h3" id="currentstate">
              The Current State of Accessibility
            </h3>
            <p className="dropCap">
              Many websites today have accessibility issues.
              <Footnote footnoteId={1}></Footnote> Firth[2024] cites a survey of users that found 60% of users said accessibility on the web has stayed the same or gotten worse.
              <Footnote footnoteId={2}></Footnote> While many users have no trouble using a site that has not been designed for accessibility, there are other users – potential customers – who will find the site too frustrating to use.
            </p>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p>
              Improving accessibility for those users will improve useability for everyone
              <Footnote footnoteId={3}></Footnote>, because improving accessibility means making content easier to see and hear, making navigation throughout the site and within individual pages consistent and intuitive, making the user’s location within the site more obvious, making the size of the target for pointer inputs easier to hit, and more.<Footnote footnoteId={4}></Footnote>
            </p>
            <p>
              Accessibility should be a top priority in website design, but unfortunately it is too often overlooked. Perhaps this is due to ignorance, perhaps it is because website tools like WordPress make it hard to code for accessibility<Footnote footnoteId={5}></Footnote>, perhaps it is because a graphic artist cares more about a website’s appearance than its accessibility or doesn’t know how to create an aesthetically pleasing design which is also accessible.
            </p>
            <p>
              Design choices for a print magazine do not transfer well to a website. A website is not a magazine, it is a universal medium for communication, for buying stuff, for entertaining and doing business. Nobody would sue a magazine for not providing a brail copy, but website owners have been sued for not providing basic accessibility.<Footnote footnoteId={6}></Footnote>
            </p>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-1" id="wcag"></div>
          <div className="row__colspan-10">
            <h2 className="headline__h2">WCAG</h2>
            <p className="dropCap">
              Web Content Accessibility Guidelines (
              <Link className="wrapper__article__outbound" to="https://www.w3.org/TR/2024/REC-WCAG22-20241212/">
                Web Content Accessibility Guidelines (WCAG) 2.2
              </Link>
              ) is a list of accessibility guidelines with three levels of success: A, AA, and AAA.<Footnote footnoteId={7}></Footnote> Level A is the easiest to achieve, AA is “widely considered as an acceptable legal standard”<Footnote footnoteId={8}></Footnote>, and AAA is the strictest. Firth[2024] cites research that shows that 96.3% of the top websites have WCAG errors, of which 96.1% fall into WCAG level A, the easiest to fix.<Footnote footnoteId={9}></Footnote>
            </p>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-1" id="bigsix"></div>
          <div className="row__colspan-10">
            <h2 className="headline__h2">The Big Six</h2>
            <p className="dropCap">
              WebAIM reports on the accessibility of the top 1 million web sites.<Footnote footnoteId={10}></Footnote> As of 2026, 96% of all errors fall into six categories, and the categories have not changed for the seven years that WebAIM has been compiling the report:
            </p>
            <ol>
              <li className="list">Low contrast text</li>
              <li className="list">Missing alternative text for images</li>
              <li className="list">Missing form input labels</li>
              <li className="list">Empty links</li>
              <li className="list">Empty buttons</li>
              <li className="list">Missing document language</li>
            </ol>
            <p>Concentrating on these six will get you to a decent level of accessibility, so we address these first.</p>

            <h3 className="headline__h3" id="lowcontrasttext">
              Low Contrast Text
            </h3>
            <p className="dropCap">
              As mentioned in part 1, low contrast text, where there is insufficient contrast between text and background, is the most detected accessibility issue.<Footnote footnoteId={11}></Footnote> A convenient way to test for insufficient contrast is by using the WAVE Web Accessibility Evaluation tool (
              <Link className="wrapper__article__outbound" to="https://wave.webaim.org/">
                https://wave.webaim.org/
              </Link>
              ). Insufficient contrast errors are often due to one of the following:
            </p>
            <ul>
              <li className="list">Color combinations for background and text</li>
              <li className="list">Low font weight</li>
              <li className="list">Thin or lightweight fonts</li>
              <li className="list">Small font size</li>
            </ul>
            <p>
              Often a small adjustment can resolve a contrast error. You can read more about low contrast text in the article{" "}
              <Link className="wrapper__article__outbound" to="https://www.nngroup.com/articles/low-contrast/">
                Low-Contrast Text Is Not the Answer - NN/G
              </Link>
              .
            </p>
            <h4 className="headline__h4">Contrast and Light Sensitivity</h4>
            <p>Some users find bright pages painful to view and prefer a dark page with light font. Modern operating systems offer alternative color schemes with a variety of background colors and contrasting text colors, and most modern browsers have their own color overrides. But users may find these settings tedious, and they may not want to apply dark mode to everything. They may prefer a way to simply toggle a dark mode in the browser when they feel like it.</p>
            <p className="note">There are browser extensions that do this, such as Dark Reader and Midnight Lizard.</p>
            <p>
              Firth suggests providing a dark mode option to allow users to switch themes as they desire.<Footnote footnoteId={12}></Footnote> One way to achieve the option is by using the CSS filter property combined with the hue-rotate() function:
            </p>
            <p className="code">
              <pre style={{ margin: "0" }}>filter: invert(100%) hue-rotate(180deg);</pre>
            </p>
            <p>While this can work, applying the rules to the body tag (as described in Firth’s example) will affect images as well. It requires care to get right.</p>
            <p>As modern operating systems offer alternate color schemes, web developers should test their sites with these alternate schemes. If an alternate color scheme is adversely affecting a website’s appearance, it is best to resolve the issue without resorting to CSS tricks to adapt pages when an alternate color scheme is in use. The CSS media features prefers-color-scheme and forced-colors do not work with Microsoft’s new contrast themes, although prefers-color-scheme works with Edge’s “Overall appearance” settings and with macOS’ Light mode, Dark mode, and Auto mode.</p>
            <p className="code">
              <pre style={{ margin: "0" }}>
                @media (prefers-color-scheme: dark)<br></br>@media (forced-colors: active)
              </pre>
            </p>

            <h3 className="headline__h3" id="noalttext">
              Missing Alternative Text for Images
            </h3>
            <p className="dropCap">
              Images need to have an alt attribute populated with alt text, unless the image is used for decoration only, in which case the attribute should be present but empty.<Footnote footnoteId={13}></Footnote> An alt attribute is used to provide text that is read and played by screen readers. Without alt text, the carefully curated, beautiful photos on your web page will be read by a screen reader simply “image.”
            </p>
            <p className="code">
              <pre style={{ margin: "0" }}>{`<img width="220" height="53" class="logo" alt="Swanson Software logo" title="Swanson Software home" src="assets/images/logo-dark.svg">`}</pre>
            </p>
            <p>It is up to the content creator to come up with the alt text, but if it’s vague or does not adequately convey the information in the image, then it’s not useful for screen reader users. And while accessibility scanners might warn about alt text longer than around 100 characters, long alt text is justified when it is needed.</p>
            <h4 className="headline__h4">Guidelines for alt text:</h4>
            <ul>
              <li className="list">Alt text describes what is in the picture; if a picture is for decoration only, the alt text should be empty (alt=””)</li>
              <li className="list">Do not begin alt text with words like “image of” or “photo of”, that will duplicate what a screen reader already announces when it encounters an image</li>
              <li className="list">Keep the text succinct, and do not add anything that is not present to users who are not using a screen reader</li>
              <li className="list">Text longer than about 100 characters may be flagged as not being succinct by an accessibility scanner, but longer text is fine when it helps the user by truly describing the image.</li>
              <li className="list">Use punctuation, screen readers use punctuation and will announce when an end of a sentence occurs</li>
            </ul>

            <h3 className="headline__h3" id="noinputlabels">
              Missing Form Input Labels
            </h3>
            <p className="dropCap">
              Screen readers will correctly announce form field names when form fields have a label, if that label is linked to the field with the “for” attribute.<Footnote footnoteId={14}></Footnote> When there is no label, or when the label is not linked to the field, screen readers guess at the name.
            </p>
            <p className="code">
              <pre style={{ margin: "0" }}>
                {`<label for="name">
   <span class="form--required">*</span> Name:
</label>
<input id="name" placeholder="Name" maxlength="100" required="" type="text" name="name"></input>`}
              </pre>
            </p>
            <p>
              Several ways to fix this are described in the Accessibility Conformance Testing (ACT) Rules at{" "}
              <Link className="wrapper__article__outbound" to="https://www.w3.org/WAI/standards-guidelines/act/rules/">
                https://www.w3.org/WAI/standards-guidelines/act/rules/
              </Link>
              , under Guideline 1.3 – Adaptable, or here:{" "}
              <Link className="wrapper__article__outbound" to="https://www.w3.org/WAI/standards-guidelines/act/rules/e086e5/">
                https://www.w3.org/WAI/standards-guidelines/act/rules/e086e5/
              </Link>
            </p>
            <h4 className="headline__h4">Some examples that fix this</h4>
            <ul>
              <li className="list">
                Wrap the input element with a label:<br></br>
                <pre>{`<label>first name<input /></label>`}</pre>
              </li>
              <li className="list">
                Use a separate DIV and give the input an aria-label:<br></br>
                <pre>{`<div>last name</div><input aria-label="last name" disabled />`}</pre>
              </li>
              <li className="list">
                Use a label that does not wrap the input, but includes the “for” attribute on the label and an id attribute on the input to associate the label with the input:<br></br>
                <pre>{`<label for="country">Country</label><select id="country">...</select>`}</pre>
              </li>
            </ul>

            <h3 className="headline__h3" id="emptylinks">
              Empty Links
            </h3>
            <p className="dropCap">Empty links are often created accidentally by wrapping an image with an anchor tag</p>
            <p className="code">
              <pre style={{ margin: "0" }}>{`<a href="concert-season.pdf" target="_blank">
   <img src="banner.jpg">
</a>
`}</pre>
            </p>
            <p>Screen readers will announce this as “link” with no description.</p>
            <h4 className="headline__h4">There are several ways to fix this</h4>
            <ul>
              <li className="list">
                Use the image’s alt text
                <pre>{`<a href="concert-season.pdf" target="_blank">
   <img src="banner.jpg" alt="Download our concert season brochure">
</a>`}</pre>
              </li>
              <li className="list">
                Use a visually hidden class that follows the current W3C/ARIA Authoring Practices pattern
                <pre>{`<a href="concert-season.pdf" target="_blank">
   <img src="banner.jpg">
   <span class="hidden-link-text">Get our new Concert Season Brochure</span>
</a>
`}</pre>
                The CSS class:
                <pre>{`.visually-hidden {
   position: absolute !important;
   width: 1px;
   height: 1px;
   padding: 0;
   margin: -1px;
   overflow: hidden;
   clip: rect(0, 0, 0, 0);
   white-space: nowrap;
   border: 0;
}
              `}</pre>
              </li>
            </ul>
            <p className="note">
              The old workaround was to add a span tag and position the text far off screen:
              <pre style={{ margin: "0", fontStyle: "normal", paddingBottom: "10px" }}>
                {`
.visually-hidden {
   position: absolute;
   left: -9999px;
}`}
              </pre>
              This technique can cause layout issues and should not be used.
            </p>

            <h3 className="headline__h3" id="emptybuttons">
              Empty Buttons
            </h3>
            <p className="dropCap">Like empty links, empty buttons are often created accidentally by wrapping an image with a button tag. Thus, there is no text that indicates what the button does.</p>
            <p className="code">
              <pre style={{ margin: "0" }}>{`<button aria-label="Delete item">
  <img src="trash.svg" alt="">
</button>
`}</pre>
            </p>
            <p>There are several ways to fix this, depending on context.</p>
            <ul>
              <li className="list">
                Provide text for the alt attribute
                <pre>{`<img src="trash.svg" alt="Delete item">`}</pre>
              </li>
              <li className="list">
                Add visually hidden text
                <pre>{`<button>
   <img src="trash" alt="">
   <span class="visually-hidden">Delete item</span>
</button>
`}</pre>
                The CSS class: same as above under Empty Links
              </li>
              <li className="list">
                Use Aria-label
                <pre>{`<button aria-label="Delete item">
   <img src="trash.svg" alt="">
</button>
`}</pre>
              </li>
            </ul>

            <h3 className="headline__h3" id="nodoclang">
              Missing Document Language
            </h3>
            <p className="dropCap">
              The document language is specified in the html tag:
              <pre>{`<html lang="en">`}</pre>
            </p>

            <p>
              When the language attribute is missing, the W3C validator will only issue a warning “Consider adding a lang attribute to the html start tag to declare the language of this document”, but the WAVE Evaluation Tool will treat a missing language attribute as an error. Screen readers use the attribute to determine the appropriate language to use when reading the content, and it “facilitates automatic translation of content.”<Footnote footnoteId={15}></Footnote>
            </p>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-1" id="annoyingforscreenreaderusers"></div>
          <div className="row__colspan-10">
            <h2 className="headline__h2" id="mostannoying">
              The Most Annoying for Screen Reader Users
            </h2>
            <p className="dropCap">
              After the big six, there are a few things that are especially annoying for screen reader users and/or keyboard users. Addressing these, along with the big six, should get your site to an AIM score of 9 or 10 out of 10.<Footnote footnoteId={16}></Footnote>
            </p>
            <ul>
              <li className="list">Improper heading structure (headings that skip levels)</li>
              <li className="list">No Skip to Main Content button</li>
              <li className="list">Content not accessible by keyboard</li>
            </ul>
            <h3 className="headline__h3" id="badheading">
              Improper Heading Structure
            </h3>
            <p className="dropCap">
              Headings organize the content on a page into a hierarchy. Proper heading structure is essential for screen reader software to work.<Footnote footnoteId={17}></Footnote> Every page needs to have a single heading level 1, typically the page name or the name of the article, and heading levels must not be skipped, as in going from an h1 to an h3.<Footnote footnoteId={18}></Footnote>
            </p>
            <h4 className="headline__h4">Guidelines for headings</h4>
            <ul>
              <li className="list">
                Every page should have the h1 tag, but no more than one h1 tag, and the text of that tag is usually the page name<Footnote footnoteId={19}></Footnote>
              </li>
              <li className="list">Other heading tags (h2, h3, etc.) can appear more than once</li>
              <li className="list">Heading tags must appear in order without skipping levels</li>
              <li className="list">
                When the design calls for a page without a heading because context can be determined visually, it is necessary to help screen readers determine the context by adding a visually hidden header.<Footnote footnoteId={20}></Footnote>
                <pre>{`<h1 class="screen-reader">This is a Hidden Heading</h1>
.screen-reader {
   position: absolute;
   width: 1px;
   height: 1px;
   padding: 0;
   margin: -1px;
   overflow: hidden;
   clip: rect(0, 0, 0, 0);
   white-space: nowrap;
   border-width:0;
}
`}</pre>
                <div className="note">
                  The usual reasoning for skipping heading levels is to get the desired font size. This can be achieved without skipping heading levels by creating a CSS rule.
                  <p>To make a heading level 2 look like heading level 3, find the values for font size and margin by inspecting the values for an actual h3 element:</p>
                  <pre style={{ margin: "0", paddingBottom: "10px" }}>{`h3 {                  user agent stylesheet
   display: block;
   font-size: 1.17em;
   margin-block-start: 1em;
   margin-block-end: 1em;
   margin-inline-start: 0px;
   margin-inline-end: 0px;
   font-weight: bold;
   unicode-bidi: isolate;
}`}</pre>
                  <p>Then create a CSS class for your custom h2 that sets the font size and margin:</p>
                  <pre style={{ margin: "0", fontStyle: "normal", paddingBottom: "10px" }}>{`.h2-h3 {
   font-size: 1.17em;
   margin: 1em 0;
}`}</pre>
                </div>
                <div className="note">
                  <h4 className="headline__h4">Don't Fake Headings</h4>
                  <p>A fake heading is text in a element that is not one of the heading elements (h1-h6) that is styled to look like a heading. Here is an example where a paragraph element was styled to look like a heading:</p>
                  <pre style={{ margin: "0", fontStyle: "normal", paddingBottom: "10px" }}>{`<p class="FakeHeading">Fake Heading</p>`}</pre>
                  <p>A screen reader will read out the fake heading as if it were normal text, which can be confusing to the user.</p>
                </div>
              </li>
            </ul>
            <h3 className="headline__h3" id="noskiplink">
              No Skip to Main Content Button
            </h3>
            <p className="dropCap">
              If there is redundant content such as a menu on a web page, there should be a way to skip that content.<Footnote footnoteId={21}></Footnote> A “Skip to Main Content” button, a.k.a. Skip Link, is a mechanism that will do that. The button is hidden until focus is set by tabbing, and it is the first focusable element on a page.
            </p>
            <p>There are many online sources that discuss ways to add a Skip Link or button that appears when a user hits the Tab key after navigating to a page.</p>
            <h4 className="headline__h4">Guidelines for adding a Skip to Main Content button or link</h4>
            <ul>
              <li className="list">The link or button must be the first focusable element – unless there is a cookie disclaimer or signup form, which must be navigable by keyboard also, upon closing the next tab should show the Skip Link</li>
              <li className="list">
                The Skip Link is styled to be positioned off the page until it receives focus; with button height of 50 pixels, position it a few pixels further off the page:
                <pre>{`.skiplink {
   position: absolute;
   height: 50px;
   left: 10px;
   transform: translateY(-55px);
}
`}</pre>
              </li>
              <li className="list">
                When the Skip Link receives focus, it is moved into view:
                <pre>{`.skiplink:focus {
   transform: translateY(50px);
}
`}</pre>
              </li>
              <li className="list">
                The Skip Link uses a hash and the value of the id attribute of the target element. For example:
                <pre>{`<a href="/#maincontent">Skip to main content</a>`}</pre>
                Typically, the link is styled with CSS
              </li>
              <li className="list">
                The target of the Skip Link has an ID, this is the ID referenced above in the Skip Link<pre>{`<div id="maincontent">...`}</pre>
              </li>
              <li className="list">
                When setting focus to the main content landmark, the user must be able to see where focus has landed. If focus is set to the H1 heading of the page, a focus ring should appear around that. If focus is set to a div tag that wraps the page, a focus ring should appear on the div. You can achieve that with the <code>:focus-visible</code> pseudo class:
                <pre>{`div:focus-visible {
   outline: 3px solid #ffffff;
   outline-offset: -3px;
   border-radius: 15px;
}
`}</pre>
                <div className="note">
                  <p>In a React application, selecting a menu item may leave focus on the menu item, rendering the Skip to Main Content feature useless. To fix this:</p>
                  <ol>
                    <li className="list">Make focusable the top level div, which is the container app, by adding a tabindex property and set to -1</li>
                    <li className="list">
                      Add a useEffect to each page that can be accessed from the menu and add code to set focus to the React app div:
                      <pre style={{ fontStyle: "normal" }}>{`useEffect(() => {
  if (app) {
    app.focus()
  }
}, [])
`}</pre>
                    </li>
                  </ol>
                </div>
              </li>
            </ul>
            <h3 className="headline__h3" id="nokbdaccess">
              Content Not Accessible by Keyboard
            </h3>
            <p className="dropCap">
              Keyboard users may not be able to use a mouse, or they may not have a mouse. To avoid relying on a mouse, all content should be accessible by keyboard.<Footnote footnoteId={22}></Footnote> (However, some users don’t use a keyboard either. Some use screen readers to read web content, so content should be understandable to a screen reader.)
            </p>
            <h4 className="headline__h4">Tabbing</h4>
            <p>
              Using the Tab key to tab through native buttons, links, and form elements (a.k.a. controls) is automatic but becomes problematic when the controls are hidden, such as when the navigation menu is hidden by a modal dialog and tabbing through menu items should not occur. It is important to prevent tabbing to hidden controls.<Footnote footnoteId={23}></Footnote> Tabbing through controls can be controlled by adding a tabindex attribute to the controls. A value of “-1” removes a control from the tab sequence, a value of “0” adds a control to the tab sequence.
            </p>
            <p className="note">Do not try to control the tab sequence by specifying values other than 0 and -1. The browser’s natural tab order is already the correct order, and overriding it almost always makes things worse, especially for accessibility.</p>
            <p>Items that are hidden should have tabbing disabled by setting the tabindex attribute to -1, otherwise users might inadvertently navigate away from the current page and become confused.</p>
            <p>
              When opening a modal dialog using the keyboard, closing the dialog must return the focus to the element that opened it.<Footnote footnoteId={24}></Footnote>
            </p>
            <h4 className="headline__h4">Keyboard Trap</h4>
            <p>
              An example of a keyboard trap is when a keyboard user can’t close a modal dialog because focus is on an element in the underlying page. For example, a modal popup appears automatically, asking the user to rate the site or to sign up for a newsletter, and the focus was not set to an element on the dialog.<Footnote footnoteId={25}></Footnote>
            </p>
            <h4 className="headline__h4">Focus Indicators</h4>
            <p>
              Without a focus style for interactive elements, keyboard users can’t tell where they are on a page.<Footnote footnoteId={26}></Footnote> It is common to use a hover style (:hover) that lets mouse users know when the cursor is hovering over an element, but it is common to remove the outline that appears when an element has focus for aesthetic reasons (the same outline appears by clicking the element).<Footnote footnoteId={27}></Footnote> That outline is important for keyboard users, so important that the <code>:focus-visible</code> selector was added so the developer can provide a visual indicator for keyboard users that does not appear when users tap or click on elements.
            </p>
            <h4 className="headline__h4">CSS Focus</h4>
            <p>
              Mouse users don’t need focus styles, and keyboard users don’t need hover styles. Combining <code>:hover</code> and <code>:focus-visible</code> selectors in a CSS rule makes managing the styles easy:<Footnote footnoteId={28}></Footnote>
              <pre>{`.button:hover,
.button:focus {
   outline: 2px solid #4da3ff;
   background-color: #eef7ff;
}
`}</pre>
            </p>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <h2 className="headline__h2" id="annoyingforgreateraudience">
              The Most Annoying for the Greater Audience
            </h2>
            <h3 className="headline__h3" id="smallfont">
              Small Font Size Specified in Pixel (px) Units
            </h3>
            <p className="dropCap">
              Small text is annoying for anyone with imperfect vision, and for people with good vision but who suffer from eye strain. It is best to follow the 16-pixel benchmark, which is 1em or 1rem.<Footnote footnoteId={29}></Footnote>
            </p>
            <div className="note">
              <p>Body text in printed material is commonly 12-points, where 1 point = 1/72 inch. Thus, 12-points = 12/72 inch.</p>
              <p>On a 96-dpi monitor, 12-point font in pixels = (12 x 96) / 72 = 16</p>
              <p>In relative units, 1rem = 16 pixels</p>
            </div>
            <p>
              While WCAG does not mention anything about units for font size, font size should never be specified in pixel (px) units, it should be specified in relative units (em or rem).<Footnote footnoteId={30}></Footnote> Why? Because if you use pixel units, the browser won’t honor the user’s custom font size choices.
            </p>
            <p className="note">
              W3C recommends using “em” units for text.<Footnote footnoteId={31}></Footnote>
            </p>
            <p>
              When the browser doesn’t honor the user’s choice of custom font size, the user must use zoom to enlarge the page. Zooming a page has downsides: images get larger, scroll bars may appear and the user may need to scroll to see the content. Furthermore, WCAG’s Accessibility Requirements for People with Low Vision advises that users should not need to zoom the page to increase text size: “User Need - Text Size: Users can change the text size (font size) of all text, without zooming the entire interface.”<Footnote footnoteId={32}></Footnote>
            </p>
            <p>Web developers should experiment with the browser’s font size settings and try to make their sites work correctly with the different choices.</p>
            <h4 className="headline__h4">General advice for text on websites:</h4>
            <ul>
              <li className="list">
                Do not justify text to make it fill the space evenly as this has adverse effects for screen readers; limit line length to about 80 characters<Footnote footnoteId={33}></Footnote>
              </li>
              <li className="list">
                Test that the contrast ratio between text and background is sufficient<Footnote footnoteId={34}></Footnote>
              </li>
              <li className="list">
                Use heading tags for heading text, do not style other tags to look like headings as those will be read as normal text by screen readers and furthermore prevents screen readers from navigating a page based on headings<Footnote footnoteId={35}></Footnote>
              </li>
            </ul>

            <h3 className="headline__h3" id="lineheight">
              Line Height
            </h3>
            <p className="dropCap">Line height, the spacing between two lines of text, is just as important as text size in its effect on accessibility. WCAG specifically calls out spacing for line height.</p>
            <ul>
              <li className="list">
                Level AA: Line spacing is at least 1.5 times the font size, and spacing following paragraphs is at least 2 times the font size<Footnote footnoteId={36}></Footnote>
              </li>
              <li className="list">
                Level AAA: Line spacing is at least space-and-a-half within paragraphs, and paragraph spacing is at least 1.5 times larger than the line spacing<Footnote footnoteId={37}></Footnote>
              </li>
            </ul>
            <p>
              In addition to the line spacing recommendation, the width of lines should be kept to about 80 characters.<Footnote footnoteId={38}></Footnote>
            </p>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <h2 className="headline__h2" id="additionalitems">
              Additional Items Important to Accessibility
            </h2>
            <p className="dropCap">The following are common enough to justify mentioning them in this final section on accessibility.</p>

            <h3 className="headline__h3" id="menuhovereffects">
              Menu Hover Effects
            </h3>
            <p className="dropCap">
              Typical menu functionality on websites is to expand the menu when the mouse pointer hovers over a top-level menu item. This can be problematic for users who rely on voice-to-text software because voice commands typically initiate a full interaction such as a click.<Footnote footnoteId={39}></Footnote>
            </p>

            <h3 className="headline__h3" id="color">
              Color
            </h3>
            <p className="dropCap">
              Status messages should not rely on color alone to infer status because the meaning is obscured for anyone with color blindness. When using color for status messages, it is essential to include wording or icons to supplement the meaning indicated by the color.<Footnote footnoteId={40}></Footnote>
            </p>

            <h3 className="headline__h3" id="clickarea">
              Click Area
            </h3>
            <p className="dropCap">
              WCAG 2.1 section 2.5.5 Target Size provides rules for target area of clickable or tappable elements. Some users have trouble clicking or tapping these elements when the target area is insufficient.<Footnote footnoteId={41}></Footnote>
            </p>
            <p>WCAG includes two rules that cover target area for pointer inputs:</p>
            <ol>
              <li className="list">2.5.5 Target Size (Enhanced) – level AAA, minimum target size of 44 pixels by 44 pixels</li>
              <li className="list">2.5.8 Target Size (Minimum) – level AA, minimum target size of 24 pixels by 24 pixels</li>
            </ol>

            <h3 className="headline__h3" id="nativehtml">
              Use Native HTML Tags
            </h3>
            <p className="dropCap">
              Native tags are recognized by screen readers and they have accessibility built-in.<Footnote footnoteId={42}></Footnote> The HTML and CSS standards modernized, and browsers began to standardize their support for them, so there is perhaps no need to create custom versions of HTML tags such as buttons and checkboxes.
            </p>

            <h3 className="headline__h3" id="cssborder">
              CSS Border
            </h3>
            <p className="dropCap">
              Borders should be at least 2px wide.<Footnote footnoteId={43}></Footnote>
            </p>
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
export default Blog2026_01_WebsiteDesignStandard2
