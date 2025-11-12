import React, { useContext } from "react"
import StateContext from "../StateContext"
import { Link } from "react-router-dom"

function Breadcrumb(props) {
  const appState = useContext(StateContext)

  return (
    <nav aria-label="breadcrumb" className={appState.breadcrumbClass}>
      {props.breadcrumbs.map((link, index) => {
        const isLast = index === props.breadcrumbs.length - 1
        return (
          <span key={index}>
            {isLast ? (
              <span>{link.toText}</span>
            ) : (
              <>
                <Link id={link.id} to={link.toUrl}>
                  {link.toText}
                </Link>
                <span style={{ margin: "0 8px" }}>{">"}</span>
              </>
            )}
          </span>
        )
      })}
    </nav>
  )
}

export default Breadcrumb
