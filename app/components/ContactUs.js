import React, { useContext, useEffect, useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import Page from "./Page"
import DispatchContext from "../DispatchContext"
import StateContext from "../StateContext"
import Breadcrumb from "./Breadcrumb"
import GTag from "./GTag"

function ContactUs() {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)
  const navigate = useNavigate()
  const inputRefs = useRef([])

  appState.backgroundStyle == "light" ? (document.body.classList.remove("dark"), document.body.classList.add("light")) : (document.body.classList.remove("light"), document.body.classList.add("dark"))

  useEffect(() => {
    appDispatch({ type: "backgroundStyleChange", color: "light" })
    appDispatch({ type: "selectMenu", selectedMenu: "" })
    appDispatch({ type: "menuActiveCategory", menuActiveCategory: "-1" })
  }, [])

  const eventListenerAbortCtrlr = new AbortController()

  const handleBlur = event => {
    if (
      !event.relatedTarget || // No related target (e.g., clicked outside)
      (event.relatedTarget.tagName !== "INPUT" && event.relatedTarget.tagName !== "TEXTAREA" && event.relatedTarget.tagName !== "BUTTON")
    ) {
      // Focus back to the current input
      event.target.focus()
    }
  }

  useEffect(() => {
    let submitBtn = document.getElementById("send")
    if (submitBtn) {
      submitBtn.addEventListener("click", e => handleSubmit(e), { signal: eventListenerAbortCtrlr.signal })
      return () => eventListenerAbortCtrlr.abort()
    }
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    // console.log("handleSubmit")
    let contactFrm = document.getElementById("contactus")

    if (contactFrm) {
      if (contactFrm.checkValidity()) {
        let name = document.getElementById("name")
        let email = document.getElementById("email")
        let phone = document.getElementById("phone")
        let subject = document.getElementById("subject")
        let message = document.getElementById("message")
        const jsonstring = {
          name: name.value,
          email: email.value,
          phone: phone.value,
          subject: subject.value,
          message: message.value
        }

        // console.log("jsonstring: " + jsonstring)
        // console.log("JSON strinify: " + JSON.stringify(jsonstring))

        submit(jsonstring)
      } else {
        contactFrm.reportValidity()
      }
    } else {
      console.error("Did not get form")
    }

    return false
  }

  async function submit(jsonstring) {
    try {
      const response = await fetch("https://swansonsoftware.com/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(jsonstring)
      })
      // console.log("response status: " + response.status)

      if (!response.ok) {
        console.error("Response error: " + response.status)
      } else {
        navigate("/thankyou")
      }
    } catch (error) {
      console.error("Error: ", error.message)
    }
  }

  const breadcrumbs = [
    { id: 0, toText: "Home", toUrl: "/" },
    { id: 1, toText: "Contact Swanson Software", toUrl: "" }
  ]

  return (
    <Page title="Contact Us">
      <meta name="description" content="Contact Us" />
      <GTag></GTag>
      <div className="wrapper wrapper__article">
        <Breadcrumb breadcrumbs={breadcrumbs} />
        <h1 className="headline__h1">Contact Swanson Software</h1>
        <p>Please use the form below to contact SwansonSoftware. SwansonSoftware does not store or share any information you send, and you will not get unsolicited email or marketing material from SwansonSoftware.</p>

        <form id="contactus" className="form">
          <div>
            <label htmlFor="name">
              Name: <span className="form--required">(required)</span>
            </label>
          </div>
          <div>
            <input type="text" name="name" id="name" onBlur={handleBlur} ref={el => (inputRefs.current[1] = el)} placeholder="Name" maxLength="100" required></input>
          </div>

          <div className="form--field-separation">
            <label htmlFor="email">
              Email: <span className="form--required">(required)</span>
            </label>
          </div>
          <div>
            <input type="email" name="email" id="email" onBlur={handleBlur} ref={el => (inputRefs.current[2] = el)} placeholder="Email" maxLength="100" required></input>
          </div>

          <div className="form--field-separation">
            <label htmlFor="subject">
              Subject: <span className="form--required">(required)</span>
            </label>
          </div>
          <div>
            <input type="text" name="subject" id="subject" onBlur={handleBlur} ref={el => (inputRefs.current[3] = el)} placeholder="Subject" maxLength="200" required></input>
          </div>

          <div className="form--field-separation">
            <label htmlFor="message">
              Message: <span className="form--required">(required)</span>
            </label>
          </div>
          <div>
            <textarea name="message" id="message" onBlur={handleBlur} ref={el => (inputRefs.current[4] = el)} rows="5" className="form--ta" maxLength="1000" required></textarea>
          </div>

          <div>
            <label htmlFor="phone" aria-hidden="true" className="form--phone">
              Phone: <span className="form--required">(required)</span>
              <input type="text" name="phone" id="phone" className="form--phone" tabIndex="-1" autoComplete="off" maxLength="50"></input>
            </label>
          </div>
          <div className="form--button-spacing">
            <button type="button" id="send" tabIndex="0">
              Send
            </button>
          </div>
        </form>

        <div className="form--section">
          <h3 className="headline__h3">Find us on social media</h3>

          <Link className="social" to="https://www.youtube.com/channel/UCP0ZqbwKwrFb98I4_UueOaQ" rel="noopener noreferrer" target="_blank" title="Swanson YouTube Channel">
            <span className="accessibility--hidden">Go to Gregory Swanson YouTube Channel.</span>
            <svg height="36px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M186.8 202.1l95.2 54.1-95.2 54.1V202.1zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-42 176.3s0-59.6-7.6-88.2c-4.2-15.8-16.5-28.2-32.2-32.4C337.9 128 224 128 224 128s-113.9 0-142.2 7.7c-15.7 4.2-28 16.6-32.2 32.4-7.6 28.5-7.6 88.2-7.6 88.2s0 59.6 7.6 88.2c4.2 15.8 16.5 27.7 32.2 31.9C110.1 384 224 384 224 384s113.9 0 142.2-7.7c15.7-4.2 28-16.1 32.2-31.9 7.6-28.5 7.6-88.1 7.6-88.1z" />
            </svg>
          </Link>

          <Link className="social" to="https://www.facebook.com/gregory.swanson.315" rel="noopener noreferrer" target="_blank" title="Swanson Facebook page">
            <span className="accessibility--hidden">Go to Gregory Swanson Facebook page.</span>
            <svg height="36px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
            </svg>
          </Link>
        </div>
      </div>
    </Page>
  )
}

export default ContactUs
