import React, { useContext, useEffect, useRef } from "react"
import StateContext from "../StateContext"
import { Link } from "react-router-dom"

function Breadcrumb(props) {
  const appState = useContext(StateContext)

  return (
    <span id="breadcrumb" className={appState.breadcrumbClass}>
      <Link id="breadcrumb-link" to={props.to}>
        &laquo; Back to {props.linktext}
      </Link>
    </span>
  )
}

export default Breadcrumb
