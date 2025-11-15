import React, { useEffect, useRef } from "react"

function SlideCaptionBox() {
  const TITLEBTNLEFT = 0
  const TITLEBTNRIGHT = 1
  const captionBoxBtnOrientation = useRef(TITLEBTNLEFT)

  function doToggleButtonClick(e) {
    if (captionBoxBtnOrientation.current == TITLEBTNRIGHT) {
      swapCaptionBoxBtnIco(TITLEBTNLEFT)
    } else {
      swapCaptionBoxBtnIco(TITLEBTNRIGHT)
    }
  }
  function swapCaptionBoxBtnIco(btnId) {
    let captionBoxBtnIcon = document.getElementById("slide-caption-box-left-arrow")
    let captionBox = document.querySelector(".album-photos__photo-caption-box")
    if (btnId == TITLEBTNRIGHT) {
      captionBoxBtnIcon.classList.add("album-photos__photo-caption-box__button--icon-rotate-180")
      captionBoxBtnOrientation.current = TITLEBTNRIGHT
      captionBox.classList.add("album-photos__photo-caption-box--is-collapsed")
    } else {
      captionBoxBtnIcon.classList.remove("album-photos__photo-caption-box__button--icon-rotate-180")
      captionBoxBtnOrientation.current = TITLEBTNLEFT
      captionBox.classList.remove("album-photos__photo-caption-box--is-collapsed")
    }
  }

  const eventListenerAbortCtrlr = new AbortController()

  useEffect(() => {
    let captionBoxToggleButton = document.querySelector("#slideshow-caption-box-button")
    if (captionBoxToggleButton) {
      captionBoxToggleButton.addEventListener("click", e => doToggleButtonClick(e), { signal: eventListenerAbortCtrlr.signal })
      return () => eventListenerAbortCtrlr.abort()
    } else {
      console.log("Failed to add event listener to caption box")
    }
  }, [])

  return (
    <div className="album-photos__photo-caption-box">
      <button id="slideshow-caption-box-button" tabIndex="0" className="album-photos__photo-caption-box__button">
        <span className="accessibility--hidden">Select this button to alternately close or open the box with the photo caption.</span>
        <svg id="slide-caption-box-left-arrow" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.421 1.327 4.579 7.854M11.414 14.673 4.579 7.854" className="album-photos__photo-caption-box__button--icon-path" />
        </svg>
      </button>
      <span id="slideCaption" className="slideshow__slide-caption"></span>
    </div>
  )
}

export default SlideCaptionBox
