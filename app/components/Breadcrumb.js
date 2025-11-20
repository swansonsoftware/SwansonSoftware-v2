import React, { useContext } from "react"
import StateContext from "../StateContext"
import { Link } from "react-router-dom"

function Breadcrumb(props) {
  const appState = useContext(StateContext)

  return (
    <nav aria-label="breadcrumb" className={appState.breadcrumbClass}>
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
                <Link id={link.id} to={link.toUrl}>
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
    </nav>
  )
}

export default Breadcrumb
