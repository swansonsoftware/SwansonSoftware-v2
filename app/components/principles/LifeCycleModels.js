import React, { useContext, useEffect } from "react"
import { HashLink } from "react-router-hash-link"
import Page from "../Page"
import DispatchContext from "../../DispatchContext"
import StateContext from "../../StateContext"
import Breadcrumb from "../Breadcrumb"
import ImageBlock from "../ImageBlock"
import ImageLightboxOverlay from "../ImageLighboxOverlay"
import GTag from "../GTag"
import GStructuredData from "../GStructuredData"

function LifecycleModels() {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)

  appState.backgroundStyle == "light" ? (document.body.classList.remove("dark"), document.body.classList.add("light")) : (document.body.classList.remove("light"), document.body.classList.add("dark"))

  useEffect(() => {
    appDispatch({ type: "backgroundStyleChange", color: "light" })
    appDispatch({ type: "selectMenu", selectedMenu: "Software Life Cycle Models" })
    appDispatch({ type: "menuActiveCategory", menuActiveCategory: "0" })
    appDispatch({ type: "homePageClass", homePageClass: "page" })
    const app = document.getElementById("app")
    if (app) {
      app.focus()
    }
  }, [])
  //
  const images = [
    { id: 1, lazy: false, src: "../../../../assets/images/principles/lifecycle-waterfall-model.svg", width: "1366", height: "780", alt: "The Waterfall model of software development", dataOrientation: "", dataPortraitsizes: "", captionHeading: "", caption: "Figure 1. The Waterfall Model. W. W. Royce, “Managing the Development of Large Software Systems: Concepts and Techniques,” Proc. Wescon, Aug. 1970.", dataSrcset: "" },
    { id: 2, lazy: false, src: "../../../../assets/images/principles/lifecycle-sashimi-model.svg", width: "440", height: "600", alt: "The Sashimi model of software development", dataOrientation: "", dataPortraitsizes: "", captionHeading: "", caption: "Figure 2. Sashimi model. Adapted from DeGrace and Stahl, 1990.", dataSrcset: "" },
    { id: 3, lazy: false, src: "../../../../assets/images/principles/lifecycle-spiral-model.svg", width: "900", height: "900", alt: "A Spiral centered on X-Y axis with quadrants labeled for phases of development: determine objectives, constraints, and alternatives; evaluate alternatives, identify, resolve risks; develop, verify next-level product; plan next phases.", dataOrientation: "", dataPortraitsizes: "", captionHeading: "", caption: "Figure 3. Spiral Model of the Software Process. B. W. Boehm, “A spiral model of software development and enhancement,” IEEE Computer, May 1988.", dataSrcset: "" },
    { id: 4, lazy: false, src: "../../../../assets/images/principles/lifecycle-staged-delivery-model.svg", width: "900", height: "900", alt: "Boxes stair-stepping down, labeled with phases of development: concept; requirements; design; and the last box repeated until finished: code, debug, test, delivery .", dataOrientation: "", dataPortraitsizes: "", captionHeading: "", caption: "Figure 4. Staged Delivery. From McConnell, 1996.", dataSrcset: "" },
    { id: 5, lazy: false, src: "../../../../assets/images/principles/lifecycle-evolutionary-delivery.svg", width: "900", height: "900", alt: "Boxes stair-stepping down, labeled with phases of development: concept; preliminary requirements; design; followed by a circular path of four boxes labeled develop a version, deliver a version, elicit customer feedback, and incorporate customer feedback, then exit to deliver final version.", dataOrientation: "", dataPortraitsizes: "", captionHeading: "", caption: "Figure 5. Evolutionary Delivery. From McConnell, 1996.", dataSrcset: "" },
    { id: 6, lazy: false, src: "../../../../assets/images/principles/lifecycle-basic-unit-cell.svg", width: "1280", height: "780", alt: "Rectangle with three boxes inside, left is entry, middle is task, right is exit. On left is an arrow with caption input, pointing to the rectangle, and on the right is an arrow pointing away from rectangle saying output. At bottom are lines showing feedback arrows in and out.", dataOrientation: "", dataPortraitsizes: "", captionHeading: "", caption: "Figure 6. The basic unit cell. Watts, 1989.", dataSrcset: "" },
    { id: 7, lazy: false, src: "../../../../assets/images/principles/lifecycle-tailored-spiral-b.svg", width: "1280", height: "780", alt: "Boxes showing a horizontal flow, starting with objectives, then alternatives and constraints, then risk analysis and prototype, then choosing a life cycle model, and finally acceptance test. The output from acceptance test can fail back to choosing a life cycle model, or succeed and continue to plan next phases which points back to objectives.", dataOrientation: "", dataPortraitsizes: "", captionHeading: "", caption: "Figure 7. Unit cell representation of Boehm’s spiral model of software development. Boehm states that “the spiral model can accommodate most previous models as special cases….” (Boehm, 1988, p. 64)", dataSrcset: "" },
    { id: 8, lazy: false, src: "../../../../assets/images/principles/lifecycle-tailored-spiral-w-waterfall.svg", width: "1280", height: "780", alt: "Boxes showing a horizontal flow, starting with objectives, then alternatives and constraints, then risk analysis and prototype, then stair-stepped boxes through the waterfall process of requirements, design, detailed design, code, unit test, and exiting to acceptance test. The output from acceptance test can fail back to detailed design, or succeed and continue to plan next phases which points back to objectives.", dataOrientation: "", dataPortraitsizes: "", captionHeading: "", caption: "Figure 8. Spiral model using a waterfall model.", dataSrcset: "" },
    { id: 9, lazy: false, src: "../../../../assets/images/principles/lifecycle-quick-kernel.svg", width: "1280", height: "780", alt: "Three horizontally aligned boxes labeled detailed design, implement, and unit test, with arrows showing flow from left to right to each box. Input at left is high level design, output at right is program, and between each box is a loop back labeled problems to the previous box.", dataOrientation: "", dataPortraitsizes: "", captionHeading: "", caption: "Figure 9. Quick Kernel Kq. Watts, 1989.", dataSrcset: "" },
    { id: 10, lazy: false, src: "../../../../assets/images/principles/lifecycle-implementation-cell.svg", width: "1280", height: "780", alt: "Four horizontally aligned boxes labeled detailed design, implement, and unit test, with arrows showing flow from left to right to each box. Boxes are labeled detailed design, design inspection, code, code inspection. Each box has a loop back labeled problems / approval to the previous box.", dataOrientation: "", dataPortraitsizes: "", captionHeading: "", caption: "Figure 10. Implementation Cell C1. Adapted from Watts, 1989. Cell 003 in this case is code (so it seems to contain the unit test as well); 003 represents what is being implemented, it could be writing test cases or other tasks. The inspection operator takes the name of the task.", dataSrcset: "" },
    { id: 11, lazy: false, src: "../../../../assets/images/principles/lifecycle-basic-unit-cell.svg", width: "640", height: "426", alt: "Unused", dataOrientation: "", dataPortraitsizes: "", captionHeading: "", caption: "Figure 11.", dataSrcset: "" }
  ]
  const breadcrumbs = [
    { id: 0, toText: "Home", toUrl: "/" },
    { id: 1, toText: "Principles", toUrl: "/principles" },
    { id: 2, toText: "Software Life Cycle Models", toUrl: "" }
  ]

  return (
    <Page title="Software Life Cycle Models">
      <ImageLightboxOverlay />
      <GTag></GTag>
      <GStructuredData type="Article" datePublished="2025-03-06T08:26:21-08:00" dateModified="2025-03-26T11:51:08-07:00" headline="Software Life Cycle"></GStructuredData>
      <meta name="description" content="The Software Life Cycle, or software process, a.k.a. software development process, its history, how it is used, a survey of software life cycles, and how to create a tailored model specific to an organization." />
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <div className="wrapper wrapper__article" id="maincontent">
        <h1 className="headline__h1-cg">Software Life Cycle</h1>
        <div className="headline__author">Gregory Swanson | updated April, 2026</div>
        <div className="row row--gutters">
          <div className="row__colspan-5">
            <h2 className="headline__h2-contents">Contents</h2>
            <ul className="list--ul">
              <li className="list list--toc">
                <HashLink to="#whatisslc" className="list--toc--a">
                  What is Software Life Cycle?
                </HashLink>
              </li>
              <li className="list list--toc">
                <HashLink to="#thesdlc" className="list--toc--a">
                  Origins of the Software Life Cycle
                </HashLink>
              </li>
              <li className="list list--toc">
                <HashLink to="#processarch" className="list--toc--a">
                  Software Process Architecture
                </HashLink>
              </li>
              <li className="list list--toc">
                <HashLink to="#lifecyclemodels" className="list--toc--a">
                  Software Life Cycle Models
                </HashLink>
              </li>
              <li className="list list--toc">
                <HashLink to="#sdlcmodels" className="list--toc--a">
                  A Few Models
                </HashLink>
                <ul className="list-ul">
                  <li className="list list--toc">
                    <HashLink to="#codeandfix" className="list--toc--a">
                      Code and Fix
                    </HashLink>
                  </li>
                  <li className="list list--toc">
                    <HashLink to="#waterfall" className="list--toc--a">
                      Waterfall
                    </HashLink>
                  </li>
                  <li className="list list--toc">
                    <HashLink to="#sashimi" className="list--toc--a">
                      Sashimi
                    </HashLink>
                  </li>
                  <li className="list list--toc">
                    <HashLink to="#spiralmodel" className="list--toc--a">
                      Spiral
                    </HashLink>
                  </li>
                  <li className="list list--toc">
                    <HashLink to="#stageddeliv" className="list--toc--a">
                      Staged Delivery
                    </HashLink>
                  </li>
                  <li className="list list--toc">
                    <HashLink to="#evolutionaryproto" className="list--toc--a">
                      Evolutionary Prototyping
                    </HashLink>
                  </li>
                  <li className="list list--toc">
                    <HashLink to="#evolutionarydeliv" className="list--toc--a">
                      Evolutionary Delivery
                    </HashLink>
                  </li>
                  <li className="list list--toc">
                    <HashLink to="#tailoredmodel" className="list--toc--a">
                      Tailored Process Model
                    </HashLink>
                    <ul className="list-ul">
                      <li className="list list--toc">
                        <HashLink to="#tailoredulevel" className="list--toc--a">
                          U-level Model
                        </HashLink>
                      </li>
                      <li className="list list--toc">
                        <HashLink to="#tailoredwlevel" className="list--toc--a">
                          W-level Model
                        </HashLink>
                      </li>
                      <li className="list list--toc">
                        <HashLink to="#tailoredalevel" className="list--toc--a">
                          A-level Model
                        </HashLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="list list--toc">
                <HashLink to="#choosemodel" className="list--toc--a">
                  Choosing a Model
                </HashLink>
              </li>
              <li className="list list--toc">
                <HashLink to="#notes" className="list--toc--a">
                  Notes
                </HashLink>
              </li>
            </ul>
          </div>
          <div className="row__colspan-6" id="whatisslc">
            <h2 className="headline__h2">What is Software Life Cycle?</h2>
            <p className="dropCap" id="note1">
              The software life cycle describes the phases which a software system goes through during its lifespan and includes all stages from “the conception of ideas through to the retirement of a system.”
              <HashLink to="#footnote1" className="footnote">
                <sup>[1]</sup>
              </HashLink>{" "}
              It “sets the framework for the evolution of a complex system from a perceived need to operation and disposal.”{" "}
              <HashLink to="#footnote2" className="footnote">
                <sup>[2]</sup>
              </HashLink>
            </p>
            <p>The software life cycle applies to all types of software; however, not all software requires the same life cycle processes. For example, a large software system may require project planning and risk management processes that are not needed with a small software application.</p>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-1"></div>
          <div className="row__colspan-10" id="note3">
            <p>
              Software life cycle processes were formalized in ISO/IEC 12207 “<i>Systems and software engineering – Software life cycle processes</i>,” which provides “a comprehensive set [of processes] from which an organization can construct software life cycle models appropriate to its products and services.”{" "}
              <HashLink to="#footnote3" className="footnote">
                <sup>[3]</sup>
              </HashLink>
            </p>
            <p id="note4">
              A software life cycle model describes one approach for developing software; different software life cycle models describe different approaches, emphasizing techniques to reduce specific types of risk such as a constrained project schedule, incomplete requirements, a weak team, etc.{" "}
              <HashLink to="#footnote4" className="footnote">
                <sup>[4]</sup>
              </HashLink>
            </p>
            <p id="note5">
              In the context of software life cycle, “life cycle” is often written as one word, as in software lifecycle. Another term, software development life cycle (SDLC), is often used instead of software life cycle. The terms software life cycle and software development life cycle are used interchangeably today, whatever distinction there is has little importance. The acronym SDLC more commonly refers to system development life cycle, but the two are so closely related that ISO/IEC state that their two documents, Software life cycle processes and System life cycle processes, “…have the same process model, share most activities and tasks, and differ primarily in descriptive notes.”{" "}
              <HashLink to="#footnote5" className="footnote">
                <sup>[5]</sup>
              </HashLink>
            </p>
            <p className="note dropCapNote" id="note6">
              “The term ‘system life cycle’ is commonly used to refer to the stepwise evolution of a new system from concept through development and on to production, operation, and ultimate disposal.”{" "}
              <HashLink to="#footnote6" className="footnote">
                <sup>[6]</sup>
              </HashLink>
            </p>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12" id="thesdlc">
            <h2 className="headline__h2">Origins of the Software Life Cycle</h2>
          </div>

          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p id="note7" className="dropCap">
              The Software Life Cycle grew from a need to get control of the problems that plagued software development beginning in the 1950s when computer use in both public and government organizations was increasing dramatically, with corresponding increase in software production.
              <HashLink to="#footnote7" className="footnote">
                <sup>[7]</sup>
              </HashLink>
            </p>
            <p id="note8">
              Software development was an emerging field, and many projects failed due to the assumption that making software was like “predictable manufacturing” which expects “low degrees of novelty or change and high rates of repeated identical or near-identical creation”
              <HashLink to="#footnote8" className="footnote">
                <sup>[8]</sup>
              </HashLink>
              , and that software requirements could be complete and unchanging.
              <HashLink to="#footnote9" className="footnote">
                <sup>[9]</sup>
              </HashLink>{" "}
              Many failed projects were following what would later be called the waterfall model of software development.
            </p>
            <p id="note11">A waterfall model can work when the development project can be defined well, but that is often not the case, as evidenced in remarks by attendees of the NATO Software Engineering Conference in 1968, which reverberated for decades after:</p>
            <ul>
              <li className="list">
                There is a “widening gap…between promises to users and performance achieved… and between estimates of software costs and expenditures.”
                <HashLink to="#footnote10" className="footnote">
                  <sup>[10]</sup>
                </HashLink>
              </li>
              <li className="list">
                “It seems almost automatic that software is never produced on time, never meets specification, and always exceeds its estimated cost.”{" "}
                <HashLink to="#footnote11" className="footnote">
                  <sup>[11]</sup>
                </HashLink>
              </li>
            </ul>
            <p id="note12" className="note dropCapNote">
              NATO Science Committee established the Study Group on Computer Science (Study Group), which was asked to assess “the entire field of computer science”
              <HashLink to="#footnote12" className="footnote">
                <sup>[12]</sup>
              </HashLink>
              , but instead focused on the problems with software.
              <HashLink to="#footnote13" className="footnote">
                <sup>[13]</sup>
              </HashLink>
              <br></br>
              <br></br>
              The Study Group recommended that a working conference be held on Software Engineering, a provocative name for a conference at that time because the field of Software Engineering did not exist. The name was purposely chosen to imply that the manufacturing of software requires a theoretical foundation. The recommendation led to the 1968 NATO Software Engineering Conference at Garmisch, Germany (1968 NATO SEC).
            </p>
            <p id="note14">
              The 1968 NATO SEC raised awareness of the issues facing software development. Comments by participants of the 1968 NATO SEC questioned whether software engineering is different from systems engineering
              <HashLink to="#footnote14" className="footnote">
                <sup>[14]</sup>
              </HashLink>
              , and lamented a lack of disciplined engineering methods.
              <HashLink to="#footnote15" className="footnote">
                <sup>[15]</sup>
              </HashLink>{" "}
              In fact, iterative and incremental development methods were known to improve software project outcomes and were in use at the time of the 1968 NATO SEC
              <HashLink to="#footnote16" className="footnote">
                <sup>[16]</sup>
              </HashLink>
              , and the report includes some examples of successful experiences developing software where those methods were used.
              <HashLink to="#footnote17" className="footnote">
                <sup>[17]</sup>
              </HashLink>
            </p>
            <div className="note" id="note18">
              <p>
                “The design process is an iterative one. I will tell you one thing which can go wrong with it if you are not in the laboratory. In my terms design consists of:{" "}
                <HashLink to="#footnote18" className="footnote">
                  <sup>[18]</sup>
                </HashLink>
              </p>
              <ol>
                <li className="list">Flowchart until you think you understand the problem.</li>
                <li className="list">Write code until you realize that you don’t.</li>
                <li className="list">Go back and re-do the flowchart.</li>
                <li className="list">Write some more code and iterate to what you feel is the correct solution.”</li>
              </ol>
            </div>
            <p id="note19">
              In 1970, Winston Royce published <i>Managing the Development of Large Software Systems</i>
              <HashLink to="#footnote19" className="footnote">
                <sup>[19]</sup>
              </HashLink>
              , often cited as the origin of the waterfall model of the software life cycle
              <HashLink to="#footnote20" className="footnote">
                <sup>[20]</sup>
              </HashLink>
              , although Royce does not mention waterfall or software life cycle in his paper. Boehm states that the waterfall model was a refinement of the stagewise model introduced in 1956
              <HashLink to="#footnote21" className="footnote">
                <sup>[21]</sup>
              </HashLink>
              , however, Royce’s model is often cited as the first model because it provided a more formalized description. The waterfall model is illustrated below in figure 1.
            </p>
            <p id="note22">
              The waterfall model has many problems, for example, its structure is rigid and sequential; it’s expensive to use; it takes a long time; etc.
              <HashLink to="#footnote22" className="footnote">
                <sup>[22]</sup>
              </HashLink>
              , but the primary issue with the waterfall model is that success rests on a near impossibility: complete and unchanging requirements.
              <HashLink to="#footnote23" className="footnote">
                <sup>[23]</sup>
              </HashLink>{" "}
              It is certain that some software developers of the day “thought waterfalling of a huge project was rather stupid”
              <HashLink to="#footnote24" className="footnote">
                <sup>[24]</sup>
              </HashLink>
              , it is likely that many others had the same opinion. Attempts were made through the 1970s and early 1980s to address the waterfall model’s problems by extending it with incremental development, evolutionary changes, risk analysis, etc.
              <HashLink to="#footnote25" className="footnote">
                <sup>[25]</sup>
              </HashLink>{" "}
              Indeed, Royce’s paper does not recommend a waterfall approach, it recommends adding iterative practices to a waterfall approach.
              <HashLink to="#footnote26" className="footnote">
                <sup>[26]</sup>
              </HashLink>
            </p>
            <p id="note27">
              According to Larman, “iterative development had replaced the waterfall on major projects by the 1970s.”
              <HashLink to="#footnote27" className="footnote">
                <sup>[27]</sup>
              </HashLink>{" "}
              But as new models based on iterative and incremental methods began to appear in the 1970s and 80s
              <HashLink to="#footnote28" className="footnote">
                <sup>[28]</sup>
              </HashLink>
              , use of the waterfall model continued.
              <HashLink to="#footnote29" className="footnote">
                <sup>[29]</sup>
              </HashLink>
            </p>
            <div className="note">
              <p className="dropCapNote" id="note30">
                Use of the waterfall model continued for many reasons. The following are adapted from Larman (2004), chapter 6, under “Why Did Waterfall Promotion Continue?”.
              </p>
              <ul>
                <li className="list">Royce’s paper was not read, or not read correctly</li>
                <li className="list">The single-pass waterfall has an alluring simplicity that is easy to remember compared to the more complex iterative and incremental development methods</li>
                <li className="list">
                  It was thought that software projects could follow the same paradigm of predictable manufacturing where “problems with low degrees of novelty or change, and high rates of repeated identical or near-identical creation” dominate, but software development is dominated by problems with “high degrees of novelty, creativity, and change, and no previous identical cases from which to derive estimates or schedules”
                  <HashLink to="#footnote30" className="footnote">
                    <sup>[30]</sup>
                  </HashLink>
                </li>
                <li className="list">The requirements engineering establishment and other groups continued to promote big up-front specification goals</li>
                <li className="list">The Capability Maturity Model (CMM) inadvertently promoted “gated, document-driven, waterfall practices” and “early CMM discussions had a tone of document and plan-driven, phase-oriented, and predictive planning.”</li>
              </ul>
            </div>
            <p id="note31">
              Another reason for continued use of the waterfall was that it was mandated in DoD-Std-2167 for software vendors contracted for developing mission-critical systems for the U.S. Department of Defense. Although an update was released in 1988, DoD-Std-2167A, with the intention of allowing alternatives to the waterfall model, unfortunate wording in the updated standard prevented that, as “overseers and contractors often view the updated DoD-Std-2167A...as the epitome of a waterfall specification.”
              <HashLink to="#footnote31" className="footnote">
                <sup>[31]</sup>
              </HashLink>{" "}
              Use of the waterfall method was finally discouraged (for government and military software vendors) by Mil-Std-498, which superseded DoD-Std-2167A and was released in 1994 with the goal of “encouraging evolutionary acquisition and incremental and iterative development.”
              <HashLink to="#footnote32" className="footnote">
                <sup>[32]</sup>
              </HashLink>
            </p>
            <p id="note33">
              A variety of new models appeared in the 1990s, including scrum, DSDM (Dynamic Systems Development Method), XP (Extreme Programming), UP (Unified Process), and others. While the development practices vary between these methods, they had evolved as awareness of the idiosyncrasies of software spread
              <HashLink to="#footnote33" className="footnote">
                <sup>[33]</sup>
              </HashLink>
              , and therefore these new models would “promote practices and principles that reflect an agile sensibility of simplicity, lightness, communication, self-directed teams, programming over documenting, and more.”
              <HashLink to="#footnote34" className="footnote">
                <sup>[34]</sup>
              </HashLink>
            </p>
            <p id="note35">
              Larman states that “Agile methods are a subset of iterative and evolutionary methods”
              <HashLink to="#footnote35" className="footnote">
                <sup>[35]</sup>
              </HashLink>
              , and that “IID [iterative and incremental development] is at the core of all the agile methods…”. Some key agile practices include:
            </p>
            <ul id="note36">
              <li className="list">
                “Timeboxed iterations”
                <HashLink to="#footnote36" className="footnote">
                  <sup>[36]</sup>
                </HashLink>{" "}
                “All the modern IID methods (including Scrum, XP, and so forth) either require or strongly advise timeboxing the iterations.”
                <HashLink to="#footnote37" className="footnote">
                  <sup>[37]</sup>
                </HashLink>
              </li>
              <li className="list">
                “Adaptive, evolutionary refinement of plans and goals”
                <HashLink to="#footnote38" className="footnote">
                  <sup>[38]</sup>
                </HashLink>
              </li>
              <li className="list">
                “Common project room”
                <HashLink to="#footnote39" className="footnote">
                  <sup>[39]</sup>
                </HashLink>
              </li>
              <li className="list">
                “pair programming”
                <HashLink to="#footnote40" className="footnote">
                  <sup>[40]</sup>
                </HashLink>
              </li>
              <li className="list">
                “Daily standup meeting”
                <HashLink to="#footnote41" className="footnote">
                  <sup>[41]</sup>
                </HashLink>
              </li>
              <li className="list">Continual integration (CI)</li>
              <li className="list">Test-driven development</li>
            </ul>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12" id="processarch">
            <h2 className="headline__h2">Software Process Architecture</h2>
          </div>
          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p className="dropCap" id="note42">
              A software development life cycle model, in more generic terms, is a software process model, and a software process model is one specific embodiment of software process architecture.
              <HashLink to="#footnote42" className="footnote">
                <sup>[42]</sup>
              </HashLink>{" "}
              In some circles, software process architecture is referred to as a metamodel. Software process architecture is a standard set of software process steps for producing software, tailored to the software organization’s needs, and serves as a template for creating custom process models.
              <HashLink to="#footnote43" className="footnote">
                <sup>[43]</sup>
              </HashLink>
            </p>
            <div className="note">
              <p className="dropCapNote" id="note44">
                Software process architecture is the framework that is used to “define the basic elements [of the software process], how they relate, and how they are decomposed into greater detail.”
                <HashLink to="#footnote44" className="footnote">
                  <sup>[44]</sup>
                </HashLink>
              </p>
              <p>
                Software process is “the set of activities, methods, and practices that are used in the production and evolution of software”
                <HashLink to="#footnote45" className="footnote">
                  <sup>[45]</sup>
                </HashLink>
              </p>
              <p>
                “The primary functions of a software process model are to determine the order of the stages involved in software development and evolution and to establish the transition criteria for progressing from one stage to the next.”
                <HashLink to="#footnote46" className="footnote">
                  <sup>[46]</sup>
                </HashLink>
              </p>
            </div>

            <p id="note47">
              Watts advises treating the design of process architecture the same as the development of a new complex system: start with a high-level prototype and refine it as you gain knowledge and experience.
              <HashLink to="#footnote47" className="footnote">
                <sup>[47]</sup>
              </HashLink>
            </p>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12" id="lifecyclemodels">
            <h2 className="headline__h2">Software Life Cycle Models</h2>
          </div>
          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p className="dropCap" id="note48">
              A life cycle model determines the way the stages of software development are carried out. There are four main stages of software development, and they are present in each software life cycle model:
              <HashLink to="#footnote48" className="footnote">
                <sup>[48]</sup>
              </HashLink>
            </p>
            <ul>
              <li className="list">Analysis</li>
              <li className="list">Design</li>
              <li className="list">Coding</li>
              <li className="list">Testing</li>
            </ul>
            <p id="note49">
              The difference between life cycle models is “mainly in the manner in which the [development] steps are carried out, the sequencing of activities, and in some cases the form in which they are represented.”
              <HashLink to="#footnote49" className="footnote">
                <sup>[49]</sup>
              </HashLink>
            </p>
            <p className="note dropCapNote" id="note50">
              Terminology used in the naming of these stages, and in the naming of development steps, is not consistent between software life cycle models.
              <HashLink to="#footnote50" className="footnote">
                <sup>[50]</sup>
              </HashLink>{" "}
              For example, the unified process names these stages inception, elaboration, construction, and transition.
            </p>
            <p id="note51">
              These models are not mutually exclusive; models can be switched as a project evolves, to make use of model features that apply to a specific situation.
              <HashLink to="#footnote51" className="footnote">
                <sup>[51]</sup>
              </HashLink>{" "}
              Boehm designed the Spiral model to accommodate other models as “special cases”
              <HashLink to="#footnote52" className="footnote">
                <sup>[52]</sup>
              </HashLink>
              , and describes how one would use evolutionary development in one situation, and a waterfall approach in another.
              <HashLink to="#footnote53" className="footnote">
                <sup>[53]</sup>
              </HashLink>
            </p>
            <p id="note54">
              Each software development life cycle model is represented as starting an entirely new system, which is almost never the case.
              <HashLink to="#footnote54" className="footnote">
                <sup>[54]</sup>
              </HashLink>{" "}
              The initiation phase is emphasized more when developing a new business solution than when developing embedded software for hardware components.
              <HashLink to="#footnote55" className="footnote">
                <sup>[55]</sup>
              </HashLink>{" "}
              For embedded system software, the development life cycle begins with the requirements phase.
              <HashLink to="#footnote56" className="footnote">
                <sup>[56]</sup>
              </HashLink>{" "}
              For a maintenance update for existing software, adjust the starting point of the model, skipping phases that are not needed. For small standalone scripts, small applications, and perhaps when the development team is small, software process needs are minimal.
              <HashLink to="#footnote57" className="footnote">
                <sup>[57]</sup>
              </HashLink>
            </p>
            <p id="note58">
              If we have learned anything about software development, we have learned that a new software solution may solve a problem, but in solving one problem it often creates new problems, perhaps because the original problem was not fully understood, or perhaps because the solution changes the way the work is done. The solution needs to be experienced, then adjusted to achieve the solution that works.
              <HashLink to="#footnote58" className="footnote">
                <sup>[58]</sup>
              </HashLink>{" "}
              The way to achieve that is with software life cycle models that incorporate iteration and prototyping.
            </p>
            <p id="note59">
              Kossiakoff[2011] categorizes software life cycle models based on the kind of software development:
              <HashLink to="#footnote59" className="footnote">
                <sup>[59]</sup>
              </HashLink>
            </p>
            <ol id="note60">
              <li className="list">
                Linear; exemplified by the waterfall model, development with linear models works when requirements are “well-understood and stable”, schedules and resources are reasonable, and practices are well-documented.
                <HashLink to="#footnote60" className="footnote">
                  <sup>[60]</sup>
                </HashLink>
              </li>
              <li className="list">Incremental; best used when requirements are stable and partial functionality is needed and can be used before a complete system is delivered.</li>
              <li className="list">Evolutionary; like incremental but used when the requirements are not well understood. Uses prototypes to aid in determining how the final product should work. Examples include the spiral model and prototyping models.</li>
              <li className="list">
                Agile; while the linear, incremental, and evolutionary models vary the sequence and repetition of development stages based on their unique strategies, agile models combine the stages, resulting in a lessening of the delineations between them.
                <HashLink to="#footnote61" className="footnote">
                  <sup>[61]</sup>
                </HashLink>
              </li>
            </ol>
            <div className="note">
              <p className="dropCapNote" id="note62">
                There are “specialized models” that do not fit these categories. Examples include the component-based model and the aspect-oriented model.
                <HashLink to="#footnote62" className="footnote">
                  <sup>[62]</sup>
                </HashLink>
              </p>
              <p>Some software life cycle models include features of one or more of the above categories and therefore do not fit neatly in any one category. An example is the Unified Process.</p>
            </div>
            <p>Following are a few notable examples of the many software development life cycle models.</p>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12" id="sdlcmodels">
            <h2 className="headline__h2">A Few Models</h2>
          </div>

          <div className="row__colspan-12 row__colspan-12--no-top-pad">
            <h3 className="headline__h3" id="codeandfix">
              Code and Fix
            </h3>
          </div>
          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p id="note63" className="dropCap">
              Boehm described the Code and Fix model as having two steps:
              <HashLink to="#footnote63" className="footnote">
                <sup>[63]</sup>
              </HashLink>
            </p>
            <br></br>
            <ol>
              <li className="list">Write some code</li>
              <li className="list">Fix the problems in the code</li>
            </ol>
            <p>This model is appropriate for small things such as a short script, or a small application for personal use. For most if not all other kinds of software development, Boehm found three primary difficulties with this model, with subsequent takeaways:</p>
            <ol id="note64">
              <li className="list">
                After several fixes to the code, it became poorly structured, which made subsequent fixes very expensive. Takeaway: “the need for a design phase prior to coding”
                <HashLink to="#footnote64" className="footnote">
                  <sup>[64]</sup>
                </HashLink>
              </li>
              <li className="list">
                Frequently, the software did not meet the users’ needs because there was no requirements phase. Takeaway: “the need for a requirements phase prior to design”
                <HashLink to="#footnote65" className="footnote">
                  <sup>[65]</sup>
                </HashLink>
              </li>
              <li className="list">
                This model makes it expensive to fix code because there is little or no preparation for testing and modification. Takeaway: “recognition of these phases, as well as test-and-evolution planning and preparation tasks in the early phases, were needed”
                <HashLink to="#footnote66" className="footnote">
                  <sup>[66]</sup>
                </HashLink>
              </li>
            </ol>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12 row__colspan-12--no-top-pad">
            <h3 className="headline__h3" id="waterfall">
              Waterfall
            </h3>
          </div>

          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p id="note67" className="dropCap">
              The waterfall model is a formal process for developing software in a top-down sequence
              <HashLink to="#footnote67" className="footnote">
                <sup>[67]</sup>
              </HashLink>
              , and emphasizes "fully elaborated documents as completion criteria for early requirements and design phases."
              <HashLink to="#footnote68" className="footnote">
                <sup>[68]</sup>
              </HashLink>{" "}
              Thus, it works better for classes of software in which the development project can be defined well, such as “compilers or secure operating systems.”
              <HashLink to="#footnote69" className="footnote">
                <sup>[69]</sup>
              </HashLink>{" "}
              Because of these characteristics, the waterfall model is suitable for projects where "quality requirements dominate cost and schedule requirements".
              <HashLink to="#footnote70" className="footnote">
                <sup>[70]</sup>
              </HashLink>{" "}
              Royce’s version of the waterfall model was highly influential, and "helped eliminate many difficulties previously encountered on software projects."
              <HashLink to="#footnote71" className="footnote">
                <sup>[71]</sup>
              </HashLink>
            </p>
            <div className="note" id="note72">
              <p className="dropCapNote">
                The Waterfall Model was introduced at a time when computers and computer time were very expensive relative to a programmer’s time
                <HashLink to="#footnote72" className="footnote">
                  <sup>[72]</sup>
                </HashLink>
                , but today the opposite is true.
              </p>
              <p>
                Structured analysis and design and the Waterfall Model appeared at about the same time, and they fit together well “because the separate phases of requirements, two design phases, and the coding phase of the traditional Waterfall map so well to structured analysis, design and programming, respectively.”
                <HashLink to="#footnote73" className="footnote">
                  <sup>[73]</sup>
                </HashLink>
              </p>
            </div>
            <p id="note74">
              Today, using the waterfall and structured analysis, design and programming (SADP) in projects costs more than the informal methods they replaced.
              <HashLink to="#footnote74" className="footnote">
                <sup>[74]</sup>
              </HashLink>{" "}
              Today, newer, more powerful analysis and design methods (OOP, UML) have replaced SADP.
            </p>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12">
            <ImageBlock key={images[0].id} image={images[0]}></ImageBlock>
          </div>

          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <div className="note">
              <p className="dropCapNote" id="note75">
                Note the part of the diagram illustrated at the right in figure 1 (the boxed steps to the right of the diagonal dashed line). Royce did not include the small arrows showing iteration with the preceding steps in this diagram, although he states, “there is an iteration with the preceding and succeeding steps….”
                <HashLink to="#footnote75" className="footnote">
                  <sup>[75]</sup>
                </HashLink>
              </p>
              <p id="note76">
                Royce said that the simple path shown is “risky and invites failure” because iteration is never confined to the succeeding steps, demonstrated by the arrows going back up the waterfall from Testing to Program Design, and from Program Design to Software Requirements, which occurs when errors are discovered during testing. The result, he says, is that “the development process has returned to the origin and one can expect up to a 100-percent overrun in schedule and/or costs.”
                <HashLink to="#footnote76" className="footnote">
                  <sup>[76]</sup>
                </HashLink>
              </p>
              <p id="note77">
                Illustrations of the Waterfall Model often show a cascade in one direction down, sometimes stating that “there is no feedback”
                <HashLink to="#footnote77" className="footnote">
                  <sup>[77]</sup>
                </HashLink>
                , but Royce states that “there is an iteration with the preceding and succeeding steps”
                <HashLink to="#footnote78" className="footnote">
                  <sup>[78]</sup>
                </HashLink>{" "}
                which he illustrates with arrows going up the waterfall.
                <HashLink to="#footnote79" className="footnote">
                  <sup>[79]</sup>
                </HashLink>{" "}
                Budgen confirms this: “Royce's formulation of the waterfall model...explicitly recognized the presence of 'feedback loops' between the various stages of development.”
                <HashLink to="#footnote80" className="footnote">
                  <sup>[80]</sup>
                </HashLink>{" "}
                Larman and Basili [2003] also state that Royce was not suggesting a “single-pass waterfall.”
                <HashLink to="#footnote81" className="footnote">
                  <sup>[81]</sup>
                </HashLink>
              </p>
            </div>
            <h4 className="headline__h4">Pitfalls using the waterfall model</h4>
            <ul id="note82">
              <li className="list">
                The waterfall model treats activities as sequential and disjoint and expects that the project is well-defined.
                <HashLink to="#footnote82" className="footnote">
                  <sup>[82]</sup>
                </HashLink>
              </li>
              <li className="list">
                “It does not work well for many classes of software, particularly interactive end-user applications.”.
                <HashLink to="#footnote83" className="footnote">
                  <sup>[83]</sup>
                </HashLink>
              </li>
              <li className="list">
                It assumes that requirements can be complete, which is seldom the case
                <HashLink to="#footnote84" className="footnote">
                  <sup>[84]</sup>
                </HashLink>
              </li>
              <li className="list">
                It is very expensive to use
                <HashLink to="#footnote85" className="footnote">
                  <sup>[85]</sup>
                </HashLink>
              </li>
            </ul>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12 row__colspan-12--no-top-pad">
            <h3 className="headline__h3" id="sashimi">
              Sashimi
            </h3>
          </div>
          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p id="note86" className="dropCap">
              The Sashimi model, a modified waterfall model, originated in Japan as an improvement based on experience with the waterfall model.
              <HashLink to="#footnote86" className="footnote">
                <sup>[86]</sup>
              </HashLink>{" "}
              With the Sashimi model there is greater overlap between phases, fewer phases, and several activities are merged into the phases (rather than in separate phases). The amount of documentation is reduced because less is needed when there is personnel continuity between phases and activities.
              <HashLink to="#footnote87" className="footnote">
                <sup>[87]</sup>
              </HashLink>
            </p>
          </div>
          <div className="row__colspan-1"></div>
          <div className="row__colspan-12">
            <ImageBlock key={images[1].id} image={images[1]}></ImageBlock>
          </div>
          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <h4 className="headline__h4">Pitfalls using the sashimi model</h4>

            <p id="note88">
              Greater overlap between phases causes difficulty in determining milestones and reduces your ability to track progress.
              <HashLink to="#footnote88" className="footnote">
                <sup>[88]</sup>
              </HashLink>{" "}
              Potentials for miscommunication and mistaken assumptions means that team members need a higher level of sophistication to avoid these pitfalls.
            </p>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12 row__colspan-12--no-top-pad">
            <h3 className="headline__h3" id="spiralmodel">
              Spiral
            </h3>
          </div>
          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p id="note89" className="dropCap">
              The spiral model was designed to reduce risks that stem from a lack of understanding of requirements, architecture, the technology used, etc.
              <HashLink to="#footnote89" className="footnote">
                <sup>[89]</sup>
              </HashLink>
            </p>
            <p id="note90">
              Each layer of the spiral - one complete loop - is an iteration that includes steps for resolving risk with a deliverable. This might be prototyping to determine performance capabilities, delivering a prototype to evaluate vague requirements, etc. The final loop uses the waterfall approach, after risks have been considered and reduced to acceptable levels.
              <HashLink to="#footnote90" className="footnote">
                <sup>[90]</sup>
              </HashLink>
            </p>
            <p id="note91">
              The Spiral Model was designed to allow a “mixed strategy” for dealing with risk
              <HashLink to="#footnote91" className="footnote">
                <sup>[91]</sup>
              </HashLink>
              , such as prototyping and incremental development. Furthermore, “separate spirals can be used for separate software components or increments.”
              <HashLink to="#footnote92" className="footnote">
                <sup>[92]</sup>
              </HashLink>
            </p>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12">
            <ImageBlock key={images[2].id} image={images[2]}></ImageBlock>
          </div>

          <div className="row__colspan-12 row__colspan-12--no-top-pad">
            <h3 className="headline__h3" id="stageddeliv">
              Staged Delivery
            </h3>
          </div>
          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p id="note93" className="dropCap">
              Staged delivery addresses the problem with the waterfall model where there is no visible progress of the project from the end user's perspective, because nothing is delivered until everything is finished.
              <HashLink to="#footnote93" className="footnote">
                <sup>[93]</sup>
              </HashLink>
            </p>
            <p className="note dropCapNote" id="note94">
              Royce’s diagram of the waterfall model shows two approaches. The first is the “risky” approach where nothing is delivered until everything is finished. That is the approach Royce is warning about, and he explains where the risk lies and how to reduce it. He recommends providing an early copy of the software to the customer. “If the computer program in question is being developed for the first time, arrange matters so that the version finally delivered to the customer for operational deployment is actually the second version.... Note that it is simply the entire process done in miniature....”{" "}
              <HashLink to="#footnote94" className="footnote">
                <sup>[94]</sup>
              </HashLink>
            </p>
            <p>With staged delivery, software is delivered in "successive stages" as the project progresses. Unlike evolutionary prototyping, staged delivery requires you to know what you are building - the requirements analysis has been done, and the system concept is well-defined. This model works well with software that is customized for each customer, from a base product. The customer can begin using the system while development of the customizations continues.</p>
            <p id="note95">
              Staged delivery does not reduce development time as does evolutionary prototyping, but it does improve visibility of development progress.
              <HashLink to="#footnote95" className="footnote">
                <sup>[95]</sup>
              </HashLink>{" "}
              If there are problems, you will know sooner.
            </p>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12">
            <ImageBlock key={images[3].id} image={images[3]}></ImageBlock>
          </div>

          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <h4 className="headline__h4">Other benefits provided by staged delivery</h4>

            <ul id="note96">
              <li className="list">
                Reduced estimation error - allows you to break up the project estimate into smaller estimates
                <HashLink to="#footnote96" className="footnote">
                  <sup>[96]</sup>
                </HashLink>
              </li>
              <li className="list">
                Minimizes integration problems - earlier releases means earlier integration. Integration will be more of a priority when everyone knows that the due date is near
                <HashLink to="#footnote97" className="footnote">
                  <sup>[97]</sup>
                </HashLink>
              </li>
            </ul>

            <h4 className="headline__h4">Pitfalls using the staged delivery model</h4>

            <p id="note98">
              Feature creep - it is typical for users to find functionality that they want added, once they have a system to use.
              <HashLink to="#footnote98" className="footnote">
                <sup>[98]</sup>
              </HashLink>
            </p>
          </div>

          <div className="row__colspan-12 row__colspan-12--no-top-pad">
            <h3 className="headline__h3" id="evolutionaryproto">
              Evolutionary Prototyping
            </h3>
          </div>
          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p id="note99" className="dropCap">
              This is one of the "best practices" McConnell describes as key to attaining the most reliable reduction in development time. Evolutionary prototyping addresses the problem of poorly understood or changing requirements by allowing the system concept to evolve as development progresses.
              <HashLink to="#footnote99" className="footnote">
                <sup>[99]</sup>
              </HashLink>{" "}
              The customer is shown a prototype of some aspect of the system, provides feedback, and functionality is adjusted for the next prototype. At some point, agreement on functionality is reached and the final development phase begins, where all remaining work is completed.
            </p>

            <h4 className="headline__h4">Pitfalls using the evolutionary prototyping model</h4>

            <p id="note100">
              There are many potential risks associated with this model, but most are easily managed.
              <HashLink to="#footnote100" className="footnote">
                <sup>[100]</sup>
              </HashLink>
            </p>

            <ul id="note101">
              <li className="list">
                Unrealistic schedule and budget expectations
                <HashLink to="#footnote101" className="footnote">
                  <sup>[101]</sup>
                </HashLink>
              </li>
              <li className="list">
                Poor view of project timeline due to unanticipated downstream rework
                <HashLink to="#footnote102" className="footnote">
                  <sup>[102]</sup>
                </HashLink>
              </li>
              <li className="list">Poor feedback from end users or customers.</li>
              <li className="list">
                Poor product performance due to inefficient code
                <HashLink to="#footnote103" className="footnote">
                  <sup>[103]</sup>
                </HashLink>
              </li>
              <li className="list">
                Unrealistic expectations for performance due to the prototype not having to do the work of a production application
                <HashLink to="#footnote104" className="footnote">
                  <sup>[104]</sup>
                </HashLink>
              </li>
              <li className="list">
                Poor design due to inexperienced developers making poor design decisions
                <HashLink to="#footnote105" className="footnote">
                  <sup>[105]</sup>
                </HashLink>
              </li>
            </ul>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12 row__colspan-12--no-top-pad">
            <h3 className="headline__h3" id="evolutionarydeliv">
              Evolutionary Delivery
            </h3>
          </div>
          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p id="note106" className="dropCap">
              Evolutionary delivery is a combination of evolutionary prototyping and staged delivery.
              <HashLink to="#footnote106" className="footnote">
                <sup>[106]</sup>
              </HashLink>{" "}
              The degree to which one balances the other is flexible. This model works well for customized software for situations where the customer needs to use the software before deciding if modifications are required.
            </p>
            <p id="note107">
              Evolutionary delivery can be balanced more toward evolutionary prototyping; this provides the customer with "highly visible signs of progress"
              <HashLink to="#footnote107" className="footnote">
                <sup>[107]</sup>
              </HashLink>
              , provides flexibility to change the system based on user requests, and provides less control for management in terms of project schedule. On the other hand, evolutionary delivery can be balanced more toward staged delivery; this also provides the customer with "highly visible signs of progress” but provides little flexibility to change the system based on user requests and provides more control for management.
            </p>
          </div>
          <div className="row__colspan-1"></div>
          <div className="row__colspan-12">
            <ImageBlock key={images[4].id} image={images[4]}></ImageBlock>
          </div>

          <div className="row__colspan-12" id="tailoredmodel">
            <h3 className="headline__h3">Tailored Process Model</h3>
          </div>
          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p id="note108" className="dropCap">
              Software process models should be tailored to the organization’s needs and should be changed as the problems change.
              <HashLink to="#footnote108" className="footnote">
                <sup>[108]</sup>
              </HashLink>
              Watts categorizes software process models based on the level of detail they show. For example, Watts uses the categories of “U” for universal, “W” for worldly, and “A” for atomic.
            </p>
            <ul id="note109">
              <li className="list">
                Universal-level (U-level) models define policies
                <HashLink to="#footnote109" className="footnote">
                  <sup>[109]</sup>
                </HashLink>
                ; they give a high-level overview of the process.
                <HashLink to="#footnote110" className="footnote">
                  <sup>[110]</sup>
                </HashLink>{" "}
                At the U-level, software development processes look much the same for different projects. Traditional models like the Waterfall Model and the Spiral Model are examples of U-level models.
                <HashLink to="#footnote111" className="footnote">
                  <sup>[111]</sup>
                </HashLink>
              </li>
              <li className="list">
                Worldly-level (W-level) models define procedures to implement the policies of the U-level, referencing the A-level where appropriate.
                <HashLink to="#footnote112" className="footnote">
                  <sup>[112]</sup>
                </HashLink>{" "}
                The W-level is the working level.
                <HashLink to="#footnote113" className="footnote">
                  <sup>[113]</sup>
                </HashLink>
              </li>
              <li className="list">
                Atomic-level (A-level) models define standards that specify how tasks are to be performed.
                <HashLink to="#footnote114" className="footnote">
                  <sup>[114]</sup>
                </HashLink>{" "}
                A-level models are the most detailed, suitable for use when creating automated processes, or when there is a need to guide execution of a task.
                <HashLink to="#footnote115" className="footnote">
                  <sup>[115]</sup>
                </HashLink>
              </li>
            </ul>
            <p className="note dropCapNote">If the worldly-level and atomic-level models seem greatly detailed, they are. Watts [1989] employs them to achieve a defined software process, which is required to reach the “defined” level of the Capability Maturity Model (CMM). Watts [1989] book describes the CMM (now superseded by Capability Maturity Model Integration (CMMI)). Training is usually needed to use CMM and CMMI.</p>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12" id="tailoredulevel">
            <h4 className="headline__h4">U-level Models</h4>
          </div>
          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p>Software development processes described by U-level models look the same for new applications as they do for enhancements to existing applications. The terms used in U-level models are generic and don’t allow enough detail to show how the tasks differ. We get task-level detail with a W-level model.</p>
            <p>Watts uses the unit cell as the fundamental building block for all process models. A basic unit cell is shown in Figure 6.</p>
            <ImageBlock key={images[5].id} image={images[5]}></ImageBlock>
            <div className="legend">
              <p className="sidebar">Specifications</p>
              <ul>
                <li className="legend">Entry: The conditions to be met before task initiation</li>
                <li className="legend">Exit: The results to be produced and how embodied</li>
                <li className="legend">
                  Feedback:
                  <ul>
                    <li className="legend">In: Any feedback from other stages</li>
                    <li className="legend">Out: Any feedback to other stages</li>
                  </ul>
                </li>
                <li className="legend">Task: What is to be done, by whom, how, and when, including appropriate standards, procedures, and responsibilities</li>
                <li className="legend">Measurements: The required task measures (activities, resources, time), output (number, size, quality), and feedback (number, size, quality)</li>
              </ul>
            </div>
            <p>Figure 7 shows a spiral model constructed from unit cells that represent the various phases. Task details are added with a W-level model.</p>
            <ImageBlock key={images[6].id} image={images[6]}></ImageBlock>
            <p>Figure 8 shows a spiral model using a waterfall model.</p>
            <ImageBlock key={images[7].id} image={images[7]}></ImageBlock>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12" id="tailoredwlevel">
            <h4 className="headline__h4">W-level Models</h4>
          </div>
          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p>W-level models are better suited for defining the software process, but they are heavier, more expensive, and not always needed or appropriate. The need for a defined software process grows as the size of the development team grows, and as the criticality of the software grows, and as the expense of a failure grows.</p>
            <p>In W-level models a cell can represent a specific task, or a group of tasks which is called a process step (see Figure [9], Quick Kernel). Many activities can be standardized across projects and those can be represented with standardized process cells, varying the interconnections between the cells to meet specific project needs (Watts, 1989, p. 258).</p>
            <p>An example of a standardized process cell is the implementation cell. The implementation cell can represent a process of detailed design, coding, and unit testing. Another process cell is required for the implementation cell: a generic inspection operator that can be used with any process. It is used twice in the implementation cell, once for design inspection and again for code inspection (see Figure 10.)</p>
            <p className="note dropCapNote">Inputs and outputs for each process cell is defined in a table, using ETX (Entry-Task-Exit) criteria.</p>
            <ImageBlock key={images[8].id} image={images[8]}></ImageBlock>
            <p>&nbsp;</p>
            <ImageBlock key={images[9].id} image={images[9]}></ImageBlock>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12" id="tailoredalevel">
            <h4 className="headline__h4">A-level Models</h4>
          </div>
          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">to do</div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12" id="choosemodel">
            <h2 className="headline__h2">Choosing a Model</h2>
          </div>
          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p>Many resources throughout the internet and in books list the pros and cons of several software development life cycle models. As mentioned above, these models are not mutually exclusive, you can and should change models as problems arise, and you should tailor the model to fit the needs of the project. What this means is that you should:</p>
            <ol>
              <li className="list">Pick a model type, either linear, incremental, evolutionary, or agile, and</li>
              <li className="list">Use a mix of practices from the various models of your chosen type (if you are using the tailored model described above, you will create custom cell structures for the practices).</li>
            </ol>
            <p>If you have end users you can work with, you should consider using prototyping and an evolutionary model.</p>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12 row__margin-bottom-0" id="notes">
            <h3 className="headline__h3">Notes</h3>
          </div>

          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <ol>
              <li id="footnote1">
                <span className="footnote__ref">
                  <HashLink to="#note1" className="footnote--cite">
                    ^
                  </HashLink>
                  ISO/IEC/IEEE 12207:2017(en){" "}
                  <HashLink className="wrapper__article__outbound-link" to="https://www.iso.org/obp/ui/en/#iso:std:iso-iec-ieee:12207:ed-1:v1:en">
                    Systems and software engineering — Software life cycle processes
                  </HashLink>
                </span>
              </li>
              <li id="footnote2">
                <span className="footnote__ref">
                  <HashLink to="#note1" className="footnote--cite">
                    ^
                  </HashLink>
                  Kossiakoff, A., Sweet, W. N., Seymour, S. J., and Biemer, S. M., Systems Engineering, 2nd Ed. John Wiley & Sons, 2011. In Part I FOUNDATIONS OF SYSTEMS ENGINEERING
                </span>
              </li>
              <li id="footnote3">
                <span className="footnote__ref">
                  <HashLink to="#note3" className="footnote--cite">
                    ^
                  </HashLink>
                  ISO/IEC/IEEE 12207:2017(en) Systems and software engineering — Software life cycle processes. Introduction. As of February 2026, the current revision is{" "}
                  <HashLink className="wrapper__article__outbound-link" to="https://standards.ieee.org/ieee/12207/11416">
                    IEEE/ISO/IEC 12207-2026 Systems and software engineering — Software life cycle processes.
                  </HashLink>
                </span>
              </li>
              <li id="footnote4">
                <span className="footnote__ref">
                  <HashLink to="#note4" className="footnote--cite">
                    ^
                  </HashLink>
                  McConnell, Steve, 1996, Rapid Development: Taming Wild Software Schedules: Microsoft Press, p. 154.
                </span>
              </li>
              <li id="footnote5">
                <span className="footnote__ref">
                  <HashLink to="#note5" className="footnote--cite">
                    ^
                  </HashLink>
                  ISO/IEC/IEEE 15288:2023(en){" "}
                  <HashLink className="wrapper__article__outbound-link" to="https://www.iso.org/obp/ui/en/#iso:std:iso-iec-ieee:15288:ed-2:v1:en">
                    Systems and software engineering — System life cycle processes.
                  </HashLink>
                </span>
              </li>
              <li id="footnote6">
                <span className="footnote__ref">
                  <HashLink to="#note6" className="footnote--cite">
                    ^
                  </HashLink>
                  Kossiakoff et. al., 2011, chapter 1.7.
                </span>
              </li>
              <li id="footnote7">
                <span className="footnote__ref">
                  <HashLink to="#note7" className="footnote--cite">
                    ^
                  </HashLink>
                  <HashLink className="wrapper__article__outbound-link" to="http://homepages.cs.ncl.ac.uk/brian.randell/NATO/nato1968.PDF">
                    NATO Software Engineering Conference 1968
                  </HashLink>{" "}
                  ; p. 15, and Figure 6, p. 66.
                </span>
              </li>
              <li id="footnote8">
                <span className="footnote__ref">
                  <HashLink to="#note8" className="footnote--cite">
                    ^
                  </HashLink>
                  Larman, Craig (2004). Agile and Iterative Development: A Manager's Guide. Addison-Wesley. In chapter 1.
                </span>
              </li>
              <li id="footnote9">
                <span className="footnote__ref">
                  <HashLink to="#note8" className="footnote--cite">
                    ^
                  </HashLink>
                  DeGrace, P., and Stahl, L. H., 1990, Wicked Problems, Righteous Solutions : a Catalogue of Modern Software Engineering Paradigms. Yourdon Press; p. 69; Boehm, Barry W., 1988, A Spiral Model of Software Development and Enhancement. Computer, May: pp. 61-72, p. 63; Larman, Craig & Basili, Victor R. “Iterative and Incremental Development: A Brief History.” Computer, IEEE, June 2003, p. 47, 48, and 52.
                </span>
              </li>
              <li id="footnote10">
                <span className="footnote__ref">
                  <HashLink to="#note11" className="footnote--cite">
                    ^
                  </HashLink>
                  NATO Software Engineering Conference 1968, p. 120.
                </span>
              </li>
              <li id="footnote11">
                <span className="footnote__ref">
                  <HashLink to="#note11" className="footnote--cite">
                    ^
                  </HashLink>
                  NATO Software Engineering Conference 1968, p. 122.
                </span>
              </li>
              <li id="footnote12">
                <span className="footnote__ref">
                  <HashLink to="#note12" className="footnote--cite">
                    ^
                  </HashLink>
                  NATO Software Engineering Conference 1968, p. 13.
                </span>
              </li>
              <li id="footnote13">
                <span className="footnote__ref">
                  <HashLink to="#note12" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid.
                </span>
              </li>
              <li id="footnote14">
                <span className="footnote__ref">
                  <HashLink to="#note14" className="footnote--cite">
                    ^
                  </HashLink>
                  NATO Software Engineering Conference 1968, p. 126.
                </span>
              </li>
              <li id="footnote15">
                <span className="footnote__ref">
                  <HashLink to="#note14" className="footnote--cite">
                    ^
                  </HashLink>
                  “There is no theory which enables us to calculate limits on the size, performance, or complexity of software. There is, in many instances, no way even to specify in a logically tight way what the software product is supposed to do or how it is supposed to do it.” NATO Software Engineering Conference 1968, p. 69.
                </span>
              </li>
              <li id="footnote16">
                <span className="footnote__ref">
                  <HashLink to="#note14" className="footnote--cite">
                    ^
                  </HashLink>
                  <HashLink className="wrapper__article__outbound-link" to="https://www.cs.hmc.edu/courses/2004/fall/cs121/papers/larman.pdf">
                    Larman & Basili, 2003
                  </HashLink>
                  , p. 47 and 48.
                </span>
              </li>
              <li id="footnote17">
                <span className="footnote__ref">
                  <HashLink to="#note14" className="footnote--cite">
                    ^
                  </HashLink>
                  NATO Software Engineering Conference 1968; “Design and implementation proceeded in a number of stages...each stage included more facilities than the last” p. 19; “The use of feedback from a partly designed system” p. 53.
                </span>
              </li>
              <li id="footnote18">
                <span className="footnote__ref">
                  <HashLink to="#note18" className="footnote--cite">
                    ^
                  </HashLink>
                  NATO Software Engineering Conference 1968, p. 32.
                </span>
              </li>
              <li id="footnote19">
                <span className="footnote__ref">
                  <HashLink to="#note19" className="footnote--cite">
                    ^
                  </HashLink>
                  Royce, W. W., 1970.
                  <HashLink className="wrapper__article__outbound-link" to="https://web.archive.org/web/20190307012048/http://www-scf.usc.edu/~csci201/lectures/Lecture11/royce1970.pdf">
                    Managing the Development of Large Software Systems. Proceedings of IEEE WESCON
                  </HashLink>
                </span>
              </li>
              <li id="footnote20">
                <span className="footnote__ref">
                  <HashLink to="#note19" className="footnote--cite">
                    ^
                  </HashLink>
                  For example, Bell, Thomas E.; T. A., Thayer (1976). Software requirements: Are they really a problem? (PDF). Proceedings of the 2nd international conference on Software engineering. IEEE Computer Society Press; Boehm, 1988, p. 63; DeGrace and Stahl, 1990, p. 27;{" "}
                  <HashLink className="wrapper__article__outbound-link" to="https://archive.org/details/managingsoftware0000hump">
                    Humphrey, Watts S., 1989, Managing the Software Process : Addison-Wesley
                  </HashLink>
                  , p. 249; Kossiakoff et. al., 2011, chapter 11.
                </span>
              </li>
              <li id="footnote21">
                <span className="footnote__ref">
                  <HashLink to="#note19" className="footnote--cite">
                    ^
                  </HashLink>
                  Boehm, 1988, p. 63.
                </span>
              </li>
              <li id="footnote22">
                <span className="footnote__ref">
                  <HashLink to="#note22" className="footnote--cite">
                    ^
                  </HashLink>
                  DeGrace and Stahl, 1990, p. 67.
                </span>
              </li>
              <li id="footnote23">
                <span className="footnote__ref">
                  <HashLink to="#note22" className="footnote--cite">
                    ^
                  </HashLink>
                  DeGrace and Stahl, 1990, p. 69; Boehm, 1988, p. 63; Larman and Basili, 2003, p. 52.
                </span>
              </li>
              <li id="footnote24">
                <span className="footnote__ref">
                  <HashLink to="#note22" className="footnote--cite">
                    ^
                  </HashLink>
                  Larman and Basili, 2003, p. 48; Larman, 2004, chapter 6.
                </span>
              </li>
              <li id="footnote25">
                <span className="footnote__ref">
                  <HashLink to="#note22" className="footnote--cite">
                    ^
                  </HashLink>
                  Boehm, 1988, p. 63; DeGrace and Stahl, 1990, p. 77, and pp. 97-118.
                </span>
              </li>
              <li id="footnote26">
                <span className="footnote__ref">
                  <HashLink to="#note22" className="footnote--cite">
                    ^
                  </HashLink>
                  Larman and Basili, 2003, p. 48; Larman, 2004, in chapter 6, “Few actually read Royce's original waterfall paper [Royce70]. Its iterative flavor was lost, and it devolved from the nuanced evolutionary description he gave, to a simple single-step lifecycle. This is seen in the many third-party diagrams supposedly depicting “Royce's waterfall,” that do not correctly correspond to the original iterative picture Royce gave.”
                </span>
              </li>
              <li id="footnote27">
                <span className="footnote__ref">
                  <HashLink to="#note27" className="footnote--cite">
                    ^
                  </HashLink>
                  Larman, 2004, chapter 3, “Agile Hype?”
                </span>
              </li>
              <li id="footnote28">
                <span className="footnote__ref">
                  <HashLink to="#note27" className="footnote--cite">
                    ^
                  </HashLink>
                  Larman and Basili, 2003, p. 51; Boehm’s Spiral model (Boehm, 1988); Gilb’s Evolutionary Delivery model{" "}
                  <HashLink className="wrapper__article__outbound-link" to="https://archive.org/details/principlesofsoft0000gilb/mode/2up">
                    Gilb, Tom, 1988, Principles of Software Engineering Management. Addison-Wesley
                  </HashLink>
                </span>
              </li>
              <li id="footnote29">
                <span className="footnote__ref">
                  <HashLink to="#note27" className="footnote--cite">
                    ^
                  </HashLink>
                  Larman, 2004, chapter 6, under “Why Did Waterfall Promotion Continue?”
                </span>
              </li>
              <li id="footnote30">
                <span className="footnote__ref">
                  <HashLink to="#note30" className="footnote--cite">
                    ^
                  </HashLink>
                  Larman, 2004, chapter 1.
                </span>
              </li>
              <li id="footnote31">
                <span className="footnote__ref">
                  <HashLink to="#note31" className="footnote--cite">
                    ^
                  </HashLink>
                  Larman and Basili, 2003, p. 53.
                </span>
              </li>
              <li id="footnote32">
                <span className="footnote__ref">
                  <HashLink to="#note31" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid.
                </span>
              </li>
              <li id="footnote33">
                <span className="footnote__ref">
                  <HashLink to="#note33" className="footnote--cite">
                    ^
                  </HashLink>
                  I.e., “Most software is not a predictable or mass manufacturing problem. Software development is new product development. Plus, many projects use new and buggy technologies that exacerbate the degree of novelty and unpredictability. Note also it is a new product for the inexperienced even if it has been done before,” and therefore, “…predictable manufacturing is the wrong paradigm for software….” (Larman, 2004, chapter 1)
                </span>
              </li>
              <li id="footnote34">
                <span className="footnote__ref">
                  <HashLink to="#note33" className="footnote--cite">
                    ^
                  </HashLink>
                  Larman, 2004, chapter 3.
                </span>
              </li>
              <li id="footnote35">
                <span className="footnote__ref">
                  <HashLink to="#note35" className="footnote--cite">
                    ^
                  </HashLink>
                  Larman, 2004, chapter 2.
                </span>
              </li>
              <li id="footnote36">
                <span className="footnote__ref">
                  <HashLink to="#note36" className="footnote--cite">
                    ^
                  </HashLink>
                  Larman, 2004, chapter 3.
                </span>
              </li>
              <li id="footnote37">
                <span className="footnote__ref">
                  <HashLink to="#note36" className="footnote--cite">
                    ^
                  </HashLink>
                  Larman, 2004, chapter 2.
                </span>
              </li>
              <li id="footnote38">
                <span className="footnote__ref">
                  <HashLink to="#note36" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid.
                </span>
              </li>
              <li id="footnote39">
                <span className="footnote__ref">
                  <HashLink to="#note36" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid.
                </span>
              </li>
              <li id="footnote40">
                <span className="footnote__ref">
                  <HashLink to="#note36" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid.
                </span>
              </li>
              <li id="footnote41">
                <span className="footnote__ref">
                  <HashLink to="#note36" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid.
                </span>
              </li>
              <li id="footnote42">
                <span className="footnote__ref">
                  <HashLink to="#note42" className="footnote--cite">
                    ^
                  </HashLink>
                  Watts, 1989, p. 248.
                </span>
              </li>
              <li id="footnote43">
                <span className="footnote__ref">
                  <HashLink to="#note42" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid.
                </span>
              </li>
              <li id="footnote44">
                <span className="footnote__ref">
                  <HashLink to="#note44" className="footnote--cite">
                    ^
                  </HashLink>
                  Watts, 1989, p. 254.
                </span>
              </li>
              <li id="footnote45">
                <span className="footnote__ref">
                  <HashLink to="#note44" className="footnote--cite">
                    ^
                  </HashLink>
                  Watts, 1989, p. 249.
                </span>
              </li>
              <li id="footnote46">
                <span className="footnote__ref">
                  <HashLink to="#note44" className="footnote--cite">
                    ^
                  </HashLink>
                  Boehm, 1988, p. 61.
                </span>
              </li>
              <li id="footnote47">
                <span className="footnote__ref">
                  <HashLink to="#note47" className="footnote--cite">
                    ^
                  </HashLink>
                  Watts, 1989, p. 284.
                </span>
              </li>
              <li id="footnote48">
                <span className="footnote__ref">
                  <HashLink to="#note48" className="footnote--cite">
                    ^
                  </HashLink>
                  Kossiakoff et. al., 2011, chapter 11.3.
                </span>
              </li>
              <li id="footnote49">
                <span className="footnote__ref">
                  <HashLink to="#note49" className="footnote--cite">
                    ^
                  </HashLink>
                  Kossiakoff et. al., 2011, chapter 11.3.
                </span>
              </li>
              <li id="footnote50">
                <span className="footnote__ref">
                  <HashLink to="#note50" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid.
                </span>
              </li>
              <li id="footnote51">
                <span className="footnote__ref">
                  <HashLink to="#note51" className="footnote--cite">
                    ^
                  </HashLink>
                  McConnell, 1996, p. 154.
                </span>
              </li>
              <li id="footnote52">
                <span className="footnote__ref">
                  <HashLink to="#note51" className="footnote--cite">
                    ^
                  </HashLink>
                  Boehm, 1988, p. 64 “…the spiral model can accommodate most previous models as special cases and further provides guidance as to which combination of previous models best fits a given software situation.”
                </span>
              </li>
              <li id="footnote53">
                <span className="footnote__ref">
                  <HashLink to="#note51" className="footnote--cite">
                    ^
                  </HashLink>
                  Boehm, 1988, p. 65.
                </span>
              </li>
              <li id="footnote54">
                <span className="footnote__ref">
                  <HashLink to="#note54" className="footnote--cite">
                    ^
                  </HashLink>
                  Kossiakoff et. al., 2011, chapter 4.3.
                </span>
              </li>
              <li id="footnote55">
                <span className="footnote__ref">
                  <HashLink to="#note54" className="footnote--cite">
                    ^
                  </HashLink>
                  DeGrace and Stahl, 1990, p. 33.
                </span>
              </li>
              <li id="footnote56">
                <span className="footnote__ref">
                  <HashLink to="#note54" className="footnote--cite">
                    ^
                  </HashLink>
                  DeGrace and Stahl, 1990, p. 38.
                </span>
              </li>
              <li id="footnote57">
                <span className="footnote__ref">
                  <HashLink to="#note57" className="footnote--cite">
                    ^
                  </HashLink>
                  Royce, 1970, p. 328. Royce states “if the effort is sufficiently small and if the final product is to be operated by those who built it”, an analysis step followed by a coding step are all that is needed.
                </span>
              </li>
              <li id="footnote58">
                <span className="footnote__ref">
                  <HashLink to="#note58" className="footnote--cite">
                    ^
                  </HashLink>
                  Royce, 1970, p. 334; DeGrace and Stahl, 1990, p. 69; Boehm, 1988, p. 63.
                </span>
              </li>
              <li id="footnote59">
                <span className="footnote__ref">
                  <HashLink to="#note59" className="footnote--cite">
                    ^
                  </HashLink>
                  Kossiakoff et. al., 2011, chapter 11.3.
                </span>
              </li>
              <li id="footnote60">
                <span className="footnote__ref">
                  <HashLink to="#note60" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid.
                </span>
              </li>
              <li id="footnote61">
                <span className="footnote__ref">
                  <HashLink to="#note60" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid.
                </span>
              </li>
              <li id="footnote62">
                <span className="footnote__ref">
                  <HashLink to="#note62" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid.
                </span>
              </li>
              <li id="footnote63">
                <span className="footnote__ref">
                  <HashLink to="#note63" className="footnote--cite">
                    ^
                  </HashLink>
                  Boehm, 1988, p. 62.
                </span>
              </li>
              <li id="footnote64">
                <span className="footnote__ref">
                  <HashLink to="#note64" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid.
                </span>
              </li>
              <li id="footnote65">
                <span className="footnote__ref">
                  <HashLink to="#note64" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid.
                </span>
              </li>
              <li id="footnote66">
                <span className="footnote__ref">
                  <HashLink to="#note64" className="footnote--cite">
                    ^
                  </HashLink>
                  Boehm, 1988, p. 63.
                </span>
              </li>
              <li id="footnote67">
                <span className="footnote__ref">
                  <HashLink to="#note67" className="footnote--cite">
                    ^
                  </HashLink>
                  DeGrace and Stahl, 1990, p. 59.
                </span>
              </li>
              <li id="footnote68">
                <span className="footnote__ref">
                  <HashLink to="#note67" className="footnote--cite">
                    ^
                  </HashLink>
                  Boehm, 1988, p. 63.
                </span>
              </li>
              <li id="footnote69">
                <span className="footnote__ref">
                  <HashLink to="#note67" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid.
                </span>
              </li>
              <li id="footnote70">
                <span className="footnote__ref">
                  <HashLink to="#note67" className="footnote--cite">
                    ^
                  </HashLink>
                  McConnell, 1996, p. 137.
                </span>
              </li>
              <li id="footnote71">
                <span className="footnote__ref">
                  <HashLink to="#note67" className="footnote--cite">
                    ^
                  </HashLink>
                  Boehm, 1988, p. 63.
                </span>
              </li>
              <li id="footnote72">
                <span className="footnote__ref">
                  <HashLink to="#note72" className="footnote--cite">
                    ^
                  </HashLink>
                  DeGrace and Stahl, 1990, p. 70.
                </span>
              </li>
              <li id="footnote73">
                <span className="footnote__ref">
                  <HashLink to="#note72" className="footnote--cite">
                    ^
                  </HashLink>
                  DeGrace and Stahl, 1990, p. 61.
                </span>
              </li>
              <li id="footnote74">
                <span className="footnote__ref">
                  <HashLink to="#note74" className="footnote--cite">
                    ^
                  </HashLink>
                  DeGrace and Stahl, 1990, p. 70.
                </span>
              </li>
              <li id="footnote75">
                <span className="footnote__ref">
                  <HashLink to="#note75" className="footnote--cite">
                    ^
                  </HashLink>
                  Royce, 1970, p. 328.
                </span>
              </li>
              <li id="footnote76">
                <span className="footnote__ref">
                  <HashLink to="#note76" className="footnote--cite">
                    ^
                  </HashLink>
                  Royce, 1970, p. 329.
                </span>
              </li>
              <li id="footnote77">
                <span className="footnote__ref">
                  <HashLink to="#note77" className="footnote--cite">
                    ^
                  </HashLink>
                  DeGrace and Stahl, 1990, p. 28, figure 3-1.
                </span>
              </li>
              <li id="footnote78">
                <span className="footnote__ref">
                  <HashLink to="#note77" className="footnote--cite">
                    ^
                  </HashLink>
                  Royce, 1970, p. 328.
                </span>
              </li>
              <li id="footnote79">
                <span className="footnote__ref">
                  <HashLink to="#note77" className="footnote--cite">
                    ^
                  </HashLink>
                  Royce, 1970, p. 330, figure 3.
                </span>
              </li>
              <li id="footnote80">
                <span className="footnote__ref">
                  <HashLink to="#note77" className="footnote--cite">
                    ^
                  </HashLink>
                  Budgen, D., 2003, Software Design (2nd ed.). Addison-Wesley, p. 47.
                </span>
              </li>
              <li id="footnote81">
                <span className="footnote__ref">
                  <HashLink to="#note77" className="footnote--cite">
                    ^
                  </HashLink>
                  Larman & Basili, 2003, p. 48.
                </span>
              </li>
              <li id="footnote82">
                <span className="footnote__ref">
                  <HashLink to="#note82" className="footnote--cite">
                    ^
                  </HashLink>
                  Budgen, 2003, p. 143.
                </span>
              </li>
              <li id="footnote83">
                <span className="footnote__ref">
                  <HashLink to="#note82" className="footnote--cite">
                    ^
                  </HashLink>
                  Boehm, 1988, p. 63.
                </span>
              </li>
              <li id="footnote84">
                <span className="footnote__ref">
                  <HashLink to="#note82" className="footnote--cite">
                    ^
                  </HashLink>
                  DeGrace and Stahl, 1990, p. 68; McConnell, 1996, p. 137.
                </span>
              </li>
              <li id="footnote85">
                <span className="footnote__ref">
                  <HashLink to="#note82" className="footnote--cite">
                    ^
                  </HashLink>
                  DeGrace and Stahl, 1990, p. 67.
                </span>
              </li>
              <li id="footnote86">
                <span className="footnote__ref">
                  <HashLink to="#note86" className="footnote--cite">
                    ^
                  </HashLink>
                  DeGrace and Stahl, 1990, p. 154.
                </span>
              </li>
              <li id="footnote87">
                <span className="footnote__ref">
                  <HashLink to="#note86" className="footnote--cite">
                    ^
                  </HashLink>
                  McConnell, 1996, p. 144.
                </span>
              </li>
              <li id="footnote88">
                <span className="footnote__ref">
                  <HashLink to="#note88" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid.
                </span>
              </li>
              <li id="footnote89">
                <span className="footnote__ref">
                  <HashLink to="#note89" className="footnote--cite">
                    ^
                  </HashLink>
                  McConnell, 1996, p. 141.
                </span>
              </li>
              <li id="footnote90">
                <span className="footnote__ref">
                  <HashLink to="#note90" className="footnote--cite">
                    ^
                  </HashLink>
                  DeGrace and Stahl, 1990, p. 116; McConnell, 1996, p. 142.
                </span>
              </li>
              <li id="footnote91">
                <span className="footnote__ref">
                  <HashLink to="#note91" className="footnote--cite">
                    ^
                  </HashLink>
                  Boehm, 1988, p. 65.
                </span>
              </li>
              <li id="footnote92">
                <span className="footnote__ref">
                  <HashLink to="#note91" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid.
                </span>
              </li>
              <li id="footnote93">
                <span className="footnote__ref">
                  <HashLink to="#note93" className="footnote--cite">
                    ^
                  </HashLink>
                  McConnell, 1996, p. 148.
                </span>
              </li>
              <li id="footnote94">
                <span className="footnote__ref">
                  <HashLink to="#note94" className="footnote--cite">
                    ^
                  </HashLink>
                  Royce, 1970, p. 334.
                </span>
              </li>
              <li id="footnote95">
                <span className="footnote__ref">
                  <HashLink to="#note95" className="footnote--cite">
                    ^
                  </HashLink>
                  McConnell, 1996, p. 550.
                </span>
              </li>
              <li id="footnote96">
                <span className="footnote__ref">
                  <HashLink to="#note96" className="footnote--cite">
                    ^
                  </HashLink>
                  McConnell, 1996, p. 552.
                </span>
              </li>
              <li id="footnote97">
                <span className="footnote__ref">
                  <HashLink to="#note96" className="footnote--cite">
                    ^
                  </HashLink>
                  McConnell, 1996, p. 550.
                </span>
              </li>
              <li id="footnote98">
                <span className="footnote__ref">
                  <HashLink to="#note98" className="footnote--cite">
                    ^
                  </HashLink>
                  McConnell, 1996, p. 555.
                </span>
              </li>
              <li id="footnote99">
                <span className="footnote__ref">
                  <HashLink to="#note99" className="footnote--cite">
                    ^
                  </HashLink>
                  McConnell, 1996, p. 147.
                </span>
              </li>
              <li id="footnote100">
                <span className="footnote__ref">
                  <HashLink to="#note100" className="footnote--cite">
                    ^
                  </HashLink>
                  McConnell, 1996, p. 441.
                </span>
              </li>
              <li id="footnote101">
                <span className="footnote__ref">
                  <HashLink to="#note101" className="footnote--cite">
                    ^
                  </HashLink>
                  McConnell, 1996, p. 436.
                </span>
              </li>
              <li id="footnote102">
                <span className="footnote__ref">
                  <HashLink to="#note101" className="footnote--cite">
                    ^
                  </HashLink>
                  McConnell, 1996, p. 437.
                </span>
              </li>
              <li id="footnote103">
                <span className="footnote__ref">
                  <HashLink to="#note101" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid.
                </span>
              </li>
              <li id="footnote104">
                <span className="footnote__ref">
                  <HashLink to="#note101" className="footnote--cite">
                    ^
                  </HashLink>
                  McConnell, 1996, p. 438.
                </span>
              </li>
              <li id="footnote105">
                <span className="footnote__ref">
                  <HashLink to="#note101" className="footnote--cite">
                    ^
                  </HashLink>
                  McConnell, 1996, p. 439.
                </span>
              </li>
              <li id="footnote106">
                <span className="footnote__ref">
                  <HashLink to="#note106" className="footnote--cite">
                    ^
                  </HashLink>
                  McConnell, 1996, p. 425.
                </span>
              </li>
              <li id="footnote107">
                <span className="footnote__ref">
                  <HashLink to="#note107" className="footnote--cite">
                    ^
                  </HashLink>
                  McConnell, 1996, p. 426.
                </span>
              </li>
              <li id="footnote108">
                <span className="footnote__ref">
                  <HashLink to="#note108" className="footnote--cite">
                    ^
                  </HashLink>
                  Watts, 1989, p. 283.
                </span>
              </li>
              <li id="footnote109">
                <span className="footnote__ref">
                  <HashLink to="#note109" className="footnote--cite">
                    ^
                  </HashLink>
                  Watts, 1989, p. 253.
                </span>
              </li>
              <li id="footnote110">
                <span className="footnote__ref">
                  <HashLink to="#note109" className="footnote--cite">
                    ^
                  </HashLink>
                  Watts, 1989, p. 249.
                </span>
              </li>
              <li id="footnote111">
                <span className="footnote__ref">
                  <HashLink to="#note109" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid.
                </span>
              </li>
              <li id="footnote112">
                <span className="footnote__ref">
                  <HashLink to="#note109" className="footnote--cite">
                    ^
                  </HashLink>
                  Watts, 1989, p. 253.
                </span>
              </li>
              <li id="footnote113">
                <span className="footnote__ref">
                  <HashLink to="#note109" className="footnote--cite">
                    ^
                  </HashLink>
                  Watts, 1989, p. 249.
                </span>
              </li>
              <li id="footnote114">
                <span className="footnote__ref">
                  <HashLink to="#note109" className="footnote--cite">
                    ^
                  </HashLink>
                  Watts, 1989, p. 253.
                </span>
              </li>
              <li id="footnote115">
                <span className="footnote__ref">
                  <HashLink to="#note109" className="footnote--cite">
                    ^
                  </HashLink>
                  Watts, 1989, p. 252.
                </span>
              </li>
              <li id="footnote116">
                <span className="footnote__ref">
                  <HashLink to="#note116" className="footnote--cite">
                    ^
                  </HashLink>
                  aa
                </span>
              </li>
              <li id="footnote117">
                <span className="footnote__ref">
                  <HashLink to="#note117" className="footnote--cite">
                    ^
                  </HashLink>
                  aa
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
export default LifecycleModels
