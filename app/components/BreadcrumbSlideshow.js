import React, { useContext, useEffect } from "react"
import DispatchContext from "../DispatchContext"
import StateContext from "../StateContext"
import { Link } from "react-router-dom"

function Breadcrumb(props) {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)

  function handleFocus() {
    let breadcrumbStyle = appState.breadcrumbClass
    let mustDispatch = false
    if (breadcrumbStyle.includes("site-header__breadcrumb__fixed")) {
      let classlist = breadcrumbStyle.split(" ")
      let filtered = classlist.filter(classname => classname !== "site-header__breadcrumb__fixed")
      breadcrumbStyle = filtered.join(" ")
      mustDispatch = true
    }
    if (breadcrumbStyle.includes("site-header__breadcrumb--is-hidden")) {
      let classlist = breadcrumbStyle.split(" ")
      let filtered = classlist.filter(classname => classname !== "site-header__breadcrumb--is-hidden")
      breadcrumbStyle = filtered.join(" ")
      mustDispatch = true
    }
    if (!breadcrumbStyle.includes("site-header__breadcrumb--transparent")) {
      breadcrumbStyle += " site-header__breadcrumb--transparent"
      mustDispatch = true
    }
    if (mustDispatch) {
      appDispatch({ type: "updateBreadcrumbClass", class: breadcrumbStyle })
    }
    let breadcrumb = document.getElementById("breadcrumb")
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

  useEffect(() => {
    let breadcrumbStyle = appState.breadcrumbClass
    if (!breadcrumbStyle.includes("site-header__breadcrumb--transparent")) {
      breadcrumbStyle += " site-header__breadcrumb--transparent"
      appDispatch({ type: "updateBreadcrumbClass", class: breadcrumbStyle })
    }
  }, [])

  return (
    <nav id="breadcrumb" aria-label="Breadcrumb" className={appState.breadcrumbClass}>
      <div className="wrapper--site-header">
        <ol>
          {props.breadcrumbs.map((link, index) => {
            const isLast = index === props.breadcrumbs.length - 1
            return isLast ? (
              <li key={index} aria-current="page">
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
