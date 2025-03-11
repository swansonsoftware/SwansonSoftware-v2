import React, { useContext, useEffect } from "react"
import { HashLink } from "react-router-hash-link"
import Page from "../Page"
import DispatchContext from "../../DispatchContext"
import StateContext from "../../StateContext"
import GTag from "../GTag"
import GStructuredData from "../GStructuredData"

function Design() {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)

  appState.backgroundStyle == "light" ? (document.body.classList.remove("dark"), document.body.classList.add("light")) : (document.body.classList.remove("light"), document.body.classList.add("dark"))

  useEffect(() => {
    appDispatch({ type: "backgroundStyleChange", color: "light" })
  }, [])

  return (
    <Page title="Design">
      <GTag></GTag>
      <GStructuredData type="Article" datePublished="2025-03-06T08:26:21-08:00" headline="Software Design"></GStructuredData>
      <meta name="description" content="Software design" />
      <div className="wrapper wrapper__article">
        <h1 className="headline__h1-cg">Software Design</h1>
        <div className="headline__author">Gregory Swanson | updated February 19, 2025</div>
        <div className="row row--gutters">
          <div className="row__colspan-4">
            <h3 className="headline__h3">Contents</h3>
            <ul className="list--ul">
              <li className="list list--toc">
                <HashLink to="#elementstechspecs" className="list--toc--a">
                  Technical Specifications
                </HashLink>
              </li>
              <li className="list list--toc">
                <HashLink to="#techspecexample" className="list--toc--a">
                  Technical Spec Example
                </HashLink>
              </li>
              <li className="list list--toc">
                <HashLink to="#designmethodologies" className="list--toc--a">
                  Design Methodologies
                </HashLink>
                <ul className="list-ul">
                  <li className="list list--toc">
                    <HashLink to="#structuredMethodology" className="list--toc--a">
                      Structured Design
                    </HashLink>
                  </li>
                </ul>
              </li>
              <li className="list list--toc">
                <HashLink to="#designquality" className="list--toc--a">
                  Design Quality
                </HashLink>
                <ul className="list-ul">
                  <li className="list list--toc">
                    <HashLink to="#aGoodDesign" className="list--toc--a">
                      What Makes a Good Design?
                    </HashLink>
                  </li>
                  <li className="list list--toc">
                    <HashLink to="#modularity" className="list--toc--a">
                      Modularity
                    </HashLink>
                  </li>
                  <li className="list list--toc">
                    <HashLink to="#designModels" className="list--toc--a">
                      Design Models
                    </HashLink>
                  </li>
                </ul>
              </li>
              <li className="list list--toc">
                <HashLink to="#notes" className="list--toc--a">
                  Notes
                </HashLink>
              </li>
            </ul>
          </div>
          <div className="row__colspan-7">
            <p className="dropCap" id="note1">
              A design is a plan, and without a plan there can be no design. Designs are based on understanding: understanding what we are trying to accomplish. In software design, understanding comes from user requirements.
              <HashLink to="#footnote1" className="footnote">
                <sup>[1]</sup>
              </HashLink>
            </p>
            <p id="note2">
              It’s been said that "without user’s requirements, there will be no software design."
              <HashLink to="#footnote2" className="footnote">
                <sup>[2]</sup>
              </HashLink>{" "}
              I would add that when there is no design, then no matter how it is implemented, it is correct. On the other hand, when there is no design, then no matter how it is implemented it is wrong. There is no way to win an argument about correctness when there is no design.
            </p>
          </div>
          <div className="row__colspan-1"></div>
          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p className="note">..."when there is no design, then no matter how it is implemented it is wrong. There is no way to win an argument about correctness when there is no design."</p>
            <p>The product of software design is a technical specification. This document or set of documents usually includes diagrams to present process model, data flow, process flow, and input forms and dialogs. The technical specification describes a program's operating environment, interfaces, functions, and modules.</p>
            <p className="note dropCapNote">A technical specification (technical spec) is not the same as a functional specification (functional spec). Functional specs describe the functionality: what the system should do, how users interact with the system, without technical details. Technical specs describe the system architecture: the technologies used, database structure, modules, interactions between components, frameworks used, interactions via APIs, etc.</p>
            <p>Technical specs take time to create but they provide time-saving benefits:</p>
            <ul>
              <li className="list">The engineer writing the spec (typically the software developer) becomes familiar with the issues involved and will provide a better time estimate</li>
              <li className="list">The technical spec is an efficient medium for communication: when answers to questions can be found in the spec, there is no need to ask an engineer</li>
              <li className="list">The process of creating a technical spec and having the spec for reference during development, testing, and creating user documentation will ensure that the product works as expected and has fewer bugs</li>
            </ul>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12" id="elementstechspecs">
            <h2 className="headline__h2">Technical Specifications</h2>
          </div>

          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p className="dropCap">There are two things you must know to create a technical specification:</p>
            <br></br>
            <ul>
              <li className="list">What information needs to be included (the technical specification describes a program's operating environment, interfaces, functions, and modules)</li>
              <li className="list">How to format the information</li>
            </ul>
            <p>When beginning a technical spec, a good approach is to start with a template. Free templates are available on the internet, and some documentation tools provide them.</p>
            <p id="note3">
              In general, design elements that should go into a technical spec include:
              <HashLink to="#footnote3" className="footnote">
                <sup>[3]</sup>
              </HashLink>
            </p>
            <ul>
              <li className="list">A statement of the problem and objectives</li>
              <li className="list">Constraints</li>
              <li className="list">A description of the product</li>
              <li className="list">Rationale for the design</li>
              <li className="list">A plan of production</li>
              <li className="list">A description of usage</li>
            </ul>
            <p>Most templates will begin with an Introduction section that includes topics such as purpose, intended audience, project scope, document conventions. However, we are talking about a template; it is very likely that the introduction is not always needed. For example, In the case of an application which a company sells, it is typical for areas of the application to be divided among developers. Whan a new release is planned the developers each write the specs for their area. There is no need for each developer to include in their spec sections for the intended audience, project scope, document conventions, etc.</p>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12" id="techspecexample">
            <h2 className="headline__h2">Technical Spec Example</h2>
          </div>

          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p className="dropCap">Example: we are writing software to run the new BeanKing coffee maker. This coffee maker lets users select different coffee drinks from a menu, connects to the internet, and has automation capability through Python scripts. The functional spec includes the following use cases:</p>
            <ul>
              <li className="list">
                UC-01: user selects a menu option
                <ul>
                  <li className="list">A for a latte</li>
                  <li className="list">B for cappuccino</li>
                  <li className="list">C for house coffee</li>
                </ul>
              </li>
              <li className="list">
                UC-02: automation script runs
                <ul>
                  <li className="list">API for menu option A is used</li>
                  <li className="list">API for menu option B is used</li>
                  <li className="list">API for menu option C is used</li>
                </ul>
              </li>
              <li className="list">UC-03: ?</li>
            </ul>
            <p>The technical spec includes:</p>
            <ul>
              <li className="list">An Operating Environment section that lists the operating system: Linux Embedded (as QNX would make the coffee machine prohibitively expensive), with support for an internet connection and Python scripts</li>
              <li className="list">
                A Features section, with the following entries:
                <ul>
                  <li className="list">The menu, with reference to the use case number UC-01. The entry includes a list of menu options and a wireframe diagram of the menu, and perhaps a UML Sequence diagram or Activity diagram</li>
                  <li className="list">The scripting API for automating the menu via Python scripts, with a reference to UC-02.</li>
                </ul>
              </li>
              <li className="list">
                Diagrams:
                <ul>
                  <li className="list">UML Sequence Diagram</li>
                  <li className="list">UML Activity Diagram</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12" id="designmethodologies">
            <h2 className="headline__h2">Design Methodologies</h2>
          </div>

          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p className="dropCap" id="note4">
              Design methods can be categorized as follows:
              <HashLink to="#footnote4" className="footnote">
                <sup>[4]</sup>
              </HashLink>
            </p>
            <br></br>
            <ol>
              <li className="list" id="note5">
                Graphical, a.k.a. systematic methods. Each graphical method includes a set of graphical symbols for representing and archiving design data. There is no theoretical model that describes design notations, nor are there any "empirical investigations" that can be used to determine when to use a particular form or how a particular form should be used{" "}
                <HashLink to="#footnote5" className="footnote">
                  <sup>[5]</sup>
                </HashLink>
              </li>
              <li className="list" id="note6">
                Mathematical, a.k.a. formal methods; these are rarely used "because of the enormous complexity of real systems",
                <HashLink to="#footnote6" className="footnote">
                  <sup>[6]</sup>
                </HashLink>{" "}
                and are not discussed.
              </li>
            </ol>
            <p id="note7">
              Graphical and mathematical refers to the way the method represents a design. Another categorization is based on the way the method guides the design process:
              <HashLink to="#footnote7" className="footnote">
                <sup>[7]</sup>
              </HashLink>
            </p>
            <ol>
              <li className="list">
                Prescriptive: a prescriptive method is one that provides design strategies such as:
                <ol>
                  <li className="list">Decomposition (stepwise refinement)</li>
                  <li className="list">Composition (bottom-up composition, JSP, OOD)</li>
                  <li className="list">Template-based (design patterns and templates for architectural styles)</li>
                  <li className="list">Evolutionary</li>
                </ol>
              </li>
              <li className="list">Descriptive: descriptive methods show the steps of the design process; that is, they describe the design process</li>
            </ol>
            <p id="note8">
              A design method has two main components:
              <HashLink to="#footnote8" className="footnote">
                <sup>[8]</sup>
              </HashLink>
            </p>
            <ol>
              <li className="list">A representation - the symbols and diagrams that model and describe the structure of a solution</li>
              <li className="list">A process - the steps or procedures required to implement a design</li>
            </ol>
            <p id="note9">
              Another basic component of design methods is heuristics: experience-based guidelines for producing designs within a particular problem domain.
              <HashLink to="#footnote9" className="footnote">
                <sup>[9]</sup>
              </HashLink>
            </p>
            <p>When deciding on a design method to use, choose one that complements the programming environment. Most languages in common use today have object-oriented capabilities.</p>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12" id="structuredMethodology">
            <h3 className="headline__h3">Structured Design</h3>
          </div>

          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p className="dropCap" id="note10">
              Structured design is based on theories developed by Bohm and Jacopini
              <HashLink to="#footnote10" className="footnote">
                <sup>[10]</sup>
              </HashLink>
              <sup>,</sup>
              <HashLink to="#footnote11" className="footnote">
                <sup>[11]</sup>
              </HashLink>
              . Yourdon and Constantine describe structured design as "a collection of guidelines for distinguishing between good designs and bad designs, and a collection of techniques, strategies, and heuristics that generally leads to good designs...".
              <HashLink to="#footnote12" className="footnote">
                <sup>[12]</sup>
              </HashLink>
            </p>
            <p>The unit of structured design is the function. Structured methodologies apply strategies and tools that help you</p>
            <ul>
              <li className="list">identify and isolate pieces of a system</li>
              <li className="list">iteratively apply the techniques until the design is complete</li>
            </ul>
            <p>Structured design emphasizes two approaches:</p>
            <ul>
              <li className="list">
                <b>Top-down decomposition</b> – a.k.a. stepwise refinement, starting with a drawing that depicts system functions as an upside-down tree of boxes. Work from the most general program function to the specific
              </li>
              <li className="list">
                <b>Bottom-up composition</b> - opposite of top-down decomposition, you start with specific lower-level functionality that you are familiar with and work to the general
              </li>
            </ul>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12" id="designquality">
            <h2 className="headline__h2">Design Quality</h2>
          </div>

          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p className="dropCap" id="note13">
              Four essential facts about software make software design difficult:
              <HashLink to="#footnote13" className="footnote">
                <sup>[13]</sup>
              </HashLink>
            </p>
            <ul>
              <li className="list">Complexity: The number of elements in software is greater than that of anything else built by humans</li>
              <li className="list">Conformity: While engineers and scientists are grounded in conformance to physical laws, software engineers must follow arbitrary rules imposed by human institutions</li>
              <li className="list">Changeability: In a repeating cycle, software systems change the way work gets done, new ways to use software become apparent, and require changes to the software</li>
              <li className="list">Invisibility: Other kinds of design have models or drawings in which a relationship between the representation and the system is easily grasped</li>
            </ul>
            <p id="note14">
              The above facts lead to the following design errors:
              <HashLink to="#footnote14" className="footnote">
                <sup>[14]</sup>
              </HashLink>
            </p>
            <ul>
              <li className="list">Incorrectness</li>
              <li className="list">Inconsistency (design statements make conflicting assumptions)</li>
              <li className="list">Ambiguity (causing errors during implementation)</li>
              <li className="list">Inferiority (does not meet the user's quality requirements)</li>
            </ul>
            <p id="note15">
              Design principles evolved to improve design outcomes. A design principle must exhibit four axioms if it can lead to good designs:
              <HashLink to="#footnote15" className="footnote">
                <sup>[15]</sup>
              </HashLink>
            </p>
            <ul>
              <li className="list">Axiom of Separation of Concerns: "a complex problem can best be solved by initially devising an intermediate solution expressed in terms of simpler independent problems"</li>
              <li className="list">Axiom of Comprehension: "the mind cannot easily manipulate more than about seven things at a time"</li>
              <li className="list">Axiom of Translation: "design correctness is unaffected by movement between equivalent contexts" that is, the application will produce the same results when it is executing in different but equivalent environments</li>
              <li className="list">Axiom of Transformation: "design correctness is unaffected by replacement of equivalent components"</li>
            </ul>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12" id="aGoodDesign">
            <h3 className="headline__h3">What Makes a Good Design?</h3>
          </div>

          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p className="dropCap" id="note16">
              In general, the best design is the least complex solution.
              <HashLink to="#footnote16" className="footnote">
                <sup>[16]</sup>
              </HashLink>{" "}
              Minimizing complexity in a design minimizes the greatest cost factors of software development: implementation, maintenance, and modification. Design quality will ultimately impact software quality; quality attributes of software affected by design include efficiency, correctness and reliability, portability, reusability, interoperability, usability, and testability.
              <HashLink to="#footnote17" className="footnote">
                <sup>[17]</sup>
              </HashLink>
              <sup>, </sup>
              <HashLink to="#footnote18" className="footnote">
                <sup>[18]</sup>
              </HashLink>{" "}
              Another factor is choice of programming language, which “determines whether algorithms and data structures can be naturally and easily coded”, which impacts the probability of correct implementation by the developer.
              <HashLink to="#footnote19" className="footnote">
                <sup>[19]</sup>
              </HashLink>
            </p>
            <p id="note20">
              The two main tools for dealing with complexity in software design are separation of concern and abstraction.
              <HashLink to="#footnote20" className="footnote">
                <sup>[20]</sup>
              </HashLink>{" "}
              The strategy we have for separation of concern is modularity (coupling and cohesion); the strategy we have for abstraction is the design model (symbols and diagrams).
            </p>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12" id="modularity">
            <h3 className="headline__h3">Modularity</h3>
          </div>

          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p className="dropCap" id="note21">
              Modularity is measured in terms of coupling and cohesion. Modularity is a measure of maintainability, testability, and possibly usability and reliability.
              <HashLink to="#footnote21" className="footnote">
                <sup>[21]</sup>
              </HashLink>
            </p>
            <h4 className="headline__h4">Coupling</h4>
            <p>Coupling is a measure of the type and strength of connections between modules. As coupling decreases, overall complexity decreases. Highly coupled modules have strong interconnections, loosely coupled modules have weak interconnections. Uncoupled modules have no interconnections. A programmer who is coding, debugging or modifying one of two (or more) highly coupled modules will encounter a higher probability that changes will be required in the other modules as well.</p>
            <p id="note22">
              Coupling is a relative measure indicated by four factors.
              <HashLink to="#footnote22" className="footnote">
                <sup>[22]</sup>
              </HashLink>{" "}
              In decreasing magnitude of effect on coupling:
            </p>
            <ul>
              <li className="list">The nature of the connection between modules: minimally connected (least coupling), Normally connected (somewhat higher coupling), Pathologically connected (highest coupling). These connections prevent us from understanding how a module works without understanding something about the program it's in.</li>
              <li className="list">How complex the interface is (in human terms)</li>
              <li className="list">The type of information flows along the connection</li>
              <li className="list">Binding time of the connection</li>
            </ul>
            <p id="note23">
              There is no standardized empirical measure of coupling, and names of coupling forms vary from one author to another. However, knowledge of the presence of forms of coupling is more useful to the designer than the extent of any form.
              <HashLink to="#footnote23" className="footnote">
                <sup>[23]</sup>
              </HashLink>
            </p>
            <h4 className="headline__h4">Cohesion</h4>
            <p id="note24">
              Cohesion is a measure of the functional relatedness of the components of a module.
              <HashLink to="#footnote24" className="footnote">
                <sup>[24]</sup>
              </HashLink>{" "}
              Cohesion is directly related to a module's relation to the problem solution.
              <HashLink to="#footnote25" className="footnote">
                <sup>[25]</sup>
              </HashLink>{" "}
              That is, as cohesion increases, overall complexity decreases.
            </p>
            <p id="note26">
              A problem with the structured concepts of coupling and cohesion is that they cannot be objectively assessed.
              <HashLink to="#footnote26" className="footnote">
                <sup>[26]</sup>
              </HashLink>
              <sup>, </sup>
              <HashLink to="#footnote27" className="footnote">
                <sup>[27]</sup>
              </HashLink>
            </p>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12" id="designModels">
            <h3 className="headline__h3">Design Models</h3>
          </div>

          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p className="dropCap">Design models usually include flowcharts to present the process model, data flow, and process flow cycles; and a form-level hierarchy (i.e. input forms and dialogs).</p>
            <p>Diagrams give us a way to communicate complex ideas: what we are capable of thinking depends on the language we use for thinking (Martin and McClure, 1985 p. 109). Diagrams extend our vocabulary, and different kinds of diagrams extend our vocabulary in different ways.</p>
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
                  Zhu, Hong, 2005, Software Design Methodology: From Principles to Architectural Styles. Butterworth-Heinemann. 368 pages. P.4.
                </span>
              </li>
              <li id="footnote2">
                <span className="footnote__ref">
                  <HashLink to="#note2" className="footnote--cite">
                    ^
                  </HashLink>
                  Zhu, 2005, p4.
                </span>
              </li>
              <li id="footnote3">
                <span className="footnote__ref">
                  <HashLink to="#note3" className="footnote--cite">
                    ^
                  </HashLink>
                  Zhu, 2005, p7.
                </span>
              </li>
              <li id="footnote4">
                <span className="footnote__ref">
                  <HashLink to="#note4" className="footnote--cite">
                    ^
                  </HashLink>
                  Budgen, David, 2003, Software Design (2nd ed.): Pearson Education Limited/Addison-Wesley, 468 pages. ISBN 0-201-72219-4. P. 23.
                </span>
              </li>
              <li id="footnote5">
                <span className="footnote__ref">
                  <HashLink to="#note5" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid., p. 445
                </span>
              </li>
              <li id="footnote6">
                <span className="footnote__ref">
                  <HashLink to="#note6" className="footnote--cite">
                    ^
                  </HashLink>
                  <HashLink to="https://shemesh.larc.nasa.gov/fm/fm-what.html">Butler, R. W., 2001</HashLink>
                </span>
              </li>
              <li id="footnote7">
                <span className="footnote__ref">
                  <HashLink to="#note7" className="footnote--cite">
                    ^
                  </HashLink>
                  Zhu, 2005, p. 60.
                </span>
              </li>

              <li id="footnote8">
                <span className="footnote__ref">
                  <HashLink to="#note8" className="footnote--cite">
                    ^
                  </HashLink>
                  Budgen, 2003, p. 34.
                </span>
              </li>
              <li id="footnote9">
                <span className="footnote__ref">
                  <HashLink to="#note9" className="footnote--cite">
                    ^
                  </HashLink>
                  Zhu, 2005, p.67.
                </span>
              </li>
              <li id="footnote10">
                <span className="footnote__ref">
                  <HashLink to="#note10" className="footnote--cite">
                    ^
                  </HashLink>
                  Bohm, Corrado and Jacopini, Giuseppe, 1966, Flow Diagrams, Turing Machines and Languages with Only Two Formation Rules: Communications of the ACM, v. 9, no. 5, pp. 366-371.
                </span>
              </li>
              <li id="footnote11">
                <span className="footnote__ref">
                  <HashLink to="#note10" className="footnote--cite">
                    ^
                  </HashLink>
                  Yourdon, Edward and Constantine, Larry L., 1979, Structured Design: Fundamentals of a Discipline of Computer Program and Systems Design: Prentice-Hall, 473 pages. ISBN 0-13-854471-9. P. 73.
                </span>
              </li>
              <li id="footnote12">
                <span className="footnote__ref">
                  <HashLink to="#note10" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid., p. 15.
                </span>
              </li>
              <li id="footnote13">
                <span className="footnote__ref">
                  <HashLink to="#note13" className="footnote--cite">
                    ^
                  </HashLink>
                  Zhu, 2005, p. 48. Zhu summarized Brooks, Frederick P. (1986): "No Silver Bullet—Essence and Accident in Software Engineering"
                </span>
              </li>
              <li id="footnote14">
                <span className="footnote__ref">
                  <HashLink to="#note14" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid., p. 48. Zhu summarized Parnas, D. L., and Weiss, D. M., 1987, Active Design Reviews: Principles and Practices: Journal of Systems and Software, v. 7.
                </span>
              </li>
              <li id="footnote15">
                <span className="footnote__ref">
                  <HashLink to="#note15" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid., p. 51. Zhu summarized Witt, B., Baker, T., and Merritt, E., 1994: Software Architecture and Design, Van Nostrand Reinhold.
                </span>
              </li>
              <li id="footnote16">
                <span className="footnote__ref">
                  <HashLink to="#note16" className="footnote--cite">
                    ^
                  </HashLink>
                  Yourdon and Constantine, p. 15.
                </span>
              </li>
              <li id="footnote17">
                <span className="footnote__ref">
                  <HashLink to="#note16" className="footnote--cite">
                    ^
                  </HashLink>
                  Zhu, 2005, p. 33.
                </span>
              </li>
              <li id="footnote18">
                <span className="footnote__ref">
                  <HashLink to="#note16" className="footnote--cite">
                    ^
                  </HashLink>
                  Budgen, 2003, p. 70.
                </span>
              </li>
              <li id="footnote19">
                <span className="footnote__ref">
                  <HashLink to="#note16" className="footnote--cite">
                    ^
                  </HashLink>
                  Zhu, 2005, 35.
                </span>
              </li>
              <li id="footnote20">
                <span className="footnote__ref">
                  <HashLink to="#note20" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid., p. 53.
                </span>
              </li>
              <li id="footnote21">
                <span className="footnote__ref">
                  <HashLink to="#note21" className="footnote--cite">
                    ^
                  </HashLink>
                  Budgen 2003, p. 77.
                </span>
              </li>
              <li id="footnote22">
                <span className="footnote__ref">
                  <HashLink to="#note22" className="footnote--cite">
                    ^
                  </HashLink>
                  Zhu, 2005,
                </span>
              </li>
              <li id="footnote23">
                <span className="footnote__ref">
                  <HashLink to="#note23" className="footnote--cite">
                    ^
                  </HashLink>
                  Budgen, 2003, p. 78.
                </span>
              </li>
              <li id="footnote24">
                <span className="footnote__ref">
                  <HashLink to="#note24" className="footnote--cite">
                    ^
                  </HashLink>
                  Yourdon and Constantine 1979, p. 106; Budgen 2003, p. 78.
                </span>
              </li>
              <li id="footnote25">
                <span className="footnote__ref">
                  <HashLink to="#note24" className="footnote--cite">
                    ^
                  </HashLink>
                  Yourdon and Constantine 1979, p. 106.
                </span>
              </li>
              <li id="footnote26">
                <span className="footnote__ref">
                  <HashLink to="#note26" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid., p. 132; Budgen, 2003, p. 78.
                </span>
              </li>
              <li id="footnote27">
                <span className="footnote__ref">
                  <HashLink to="#note26" className="footnote--cite">
                    ^
                  </HashLink>
                  Though work continues in an effort to change this - see for example: Bieman, J. M. and Kang, B-K, 1998, Measuring Design-level Cohesion: IEEE Transactions on Software Engineering, v. 24, no. 2, pp. 111-124, or Kramer, S., and Kaindl, H., 2004, Coupling and Cohesion Metrics for Knowledge-Based Systems Using Frames and Rules: ACM Transactions on Software Engineering and Methodology v. 13 no. 3, pp. 332-358.
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
export default Design
