import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function PhotoBookBlock(props) {
  const navigate = useNavigate()

  function OpenPhotoBook(e) {
    navigate(props.href)
  }

  return (
    <button
      key={props.id}
      type="button"
      name={props.caption}
      tabIndex="0"
      onClick={e => {
        OpenPhotoBook(e)
      }}
    >
      <div className="wrapper--album-photo-polaroid wrapper--album-photo-polaroid__book">
        <img src={props.src} width={props.width} height={props.height} alt={props.alt}></img>
        <h3 className="headline__h3-album-thumbnail headline__h3-album-thumbnail--center">{props.caption}</h3>
      </div>
    </button>
  )
}

export default PhotoBookBlock
