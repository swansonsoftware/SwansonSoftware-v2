import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import Page from "../Page"
import DispatchContext from "../../DispatchContext"
import StateContext from "../../StateContext"
import GTag from "../GTag"
import GStructuredData from "../GStructuredData"

function Reviews() {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)

  appState.backgroundStyle == "light" ? (document.body.classList.remove("dark"), document.body.classList.add("light")) : (document.body.classList.remove("light"), document.body.classList.add("dark"))

  useEffect(() => {
    appDispatch({ type: "backgroundStyleChange", color: "light" })
  }, [])

  return (
    <Page title="Reviews">
      <GTag></GTag>
      <GStructuredData type="Article" datePublished="2025-03-06T08:26:21-08:00" headline="Software Reviews"></GStructuredData>
      <meta name="description" content="Software reviews" />
      <div className="wrapper wrapper__article">
        <h1 className="headline__h1-cg">Software Reviews</h1>
        <div className="headline__author">Gregory Swanson | updated February 18, 2025</div>
        <div className="row row--gutters">
          <div className="row__colspan-4">
            <h3 className="headline__h3">Contents</h3>
            <ul className="list--ul">
              <li className="list list--toc">
                <HashLink to="#components" className="list--toc--a">
                  Components
                </HashLink>
              </li>
              <li className="list list--toc">
                <HashLink to="#cs" className="list--toc--a">
                  Cost and Cost Savings
                </HashLink>
              </li>
              <li className="list list--toc">
                <HashLink to="#rt" className="list--toc--a">
                  Review Types
                </HashLink>
                <ul className="list-ul">
                  <li className="list list--toc">
                    <HashLink to="#fagans" className="list--toc--a">
                      Fagan's Software Review
                    </HashLink>
                  </li>
                  <li className="list list--toc">
                    <HashLink to="#adr" className="list--toc--a">
                      Active Design Review
                    </HashLink>
                  </li>
                  <li className="list list--toc">
                    <HashLink to="#twopersonreview" className="list--toc--a">
                      Two-Person Review
                    </HashLink>
                  </li>
                  <li className="list list--toc">
                    <HashLink to="#nfoldreview" className="list--toc--a">
                      N-Fold Review
                    </HashLink>
                  </li>
                  <li className="list list--toc">
                    <HashLink to="#phasedreview" className="list--toc--a">
                      Phased Review
                    </HashLink>
                  </li>
                  <li className="list list--toc">
                    <HashLink to="#ieeestandard" className="list--toc--a">
                      IEEE Standard 1028
                    </HashLink>
                  </li>
                  <li className="list list--toc">
                    <HashLink to="#walkthrough" className="list--toc--a">
                      Walkthrough
                    </HashLink>
                  </li>
                  <li className="list list--toc">
                    <HashLink to="#pairprog" className="list--toc--a">
                      Pair Programming
                    </HashLink>
                  </li>
                  <li className="list list--toc">
                    <HashLink to="#peercheck" className="list--toc--a">
                      Peer Check
                    </HashLink>
                  </li>
                  <li className="list list--toc">
                    <HashLink to="#passaround" className="list--toc--a">
                      Pass-Around
                    </HashLink>
                  </li>
                </ul>
              </li>
              <li className="list list--toc">
                <HashLink to="#rp" className="list--toc--a">
                  Review Process
                </HashLink>
              </li>
              <li className="list list--toc">
                <HashLink to="#frms" className="list--toc--a">
                  Sample Forms
                </HashLink>
              </li>
              <li className="list list--toc">
                <HashLink to="#tools" className="list--toc--a">
                  Online Tools
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
            <p className="dropCap">Software reviews are perhaps the best way to improve software quality, reduce development costs, and disseminate technical knowledge. A review can be performed on requirements, designs, code, test cases, and test data.</p>
            <p>Code reviews ensure that requirements are fulfilled and reduce the chance that code based on a misinterpreted understanding of the requirements gets very far through the life cycle. Code reviews are a way for less experienced team members to learn coding techniques as well as for more experienced team members to hone skills.</p>
            <p>Reviews can be informal, where a team peer reads the code at their leisure; more formal, where a team peer walks through the code with the developer; and quite formal, where peers and non-peers perform what is called an inspection.</p>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p id="note1">
              While the primary objective of software reviews is to find errors before a lot of time and effort is wasted building them into the software, they have other benefits:
              <HashLink to="#footnote1" className="footnote">
                <sup>[1]</sup>
              </HashLink>
            </p>
            <ul>
              <li className="list">They disseminate product awareness - ensuring that everyone knows what the product is</li>
              <li className="list">They get you started on a process - conducting a software review requires you to have some kind of process in place</li>
              <li className="list">They provide data points - reviews provide data points for both the product and the review process</li>
              <li className="list">They disseminate technical knowledge - less experienced team members learn about standards, become familiar with technical documents, and learn coding techniques; experienced team members hone their skills</li>
            </ul>

            <p>In addition to the above benefits that come with software reviews, they can improve software quality by addressing the following common failings</p>
            <ul>
              <li className="list">Software requirements are not always concise, and require interpretation; however, interpretation of requirements may be incorrect. Furthermore, interpretation of a particular requirement will vary between teams (e.g. Quality Assurance and Development), and between members of a team</li>
              <li className="list">Many errors start with a misconception that becomes part of the design and is repeated in each phase of development through testing. Without a review process, the end user will catch the flaw in the product, when fixing it is most difficult and expensive</li>
              <li className="list">The quality of implementation of the requirements depends on the experience and ability of the programmer; furthermore, there is a fundamental inability in team members to find some errors</li>
            </ul>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12" id="components">
            <h2 className="headline__h2">Components of Software Reviews</h2>
          </div>

          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p id="note2" className="dropCap">
              Software reviews have the following components; not all are required: software inspections which are a more formal process will include more of them; walkthroughs which are a less formal process will include fewer (Watts describes the more formal software inspection in the following):
              <HashLink to="#footnote2" className="footnote">
                <sup>[2]</sup>
              </HashLink>
            </p>
            <ul>
              <li className="list">Checklists and forms - Different work artifacts require different checklists and forms: design, requirements, code, test cases, and test data. Checklists and forms cover each phase of the inspection: planning, participant preparation, the inspection, inspection summary, and reporting of results. You can tailor generic checklists or forms for these uses.</li>
              <li className="list">Format - Inspections must follow a predefined format where participants have specific roles. Participants use checklists to ensure they follow the format.</li>
              <li className="list">Roles - Inspection participants include a moderator, one to four reviewers, and one author (Watts refers to the author as the "producer")</li>
              <li className="list">Managers - Managers don't attend, because their presence interferes with the activity. However, results such as inspection process quality reports and timelines for error fixes are reported.</li>
              <li className="list">Preparation - Reviewers prepare for the inspection by reading the documents handed to them by the moderator. These documents are the artifacts produced by the author. They follow a checklist and note questions and any problems they find.</li>
              <li className="list">Error fixes - Inspection meeting participants don't talk about how fixes should be made when errors are found; errors are noted and any further discussion about fixes is done outside of the inspection meeting.</li>
              <li className="list">Results - Inspection data is kept (today there are applications designed specifically for the purpose).</li>
              <li className="list">Follow up - After the inspection, the author receives a list of things to fix. Once the fixes are made, another inspection is conducted to ensure the fixes were made and to ensure nothing else was broken.</li>
            </ul>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12" id="cs">
            <h2 className="headline__h2">Cost and Cost Savings from Software Reviews</h2>
          </div>

          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p id="note3" className="dropCap">
              It takes time to hold reviews, but reviews reduce rework and that saves time later. The cost factors of reviews include:
              <HashLink to="#footnote3" className="footnote">
                <sup>[3]</sup>
              </HashLink>
            </p>

            <ul>
              <li className="list">As defects are found during inspections of design, fewer defects are found during inspections of code and inspection time decreases for those.</li>
              <li className="list">As design inspections reduce defects in code, rework decreases.</li>
              <li className="list">As participant's inspection skill improves, the number of defects found per hour increases.</li>
              <li className="list">As quality improves in pre-test phases, test time is reduced.</li>
            </ul>

            <p id="note4">
              McConnell said about 15 percent of a project's cost will go to inspections when both design and code inspections are done.
              <HashLink to="#footnote4" className="footnote">
                <sup>[4]</sup>
              </HashLink>{" "}
              The cost is justified when you consider that 60 to 90 percent of a product's defects can be found with inspections.
              <HashLink to="#footnote5" className="footnote">
                <sup>[5]</sup>
              </HashLink>
            </p>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12" id="rt">
            <h2 className="headline__h2">Review Types</h2>
          </div>

          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p id="note6" className="dropCap">
              Some authors have found it sufficient to classify reviews based mostly on formality. For example, McConnell has found the following categories:
              <HashLink to="#footnote6" className="footnote">
                <sup>[6]</sup>
              </HashLink>
            </p>
            <ul>
              <li className="list">Reading documents and code - The least formal, reviewers read through a code listing independently (a meeting is not held). A checklist and summary form is not used, the reviewer points out problems and discusses them or notes them on the listing. Typically, a code listing is no greater than 4000 lines.</li>
              <li className="list">Walkthroughs - More formal than code and document reading, walkthroughs follow a format that is less formal than inspections. The greatest distinguishing feature between walkthroughs and inspections is the participants: in walkthroughs, reviewers are the author's peers; in inspections, reviewers are peers and non-peers. Like inspections, walkthroughs specify roles for participants and those roles are the same as roles in inspections. Walkthroughs allow less preparation time for reviewers, but do specify checklists, forms, meeting rules, and follow up.</li>
              <li className="list">Inspections - The most formal of the three review types, inspections include non-peers in the process. Non-peers are other people who have an interest in the product. Inspections allow longer preparation time, and more time between the review and follow-up.</li>
            </ul>
            <p id="note7">
              The following sections are brief summaries of the review types thoroughly covered in Wong’s <i>Modern Software Review: Techniques And Technologies</i>.
              <HashLink to="#footnote7" className="footnote">
                <sup>[7]</sup>
              </HashLink>
            </p>
          </div>
          <div className="row__colspan-12 row__colspan-12--no-top-pad">
            <h3 className="headline__h3" id="fagans">
              Fagan's Software Review
            </h3>
          </div>
          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p id="note8" className="dropCap">
              Michael Fagan had two purposes in mind: 1) improve software quality, and 2) increase software developer productivity. The review process he describes includes six main steps:
              <HashLink to="#footnote8" className="footnote">
                <sup>[8]</sup>
              </HashLink>
            </p>
            <ol>
              <li className="list">Planning</li>
              <li className="list">Overview</li>
              <li className="list">Individual preparation</li>
              <li className="list">Group review meeting</li>
              <li className="list">Rework</li>
              <li className="list">Follow-up</li>
            </ol>
            <p>Some steps may not be appropriate for a particular software artifact; you choose which steps are appropriate in your situation. Wong provides some research results on Fagan’s software review:</p>
            <ul>
              <li className="list">Low "synergy effect" of a group meeting; it was expected that the collective contribution would be greater than the combination of individual results</li>
              <li className="list">Group meetings are costly in terms of time, which reduces development efficiency</li>
              <li className="list">Where groups have been larger (group meetings), participation decreases across time</li>
            </ul>
          </div>
          <div className="row__colspan-12 row__colspan-12--no-top-pad">
            <h3 className="headline__h3" id="adr">
              Active Design Review
            </h3>
          </div>
          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p id="note9" className="dropCap">
              The Active Design Review (ADR) was described by Parnas and Weiss.
              <HashLink to="#footnote9" className="footnote">
                <sup>[9]</sup>
              </HashLink>{" "}
              The rationale for ADRs are:
              <HashLink to="#footnote10" className="footnote">
                <sup>[10]</sup>
              </HashLink>
            </p>
            <ol>
              <li className="list">Information overload prevents reviewers from finding defects effectively</li>
              <li className="list">When reviewers are not familiar with the design and its objective, they may not be able to understand details of the artifact well enough to review it</li>
              <li className="list">Reviews performed in large group meetings are often less productive</li>
            </ol>
            <p id="note11">
              The ADR process has three steps:
              <HashLink to="#footnote11" className="footnote">
                <sup>[11]</sup>
              </HashLink>
            </p>
            <ol>
              <li className="list">An overview of the design artifact is presented by the author</li>
              <li className="list">Defect detection - a questionnaire is provided by the author as a guide for reviewers to use as they review the artifact</li>
              <li className="list">Defect collection - review meetings follow a segmented strategy which enables reviewers to concentrate on small dimensions, minimizing information overload</li>
            </ol>
            <p>ADR has two roles: author and reviewer.</p>
          </div>
          <div className="row__colspan-12 row__colspan-12--no-top-pad">
            <h3 className="headline__h3" id="twopersonreview">
              Two-Person Review
            </h3>
          </div>
          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p id="note12" className="dropCap">
              The Two-Person Review (TPR) was described by Bisant and Lyle.
              <HashLink to="#footnote12" className="footnote">
                <sup>[12]</sup>
              </HashLink>{" "}
              A TPR is like an ADR in that there are two roles: author and reviewer. While TPR uses Fagan's formal review method, there is no moderator role.
              <HashLink to="#footnote13" className="footnote">
                <sup>[13]</sup>
              </HashLink>
            </p>
          </div>
          <div className="row__colspan-12 row__colspan-12--no-top-pad">
            <h3 className="headline__h3" id="nfoldreview">
              N-Fold Review
            </h3>
          </div>
          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p id="note14" className="dropCap">
              The N-Fold Review was described by Martin and Tsai.
              <HashLink to="#footnote14" className="footnote">
                <sup>[14]</sup>
              </HashLink>{" "}
              Martin and Tsai's premise is that multiple review teams "working in parallel sessions" will find "a large number of defects" in an artifact, whereas a single team will likely find a small number.
              <HashLink to="#footnote15" className="footnote">
                <sup>[15]</sup>
              </HashLink>
            </p>
            <p id="note16">
              Tasks are divided so that groups do not duplicate each other's efforts. Fagan's six-step review process is followed, with participants filling the roles of author, moderator, and reviewer.
              <HashLink to="#footnote16" className="footnote">
                <sup>[16]</sup>
              </HashLink>
            </p>
            <p id="note17">
              Wong cites research that shows low defect redundancy (where each team finds the same defect), and defect discovery of 35% for a single team vs. 78% for all teams in the study.
              <HashLink to="#footnote17" className="footnote">
                <sup>[17]</sup>
              </HashLink>
            </p>
            <p>The success of N-Fold Review depends on 1) adequate availability of expertise, and 2) ability to meet the additional costs required by multiple review teams.</p>
          </div>
          <div className="row__colspan-12 row__colspan-12--no-top-pad">
            <h3 className="headline__h3" id="phasedreview">
              Phased Review
            </h3>
          </div>
          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p id="note18" className="dropCap">
              Phased Review (PR) was described by Knight and Myers.
              <HashLink to="#footnote18" className="footnote">
                <sup>[18]</sup>
              </HashLink>{" "}
              PR adopts ideas from Active Design Review, Fagan's Software Review, and N-Fold Review. It follows Fagan's six-step process, in a series of "mini-reviews" called "phases." A phase is a full examination of one property of the artifact, such as reusability or maintainability.
              <HashLink to="#footnote19" className="footnote">
                <sup>[19]</sup>
              </HashLink>
            </p>
            <p id="note20">
              All work (including rework) must be completed for a review phase before progressing to the next phase. PRs can be performed with either a single reviewer or multiple reviewers. In the multiple reviewer approach, reviewers examine the artifact using copies of a checklist, then meet to discuss defects.
              <HashLink to="#footnote20" className="footnote">
                <sup>[20]</sup>
              </HashLink>
            </p>
            <p>Wong finds that PRs are not widely used in practice, perhaps because they have the drawback of higher cost over other review processes.</p>
          </div>
          <div className="row__colspan-12 row__colspan-12--no-top-pad">
            <h3 className="headline__h3" id="ieeestandard">
              IEEE Standard 1028 For Software Reviews
            </h3>
          </div>
          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p id="note21" className="dropCap">
              The standard describes a systematic, seven step review process:
              <HashLink to="#footnote21" className="footnote">
                <sup>[21]</sup>
              </HashLink>
            </p>
            <ol>
              <li className="list">Introduction - describes the objective and provides an overview of the procedures</li>
              <li className="list">Responsibilities - defines roles and responsibilities</li>
              <li className="list">Inputs - describes the input requirements</li>
              <li className="list">Entry criteria - describes the criteria to be met before starting a review, including authorization and initiating events</li>
              <li className="list">Procedures - details the procedures, which include planning the review, overview of procedures, preparation, examination/evaluation/recording of results, rework and follow-up</li>
              <li className="list">Exit criteria - describes the criteria to be met before the review can be considered complete</li>
              <li className="list">Output - describes the minimum set of deliverables to be produced</li>
            </ol>
            <p>The IEEE standard describes a process similar to Fagan's. However, Wong finds that it has three shortcomings :</p>
            <ol>
              <li className="list">It does not provide "explicit suggestions" for adopting a sustainable review approach</li>
              <li className="list">Relationships between input, process, and output are missing, because the guidelines only conceptualize the input-output relations</li>
              <li className="list">Reviewer characteristics are ignored (experience for example)</li>
            </ol>
          </div>
          <div className="row__colspan-12">
            <h3 className="headline__h3">Informal Reviews</h3>
          </div>
          <div className="row__colspan-1"></div>
          <div className="row__colspan-10"></div>
          <div className="row__colspan-12 row__colspan-12--no-top-pad">
            <h4 className="headline__h4" id="walkthrough">
              Walkthrough
            </h4>
          </div>
          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p className="dropCap">A walkthrough is where the author describes the artifact to a group of peers and seeks comments. A walkthrough differs from a formal software review in that</p>
            <ul>
              <li className="list">The process is largely unstructured</li>
              <li className="list">It does not follow a defined procedure</li>
              <li className="list">It does not require management reporting and does not generate measurement metrics</li>
            </ul>

            <p id="note22">
              A walkthrough approach is appropriate "where the primary review objective is to educate others about the product".
              <HashLink to="#footnote22" className="footnote">
                <sup>[22]</sup>
              </HashLink>{" "}
              A "structured" walkthrough process is described in detail in Structured Walkthroughs:
              <HashLink to="#footnote23" className="footnote">
                <sup>[23]</sup>
              </HashLink>
            </p>

            <h4 className="headline__h4">Formality</h4>

            <p>Formality varies between review types as described above. There are a few other relationships between formality and the review process that are worth mentioning. Formality plays a role in determining who participates in the review, and the preparation time. Results from less formal reviews may not be added to a process database.</p>
            <ul>
              <li className="list">
                Participants:
                <ul>
                  <li className="list">Formal: Peers and non-peers</li>
                  <li className="list">Informal: Peers</li>
                </ul>
              </li>
              <li className="list">
                Prep time:
                <ul>
                  <li className="list">Formal: Long</li>
                  <li className="list">Informal: Little</li>
                </ul>
              </li>
            </ul>

            <h4 className="headline__h4">Roles</h4>

            <p>Depending on the type of review, the number of roles will vary. Inspections require three roles performed by three different people; walkthroughs and code readings can have two (author and reviewer).</p>
            <ul>
              <li className="list">Author - the person who wrote the artifact. The author might give an overview of the material, explain sections that are unclear, and help clear up misperceived errors</li>
              <li className="list">Moderator - this person is responsible for coordinating the meeting: distributing checklists and material for review, reserving a room, and moderating the meeting. The moderator is also responsible for inspection results (entering them into the process database or distributing a summary report) and ensuring the follow-up actions are performed</li>
              <li className="list">Reviewer - reviewers read over artifacts looking for defects, prior to the review meeting. During the meeting reviewers go over the material again and discuss the defects found prior to the meeting and look for additional defects</li>
              <li className="list">Scribe - takes notes on defects found during the meeting and who is assigned to take action. The scribe role can be combined with reviewer or author roles</li>
            </ul>

            <h4 className="headline__h4">Preparation</h4>

            <p>Each reviewer prepares for the review by reading over the artifact, using the specified reading technique as a guide.</p>

            <h4 className="headline__h4">The Review</h4>

            <p id="note24">
              The moderator begins the meeting and guides the discussion. One rule that must be followed is that the product is being reviewed, not the author.
              <HashLink to="#footnote24" className="footnote">
                <sup>[24]</sup>
              </HashLink>{" "}
              Follow the guideline that once a defect is discovered you move on. No time is spent discussing a fix, the defect is noted and assigned.
            </p>
            <p>Someone is chosen to read through and describe the artifact. When the artifact is a code listing, each branch of code is explained. The scribe notes errors that are discovered using a form for this purpose. Meetings should last one to two hours.</p>

            <h4 className="headline__h4">Follow up</h4>

            <p>The moderator is responsible for writing a report of the meeting that lists each defect. A template is used to ensure consistent reporting. Action items and assignees are indicated.</p>
            <p>Rework assigned on the inspection report is checked by the moderator, who is responsible for keeping track of the timeline for repairs. The moderator assesses the review with regards to reinspection criteria and determines whether reinspection is needed.</p>

            <h4 className="headline__h4">Reinspection Criteria</h4>

            <p>Certain results indicate problems in the process. These are used to determine when reinspection is needed.</p>
          </div>
          <div className="row__colspan-12 row__colspan-12--no-top-pad">
            <h4 className="headline__h4" id="pairprog">
              Pair Programming
            </h4>
          </div>
          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p id="note25" className="dropCap">
              Pair programming is where two programmers work together at a workstation on the same program.
              <HashLink to="#footnote25" className="footnote">
                <sup>[25]</sup>
              </HashLink>{" "}
              The result is continuous, incremental review of the working product.
            </p>
          </div>
          <div className="row__colspan-12 row__colspan-12--no-top-pad">
            <h4 className="headline__h4" id="peercheck">
              Peer Check
            </h4>
          </div>
          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p id="note26" className="dropCap">
              Often presented as the least expensive approach to software review, Peer Check is where only the author and a peer reviewer examines the software artifact.
              <HashLink to="#footnote26" className="footnote">
                <sup>[26]</sup>
              </HashLink>{" "}
              Peer Check has no consistent set of practices. Usually informal, Peer Check can be formalized. Its drawback is that it relies on the knowledge and skill of the reviewer.
            </p>
          </div>
          <div className="row__colspan-12 row__colspan-12--no-top-pad">
            <h4 className="headline__h4" id="passaround">
              Pass-Around
            </h4>
          </div>
          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p id="note27" className="dropCap">
              Pass-around is where the author distributes copies of the artifact to reviewers for concurrent review.
              <HashLink to="#footnote27" className="footnote">
                <sup>[27]</sup>
              </HashLink>{" "}
              Reviewers can see comments others have already written, which reveals differences in interpretation and helps minimize redundancy. There is no group meeting.
            </p>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12" id="rp">
            <h2 className="headline__h2">Review Process</h2>
          </div>

          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <h3 className="headline__h3">Review Task</h3>
            <p id="note28" className="dropCap">
              Review tasks are categorized into four artifacts, the work products that are reviewed:
              <HashLink to="#footnote28" className="footnote">
                <sup>[28]</sup>
              </HashLink>
            </p>
            <ol>
              <li className="list">Requirements artifact</li>
              <li className="list">Design artifact</li>
              <li className="list">Code artifact</li>
              <li className="list">Testing artifact</li>
            </ol>

            <h3 className="headline__h3">Reading Technique</h3>
            <p id="note29">
              Reading technique is a mechanism an individual reviewer uses to detect defects:
              <HashLink to="#footnote29" className="footnote">
                <sup>[29]</sup>
              </HashLink>{" "}
              "a series of procedures a reviewer can use to obtain an understanding of the artifact...providing a systematic guideline for finding defects." (3 and 4 increases reading coverage and defect detection performance.)
            </p>
            <ol>
              <li className="list">Ad-hoc - there are no explicit instructions</li>
              <li className="list">Checklist-based reading (CBR) - usually no longer than one page of items in the checklist. The checklist guides reviewers by pointing out concerns that have been trouble spots in the past. If you are implementing reviews for the first time there is no history of trouble spots, so use a generic checklist to start. When you finish your first review you may notice that certain recurring problems arose, for example unused variables declared in different places. These are added to the checklist; in subsequent reviews, items that are less relevant are removed. There are several shortcomings to CBR</li>
              <li className="list">Stepwise abstraction - especially helpful for code documents, because the reading instructions are more structured and precise</li>
              <li className="list">4. Scenario-based reading – scenarios provide guidance on what and how to find defects and may contain questions to consider and perhaps suggestions on how to review an artifact. Effectiveness depends on the design and content of the scenario questions and typically requires comprehensive training. Research indicates greater defect detection (about 35%) with this technique</li>
            </ol>

            <h3 className="headline__h3">Planning On-going Reviews</h3>
            <p>With on-going reviews, you will know what is next on the agenda for review. Suggestions: schedule the review meeting for a time when all participants can attend, and do not schedule participants for more than one review meeting in a day.</p>
            <p>Provide materials for the review to reviewers: code listings, design documents, etc., and the checklists reviewers will use. Plan time for reviewers to prepare prior to the meeting; it will take 30 minutes to 90 minutes working alone to become familiar with the material. Watts (1989) cites studies of high-level languages in which the application code was reviewed at 700 lines per hour, and system code at 125 lines per hour.</p>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12" id="frms">
            <h2 className="headline__h2">Sample Forms</h2>
          </div>

          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p id="note30" className="dropCap">
              Freedman and Weinberg
              <HashLink to="#footnote30" className="footnote">
                <sup>[30]</sup>
              </HashLink>{" "}
              describe a variety of evaluation criteria in their thorough (if dated) book. They describe paper forms, but the fields are the takeaway.
            </p>
            <h3 className="headline__h3">Technical Review Summary Report</h3>
            <p id="note31">
              This report is in a Q&A format . The report describes what was reviewed, who did the reviewing, and what their conclusion was. Fields would include:
              <HashLink to="#footnote31" className="footnote">
                <sup>[31]</sup>
              </HashLink>
            </p>

            <ul>
              <li className="list">Review Number (like the version number of an application)</li>
              <li className="list">Date</li>
              <li className="list">Start time and End time</li>
              <li className="list">Work unit identification: module or feature</li>
              <li className="list">Produced by: producer(s) name(s)</li>
              <li className="list">Brief description</li>
              <li className="list">Materials used in the review (ID and description)</li>
              <li className="list">Participants (their names and signatures or IDs)</li>
              <li className="list">
                Appraisal of the work unit:
                <ul>
                  <li className="list">Accepted: as-is; with minor revisions</li>
                  <li className="list">Not accepted (new review required): major revisions; rebuild; review not completed</li>
                </ul>
              </li>
              <li className="list">Supplementary materials produced: description or Ids</li>
              <li className="list">Issues list, related-issues list, etc.</li>
            </ul>

            <h3 className="headline__h3">Design / Specification Grade Sheet</h3>
            <p id="note32">
              Fields could include:
              <HashLink to="#footnote32" className="footnote">
                <sup>[32]</sup>
              </HashLink>
            </p>

            <ul>
              <li className="list">Name of Attribute / Characteristic of attribute</li>
              <li className="list">Units measured</li>
              <li className="list">Planned (Y/N)</li>
              <li className="list">Worst acceptable case</li>
              <li className="list">% weight (W)</li>
              <li className="list">Design performance</li>
              <li className="list">Grade (0-1.00) (G)</li>
              <li className="list">G x W</li>
              <li className="list">Overall grade</li>
            </ul>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-12" id="tools">
            <h2 className="headline__h2">Online Tools</h2>
          </div>

          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p>Today there are online tools available to help with reviews. One example is Atlassian’s Crucible.</p>
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
                  Humphrey, Watts S., 1989, Managing the Software Process: Addison-Wesley, 494 pages. ISBN: 0-201-18095-2 p. 173; and McConnell, Steve, 1993, Code Complete: A Practical Handbook of Software Construction: Microsoft Press, 880 pages. ISBN: 1-55615-484-4
                </span>
              </li>
              <li id="footnote2">
                <span className="footnote__ref">
                  <HashLink to="#note2" className="footnote--cite">
                    ^
                  </HashLink>
                  Watts, 1989
                </span>
              </li>
              <li id="footnote3">
                <span className="footnote__ref">
                  <HashLink to="#note3" className="footnote--cite">
                    ^
                  </HashLink>
                  Watts, 1989
                </span>
              </li>
              <li id="footnote4">
                <span className="footnote__ref">
                  <HashLink to="#note4" className="footnote--cite">
                    ^
                  </HashLink>
                  McConnell, Steve, 1993, Code Complete: A Practical Handbook of Software Construction: Microsoft Press, 880 pages. ISBN: 1-55615-484-4. P. 577.
                </span>
              </li>
              <li id="footnote5">
                <span className="footnote__ref">
                  <HashLink to="#note4" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid, p. 576.
                </span>
              </li>
              <li id="footnote6">
                <span className="footnote__ref">
                  <HashLink to="#note6" className="footnote--cite">
                    ^
                  </HashLink>
                  McConnell, 1993.
                </span>
              </li>
              <li id="footnote7">
                <span className="footnote__ref">
                  <HashLink to="#note7" className="footnote--cite">
                    ^
                  </HashLink>
                  Wong, Y. K., 2006, Modern Software Review: Techniques And Technologies: IRM Press, 324 pages. ISBN: 159904014X.
                </span>
              </li>
              <li id="footnote8">
                <span className="footnote__ref">
                  <HashLink to="#note8" className="footnote--cite">
                    ^
                  </HashLink>
                  Wong, p. 17.
                </span>
              </li>
              <li id="footnote9">
                <span className="footnote__ref">
                  <HashLink to="#note9" className="footnote--cite">
                    ^
                  </HashLink>
                  Parnas, D. L., and Weiss, D. M., 1985, Active Design Reviews: Principles and Practices: Proceeding of ICSE '85, Aug. 28-30, pp. 132-136. IEEE Computer Society.
                </span>
              </li>
              <li id="footnote10">
                <span className="footnote__ref">
                  <HashLink to="#note9" className="footnote--cite">
                    ^
                  </HashLink>
                  Wong, p. 20.
                </span>
              </li>
              <li id="footnote11">
                <span className="footnote__ref">
                  <HashLink to="#note11" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid.
                </span>
              </li>
              <li id="footnote12">
                <span className="footnote__ref">
                  <HashLink to="#note12" className="footnote--cite">
                    ^
                  </HashLink>
                  Bisant, D. B., and Lyle, J. R., 1989, A Two Person Inspection Method to Improve Programming Productivity: IEEE Transactions on Software Engineering, 15 (10), 1294-1304.
                </span>
              </li>
              <li id="footnote13">
                <span className="footnote__ref">
                  <HashLink to="#note12" className="footnote--cite">
                    ^
                  </HashLink>
                  Wong, p. 21.
                </span>
              </li>
              <li id="footnote14">
                <span className="footnote__ref">
                  <HashLink to="#note14" className="footnote--cite">
                    ^
                  </HashLink>
                  Martin, J., and Tsai, W. T., 1992, N-fold Inspection: A Requirements Analysis Technique: Communications of ACM, 33(2), 225-232.
                </span>
              </li>
              <li id="footnote15">
                <span className="footnote__ref">
                  <HashLink to="#note14" className="footnote--cite">
                    ^
                  </HashLink>
                  Wong, p. 21.
                </span>
              </li>
              <li id="footnote16">
                <span className="footnote__ref">
                  <HashLink to="#note16" className="footnote--cite">
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
                  Knight, J. C., and Myers, A. E., 1993, An Improved Inspection Technique: Communications of ACM, 36(11), 50-69.
                </span>
              </li>
              <li id="footnote19">
                <span className="footnote__ref">
                  <HashLink to="#note18" className="footnote--cite">
                    ^
                  </HashLink>
                  Wong, p. 22.
                </span>
              </li>
              <li id="footnote20">
                <span className="footnote__ref">
                  <HashLink to="#note20" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid.
                </span>
              </li>
              <li id="footnote21">
                <span className="footnote__ref">
                  <HashLink to="#note21" className="footnote--cite">
                    ^
                  </HashLink>
                  Wong, p. 24.
                </span>
              </li>
              <li id="footnote22">
                <span className="footnote__ref">
                  <HashLink to="#note22" className="footnote--cite">
                    ^
                  </HashLink>
                  Ibid.
                </span>
              </li>
              <li id="footnote23">
                <span className="footnote__ref">
                  <HashLink to="#note22" className="footnote--cite">
                    ^
                  </HashLink>
                  Yourdon, Edward, 1989, Structured Walkthroughs, fourth edition: Yourdon Press/Prentice Hall, 193 pages. ISBN: 0-13-855289-4
                </span>
              </li>
              <li id="footnote24">
                <span className="footnote__ref">
                  <HashLink to="#note24" className="footnote--cite">
                    ^
                  </HashLink>
                  This was pointed out in Watts 1989, Yourdon 1989, and McConnell 1993
                </span>
              </li>
              <li id="footnote25">
                <span className="footnote__ref">
                  <HashLink to="#note25" className="footnote--cite">
                    ^
                  </HashLink>
                  Wong, p. 25.
                </span>
              </li>
              <li id="footnote26">
                <span className="footnote__ref">
                  <HashLink to="#note26" className="footnote--cite">
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
                  Ibid, p. 26.
                </span>
              </li>
              <li id="footnote28">
                <span className="footnote__ref">
                  <HashLink to="#note28" className="footnote--cite">
                    ^
                  </HashLink>
                  Adapted from Wong, 2006
                </span>
              </li>
              <li id="footnote29">
                <span className="footnote__ref">
                  <HashLink to="#note29" className="footnote--cite">
                    ^
                  </HashLink>
                  Wong, 2006.
                </span>
              </li>
              <li id="footnote30">
                <span className="footnote__ref">
                  <HashLink to="#note30" className="footnote--cite">
                    ^
                  </HashLink>
                  Freedman, D. p., and Weinberg, G. M., 1990, Handbook of Walkthroughs, Inspections, and Technical Reviews: Evaluating Programs, Projects, and Products, 3rd Edition: Dorset House ISBN: 0-932633-19-6.
                </span>
              </li>
              <li id="footnote31">
                <span className="footnote__ref">
                  <HashLink to="#note31" className="footnote--cite">
                    ^
                  </HashLink>
                  Adapted from Freedman and Weinberg, p. 183.
                </span>
              </li>
              <li id="footnote32">
                <span className="footnote__ref">
                  <HashLink to="#note32" className="footnote--cite">
                    ^
                  </HashLink>
                  Adapted from Freedman and Weinberg, p. 324.
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
export default Reviews
