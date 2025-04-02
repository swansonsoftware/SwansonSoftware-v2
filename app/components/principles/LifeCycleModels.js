import React, { useContext, useEffect } from "react"
import { HashLink } from "react-router-hash-link"
import Page from "../Page"
import DispatchContext from "../../DispatchContext"
import StateContext from "../../StateContext"
import GTag from "../GTag"
import GStructuredData from "../GStructuredData"

function LifecycleModels() {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)

  appState.backgroundStyle == "light" ? (document.body.classList.remove("dark"), document.body.classList.add("light")) : (document.body.classList.remove("light"), document.body.classList.add("dark"))

  useEffect(() => {
    appDispatch({ type: "backgroundStyleChange", color: "light" })
  }, [])

  return (
    <Page title="Lifecycle Models">
      <GTag></GTag>
      <GStructuredData type="Article" datePublished="2025-03-06T08:26:21-08:00" dateModified="2025-03-26T11:51:08-07:00" headline="Software Life Cycle Models"></GStructuredData>
      <meta name="description" content="A survey of Software Development Life Cycle models and how to choose between them based on factors such as project schedule, requirements, team quality, etc." />
      <div className="wrapper wrapper__article">
        <h1 className="headline__h1-cg">Software Life Cycle Models</h1>
        <div className="headline__author">Gregory Swanson | updated March 26, 2025</div>
        <div className="row row--gutters">
          <div className="row__colspan-4">
            <h2 className="headline__h2-contents">Contents</h2>
            <ul className="list--ul">
              <li className="list list--toc">
                <HashLink to="#thesdlc" className="list--toc--a">
                  The SDLC
                </HashLink>
              </li>
              <li className="list list--toc">
                <HashLink to="#sdlcmodels" className="list--toc--a">
                  SDLC Models
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
                    <HashLink to="#waterfallsubproj" className="list--toc--a">
                      Waterfall with Subprojects
                    </HashLink>
                  </li>
                  <li className="list list--toc">
                    <HashLink to="#whirlpool" className="list--toc--a">
                      Whirlpool, or Waterfall with Risk Reduction
                    </HashLink>
                  </li>
                  <li className="list list--toc">
                    <HashLink to="#evolutionaryproto" className="list--toc--a">
                      Evolutionary Prototyping
                    </HashLink>
                  </li>
                  <li className="list list--toc">
                    <HashLink to="#stageddeliv" className="list--toc--a">
                      Staged Delivery
                    </HashLink>
                  </li>
                  <li className="list list--toc">
                    <HashLink to="#evolutionarydeliv" className="list--toc--a">
                      Evolutionary Delivery
                    </HashLink>
                  </li>
                  <li className="list list--toc">
                    <HashLink to="#spiral" className="list--toc--a">
                      Spiral
                    </HashLink>
                  </li>
                </ul>
              </li>
              <li className="list list--toc">
                <HashLink to="#choosingmodel" className="list--toc--a">
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
          <div className="row__colspan-7">
            <p className="dropCap">Probably every software developer knows what a software life cycle is but knowing what a software life cycle is doesn’t make a better programmer. Not all managers know what a software life cycle is but for any manager faced with managing a software project, knowing about software life cycle models will make a better manager.</p>
            <p>
              Making software is not hard, unless you have a deadline when it must be finished, or unless the deadline is unreasonably short, or unless the software requirements are vague or incomplete or nonexistent, or unless you have customers with high expectations, or unless the developers are inexperienced or using new and unfamiliar tools or languages or just doing something they have never done before with the tools and language they are most familiar with. In most cases, making software usually <i>is</i> hard. It’s hard to make software on time, it’s hard to know what features customers need and how they expect them to work, it’s hard to make software that is useable and not buggy. The software life cycle was invented to help with these problems.
            </p>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12" id="thesdlc">
            <h2 className="headline__h2">The SDLC</h2>
          </div>

          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p id="note1" className="dropCap">
              Experience is the best teacher, and after many failed projects and much wasted money, a pattern emerged that led to creation of the software development life cycle (SDLC).
              <HashLink to="#footnote1" className="footnote">
                <sup>[1]</sup>
              </HashLink>{" "}
              The SDLC is used to organize the stages of software development, and there are different SDLC models that emphasize different strategies for building software based on factors such as how constrained the project schedule is, how well-known the requirements are, how sophisticated the team is, etc. Your choice of SDLC should be based on how a particular model will work in your environment, or for a specific project, and you must determine that.
              <HashLink to="#footnote2" className="footnote">
                <sup>[2]</sup>
              </HashLink>{" "}
              Keep in mind that life cycle models are not mutually exclusive; in fact, you should be prepared to change models as a project evolves, so you can make use of model features that apply to a specific situation.
              <HashLink to="#footnote3" className="footnote">
                <sup>[3]</sup>
              </HashLink>
            </p>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12" id="sdlcmodels">
            <h2 className="headline__h2">SDLC Models</h2>
          </div>

          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p className="dropCap">There are two high-level categories of SDLC models:</p>
            <ol>
              <li className="list" id="note4">
                Named models: for example, Waterfall, Spiral, Sashimi
                <HashLink to="#footnote4" className="footnote">
                  <sup>[4]</sup>
                </HashLink>
              </li>
              <li className="list" id="note5">
                Tailored: a custom SDLC that you create using process cell diagrams which represent development procedures such as requirements gathering, detailed design, implementation, etc.
                <HashLink to="#footnote5" className="footnote">
                  <sup>[5]</sup>
                </HashLink>{" "}
                We will not discuss these.
              </li>
            </ol>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12 row__colspan-12--no-top-pad">
            <h3 className="headline__h3" id="codeandfix">
              Code and Fix
            </h3>
          </div>
          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p id="note6" className="dropCap">
              If no thought has been given to the use of an SDLC, this is the "model" you are likely using. It means no model. Boehm described this model as the root of the problem from which the first life cycle model appeared in 1956.
              <HashLink to="#footnote6" className="footnote">
                <sup>[6]</sup>
              </HashLink>
            </p>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12 row__colspan-12--no-top-pad">
            <h3 className="headline__h3" id="waterfall">
              Waterfall
            </h3>
          </div>
          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p id="note7" className="dropCap">
              The waterfall model is a formal process for developing software in a top-down sequence.
              <HashLink to="#footnote7" className="footnote">
                <sup>[7]</sup>
              </HashLink>{" "}
              It is very document-oriented and works better when a project can be defined well. Because of these characteristics, the waterfall model is suitable for projects where "quality requirements dominate cost and schedule requirements".
              <HashLink to="#footnote8" className="footnote">
                <sup>[8]</sup>
              </HashLink>
            </p>

            <h4 className="headline__h4">Main Weaknesses</h4>

            <p id="note9">
              The waterfall model treats activities as sequential and disjoint and expects that the project is well-defined.
              <HashLink to="#footnote9" className="footnote">
                <sup>[9]</sup>
              </HashLink>{" "}
              It assumes that requirements can be complete, which is seldom the case.
              <HashLink to="#footnote10" className="footnote">
                <sup>[10]</sup>
              </HashLink>{" "}
              It was introduced at a time when computers and computer time were very expensive relative to the cost of personnel, but today the opposite is true.
              <HashLink to="#footnote11" className="footnote">
                <sup>[11]</sup>
              </HashLink>
            </p>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12 row__colspan-12--no-top-pad">
            <h3 className="headline__h3" id="sashimi">
              Sashimi
            </h3>
          </div>
          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p id="note12" className="dropCap">
              The Sashimi model, a modified waterfall model, originated in Japan as an improvement based on experience with the waterfall model.
              <HashLink to="#footnote12" className="footnote">
                <sup>[12]</sup>
              </HashLink>{" "}
              With the Sashimi model there is greater overlap between phases, fewer phases, and several activities are merged into the phases (rather than in separate phases). The amount of documentation is reduced because less is needed when there is personnel continuity between phases and activities.
              <HashLink to="#footnote13" className="footnote">
                <sup>[13]</sup>
              </HashLink>
            </p>

            <h4 className="headline__h4">Main Weaknesses</h4>

            <p id="note14">
              Greater overlap between phases causes difficulty in determining milestones and reduces your ability to track progress.
              <HashLink to="#footnote14" className="footnote">
                <sup>[14]</sup>
              </HashLink>{" "}
              Potentials for miscommunication and mistaken assumptions means that team members need a higher level of sophistication to avoid these pitfalls.
            </p>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12 row__colspan-12--no-top-pad">
            <h3 className="headline__h3" id="waterfallsubproj">
              Waterfall with Subprojects
            </h3>
          </div>
          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p id="note15" className="dropCap">
              The Waterfall with Subprojects model, a modified waterfall model, solves the problem with the waterfall model in which implementation of well-understood parts of a system are not allowed until the design of difficult parts are complete.
              <HashLink to="#footnote15" className="footnote">
                <sup>[15]</sup>
              </HashLink>{" "}
              Implementing a waterfall with subprojects requires the architecture to have the system broken into subsystems that can be implemented as separate projects.
              <HashLink to="#footnote16" className="footnote">
                <sup>[16]</sup>
              </HashLink>
            </p>

            <h4 className="headline__h4">Main Weaknesses</h4>

            <p id="note17">
              Unforeseen interdependencies between the subsystems.
              <HashLink to="#footnote17" className="footnote">
                <sup>[17]</sup>
              </HashLink>
            </p>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12 row__colspan-12--no-top-pad">
            <h3 className="headline__h3" id="whirlpool">
              Whirlpool, or Waterfall with Risk Reduction
            </h3>
          </div>
          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p id="note18" className="dropCap">
              This model addresses the problem with the waterfall model where one step must be complete before you can proceed to the next.
              <HashLink to="#footnote18" className="footnote">
                <sup>[18]</sup>
              </HashLink>
            </p>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12 row__colspan-12--no-top-pad">
            <h3 className="headline__h3" id="evolutionaryproto">
              Evolutionary Prototyping
            </h3>
          </div>
          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p id="note19" className="dropCap">
              This is one of the "best practices" McConnell describes as key to attaining the most reliable reduction in development time. Evolutionary prototyping addresses the problem of poorly understood or changing requirements by allowing the system concept to evolve as development progresses.
              <HashLink to="#footnote19" className="footnote">
                <sup>[19]</sup>
              </HashLink>{" "}
              The customer is shown a prototype of some aspect of the system, provides feedback, and functionality is adjusted for the next prototype. At some point, agreement on functionality is reached and the final development phase begins, where all remaining work is completed.
            </p>

            <h4 className="headline__h4">Main Weaknesses</h4>

            <p id="note20">
              There are many potential risks associated with this model, but most are easily managed. Even with so many potential risks, the potential to reduce development time by 45 to 80 percent should outweigh them.
              <HashLink to="#footnote20" className="footnote">
                <sup>[20]</sup>
              </HashLink>
            </p>

            <ul>
              <li className="list" id="note21">
                Unrealistic schedule and budget expectations - when you produce a prototype in a short amount of time you set expectations high. Be sure to communicate the limitations of the prototype
                <HashLink to="#footnote21" className="footnote">
                  <sup>[21]</sup>
                </HashLink>
              </li>
              <li className="list" id="note22">
                Poor view of project timeline - evolutionary prototyping's usefulness is in allowing upstream work to begin with coding (the prototype), in exchange for potential increased downstream rework. While time that would be used to produce requirements and design documents is saved, you cannot anticipate how many iterations will be needed.
                <HashLink to="#footnote22" className="footnote">
                  <sup>[22]</sup>
                </HashLink>{" "}
                McConnell suggests using a modification of staged delivery that includes aspects of evolutionary prototyping to manage this risk.
              </li>
              <li className="list">Poor feedback - success with evolutionary prototyping depends on the quality of feedback from the end user or customer.</li>
              <li className="list" id="note23">
                Poor product performance - when developing a prototype the developer might think that it will be thrown away later, so poor-quality code is written and techniques that would help performance are ignored.
                <HashLink to="#footnote23" className="footnote">
                  <sup>[23]</sup>
                </HashLink>{" "}
                McConnell suggests that the prototype design should be created well enough so that it can be modified easily into production-quality; also, if you create a throwaway prototype, be sure to throw it away
                <HashLink to="#footnote24" className="footnote">
                  <sup>[24]</sup>
                </HashLink>
              </li>
              <li className="list" id="note25">
                Unrealistic expectations for performance - a prototype may perform very well because it does not have to do as much work, e.g. connecting to a production database and displaying the results of a query. On the other hand, a prototype may perform poorly due to the language used.
                <HashLink to="#footnote25" className="footnote">
                  <sup>[25]</sup>
                </HashLink>{" "}
                McConnell suggests adding code to slow down the performance if the prototype is too fast and explain that the final product will be written in a language that performs better.
                <HashLink to="#footnote26" className="footnote">
                  <sup>[26]</sup>
                </HashLink>
              </li>
              <li className="list" id="note27">
                Poor design - if there is any time during development in which experience and ability are needed, it is on a prototyping project: "Evolutionary Prototyping requires that developers make far-reaching design decisions much earlier in the development process than when other development approaches are used. Inexperienced developers are often poorly equipped to make good design decisions under such circumstances".
                <HashLink to="#footnote27" className="footnote">
                  <sup>[27]</sup>
                </HashLink>
              </li>
            </ul>

            <p id="note28">
              Prototyping generally produces better designs, but there are a few factors that can interfere.
              <HashLink to="#footnote28" className="footnote">
                <sup>[28]</sup>
              </HashLink>
            </p>
            <ul>
              <li className="list">Manage successive prototypes so that the design does not deteriorate.</li>
              <li className="list">When design problems arise due to feedback from customers or end users, don't try to force the design to work when redesign is more appropriate.</li>
              <li className="list" id="note29">
                Poor maintainability - evolutionary prototyping sometimes is used as an excuse for code-and-fix development. McConnell found that of the published studies on prototyping, more experienced worse maintainability than with other approaches.
                <HashLink to="#footnote29" className="footnote">
                  <sup>[29]</sup>
                </HashLink>{" "}
                Be aware of this tendency and be ready to take precautions.
              </li>
              <li className="list">There may be increased risk of feature creep due to factors such as asking users for feedback on a prototype.</li>
              <li className="list">There is risk of wasting time investigating features that are excluded from the product later or developing the prototype too far.</li>
            </ul>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12 row__colspan-12--no-top-pad">
            <h3 className="headline__h3" id="stageddeliv">
              Staged Delivery
            </h3>
          </div>
          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p id="note30" className="dropCap">
              Staged delivery addresses the problem with the waterfall model where there is no visible progress of the project from the end user's perspective, because nothing is delivered until everything is finished.
              <HashLink to="#footnote30" className="footnote">
                <sup>[30]</sup>
              </HashLink>
            </p>
            <p>With staged delivery, software is delivered in "successive stages" as the project progresses. Unlike evolutionary prototyping, staged delivery requires you to know what you are building - the requirements analysis has been done, and the system concept is well-defined. This model works well with software that is customized for each customer, from a base product. The customer can begin using the system while development of the customizations continues.</p>
            <p id="note31">
              Staged delivery does not reduce development time as does evolutionary prototyping, but it does improve visibility of development progress.
              <HashLink to="#footnote31" className="footnote">
                <sup>[31]</sup>
              </HashLink>{" "}
              If there are problems, you will know sooner.
            </p>

            <h4 className="headline__h4">Other benefits provided by staged delivery</h4>

            <ul>
              <li className="list" id="note32">
                Reduced estimation error - allows you to break up the project estimate into smaller estimates
                <HashLink to="#footnote32" className="footnote">
                  <sup>[32]</sup>
                </HashLink>
              </li>
              <li className="list" id="note33">
                Minimizes integration problems - earlier releases means earlier integration. Integration will be more of a priority when everyone knows that the due date is near
                <HashLink to="#footnote33" className="footnote">
                  <sup>[33]</sup>
                </HashLink>
              </li>
            </ul>

            <h4 className="headline__h4">Requirements</h4>

            <p id="note34">
              You need a good understanding of technical dependencies so that the features in one planned release do not leap frog planned release of required feature dependencies.
              <HashLink to="#footnote34" className="footnote">
                <sup>[34]</sup>
              </HashLink>
            </p>
            <p id="note35">
              Developers need to accept some restrictions on their assignments to meet the deadline for a stage.
              <HashLink to="#footnote35" className="footnote">
                <sup>[35]</sup>
              </HashLink>
            </p>
            <p id="note36">
              Staged delivery only works for systems in which subsets of functionality are useful.
              <HashLink to="#footnote36" className="footnote">
                <sup>[36]</sup>
              </HashLink>
            </p>

            <h4 className="headline__h4">Main Weaknesses</h4>

            <p id="note37">
              Feature creep - it is typical for users to find functionality that they want added, once they have a system to use.
              <HashLink to="#footnote37" className="footnote">
                <sup>[37]</sup>
              </HashLink>
            </p>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12 row__colspan-12--no-top-pad">
            <h3 className="headline__h3" id="evolutionarydeliv">
              Evolutionary Delivery
            </h3>
          </div>
          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p id="note38" className="dropCap">
              Evolutionary delivery is a combination of evolutionary prototyping and staged delivery.
              <HashLink to="#footnote38" className="footnote">
                <sup>[38]</sup>
              </HashLink>{" "}
              The degree to which one balances the other is flexible. This model works well for customized software for situations where the customer needs to use the software before deciding if modifications are required.
            </p>
            <p id="note39">
              Evolutionary delivery can be balanced more toward evolutionary prototyping; this provides the customer with "highly visible signs of progress",
              <HashLink to="#footnote39" className="footnote">
                <sup>[39]</sup>
              </HashLink>{" "}
              provides flexibility to change the system based on user requests, and provides less control for management in terms of project schedule. On the other hand, evolutionary delivery can be balanced more toward staged delivery; this also provides the customer with "highly visible signs of progress” but provides little flexibility to change the system based on user requests and provides more control for management.
            </p>

            <h4 className="headline__h4">Requirements</h4>

            <p id="note40">
              Successful use of evolutionary delivery requires you to begin with a basic idea of the system, and you use that to build a system architecture and core.
              <HashLink to="#footnote40" className="footnote">
                <sup>[40]</sup>
              </HashLink>{" "}
              The architecture needs to be flexible so it can change as the system evolves.
            </p>
            <p id="note41">
              While pure staged delivery does not allow the system architecture to evolve, evolutionary delivery does at the expense of some control over project schedule. You can gain back control by balancing the project toward staged delivery. McConnell describes an example where you decide at the outset on a set of four evolutionary deliveries, and each successive delivery incorporates features which evolved out of customer feedback.
              <HashLink to="#footnote41" className="footnote">
                <sup>[41]</sup>
              </HashLink>
            </p>

            <h4 className="headline__h4">Main Weaknesses</h4>

            <p id="note42">
              When an evolutionary delivery model is balanced more towards evolutionary prototyping, it takes on the same risks associated with that model. When an evolutionary delivery model is balanced towards staged delivery, it takes on the risks associated with staged delivery.
              <HashLink to="#footnote42" className="footnote">
                <sup>[42]</sup>
              </HashLink>
            </p>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12 row__colspan-12--no-top-pad">
            <h3 className="headline__h3" id="spiral">
              Spiral
            </h3>
          </div>
          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p id="note43" className="dropCap">
              The spiral model was designed to reduce risks that stem from a lack of understanding of requirements, architecture, the technology used, etc.
              <HashLink to="#footnote43" className="footnote">
                <sup>[43]</sup>
              </HashLink>
            </p>
            <p id="note44">
              Each layer of the spiral - one complete loop - is an iteration that includes steps for resolving risk with a deliverable. This might be prototyping to determine performance capabilities, delivering a prototype to evaluate vague requirements, etc. The final loop uses the waterfall approach, after risks have been considered and reduced to acceptable levels.
              <HashLink to="#footnote44" className="footnote">
                <sup>[44]</sup>
              </HashLink>
            </p>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12" id="choosingmodel">
            <h2 className="headline__h2">Choosing a Model</h2>
          </div>
          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p id="note45" className="dropCap">
              If you can answer some questions about your project, then you can use those answers to choose from a matrix that shows how life cycle models work under different circumstances.
              <HashLink to="#footnote45" className="footnote">
                <sup>[45]</sup>
              </HashLink>
            </p>
            <p id="note46">
              Legend: x = excellent, ~ = fair to excellent, empty box = poor.
              <HashLink to="#footnote46" className="footnote">
                <sup>[46]</sup>
              </HashLink>
            </p>
            <table className="table table--no-border table--cell-border">
              <thead>
                <tr>
                  <th>Model</th>
                  <th className="table--vert">Works with poorly understood requirements</th>
                  <th className="table--vert">Works with poorly understood architecture</th>
                  <th className="table--vert">Produces a highly reliable system</th>
                  <th className="table--vert">Produces a system with large growth envelope</th>
                  <th className="table--vert">Manages risks</th>
                  <th className="table--vert">Can be constrained to a predefined schedule</th>
                  <th className="table--vert">Has low overhead</th>
                  <th className="table--vert">Allows for midcourse corrections</th>
                  <th className="table--vert">Provides customer with progress visibility</th>
                  <th className="table--vert">Provides management with progress visibility</th>
                  <th className="table--vert">Requires little manager or developer sophistication</th>
                </tr>
              </thead>
              <tbody className="table--alternate-row-color">
                <tr>
                  <td>Pure Waterfall</td>
                  <td></td>
                  <td></td>
                  <td className="table--cell-border__acenter">X</td>
                  <td className="table--cell-border__acenter">X</td>
                  <td></td>
                  <td className="table--cell-border__acenter">~</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="table--cell-border__acenter">~</td>
                  <td className="table--cell-border__acenter">~</td>
                </tr>
                <tr>
                  <td>Code-and-Fix</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="table--cell-border__acenter">X</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="table--cell-border__acenter">X</td>
                </tr>
                <tr>
                  <td>Spiral</td>
                  <td className="table--cell-border__acenter">X</td>
                  <td className="table--cell-border__acenter">X</td>
                  <td className="table--cell-border__acenter">X</td>
                  <td className="table--cell-border__acenter">X</td>
                  <td className="table--cell-border__acenter">X</td>
                  <td className="table--cell-border__acenter">~</td>
                  <td className="table--cell-border__acenter">~</td>
                  <td className="table--cell-border__acenter">~</td>
                  <td className="table--cell-border__acenter">X</td>
                  <td className="table--cell-border__acenter">X</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Modified Waterfalls</td>
                  <td className="table--cell-border__acenter">~</td>
                  <td className="table--cell-border__acenter">~</td>
                  <td className="table--cell-border__acenter">X</td>
                  <td className="table--cell-border__acenter">X</td>
                  <td className="table--cell-border__acenter">~</td>
                  <td className="table--cell-border__acenter">~</td>
                  <td className="table--cell-border__acenter">X</td>
                  <td className="table--cell-border__acenter">~</td>
                  <td className="table--cell-border__acenter">~</td>
                  <td className="table--cell-border__acenter">~</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Evolutionary Prototyping</td>
                  <td className="table--cell-border__acenter">X</td>
                  <td></td>
                  <td className="table--cell-border__acenter">~</td>
                  <td className="table--cell-border__acenter">X</td>
                  <td className="table--cell-border__acenter">~</td>
                  <td></td>
                  <td className="table--cell-border__acenter">~</td>
                  <td className="table--cell-border__acenter">X</td>
                  <td className="table--cell-border__acenter">X</td>
                  <td className="table--cell-border__acenter">~</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Staged Delivery</td>
                  <td></td>
                  <td></td>
                  <td className="table--cell-border__acenter">X</td>
                  <td className="table--cell-border__acenter">X</td>
                  <td className="table--cell-border__acenter">~</td>
                  <td className="table--cell-border__acenter">~</td>
                  <td className="table--cell-border__acenter">~</td>
                  <td></td>
                  <td className="table--cell-border__acenter">~</td>
                  <td className="table--cell-border__acenter">X</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Evolutionary Delivery</td>
                  <td className="table--cell-border__acenter">~</td>
                  <td></td>
                  <td className="table--cell-border__acenter">~</td>
                  <td className="table--cell-border__acenter">X</td>
                  <td className="table--cell-border__acenter">~</td>
                  <td className="table--cell-border__acenter">~</td>
                  <td className="table--cell-border__acenter">~</td>
                  <td className="table--cell-border__acenter">~</td>
                  <td className="table--cell-border__acenter">X</td>
                  <td className="table--cell-border__acenter">X</td>
                  <td className="table--cell-border__acenter">~</td>
                </tr>
                <tr>
                  <td>Design-to-Schedule</td>
                  <td></td>
                  <td></td>
                  <td className="table--cell-border__acenter">~</td>
                  <td className="table--cell-border__acenter">~</td>
                  <td className="table--cell-border__acenter">~</td>
                  <td className="table--cell-border__acenter">X</td>
                  <td className="table--cell-border__acenter">~</td>
                  <td></td>
                  <td className="table--cell-border__acenter">~</td>
                  <td className="table--cell-border__acenter">X</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Design-to-Tools</td>
                  <td className="table--cell-border__acenter">~</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="table--cell-border__acenter">X</td>
                  <td className="table--cell-border__acenter">~</td>
                  <td className="table--cell-border__acenter">X</td>
                  <td className="table--cell-border__acenter">X</td>
                  <td className="table--cell-border__acenter">X</td>
                  <td className="table--cell-border__acenter">~</td>
                </tr>
                <tr>
                  <td>Commercial</td>
                  <td className="table--cell-border__acenter">X</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="table--cell-border__acenter">X</td>
                  <td className="table--cell-border__acenter">X</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="table--cell-border__acenter">~</td>
                </tr>
              </tbody>
            </table>
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
                  DeGrace, Peter, and Stahl, Leslie Hulet, 1990, Wicked Problems, Righteous Solutions: A Catalogue of Modern Software Engineering Paradigms: Prentice-Hall, 244 pages. ISBN: 0-13-590126-X
                </span>
              </li>
              <li id="footnote2">
                <span className="footnote__ref">
                  <HashLink to="#note1" className="footnote--cite">
                    ^
                  </HashLink>
                  McConnell, Steve, 1996, Rapid Development: Taming Wild Software Schedules: Microsoft Press, 660 pages. ISBN: 1-55615-900-5. P. 154.
                </span>
              </li>
              <li id="footnote3">
                <span className="footnote__ref">
                  <HashLink to="#note1" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid.
                </span>
              </li>
              <li id="footnote4">
                <span className="footnote__ref">
                  <HashLink to="#note4" className="footnote--cite">
                    ^
                  </HashLink>
                  A good discussion of these is in McConnell's book.
                </span>
              </li>
              <li id="footnote5">
                <span className="footnote__ref">
                  <HashLink to="#note5" className="footnote--cite">
                    ^
                  </HashLink>
                  See: Humphrey, Watts S., 1989, Managing the Software Process: Addison-Wesley, 494 pages. ISBN: 0-201-18095-2
                </span>
              </li>
              <li id="footnote6">
                <span className="footnote__ref">
                  <HashLink to="#note6" className="footnote--cite">
                    ^
                  </HashLink>
                  Boehm, Barry W., 1988, A Spiral Model of Software Development and Enhancement. Computer, May: p. 61-72.
                </span>
              </li>
              <li id="footnote7">
                <span className="footnote__ref">
                  <HashLink to="#note7" className="footnote--cite">
                    ^
                  </HashLink>
                  DeGrace and Stahl, p. 59.
                </span>
              </li>
              <li id="footnote8">
                <span className="footnote__ref">
                  <HashLink to="#note7" className="footnote--cite">
                    ^
                  </HashLink>
                  McConnell, p. 137.
                </span>
              </li>
              <li id="footnote9">
                <span className="footnote__ref">
                  <HashLink to="#note9" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid. p. 143.
                </span>
              </li>
              <li id="footnote10">
                <span className="footnote__ref">
                  <HashLink to="#note9" className="footnote--cite">
                    ^
                  </HashLink>
                  DeGrace and Stahl, p. 68; McConnell, p. 137.
                </span>
              </li>
              <li id="footnote11">
                <span className="footnote__ref">
                  <HashLink to="#note9" className="footnote--cite">
                    ^
                  </HashLink>
                  DeGrace and Stahl, p. 70.
                </span>
              </li>
              <li id="footnote12">
                <span className="footnote__ref">
                  <HashLink to="#note12" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid. p. 154.
                </span>
              </li>
              <li id="footnote13">
                <span className="footnote__ref">
                  <HashLink to="#note12" className="footnote--cite">
                    ^
                  </HashLink>
                  McConnell, p. 144.
                </span>
              </li>
              <li id="footnote14">
                <span className="footnote__ref">
                  <HashLink to="#note14" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid.
                </span>
              </li>
              <li id="footnote15">
                <span className="footnote__ref">
                  <HashLink to="#note15" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid, p. 145.
                </span>
              </li>
              <li id="footnote16">
                <span className="footnote__ref">
                  <HashLink to="#note15" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid.
                </span>
              </li>
              <li id="footnote17">
                <span className="footnote__ref">
                  <HashLink to="#note17" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid.
                </span>
              </li>
              <li id="footnote18">
                <span className="footnote__ref">
                  <HashLink to="#note18" className="footnote--cite">
                    ^
                  </HashLink>
                  McConnell, p. 146; DeGrace and Stahl, p. 97.
                </span>
              </li>
              <li id="footnote19">
                <span className="footnote__ref">
                  <HashLink to="#note19" className="footnote--cite">
                    ^
                  </HashLink>
                  McConnell, p. 147.
                </span>
              </li>
              <li id="footnote20">
                <span className="footnote__ref">
                  <HashLink to="#note20" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid. p. 441.
                </span>
              </li>
              <li id="footnote21">
                <span className="footnote__ref">
                  <HashLink to="#note21" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid. p. 436.
                </span>
              </li>
              <li id="footnote22">
                <span className="footnote__ref">
                  <HashLink to="#note22" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid. p. 437.
                </span>
              </li>
              <li id="footnote23">
                <span className="footnote__ref">
                  <HashLink to="#note23" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid.
                </span>
              </li>
              <li id="footnote24">
                <span className="footnote__ref">
                  <HashLink to="#note23" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid.
                </span>
              </li>
              <li id="footnote25">
                <span className="footnote__ref">
                  <HashLink to="#note25" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid. p. 438.
                </span>
              </li>
              <li id="footnote26">
                <span className="footnote__ref">
                  <HashLink to="#note25" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid.
                </span>
              </li>
              <li id="footnote27">
                <span className="footnote__ref">
                  <HashLink to="#note27" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid. p. 439.
                </span>
              </li>
              <li id="footnote28">
                <span className="footnote__ref">
                  <HashLink to="#note28" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid.
                </span>
              </li>
              <li id="footnote29">
                <span className="footnote__ref">
                  <HashLink to="#note29" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid. p. 439.
                </span>
              </li>
              <li id="footnote30">
                <span className="footnote__ref">
                  <HashLink to="#note30" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid. p. 148.
                </span>
              </li>
              <li id="footnote31">
                <span className="footnote__ref">
                  <HashLink to="#note31" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid. p. 550.
                </span>
              </li>
              <li id="footnote32">
                <span className="footnote__ref">
                  <HashLink to="#note32" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid. p. 552.
                </span>
              </li>
              <li id="footnote33">
                <span className="footnote__ref">
                  <HashLink to="#note33" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid. p. 550.
                </span>
              </li>
              <li id="footnote34">
                <span className="footnote__ref">
                  <HashLink to="#note34" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid. p. 553.
                </span>
              </li>
              <li id="footnote35">
                <span className="footnote__ref">
                  <HashLink to="#note35" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid.
                </span>
              </li>
              <li id="footnote36">
                <span className="footnote__ref">
                  <HashLink to="#note36" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid. p. 555.
                </span>
              </li>
              <li id="footnote37">
                <span className="footnote__ref">
                  <HashLink to="#note37" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid.
                </span>
              </li>
              <li id="footnote38">
                <span className="footnote__ref">
                  <HashLink to="#note38" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid. p. 425.
                </span>
              </li>
              <li id="footnote39">
                <span className="footnote__ref">
                  <HashLink to="#note39" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid. p. 426.
                </span>
              </li>
              <li id="footnote40">
                <span className="footnote__ref">
                  <HashLink to="#note40" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid. p. 427.
                </span>
              </li>
              <li id="footnote41">
                <span className="footnote__ref">
                  <HashLink to="#note41" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid. p. 428.
                </span>
              </li>
              <li id="footnote42">
                <span className="footnote__ref">
                  <HashLink to="#note42" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid. p. 429.
                </span>
              </li>
              <li id="footnote43">
                <span className="footnote__ref">
                  <HashLink to="#note43" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid. p. 141.
                </span>
              </li>
              <li id="footnote44">
                <span className="footnote__ref">
                  <HashLink to="#note44" className="footnote--cite">
                    ^
                  </HashLink>
                  DeGrace and Stahl, p. 116; McConnell, p. 142
                </span>
              </li>
              <li id="footnote45">
                <span className="footnote__ref">
                  <HashLink to="#note45" className="footnote--cite">
                    ^
                  </HashLink>
                  McConnell, p. 154.
                </span>
              </li>
              <li id="footnote46">
                <span className="footnote__ref">
                  <HashLink to="#note46" className="footnote--cite">
                    ^
                  </HashLink>
                  Modified from McConnell, p. 156.
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
