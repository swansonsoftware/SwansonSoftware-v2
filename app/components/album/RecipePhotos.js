import React, { useRef } from "react"
import PhotoBlock from "./PhotoBlock"
import PhotoCaptionBox from "./PhotoCaptionBox"
import PhotoOverlayEvents from "./PhotoOverlayEvents"
import PhotoLightboxOverlay from "./PhotoLightboxOverlay"
import OverlayOpener from "../../assets/scripts/modules/OverlayOpener"

function RecipePhotos(props) {
  const selectedImage = useRef(null)

  function GetSelectedImage() {
    return selectedImage.current
  }

  function FindButtonElement(obj) {
    let node = obj,
      i = 0
    if (node.nodeName != "BUTTON") {
      do {
        i++
        node = node.parentElement
        if (!node) {
          return null
        }
        if (i > 10) {
          return null
        }
      } while (node.nodeName != "BUTTON")
    }

    return node
  }

  function OpenOverlay(e, image) {
    // e.preventDefault()

    if (e.code == "Enter" || e.type == "click") {
      selectedImage.current = FindButtonElement(e.target)
      let opener = new OverlayOpener(e, image)
      opener.openOverlay()
    }
  }

  return (
    <>
      <PhotoOverlayEvents GetSelectedImage={GetSelectedImage} />
      <PhotoCaptionBox />
      <PhotoLightboxOverlay />
      <div className="wrapper--album-photos">
        {props.photos.map(image => {
          return <PhotoBlock key={image.id} photo={image} OpenOverlay={OpenOverlay} />
        })}
      </div>
    </>
  )
}

export default RecipePhotos
