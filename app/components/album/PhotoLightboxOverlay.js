import React, { useContext } from "react"
import DispatchContext from "../../DispatchContext"
import StateContext from "../../StateContext"

function PhotoLightboxOverlay() {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)
  const TITLE_BTN_POINT_LEFT = "0"
  const TITLE_BTN_POINT_RIGHT = "1"

  function doToggleButtonClick(e) {
    // console.log("PhotoLightboxOverlay doToggleButtonClick: " + e.type)
    e.stopPropagation(), e.preventDefault()
    if (appState.captionBoxBtn === TITLE_BTN_POINT_LEFT) {
      appDispatch({ type: "captionBoxBtn", captionBoxBtn: TITLE_BTN_POINT_RIGHT })
    } else {
      appDispatch({ type: "captionBoxBtn", captionBoxBtn: TITLE_BTN_POINT_LEFT })
    }
  }

  return (
    <div className="lightbox__photo-overlay">
      <span id="overlay-close-btn" className="accessibility--hidden">
        Select this to close the photo
      </span>
      <button aria-labelledby="overlay-close-btn" id="overlay-close-button" tabIndex="0" className="lightbox__photo-overlay__close-btn">
        <svg id="closeicon" className="lightbox__photo-overlay__close-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
          <path className="lightbox__photo-overlay__close-svg--path" d="M13 25.75C5.97 25.75.25 20.03.25 13S5.97.25 13 .25 25.75 5.97 25.75 13 20.03 25.75 13 25.75z" />
          <path className="lightbox__photo-overlay__close-svg--path" d="m8.59 17.41 8.92-8.92M17.459 17.459l-8.92-8.92" />
        </svg>
      </button>
      <div id="lightbox__photo-overlay__image" className="lightbox__photo-overlay__image"></div>
      <div className={appState.captionBoxBtn == "0" ? "album-photos__photo-caption-box" : "album-photos__photo-caption-box album-photos__photo-caption-box--is-collapsed"}>
        <span id="photo-caption-box-btn" className="accessibility--hidden">
          Select this button to alternately close or open the box with the photo caption
        </span>
        <button
          onClick={e => {
            doToggleButtonClick(e)
          }}
          aria-labelledby="photo-caption-box-btn"
          id="photo-caption-box-button"
          tabIndex="0"
          className="album-photos__photo-caption-box__button"
        >
          <svg id="caption-box-left-arrow" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={appState.captionBoxBtn == "1" ? "album-photos__photo-caption-box__button--icon-rotate-180" : ""}>
            <path d="M11.421 1.327 4.579 7.854M11.414 14.673 4.579 7.854" className="album-photos__photo-caption-box__button--icon-path" />
          </svg>
        </button>
        <span id="photoCaption" className="album-photos__photo-caption"></span>
      </div>
    </div>
  )
}

export default PhotoLightboxOverlay
