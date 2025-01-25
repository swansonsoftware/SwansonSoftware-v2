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
        <span className="footer__about-us-link">
          <Link to="/about-us" id="about-us-link">
            About SwansonSoftware.com
          </Link>
        </span>
      </div>
    </footer>
  )
}

export default Footer
