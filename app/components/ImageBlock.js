import React, { useContext, useRef } from "react"
import DispatchContext from "../DispatchContext"
import ImageOverlayOpener from "../assets/scripts/modules/ImageOverlayOpener"
import OverlayTabNavigation from "../assets/scripts/modules/OverlayTabNavigation"

function ImageBlock(props) {
  const appDispatch = useContext(DispatchContext)
  const image = props.image

  function OpenOverlay(e, image) {
    if (e.code == "Enter" || e.type == "click") {
      let opener = new ImageOverlayOpener(e, image)
      opener.openOverlay()
      appDispatch({ type: "imageOverlay", imageOverlay: "lightbox__image-overlay lightbox__image-overlay--visible" })
    }
  }

  function closeMenuOverlay(e) {
    // When and why would I want this?
    // appDispatch({ type: "menuOverlay", menuOverlay: "lightbox__menu-overlay" })
    // appDispatch({ type: "menuDropdownActiveTopic", menuDropdownActiveTopic: "-1" })
  }

  const imgborder = {
    border: "1px solid black"
  }

  return (
    <div>
      <button
        id={"imageBlock" + props.image.id}
        type="button"
        name={image.captionHeading ? image.captionHeading : "none"}
        tabIndex="0"
        className="wrapper--image"
        onClick={e => {
          OpenOverlay(e, image)
        }}
        onFocus={e => {
          closeMenuOverlay(e)
        }}
      >
        <img style={imgborder} loading={image.lazy ? "lazy" : "eager"} width={image.width} height={image.height} src={image.src} srcSet={image.srcset ? image.srcset : undefined} alt={image.alt} data-srcset={image.dataSrcset} sizes={image.sizes ? image.sizes : undefined}></img>
      </button>
      {image.caption ? <span className="row__imageCaptionSpan">{image.caption}</span> : ""}
    </div>
  )
}

export default ImageBlock
