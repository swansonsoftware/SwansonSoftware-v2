import React, { useContext, useEffect, useRef } from "react"
import DispatchContext from "../../DispatchContext"
import PhotoBlock from "./PhotoBlock"
import PhotoSlideshowBlock from "./PhotoSlideshowBlock"
import VideoBlock from "./VideoBlock"
import PhotoOverlayEvents from "./PhotoOverlayEvents"
import PhotoLightboxOverlay from "./PhotoLightboxOverlay"
import OverlayOpener from "../../assets/scripts/modules/OverlayOpener"

function PhotoAlbum(props) {
  const appDispatch = useContext(DispatchContext)
  const selectedImage = useRef(null)

  let sections = GetSections()

  useEffect(() => {
    appDispatch({ type: "backgroundStyleChange", color: "dark" })
  }, [])

  function GetSelectedImage() {
    return selectedImage.current
  }

  // photo section headings
  function GetSections() {
    var prevSectionName = ""

    let uniqueSectionNames = props.photos.filter((curritem, idx, arr) => {
      if (idx >= 0) {
        return prevSectionName != curritem.section ? ((prevSectionName = curritem.section), true) : false
      }
    })

    return uniqueSectionNames
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
    if (e.code == "Enter" || e.type == "click") {
      selectedImage.current = FindButtonElement(e.target)

      let opener = new OverlayOpener(e, image, "../../")
      opener.openOverlay()
    }
  }

  return (
    <>
      <PhotoOverlayEvents GetSelectedImage={GetSelectedImage} />
      <PhotoLightboxOverlay />
      {props.videos.length > 0 ? <h2 className="headline__h2">Videos</h2> : ""}
      {props.videos.length > 0 ? (
        <div className="album-photos__video-row">
          {props.videos.map(video => {
            return <VideoBlock key={video.id} videoId={video.videoId} caption={video.caption} caption2={video.caption2} />
          })}
        </div>
      ) : (
        ""
      )}
      {props.slideshows.length > 0 ? <h2 className="headline__h2">Slideshows</h2> : ""}
      {props.slideshows.map(slideshow => {
        return <PhotoSlideshowBlock key={slideshow.id} url={slideshow.url} caption={slideshow.caption} />
      })}
      {props.photos.length > 0 ? <h2 className="headline__h2">Photos</h2> : ""}

      {sections.map(section => {
        return (
          <React.Fragment key={section.id}>
            {section.section ? <h3 className="headline__h3">{section.section}</h3> : ""}
            <div className="wrapper--album-photos">
              {props.photos
                .filter(photoElement => photoElement.section == section.section)
                .map(image => {
                  return <PhotoBlock key={image.id} photo={image} OpenOverlay={OpenOverlay} />
                })}
            </div>
          </React.Fragment>
        )
      })}
    </>
  )
}

export default PhotoAlbum
