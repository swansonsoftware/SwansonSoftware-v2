import React, { useContext, useEffect } from "react"
import { HashLink } from "react-router-hash-link"
import Page from "../Page"
import DispatchContext from "../../DispatchContext"
import StateContext from "../../StateContext"
import GTag from "../GTag"
import GStructuredData from "../GStructuredData"

function Requirements() {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)

  appState.backgroundStyle == "light" ? (document.body.classList.remove("dark"), document.body.classList.add("light")) : (document.body.classList.remove("light"), document.body.classList.add("dark"))

  useEffect(() => {
    appDispatch({ type: "backgroundStyleChange", color: "light" })
  }, [])

  return (
    <Page title="Requirements">
      <GTag></GTag>
      <GStructuredData type="Article" datePublished="2025-03-06T08:26:21-08:00" headline="Software Requirements"></GStructuredData>
      <meta name="description" content="Software requirements" />
      <div className="wrapper wrapper__article">
        <h1 className="headline__h1-cg">Software Requirements</h1>

        <div className="headline__author">Gregory Swanson | updated February 19, 2025</div>
        <div className="row row--gutters">
          <div className="row__colspan-4">
            <h3 className="headline__h3">Contents</h3>
            <ul className="list--ul">
              <li className="list list--toc">
                <HashLink to="#reqdocs" className="list--toc--a">
                  Requirements Documents
                </HashLink>
              </li>
              <li className="list list--toc">
                <HashLink to="#refs" className="list--toc--a">
                  References
                </HashLink>
              </li>
            </ul>
          </div>
          <div className="row__colspan-7">
            <p className="dropCap">Today, Requirements Engineering is a discipline. There is an International Requirements Engineering Board that sets guidelines for certification and accreditation of requirements engineers, as well as providing a syllabus for courses.</p>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p id="note1">
              Software requirements engineering, as a discipline, is needed more today than years ago because applications are much larger and more complex than they used to be, and because software has become ubiquitous, and the costs associated with failure have risen.
              <HashLink to="#footnote1" className="footnote">
                <sup>[1]</sup>
              </HashLink>{" "}
              There are, of course, some applications that are small enough and simple enough so that few if any requirements are needed. This is particularly true of applications for internal use.
            </p>
            <p>Determining the requirements for software requires that we understand how our software will benefit the user, how it makes their life better or how it makes it possible to do what was previously impossible. If we are automating a process that the intended users are doing, then we have a precedent to draw from. We can interview the users about their work processes and give them a questionnaire. This activity is called elicitation. If we are doing something innovative where there is no precedent to draw from, then end users may not be involved with elicitation; instead, the requirements may come from the innovator(s), perhaps the result of contentious meetings discussing functionality.</p>
            <p>
              An analysis phase follows elicitation, and following analysis, the specification of requirements in documents and drawings. Today it is common to use a tool that can organize documents and has search capability, like Atlassian’s Confluence or IBM’s Rational<sup>&reg;</sup> RequisitePro<sup>&reg;</sup>.
            </p>
            <p className="dropCap">Descriptions of software requirements processes need to demonstrate all the activities, so they take the approach that the requirements are for a new product in its entirety. However, in practice we usually need requirements for an update to an existing feature, or a totally new feature of an existing software product.</p>
            <p>In a smaller organization, the developer who will develop the feature may be tasked with determining and writing up requirements; in a larger organization, the activities might be divided among several team members, with input from in-house customer representatives: the sales team, pre-sales engineers, customer advocates and trainers, and support staff; these are the people who talk to customers and hear about the features they are looking for, or how existing features don’t work the way they need them to. Input also comes from the "domain experts": business analysts, project managers and others who know the most about the business and who can provide the clearest forward-looking vision of the product.</p>
            <p>In both cases the process ensures that everyone knows what is being built, what features will be available, what features will not be available, and that there is consensus. Used as a reference during development, requirements help avoid implementing features incorrectly or forgetting to implement a feature. Requirements are helpful references during testing and when creating user documentation. Another benefit that comes from generating requirements is better time estimates for development.</p>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12" id="reqdocs">
            <h2 className="headline__h2">Requirements Documents</h2>
          </div>

          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p>Software requirements documents fall under one of three categories:</p>
            <ul>
              <li className="list">Business requirements, for example the "Vision and Scope"</li>
              <li className="list">User requirements, for example Use Cases</li>
              <li className="list">Software requirements specification (SRS), for example functional requirements, non-functional requirements, and system requirements</li>
            </ul>
            <p>A good approach to writing these documents is to start with templates.</p>
            <h3 className="headline__h3">Business Requirements</h3>
            <p className="dropCap">For historical purposes it is good to document the origin of a product feature, why it is being created, perhaps who asked for it, what the business need is. Otherwise, sometime in the future you may find functionality that is present, and nobody knows what it is for; and if a customer is reporting a bug in that feature, you need to know what its intended purpose was, how it was intended to work, to determine whether the bug is a bug.</p>
            <h3 className="headline__h3">User Requirements</h3>
            <p className="dropCap"></p>
            <h3 className="headline__h3">Software Requirements</h3>
            <p className="dropCap">The Software Requirements Specification, or SRS, is also known as the functional spec. It includes functional requirements, nonfunctional requirements, and system requirements. Functional requirements describe the outward appearance and behavior of the software in detail. System requirements describe the environment in which the software will operate. Note that a technical specification is the software design document, it describes the internal behavior and design of the software and is not part of the functional requirements.</p>
            <p className="note">
              <span className="note">I was troubleshooting a report of a bug by a customer who said that the map pins in the map feature of our product were showing an error instead of a date. I found that the code used a date format that came from a setting that the end user administrator could make in the management console. I knew that the date conversions had been tested, so I began to suspect a browser bug. Later I checked the issue again and found that it was working correctly, and the browser version had been updated. Nobody could reproduce the issue, so the bug was closed as a browser issue.</span>
              <span className="note">About a year later the issue was reported again. I discovered that the date format that caused the issue worked correctly for the first 12 days of the month and then failed for the remainder of the month. The date format was standard in Europe that begins with a day instead of month. Probably more time went into investigating the bug, scheduling the software fix, and making the fix, than it would have taken to do a better job on the functional spec for the feature.</span>
            </p>
            <p>It is common for developers to produce the functional spec. That is good, it’s one way that developers gain domain knowledge, but often the process is crude, with little review and verification to ensure that the spec is complete and correct. Without review and verification, the feature may be incomplete, or may not work as expected, or will have bugs. But reviewing and verifying specs takes time, and it requires someone who has the knowledge to perform the review.</p>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-1"></div>
          <div className="row__colspan-10"></div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12 row__margin-bottom-0" id="refs">
            <h3 className="headline__h3">References</h3>
          </div>

          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <ol>
              <li id="footnote1">
                <span className="footnote__ref">
                  <HashLink to="#note1" className="footnote--cite">
                    ^
                  </HashLink>
                  <HashLink to="https://re-magazine.ireb.org/articles/learning-from-history-the-case-of-software-requirements-engineering">Learning from history: The case of Software Requirements Engineering</HashLink> – Requirements Engineering Magazine 2019
                </span>
              </li>
              <li id="footnote2">
                <span className="footnote__ref">
                  <HashLink to="#note2" className="footnote--cite">
                    ^
                  </HashLink>
                  Wiegers, Karl E., 1999, Software Requirements: Microsoft Press, 350 pages. ISBN: 0-7356-0631-5
                </span>
              </li>
            </ol>
          </div>
          <div className="row__colspan-1"></div>
        </div>
      </div>
    </Page>
  )
}
export default Requirements
