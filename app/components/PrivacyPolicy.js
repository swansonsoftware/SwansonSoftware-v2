import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import Page from "./Page"
import DispatchContext from "../DispatchContext"
import StateContext from "../StateContext"
import Breadcrumb from "./Breadcrumb"
import GTag from "./GTag"

function PrivacyPolicy() {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)

  appState.backgroundStyle == "light" ? (document.body.classList.remove("dark"), document.body.classList.add("light")) : (document.body.classList.remove("light"), document.body.classList.add("dark"))

  useEffect(() => {
    appDispatch({ type: "backgroundStyleChange", color: "light" })
    appDispatch({ type: "selectMenu", selectedMenu: "" })
    appDispatch({ type: "menuActiveCategory", menuActiveCategory: "-1" })
    appDispatch({ type: "homePageClass", homePageClass: "page" })
    const app = document.getElementById("app")
    if (app) {
      app.focus()
    }
  }, [])

  const breadcrumbs = [
    { id: 0, toText: "Home", toUrl: "/" },
    { id: 1, toText: "Privacy Policy", toUrl: "" }
  ]

  return (
    <Page title="Privacy Policy">
      <GTag></GTag>
      <meta name="description" content="Swanson Software Privacy policy" />
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <div className="wrapper wrapper__article" id="maincontent">
        <h1 className="headline__h1">Privacy Policy</h1>
        <div className="headline__author">Last updated: January 1, 2026</div>
        <div className="row row--gutters">
          <div className="row__colspan-1"></div>
          <div className="row__colspan-10">
            <p>SwansonSoftware.com (“the Site”) is a personal website operated by Gregory Swanson. This Privacy Policy explains what information is collected when you visit the Site, how that information is used, and the choices you have regarding your data.</p>
          </div>
          <div className="row__colspan-1"></div>

          <div className="row__colspan-4">
            <h2 className="headline__h2">Information We Collect</h2>
          </div>
          <div className="row__colspan-8">
            <h3 className="headline__h3">Information You Provide</h3>
            <p>When you use the Contact Us form, you may voluntarily provide:</p>
            <ul>
              <li className="list">Your name</li>
              <li className="list">Your email address</li>
              <li className="list">The content of your message</li>
            </ul>
            <p>This information is used solely for responding to your inquiry.</p>

            <h3 className="headline__h3">Information Collected Automatically</h3>
            <p>
              The Site uses <b>Google Analytics (gtag.js)</b> to collect standard usage data, which may include:
            </p>
            <ul>
              <li className="list">IP address</li>
              <li className="list">Browser type and version</li>
              <li className="list">Device information</li>
              <li className="list">Pages visited and time spent</li>
              <li className="list">Referring websites</li>
              <li className="list">General location (city-level, not precise address)</li>
            </ul>
            <p>Google Analytics uses cookies or similar technologies to gather this information.</p>
          </div>

          <div className="row__colspan-4">
            <h2 className="headline__h2">How We Use Your Information</h2>
          </div>
          <div className="row__colspan-8">
            <h3 className="headline__h3">Your information is used for:</h3>
            <ul>
              <li className="list">Responding to messages sent through the contact form</li>
              <li className="list">Understanding how visitors use the Site</li>
              <li className="list">Improving content, performance, and user experience</li>
            </ul>
            <p>No personal information is sold or shared for marketing purposes.</p>
          </div>

          <div className="row__colspan-4">
            <h2 className="headline__h2">Google Analytics</h2>
          </div>
          <div className="row__colspan-8">
            <p>SwansonSoftware.com uses Google Analytics to understand how visitors interact with the Site. Google may collect, store, and process information as described in Google’s Privacy Policy.</p>
            <p>
              You can learn more about how Google uses data here:<br></br>
              <HashLink className="wrapper__article__outbound-link" to="https://policies.google.com/technologies/partner-sites">
                How Google uses information from sites or apps that use our services – Privacy & Terms – Google
              </HashLink>
            </p>
          </div>

          <div className="row__colspan-4">
            <h2 className="headline__h2">Opt-Out Options</h2>
          </div>
          <div className="row__colspan-8">
            <p>
              You may opt out of Google Analytics by using the browser add on provided by Google:<br></br>
              <HashLink className="wrapper__article__outbound-link" to="https://tools.google.com/dlpage/gaoptout/">
                Google Analytics Opt-out Browser Add-on Download Page
              </HashLink>
            </p>
          </div>

          <div className="row__colspan-4">
            <h2 className="headline__h2">Cookies and Tracking Technologies</h2>
          </div>
          <div className="row__colspan-8">
            <h3 className="headline__h3">Google Analytics uses cookies to:</h3>
            <ul>
              <li className="list">Remember user interactions</li>
              <li className="list">Measure traffic patterns</li>
              <li className="list">Provide aggregated usage statistics</li>
            </ul>
            <p>You can disable cookies in your browser settings if you prefer.</p>
          </div>

          <div className="row__colspan-4">
            <h2 className="headline__h2">Data Sharing</h2>
          </div>
          <div className="row__colspan-8">
            <h3 className="headline__h3">
              SwansonSoftware.com does <b>not</b>:
            </h3>
            <ul>
              <li className="list">Sell personal information</li>
              <li className="list">Share personal information with third parties</li>
              <li className="list">Transfer personal information except as required by law or to operate the Site (e.g., Google Analytics)</li>
            </ul>
          </div>

          <div className="row__colspan-4">
            <h2 className="headline__h2">Data Retention</h2>
          </div>
          <div className="row__colspan-8">
            <ul>
              <li className="list">
                <b>Contact form submissions</b> are retained only as long as needed to respond to your inquiry.
              </li>
              <li className="list">
                <b>Analytics data</b> is retained according to Google Analytics’ standard retention settings.
              </li>
            </ul>
          </div>

          <div className="row__colspan-4">
            <h2 className="headline__h2">Your Privacy Rights</h2>
          </div>
          <div className="row__colspan-8">
            <h3 className="headline__h3">California Residents (CCPA/CPRA)</h3>
            <p>If you are a California resident, you have the right to:</p>
            <ul>
              <li className="list">Know what personal information is collected</li>
              <li className="list">Request deletion of your personal information</li>
              <li className="list">Opt out of the sale or sharing of personal information (this Site does not sell or share personal information)</li>
            </ul>
            <p>
              To exercise these rights, please use the <Link to="/contact">Contact us</Link> form.
            </p>

            <h3 className="headline__h3">Visitors from the EU/EEA (GDPR)</h3>
            <p>If you are located in the EU/EEA, you have the right to:</p>
            <ul>
              <li className="list">Access your personal data</li>
              <li className="list">Request corrections or deletion</li>
              <li className="list">Object to processing</li>
              <li className="list">Request data portability</li>
            </ul>
            <p>
              To make a request, please use the <Link to="/contact">Contact us</Link> form.
            </p>
          </div>

          <div className="row__colspan-4">
            <h2 className="headline__h2">Contact</h2>
          </div>
          <div className="row__colspan-8">
            <p>
              If you have questions about this Privacy Policy or your data, please use the <Link to="/contact">Contact us</Link> form.
            </p>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default PrivacyPolicy
