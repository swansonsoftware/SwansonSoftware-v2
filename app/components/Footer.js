import React, { useContext } from "react"
import { Link } from "react-router-dom"
import StateContext from "../StateContext"

function Footer(props) {
  const appState = useContext(StateContext)
  const currentDate = new Date()

  return (
    <footer className={appState.backgroundStyle == "light" ? "footer" : "footer footer--dark-bg"}>
      <div className="wrapper--site-footer">
        <span className="footer__copyright">Copyright &copy; &nbsp;{currentDate.getFullYear()}. All rights reserved.</span>
        <span className="footer__link">
          <Link to="/about-us" id="about-us-link" tabIndex={0}>
            About SwansonSoftware.com
          </Link>
        </span>
        <span className="footer__link">
          <Link to="/contact" id="contact-us-link">
            Contact us
          </Link>
        </span>
        <span className="footer__link">
          <Link to="/privacy-policy" id="privacy-link">
            Privacy Policy
          </Link>
        </span>
      </div>
    </footer>
  )
}

export default Footer
