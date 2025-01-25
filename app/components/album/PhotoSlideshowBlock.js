import React from "react"
import { Link } from "react-router-dom"

function PhotoSlideshowBlock(props) {
  return (
    <p>
      <Link to={props.url}>{props.caption}</Link>
    </p>
  )
}

export default PhotoSlideshowBlock
