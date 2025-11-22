import React, { useContext } from "react"
import StateContext from "../StateContext"
import { Link } from "react-router-dom"

function Breadcrumb(props) {
  const appState = useContext(StateContext)

  function handleFocus() {
    let breadcrumb = document.querySelector(".site-header__breadcrumb")
    if (breadcrumb) {
      breadcrumb.classList.remove("site-header__breadcrumb__fixed")
      breadcrumb.classList.remove("site-header__breadcrumb--is-hidden")
    }
    let siteHeader = document.querySelector(".site-header")
    if (siteHeader) {
      if (siteHeader.classList.contains("site-header--collapse")) {
        siteHeader.classList.remove("site-header--collapse")
      }
    }
  }

  return (
    <nav id="breadcrumb" aria-label="breadcrumb" className={appState.breadcrumbClass}>
      <div className="wrapper--site-header">
        <ol>
          {props.breadcrumbs.map((link, index) => {
            const isLast = index === props.breadcrumbs.length - 1
            return isLast ? (
              <li key={index}>
                <b>{link.toText}</b>
              </li>
            ) : (
              <>
                <li key={index}>
                  <Link
                    id={link.id}
                    onFocus={e => {
                      handleFocus()
                    }}
                    to={link.toUrl}
                  >
                    {link.toText}
                  </Link>
                  <span aria-hidden="true" style={{ margin: "0 8px" }}>
                    {">"}
                  </span>
                </li>
              </>
            )
          })}
        </ol>
      </div>
    </nav>
  )
}

export default Breadcrumb
