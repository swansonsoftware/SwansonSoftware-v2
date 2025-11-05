import React, { useContext } from "react"
import DispatchContext from "../../DispatchContext"

function PhotoBlock(props) {
  const appDispatch = useContext(DispatchContext)
  const image = props.photo

  function closeMenuOverlay() {
    appDispatch({ type: "menuOverlay", menuOverlay: "lightbox__menu-overlay" })
    appDispatch({ type: "menuDropdownActiveTopic", menuDropdownActiveTopic: "-1" })
  }

  return (
    <button
      type="button"
      name={image.captionHeading}
      tabIndex="0"
      onClick={e => {
        props.OpenOverlay(e, image)
      }}
      onFocus={e => {
        closeMenuOverlay(e)
      }}
    >
      <div className="wrapper--album-photo-polaroid">
        <img loading={image.lazy ? "lazy" : "eager"} src={image.src} width={image.width} height={image.height} srcSet={image.srcset ? image.srcset : undefined} sizes={image.sizes ? image.sizes : undefined} alt={image.alt} data-srcset={image.dataSrcset} data-orientation={image.dataOrientation ? image.dataOrientation : ""} data-portraitsizes={image.dataPortraitsizes ? image.dataPortraitsizes : ""}></img>
        {image.captionHeading ? <h3 className="headline__h3-album-thumbnail headline__h3-album-thumbnail--center">{image.captionHeading}</h3> : ""}
      </div>
    </button>
  )
}

export default PhotoBlock
