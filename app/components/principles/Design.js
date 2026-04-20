import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import Page from "../Page"
import DispatchContext from "../../DispatchContext"
import StateContext from "../../StateContext"
import Breadcrumb from "../Breadcrumb"
import Note from "../Note"
import GTag from "../GTag"
import GStructuredData from "../GStructuredData"

function Design() {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)

  appState.backgroundStyle == "light" ? (document.body.classList.remove("dark"), document.body.classList.add("light")) : (document.body.classList.remove("light"), document.body.classList.add("dark"))

  useEffect(() => {
    appDispatch({ type: "backgroundStyleChange", color: "light" })
    appDispatch({ type: "selectMenu", selectedMenu: "Software Design" })
    appDispatch({ type: "menuActiveCategory", menuActiveCategory: "0" })
    appDispatch({ type: "homePageClass", homePageClass: "page" })
    appDispatch({ type: "scrollTop", scrollTop: true })
    const app = document.getElementById("app")
    if (app) {
      // app.focus()
    }
  }, [])

  const breadcrumbs = [
    { id: 0, toText: "Home", toUrl: "/" },
    { id: 1, toText: "Principles", toUrl: "/principles" },
    { id: 2, toText: "Software Design", toUrl: "" }
  ]

  const notes = [
    { id: 1, listId: "footnote1", noteId: "#note1", text1: "Object-oriented Analysis and Design with Applications, 3rd ed., Grady Booch, Robert A. Maksimchuk, Michael W. Engle, Bobbi J. Young, Jim Conallen, Kelli A. Houston, 2007, section 6.2.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 2, listId: "footnote2", noteId: "#note2", text1: "Ibid., section 6.2.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 3, listId: "footnote3", noteId: "#note3", text1: "Ibid., section 6.3.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 4, listId: "footnote4", noteId: "#note4", text1: "Ibid., section 6.2.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 5, listId: "footnote5", noteId: "#note5", text1: "Zhu, Hong, 2005, Software Design Methodology: From Principles to Architectural Styles, p. 4.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 6, listId: "footnote6", noteId: "#note6", text1: "Ibid., p. 55.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 7, listId: "footnote7", noteId: "#note7", text1: "What Is Software Design? by Jack W. Reeves", text1IsLink: true, text1Link: "https://www.developerdotstar.com/mag/articles/reeves_design.html", text2: ", C++ Journal, 1992. Zhu, 2005, p7.", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 8, listId: "footnote8", noteId: "#note8", text1: "Booch et. al., 2007, section 1.2.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 9, listId: "footnote9", noteId: "#note9", text1: "Boehm states that it is unnecessary to write elaborate specifications for applications in areas supported by fourth-generation languages. (", text1IsLink: false, text1Link: "", text2: "Boehm, Barry W., 1988, A Spiral Model of Software Development and Enhancement. Computer, May: p. 61-72)", text2IsLink: true, text2Link: "https://www.cse.msu.edu/~cse435/Homework/HW3/boehm.pdf", text3: "); p. 63.", text3IsLink: false, text3Link: "" },
    { id: 10, listId: "footnote10", noteId: "#note10", text1: "Booch et. al., 2007, section 6.3.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 11, listId: "footnote11", noteId: "#note11", text1: "Ibid., section 6.2.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 12, listId: "footnote12", noteId: "#note12", text1: "Ibid., section 6.3.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 13, listId: "footnote13", noteId: "#note13", text1: "Ibid., section 6.3.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 14, listId: "footnote14", noteId: "#note14", text1: "Ibid., section 6.2.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 15, listId: "footnote15", noteId: "#note15", text1: "Ibid., section 6.3.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 16, listId: "footnote16", noteId: "#note16", text1: "Zhu, 2005, p. 55.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 17, listId: "footnote17", noteId: "#note17", text1: "Booch et. al., 2007, section 6.3.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 18, listId: "footnote18", noteId: "#note18", text1: "Ibid., section 6.3.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 19, listId: "footnote19", noteId: "#note19", text1: "Ibid., section 6.3.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 20, listId: "footnote20", noteId: "#note20", text1: "Ibid., section 6.2.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 21, listId: "footnote21", noteId: "#note21", text1: "Zhu, 2005, p. 40, presenting the eight requirements of good designs from Parnas, D. L. and Weiss, D. M., Active design reviews: principles and practices, Journal of Systems and Software, Vol. 7, p259, 1987.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 22, listId: "footnote22", noteId: "#note22", text1: "Budgen, David, 2003, Software Design (2nd ed.), Addison-Wesley, p. 23.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 23, listId: "footnote23", noteId: "#note23", text1: "Yourdon, Edward and Constantine, Larry L., 1979, Structured Design: Fundamentals of a Discipline of Computer Program and Systems Design, p. 73; Budgen, 2003, p. 82, using Parnass and Weiss’ (1987) eight requirements for a good design, item 2: Simple: The design should be ‘as simple as possible, but no simpler’.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 24, listId: "footnote24", noteId: "#note24", text1: "Zhu, 2005, p. 40.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 25, listId: "footnote25", noteId: "#note25", text1: "Budgen, 2003, p. 75.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 26, listId: "footnote26", noteId: "#note26", text1: "Zhu, 2005, p. 53.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 27, listId: "footnote27", noteId: "#note27", text1: "Booch et. al., 2007, section 1.2.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 28, listId: "footnote28", noteId: "#note28", text1: "Ibid., section 1.5.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 29, listId: "footnote29", noteId: "#note29", text1: "Zhu, 2005, p. 60.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 30, listId: "footnote30", noteId: "#note30", text1: "Booch et. al., 2007, Chapter 1.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 31, listId: "footnote31", noteId: "#note31", text1: "Ibid., section 1.5.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 32, listId: "footnote32", noteId: "#note32", text1: "Ibid., section 6.3.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 33, listId: "footnote33", noteId: "#note33", text1: "Zhu, 2005, p. 61", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 34, listId: "footnote34", noteId: "#note34", text1: "Ibid.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 35, listId: "footnote35", noteId: "#note35", text1: "Budgen, 2003, p. 234; Yourdon and Constantine, 1979, p. 378.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 36, listId: "footnote36", noteId: "#note36", text1: "Ibid., p. 77.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 37, listId: "footnote37", noteId: "#note37", text1: "Yourdon and Constantine, 1979, p. 135.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 38, listId: "footnote38", noteId: "#note38", text1: "Budgen, 2003, p. 78.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 39, listId: "footnote39", noteId: "#note39", text1: "Though work continues in an effort to change this - see for example: Bieman, J. M. and Kang, B-K, 1998, Measuring Design-level Cohesion: IEEE Transactions on Software Engineering, v. 24, no. 2, pp. 111-124, or Kramer, S., and Kaindl, H., 2004, Coupling and Cohesion Metrics for Knowledge-Based Systems Using Frames and Rules: ACM Transactions on Software Engineering and Methodology v. 13 no. 3, pp. 332-358.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 40, listId: "footnote40", noteId: "#note40", text1: "Budgen, 2003, p. 77.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 41, listId: "footnote41", noteId: "#note41", text1: "Ibid.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 42, listId: "footnote42", noteId: "#note42", text1: "Yourdon and Constantine, 1979, p. 85.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 43, listId: "footnote43", noteId: "#note43", text1: "Ibid.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 44, listId: "footnote44", noteId: "#note44", text1: "Ibid., p. 86.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 45, listId: "footnote45", noteId: "#note45", text1: "Ibid., p. 73.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 46, listId: "footnote46", noteId: "#note46", text1: "Ibid., p. 106.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 47, listId: "footnote47", noteId: "#note47", text1: "Budgen 2003, p. 78.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 48, listId: "footnote48", noteId: "#note48", text1: "Yourdon and Constantine, 1979, p. 106.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 49, listId: "footnote49", noteId: "#note49", text1: "Ibid.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 50, listId: "footnote50", noteId: "#note50", text1: "Budgen, 2003, p. 78.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 51, listId: "footnote51", noteId: "#note51", text1: "Yourdon and Constantine, 1979, p. 121.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 52, listId: "footnote52", noteId: "#note52", text1: "Budgen, 2003, p. 23.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 53, listId: "footnote53", noteId: "#note53", text1: "Butler, R. W., 2001, ", text1IsLink: false, text1Link: "", text2: "What is Formal Methods?", text2IsLink: true, text2Link: "https://shemesh.larc.nasa.gov/fm/fm-what.html", text3: "", text3IsLink: false, text3Link: "" },
    { id: 54, listId: "footnote54", noteId: "#note54", text1: "Yourdon and Constantine, 1979, p. 45.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 55, listId: "footnote55", noteId: "#note55", text1: "Ibid., p. 57.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 56, listId: "footnote56", noteId: "#note56", text1: "Booch et. al., 2007, section 5.1.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 57, listId: "footnote57", noteId: "#note57", text1: "Zhu, 2005, p. 62.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 58, listId: "footnote58", noteId: "#note58", text1: "Booch et. al., 2007, chapter 1.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 59, listId: "footnote59", noteId: "#note59", text1: "Zhu, 2005, p. 66.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 60, listId: "footnote60", noteId: "#note60", text1: "Ibid.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 61, listId: "footnote61", noteId: "#note61", text1: "Budgen, 2003, p. 23.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 62, listId: "footnote62", noteId: "#note62", text1: "Zhu, 2005, p. 66.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 63, listId: "footnote63", noteId: "#note63", text1: "Ibid., p. 35.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 64, listId: "footnote64", noteId: "#note64", text1: "Yourdon and Constantine, 1979, p. 15.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 65, listId: "footnote65", noteId: "#note65", text1: "Ibid., p. 26.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 66, listId: "footnote66", noteId: "#note66", text1: "Ibid., p. 59.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 67, listId: "footnote67", noteId: "#note67", text1: "Booch et. al, 2007, chapter 1.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 68, listId: "footnote68", noteId: "#note68", text1: "Ibid., section 2.2.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 69, listId: "footnote69", noteId: "#note69", text1: "Ibid.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 70, listId: "footnote70", noteId: "#note70", text1: "Ibid., section 2.3.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 71, listId: "footnote71", noteId: "#note71", text1: "Ibid., chapter 4 summary.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 72, listId: "footnote72", noteId: "#note72", text1: "Ibid., section 2.3.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 73, listId: "footnote73", noteId: "#note73", text1: "Zhu, 2005, p. 55.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 74, listId: "footnote74", noteId: "#note74", text1: "Ibid., p. 7.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 75, listId: "footnote75", noteId: "#note75", text1: "Gill Tyson, 2002, Planning Smarter: Creating Blueprint-Quality Software Specifications. Prentice Hall.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 76, listId: "footnote76", noteId: "#note76", text1: "Booch et. al., 2007, section 6.2.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" },
    { id: 77, listId: "footnote77", noteId: "#note77", text1: "Ibid., section 6.2.", text1IsLink: false, text1Link: "", text2: "", text2IsLink: false, text2Link: "", text3: "", text3IsLink: false, text3Link: "" }
  ]

  return (
    <Page title="Overview of Software Design">
      <GTag></GTag>
      <GStructuredData type="Article" datePublished="2025-03-20T08:01:24-07:00" dateModified="2025-11-05T12:20:12-08:00" headline="Software Design"></GStructuredData>
      <meta name="description" content="In this article you will find a discussion of software design concepts and an answer to the question what is software design, as well as a software design definition. Software design methods are discussed, as are software design strategies." />
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <div className="wrapper wrapper__article" id="maincontent">
        <h1 className="headline__h1-cg">Software Design</h1>
        <div className="headline__author">Gregory Swanson | Updated November 5, 2025</div>
        <div className="row row--gutters">
          <div className="row__colspan-4">
            <h2 className="headline__h2-contents">Contents</h2>
            <ul className="list--ul">
              <li className="list list--toc">
                <HashLink smooth to="#designDevLifecycle" href="#designDevLifecycle" className="list--toc--a">
                  Design in the Development Lifecycle
                </HashLink>
              </li>
              <li className="list list--toc">
                <HashLink smooth to="#whatIsSoftwareDesign" href="#whatIsSoftwareDesign" className="list--toc--a">
                  What is Software Design?
                </HashLink>
                <ul className="list-ul">
                  <li className="list list--toc">
                    <HashLink smooth to="#analysis" href="#analysis" className="list--toc--a">
                      Analysis
                    </HashLink>
                  </li>
                  <li className="list list--toc">
                    <HashLink smooth to="#design" href="#design" className="list--toc--a">
                      Design
                    </HashLink>
                  </li>
                </ul>
              </li>
              <li className="list list--toc">
                <HashLink smooth to="#creatingGoodDesigns" href="#creatingGoodDesigns" className="list--toc--a">
                  Creating Good Designs
                </HashLink>
                <ul className="list-ul">
                  <li className="list list--toc">
                    <HashLink smooth to="#decomposition" href="#decomposition" className="list--toc--a">
                      Decomposition
                    </HashLink>
                  </li>
                  <li className="list list--toc">
                    <HashLink smooth to="#composition" href="#composition" className="list--toc--a">
                      Composition
                    </HashLink>
                  </li>
                  <li className="list list--toc">
                    <HashLink smooth to="#modularity" href="#modularity" className="list--toc--a">
                      Separation of Concern: Modularity
                    </HashLink>
                  </li>
                  <li className="list list--toc">
                    <HashLink smooth to="#theDesignModel" href="#theDesignModel" className="list--toc--a">
                      Abstraction: The Design Model
                    </HashLink>
                  </li>
                  <li className="list list--toc">
                    <HashLink smooth to="#designPatterns" href="#designPatterns" className="list--toc--a">
                      Design Patterns
                    </HashLink>
                  </li>
                </ul>
              </li>
              <li className="list list--toc">
                <HashLink smooth to="#designMethods" href="#designMethods" className="list--toc--a">
                  Design Methods
                </HashLink>
                <ul className="list-ul">
                  <li className="list list--toc">
                    <HashLink smooth to="#structuredDesign" href="#structuredDesign" className="list--toc--a">
                      Structured Design
                    </HashLink>
                  </li>
                  <li className="list list--toc">
                    <HashLink smooth to="#objectOrientedDesign" href="#objectOrientedDesign" className="list--toc--a">
                      Object-oriented Design
                    </HashLink>
                  </li>
                </ul>
              </li>
              <li className="list list--toc">
                <HashLink smooth to="#designArtifacts" href="#designArtifacts" className="list--toc--a">
                  Design Artifacts
                </HashLink>
              </li>
              <li className="list list--toc">
                <HashLink smooth to="#notes" href="#notes" className="list--toc--a">
                  Notes
                </HashLink>
              </li>
            </ul>
          </div>
          <div className="row__colspan-7" id="designDevLifecycle">
            <p className="dropCap">This article explores software design. The focus of software design is on creating a specification that describes the protocol for elements discovered in user requirements, and that can be efficiently implemented.</p>
            <h2 className="headline__h2">Design in the Development Lifecycle</h2>
            <p className="dropCap">Software projects progress through several phases, from an initial phase where the project is scoped to a final phase of deployment. The names of these phases, of which there are usually four or five, depend on the software development process model in use; the terminology we will use is:</p>
            <ol>
              <li className="list">Scoping</li>
              <li className="list">Elaboration</li>
              <li className="list">Implementation</li>
              <li className="list">Deployment</li>
            </ol>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p>
              These phases occur in the context of a macro process, which is the overall development process.{" "}
              <HashLink to="#footnote1" className="footnote" id="note1">
                <sup>[1]</sup>
              </HashLink>{" "}
              In each phase, several micro process activities occur:
              <HashLink to="#footnote2" className="footnote" id="note2">
                <sup>[2]</sup>
              </HashLink>{" "}
            </p>
            <ul>
              <li className="list">Requirements</li>
              <li className="list">Analysis & Design</li>
              <li className="list">Implementation</li>
              <li className="list">Test</li>
              <li className="list">Deployment</li>
            </ul>

            <p id="note3">
              In an iterative development process, each phase except Scoping has two or more iterations in which each micro process activity occurs. The micro process activity may have iterations as well, moving from a high level of abstraction (enterprise level) to lower levels of abstraction (system, subsystem, component, etc.).
              <HashLink to="#footnote3" className="footnote">
                <sup>[3]</sup>
              </HashLink>{" "}
              The number of micro process iterations cannot be known beforehand.
            </p>

            <p id="note4">
              As mentioned above, work occurs on each micro process activity during each macro process phase, but as a project progresses through the macro process phases the micro process emphasis shifts from Requirements in early phases, through Analysis & Design, Implementation, Test, and finally Deployment in later phases.
              <HashLink to="#footnote4" className="footnote">
                <sup>[4]</sup>
              </HashLink>{" "}
              While the emphasis on Analysis & Design occurs in the early phases, it is common to make refinements to the architecture and to other analysis elements in later phases.
            </p>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12" id="whatIsSoftwareDesign">
            <h2 className="headline__h2">What is Software Design?</h2>
          </div>

          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p className="dropCap" id="note5">
              A design, whether for software or for something else, is a plan based on an understanding of what we are trying to accomplish. In software design, understanding comes from user requirements.
              <HashLink to="#footnote5" className="footnote">
                <sup>[5]</sup>
              </HashLink>{" "}
              User requirements are the input to software design, and the output is the design specification,
              <HashLink to="#footnote6" className="footnote" id="note6">
                <sup>[6]</sup>
              </HashLink>{" "}
              a.k.a. technical specification.
            </p>
            <p id="note7">
              Although there is a school of thought that says the product of software design is the source code,
              <HashLink to="#footnote7" className="footnote">
                <sup>[7]</sup>
              </HashLink>{" "}
              there are software systems that are not complex, systems that are “more tedious than difficult to develop”,
              <HashLink to="#footnote8" className="footnote" id="note8">
                <sup>[8]</sup>
              </HashLink>{" "}
              throwaway solutions not meant to be reused, repaired, or extended when requirements change. Such systems require little if any design beyond the source code.
              <HashLink to="#footnote9" className="footnote" id="note9">
                <sup>[9]</sup>
              </HashLink>
            </p>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12 row__colspan-12--no-top-pad">
            <h3 className="headline__h3" id="analysis">
              Analysis
            </h3>
          </div>

          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p className="dropCap" id="note10">
              Analysis is a design activity in which user requirements are examined, with a focus on behavior: what the system does, not how it does it. The purpose of analysis is “to provide a model of the system’s behavior.”
              <HashLink to="#footnote10" className="footnote">
                <sup>[10]</sup>
              </HashLink>{" "}
              UML diagrams are a good way to represent an analysis model because of the variety of views available with UML (requirements view, logical view, implementation view, process view, etc.), as well as the ability of UML to express dynamic behavior (activity diagrams, state machine diagrams, sequence diagrams, etc.).
            </p>
            <p id="note11">
              In the Scoping and Elaboration phases of development, the focus of analysis is on establishing the architectural framework and producing a description of the architecture, thus your focus in these phases is on analyzing requirements that concern the architecture.
              <HashLink to="#footnote11" className="footnote">
                <sup>[11]</sup>
              </HashLink>{" "}
              An architecture description should include a variety of perspectives, or views, each focused on describing the architectural elements of interest to a specific group of stakeholders.{" "}
              <HashLink to="#footnote12" className="footnote" id="note12">
                <sup>[12]</sup>
              </HashLink>{" "}
            </p>
            <p id="note13">
              During analysis, elements (classes, components, etc.) are identified and described. Element collaborations are defined, and responsibilities are distributed among the elements. Responsibilities might be described using freeform text: a single phrase or sentence. Analysis elements will often evolve as more is learned about the problem domain.{" "}
              <HashLink to="#footnote13" className="footnote">
                <sup>[13]</sup>
              </HashLink>{" "}
            </p>
            <p id="note14">
              Once you have a reasonably accurate and consistent representation of the system requirements with your analysis model, you should not linger on analysis but move on to design.{" "}
              <HashLink to="#footnote14" className="footnote">
                <sup>[14]</sup>
              </HashLink>{" "}
            </p>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12 row__colspan-12--no-top-pad">
            <h3 className="headline__h3" id="design">
              Design
            </h3>
          </div>

          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p className="dropCap" id="note15">
              While the focus of analysis is on what the system does, the focus of design is on how the system does it: creating elements (classes, components, etc.) that provide the behavior required by the analysis elements. The goal of design is to produce a specification that can be efficiently implemented.{" "}
              <HashLink to="#footnote15" className="footnote">
                <sup>[15]</sup>
              </HashLink>
              <sup>,</sup>{" "}
              <HashLink to="#footnote16" className="footnote" id="note16">
                <sup>[16]</sup>
              </HashLink>{" "}
            </p>
            <p id="note17">
              While the stakeholders for architectural documentation (the analysis/design model) are numerous, including personnel in support, operations, build and deployment, project managers, as well as developers and testers, the stakeholders who might need software specifications are few: developers and testers.{" "}
              <HashLink to="#footnote17" className="footnote">
                <sup>[17]</sup>
              </HashLink>{" "}
            </p>
            <p id="note18">
              A design specification for an element provides the protocol for the element: an interface of named operations. In earlier iterations of design, you may name the operations but ignore full signatures. In later iterations of design, you refine the protocol of the operations, and during detailed design the complete signature of operations are documented in pseudocode or even executable code of the implementation language that will be used.{" "}
              <HashLink to="#footnote18" className="footnote">
                <sup>[18]</sup>
              </HashLink>{" "}
              Element collaborations and dynamic behavior should be included in the specification. UML diagrams are very effective for communicating which elements collaborate and how they collaborate.{" "}
              <HashLink to="#footnote19" className="footnote" id="note19">
                <sup>[19]</sup>
              </HashLink>{" "}
            </p>
            <p id="note20">
              Once you have a specification detailed enough to implement and test you should not linger on design.
              <HashLink to="#footnote20" className="footnote">
                <sup>[20]</sup>
              </HashLink>{" "}
            </p>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12" id="creatingGoodDesigns">
            <h2 className="headline__h2">Creating Good Designs</h2>
          </div>

          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p className="dropCap" id="note21">
              A good design is well-structured, simple, efficient, adequate, flexible, and practical.
              <HashLink to="#footnote21" className="footnote">
                <sup>[21]</sup>
              </HashLink>{" "}
              There may be several solutions to arrive at a good design for a given set of user requirements;
              <HashLink to="#footnote22" className="footnote" id="note22">
                <sup>[22]</sup>
              </HashLink>{" "}
              the best solution, however, is the least complex solution,
              <HashLink to="#footnote23" className="footnote" id="note23">
                <sup>[23]</sup>
              </HashLink>{" "}
              or one that despite its complexity is “deeply understood by those responsible for its correctness”, in other words, it is “under intellectual control.”
              <HashLink to="#footnote24" className="footnote" id="note24">
                <sup>[24]</sup>
              </HashLink>{" "}
              Minimizing complexity in a design improves the quality of a design, and minimizes the greatest cost factors of software development: implementation, maintenance, and modification.
              <HashLink to="#footnote25" className="footnote" id="note25">
                <sup>[25]</sup>
              </HashLink>{" "}
            </p>
            <p id="note26">
              The two main tools for dealing with complexity in software design are separation of concern, which is achieved through modularity (coupling and cohesion), and abstraction, which is achieved with design models
              <HashLink to="#footnote26" className="footnote">
                <sup>[26]</sup>
              </HashLink>{" "}
              (graphical or mathematical). We begin to understand a system’s modularity as we decompose it.
            </p>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12 row__colspan-12--no-top-pad">
            <h3 className="headline__h3" id="decomposition">
              Decomposition
            </h3>
          </div>

          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p className="dropCap" id="note27">
              In distinguishing “industrial-strength software” systems, Booch et. al. said that “the complexity of such systems exceeds the human intellectual capacity”,
              <HashLink to="#footnote27" className="footnote">
                <sup>[27]</sup>
              </HashLink>{" "}
              and that the technique of decomposition is essential to manage it.
              <HashLink to="#footnote28" className="footnote" id="note28">
                <sup>[28]</sup>
              </HashLink>{" "}
              In software design, decomposition, also called top-down decomposition, is a procedure whereby a complex system is decomposed into smaller parts: beginning with the design problem, you decompose it into sub-problems which you can solve or, if still too complex, you decompose further until solvable.
              <HashLink to="#footnote29" className="footnote" id="note29">
                <sup>[29]</sup>
              </HashLink>{" "}
            </p>
            <p id="note30">
              In structured design, decomposition means decomposing major steps of a process into functions or modules. In object-oriented design, decomposition means decomposing the system into objects which derive from the vocabulary of the problem domain. Both designs solve the same problem in different ways;
              <HashLink to="#footnote30" className="footnote">
                <sup>[30]</sup>
              </HashLink>{" "}
              however, object-oriented systems have distinct advantages: they are resilient to change and better able to evolve over time, they reduce risk associated with complex software systems because they can evolve incrementally from smaller systems, and they address complexity with better support for separation of concerns.
              <HashLink to="#footnote31" className="footnote" id="note31">
                <sup>[31]</sup>
              </HashLink>{" "}
            </p>
            <p id="note32">
              Decomposition activities include:
              <HashLink to="#footnote32" className="footnote">
                <sup>[32]</sup>
              </HashLink>
            </p>
            <ul>
              <li className="list">Identify elements</li>
              <li className="list">Define collaborations between the elements</li>
              <li className="list">Define relationships between the elements</li>
              <li className="list">Define semantics of the elements</li>
            </ul>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12 row__colspan-12--no-top-pad">
            <h3 className="headline__h3" id="composition">
              Composition
            </h3>
          </div>

          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p className="dropCap" id="note33">
              Composition, also called bottom-up composition, is a reverse process of decomposition. In a compositional strategy, the entities of the problem are identified, classified and grouped. The relationships between groups are identified, forming components of a solution model. Further classification and grouping of components continues until the model is complete.
              <HashLink to="#footnote33" className="footnote">
                <sup>[33]</sup>
              </HashLink>{" "}
              Zhu states that object-oriented design uses the composition strategy.
              <HashLink to="#footnote34" className="footnote" id="note34">
                <sup>[34]</sup>
              </HashLink>
            </p>
            <p className="note dropCapNote" id="note35">
              Decomposition is a “top-down” strategy in which we begin with the big picture and elaborate the details. Composition is a “bottom-up” strategy in which we elaborate the details before considering the big picture. Stepwise refinement is a strategy where decomposition and/or composition are repeated.{" "}
              <HashLink to="#footnote35" className="footnote">
                <sup>[35]</sup>
              </HashLink>
            </p>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12 row__colspan-12--no-top-pad">
            <h3 className="headline__h3" id="modularity">
              Separation of Concern: Modularity
            </h3>
          </div>

          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p className="dropCap">Modularity of design, the result of decomposition and/or composition, means the extent to which it is divided into components that</p>
            <ul>
              <li className="list">are complete (i.e. can be used in another application without modification)</li>
              <li className="list">relate to the problem solution</li>
            </ul>
            <p id="note36">
              Modularity, which is a measure of maintainability, testability, and possibly usability and reliability,
              <HashLink to="#footnote36" className="footnote">
                <sup>[36]</sup>
              </HashLink>{" "}
              is quantified in terms of coupling and cohesion. There is no standardized empirical measure of coupling, and the degree of coupling and cohesion cannot be objectively assessed.
              <HashLink to="#footnote37" className="footnote" id="note37">
                <sup>[37]</sup>
                <sup>,</sup>
              </HashLink>{" "}
              <HashLink to="#footnote38" className="footnote" id="note38">
                <sup>[38]</sup>
                <sup>,</sup>
              </HashLink>{" "}
              <HashLink to="#footnote39" className="footnote" id="note39">
                <sup>[39]</sup>
              </HashLink>
            </p>
            <p className="note dropCapNote" id="note40">
              The terms coupling and cohesion were defined in the early 1970s to describe interconnectedness among subprogram units, but the concepts are valid for newer modular forms such as packages and classes.
              <HashLink to="#footnote40" className="footnote">
                <sup>[40]</sup>
              </HashLink>{" "}
            </p>

            <h4 className="headline__h4">Coupling</h4>
            <p className="dropCap" id="note41">
              Coupling is a measure of the type and strength of connections between modules.
              <HashLink to="#footnote41" className="footnote">
                <sup>[41]</sup>
                <sup>,</sup>
              </HashLink>{" "}
              <HashLink to="#footnote42" className="footnote" id="note42">
                <sup>[42]</sup>
              </HashLink>{" "}
              As coupling decreases, overall complexity decreases. A programmer who is coding, debugging or modifying one of two (or more) highly coupled modules will encounter a higher probability that changes will be required in the other modules as well.
              <HashLink to="#footnote43" className="footnote" id="note43">
                <sup>[43]</sup>
              </HashLink>{" "}
              Coupling is a relative measure indicated by four factors.
              <HashLink to="#footnote44" className="footnote" id="note44">
                <sup>[44]</sup>
              </HashLink>{" "}
              In decreasing magnitude of effect on coupling:
            </p>
            <ul>
              <li className="list">
                The nature of the connection between modules
                <ul>
                  <li className="list">Minimally connected (least coupling)</li>
                  <li className="list">Normally connected (somewhat higher coupling)</li>
                  <li className="list">Pathologically connected (highest coupling). These connections prevent us from understanding how a module works without understanding something about the program it's in.</li>
                </ul>
              </li>
              <li className="list">How complex the interface is (in human terms)</li>
              <li className="list">The type of information flows along the connection</li>
              <li className="list">Binding time of the connection</li>
            </ul>
            <p className="note dropCapNote" id="note45">
              Yourdon and Constantine describe factors of complexity, what they call "complexity in human terms": 1) size of a module; 2) number of decision-making statements; 3) span of data elements (e.g. between uses of a variable); 4) span of control flow (e.g. between an entry point and exit point).
              <HashLink to="#footnote45" className="footnote">
                <sup>[45]</sup>
              </HashLink>
            </p>

            <h4 className="headline__h4">Cohesion</h4>
            <p className="dropCap" id="note46">
              Cohesion is the degree of functional relatedness of the components of a module.
              <HashLink to="#footnote46" className="footnote">
                <sup>[46]</sup>
                <sup>,</sup>
              </HashLink>
              <HashLink to="#footnote47" className="footnote" id="note47">
                <sup>[47]</sup>
              </HashLink>{" "}
              Cohesion is directly related to a module's relation to the problem solution.
              <HashLink to="#footnote48" className="footnote" id="note48">
                <sup>[48]</sup>
              </HashLink>{" "}
              As cohesion increases, overall complexity decreases. Furthermore, as cohesion increases among the modules of a system, overall coupling decreases.
              <HashLink to="#footnote49" className="footnote" id="note49">
                <sup>[49]</sup>
              </HashLink>{" "}
              Knowledge of the presence of coupling is more useful to the designer than the extent of any form.
              <HashLink to="#footnote50" className="footnote" id="note50">
                <sup>[50]</sup>
                <sup>,</sup>
              </HashLink>{" "}
              <HashLink to="#footnote51" className="footnote" id="note51">
                <sup>[51]</sup>
              </HashLink>{" "}
            </p>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12 row__colspan-12--no-top-pad">
            <h3 className="headline__h3" id="theDesignModel">
              Abstraction: The Design Model
            </h3>
          </div>

          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p className="dropCap" id="note52">
              Design models have a fundamental role in software design
              <HashLink to="#footnote52" className="footnote">
                <sup>[52]</sup>
              </HashLink>{" "}
              (paraphrased):
            </p>
            <ul>
              <li className="list">They allow the designer to predict a system's behavior under different conditions</li>
              <li className="list">They allow the design to be expanded in a systematic way towards a detailed, complete design</li>
              <li className="list">They help with the transfer of knowledge</li>
              <li className="list">Practices for their description, construction, and elaboration are fundamental to software design</li>
            </ul>
            <p>There are two kinds of design model:</p>
            <ul>
              <li className="list">Graphical (systematic methods); each systematic method includes a set of graphical symbols for representing and archiving design data</li>
              <li className="list">
                Mathematical (formal methods); formal methods are mathematical; these are rarely used "because of the enormous complexity of real systems",
                <HashLink to="#footnote53" className="footnote" id="note53">
                  <sup>[53]</sup>
                </HashLink>{" "}
                and are not discussed
              </li>
            </ul>
            <h4 className="headline__h4">Graphical Notation</h4>
            <p className="dropCap">Older diagramming techniques were useful with the design methods of their origin, for example structure charts were useful with structured design. However, structure charts and other older techniques are deficient compared to newer techniques such as UML (Unified Modelling Language) in several ways:</p>
            <ul>
              <li className="list">
                They are intended to show structural and architectural information only
                <HashLink to="#footnote54" className="footnote" id="note54">
                  <sup>[54]</sup>
                </HashLink>
              </li>
              <li className="list">
                They are time-independent models of the hierarchical relationships of modules in a system
                <HashLink to="#footnote55" className="footnote" id="note55">
                  <sup>[55]</sup>
                </HashLink>{" "}
                and therefore cannot portray timing of operations
              </li>
              <li className="list">They do not have semantics for showing the sequence of execution</li>
              <li className="list">They do not have semantics for showing behavior or interactions</li>
              <li className="list">They have a small set of symbols for use with all views of the system</li>
            </ul>
            <p id="note56">
              Development of the Unified Modeling Language (UML) began as a melding of several object-oriented methodologies and was adopted by the Object Management Group (OMG) as a standard in 1997.
              <HashLink to="#footnote56" className="footnote">
                <sup>[56]</sup>
              </HashLink>{" "}
              UML includes diagrams to represent system structure, behavior, and interactions. UML diagrams can portray static as well as dynamic behavior.
            </p>
            <p className="note dropCapNote">There is no advantage to investigating structure charts or the diagramming techniques used with older design methods. That time would be better used to gain an understanding of UML.</p>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12 row__colspan-12--no-top-pad">
            <h3 className="headline__h3" id="designPatterns">
              Design Patterns
            </h3>
          </div>

          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p className="dropCap" id="note57">
              Some design problems have recurred often, and their solution recognized and documented in a design pattern. Design reuse occurs when a design pattern can be used to solve a new design problem.
              <HashLink to="#footnote57" className="footnote">
                <sup>[57]</sup>
              </HashLink>{" "}
            </p>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12" id="designMethods">
            <h2 className="headline__h2">Design Methods</h2>
          </div>

          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p className="dropCap" id="note58">
              Historically, computer capabilities have increased rapidly, allowing the evolution of programming languages with more capabilities. More powerful programming languages allowed construction of software of greater complexity, and design methods evolved to help developers cope with increasing complexity. The most influential of the early design methods was structured design;
              <HashLink to="#footnote58" className="footnote">
                <sup>[58]</sup>
              </HashLink>{" "}
              other influential methods include Jackson Structured Programming (JSP) and Jackson System Development (JSD).
              <HashLink to="#footnote59" className="footnote" id="note59">
                <sup>[59]</sup>
              </HashLink>{" "}
            </p>
            <p id="note60">
              As computer capabilities increased, hardware costs decreased, and computers proliferated. Software systems grew larger, and object-oriented methods began to replace structured methods. Object-oriented design is better suited than structured design particularly for larger software systems, is better at managing the complexity of these systems, and improves the reliability of software. Evolution of design methods is ongoing; more recently, a design method for software architectural design has emerged.
              <HashLink to="#footnote60" className="footnote">
                <sup>[60]</sup>
              </HashLink>{" "}
            </p>
            <p id="note61">
              As mentioned earlier, design methods can be categorized as follows:
              <HashLink to="#footnote61" className="footnote">
                <sup>[61]</sup>
              </HashLink>{" "}
            </p>
            <ol>
              <li className="list">Systematic methods (structured design, Jackson system development, object-oriented design, etc.)</li>
              <li className="list">Formal methods (mathematical)</li>
            </ol>
            <p id="note62">
              Design methods have a common structure that includes three elements:
              <HashLink to="#footnote62" className="footnote">
                <sup>[62]</sup>
              </HashLink>
            </p>
            <ol>
              <li className="list">A design representation (notation symbols)</li>
              <li className="list">A process (procedures and strategies)</li>
              <li className="list">Heuristics (guidelines developed from experience with specific problem domains)</li>
            </ol>
            <p>It is best to use a design method that complements the programming environment. Many languages in common use today have features required for object-oriented programming; indeed, some languages that did not have object-oriented features have adopted them.</p>
            <p className="note dropCapNote" id="note63">
              The choice of programming language is important as it “determines whether algorithms and data structures can be naturally and easily coded”, which impacts the probability of correct implementation by the developer.
              <HashLink to="#footnote63" className="footnote">
                <sup>[63]</sup>
              </HashLink>
            </p>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12" id="structuredDesign">
            <h3 className="headline__h3">Structured Design</h3>
          </div>

          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p className="dropCap" id="note64">
              Yourdon and Constantine describe structured design as "a collection of guidelines for distinguishing between good designs and bad designs, and a collection of techniques, strategies, and heuristics that generally leads to good designs...",
              <HashLink to="#footnote64" className="footnote">
                <sup>[64]</sup>
              </HashLink>{" "}
              and said that structured design is focused on how to properly partition the application, and how to properly organize the pieces of the system.
              <HashLink to="#footnote65" className="footnote" id="note65">
                <sup>[65]</sup>
              </HashLink>{" "}
              Proper partitioning and organization is achieved by keeping program modules and functions loosely coupled and highly cohesive. Furthermore, “the cost of coding, debugging, maintenance, and modification are minimized when the problem is subdivided into the smallest functional units that can be treated independently.”
              <HashLink to="#footnote66" className="footnote" id="note66">
                <sup>[66]</sup>
              </HashLink>
            </p>
            <p id="note67">
              Today we know that there are many shortcomings to structured design:
              <HashLink to="#footnote67" className="footnote">
                <sup>[67]</sup>
              </HashLink>{" "}
            </p>

            <ul>
              <li className="list">The concepts of data abstraction and information hiding are missing</li>
              <li className="list">It does not adequately deal with concurrency</li>
              <li className="list">It does not scale up well and is not appropriate for use with object-based and object-oriented programming languages</li>
            </ul>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12" id="objectOrientedDesign">
            <h3 className="headline__h3">Object-oriented Design</h3>
          </div>

          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p className="dropCap" id="note68">
              Object-oriented design evolved as a better strategy for managing the complexity of large software systems and proliferated as programming languages became available with or added support for objects, classes, and abstract data types. Object-oriented design is “a method of design encompassing the process of object-oriented decomposition and a notation for depicting both logical and physical as well as static and dynamic models of the system under design.”
              <HashLink to="#footnote68" className="footnote">
                <sup>[68]</sup>
              </HashLink>{" "}
            </p>
            <p id="note69">
              Object-oriented design uses the products of object-oriented analysis, which is: “…a method of analysis that examines requirements from the perspective of the classes and objects found in the vocabulary of the problem domain.”
              <HashLink to="#footnote69" className="footnote">
                <sup>[69]</sup>
              </HashLink>{" "}
              The conceptual framework of object-oriented design is the object model
              <HashLink to="#footnote70" className="footnote" id="note70">
                <sup>[70]</sup>
              </HashLink>{" "}
              which must include four main elements:
            </p>
            <ol>
              <li className="list">Abstraction</li>
              <li className="list">Encapsulation</li>
              <li className="list">Modularity</li>
              <li className="list">Hierarchy</li>
            </ol>
            <p>There are also three minor elements which are optional:</p>
            <ol>
              <li className="list">Typing</li>
              <li className="list">Concurrency</li>
              <li className="list">Persistence</li>
            </ol>
            <p id="note71">
              Identifying the classes and objects for the problem domain requires both discovery and invention.
              <HashLink to="#footnote71" className="footnote">
                <sup>[71]</sup>
              </HashLink>{" "}
            </p>
            <p id="note72">
              While there are other programming styles besides object-oriented, in which programs are organized on a conceptual model other than the object model, no single programming style is best for all kinds of applications; however, “this paradigm often serves as the architectural framework in which we employ other paradigms” and “is best suited to the broadest set of applications.”
              <HashLink to="#footnote72" className="footnote">
                <sup>[72]</sup>
              </HashLink>{" "}
            </p>
            <p>Designing software with objects and determining how they fit in a hierarchy requires some knowledge of object technology: definitions of the terms, understanding of an object-oriented language, perhaps a knowledge of the object model. These are beyond the scope of this article, and the reader is referred to the references to learn more.</p>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12" id="designArtifacts">
            <h2 className="headline__h2">Design Artifacts</h2>
          </div>

          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p className="dropCap" id="note73">
              The primary output of software design is the design specification,
              <HashLink to="#footnote73" className="footnote">
                <sup>[73]</sup>
              </HashLink>{" "}
              a.k.a. technical specification, often abbreviated technical spec. In general, design elements that should go into a technical spec include:
              <HashLink to="#footnote74" className="footnote" id="note74">
                <sup>[74]</sup>
              </HashLink>{" "}
            </p>
            <ul>
              <li className="list">A statement of the problem and objectives</li>
              <li className="list">Constraints</li>
              <li className="list">A description of the product</li>
              <li className="list">Rationale for the design</li>
              <li className="list">A plan of production</li>
              <li className="list">A description of usage</li>
            </ul>
            <p className="note dropCapNote">A technical spec is not the same as a functional specification (functional spec). Functional specs describe the functionality: what the system should do, how users interact with the system, without technical details. Technical specs describe the system architecture: the technologies used, database structure, modules, interactions between components, frameworks used, interactions via APIs, etc.</p>
            <p id="note75">
              In <i>Planning Smarter: Creating Blueprint-Quality Software Specifications</i>, Tyson suggests that a technical spec should be a software blueprint with the following elements:
              <HashLink to="#footnote75" className="footnote">
                <sup>[75]</sup>
              </HashLink>{" "}
            </p>
            <ul>
              <li className="list">A Data Dictionary to establish a clear, unambiguous vocabulary</li>
              <li className="list">Mockups or prototypes to lay out the floor plan of the screens</li>
              <li className="list">Pseudocode to unambiguously define operational logic</li>
              <li className="list">Precise definitions of data elements so that the forms and databases can be constructed</li>
              <li className="list">Logic to clearly define the rules for data translations</li>
              <li className="list">Narratives to describe relevant background</li>
            </ul>
            <p id="note76">
              Design decisions and rational should be documented “only if it will be read in the future.”
              <HashLink to="#footnote76" className="footnote">
                <sup>[76]</sup>
              </HashLink>{" "}
              Consider who may need the documentation (Booch suggests “integrators, database administrators, project managers, operational support teams, technical help desk staff… or people who will join the team in the future”).
              <HashLink to="#footnote77" className="footnote" id="note77">
                <sup>[77]</sup>
              </HashLink>{" "}
            </p>

            <p>Technical specs take time to create but they provide time-saving benefits:</p>
            <ul>
              <li className="list">The engineer writing the spec (typically the software developer) becomes familiar with the issues involved and will provide a better time estimate</li>
              <li className="list">The technical spec is an efficient medium for communication: when answers to questions can be found in the spec, there is no need to ask an engineer</li>
              <li className="list">The process of creating a technical spec and having the spec for reference during development, testing, and creating user documentation will ensure that the product works as expected and has fewer bugs</li>
            </ul>
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
export default Design
