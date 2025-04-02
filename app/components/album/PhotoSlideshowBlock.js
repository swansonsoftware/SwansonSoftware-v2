import React from "react"
import { Link } from "react-router-dom"

function PhotoSlideshowBlock(props) {
  return (
    <h3 className="headline__h3-album-slideshow">
      <Link to={props.url}>{props.caption}</Link>
    </h3>
  )
}

export default PhotoSlideshowBlock
