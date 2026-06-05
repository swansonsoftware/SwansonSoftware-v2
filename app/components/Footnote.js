import React from "react"
import { HashLink } from "react-router-hash-link"

function Footnote(props) {
  return (
    <HashLink smooth to={`#footnote${props.footnoteId}`} className="footnote" id={`note${props.footnoteId}`}>
      <sup>[{props.footnoteId}]</sup>
    </HashLink>
  )
}

export default Footnote
