import React, { useEffect } from "react"
import OverlayTabNavigation from "../assets/scripts/modules/OverlayTabNavigation"

function ImageLightboxOverlay() {
  function CloseOverlayOnEsc(e) {
    if (e.keyCode == 27) {
      CloseOverlay(e)
    }
  }

  function CloseOverlay(e) {
    e.preventDefault()
    if (e.keyCode == 27 || e.code == "Enter" || e.type == "click") {
      let overlay = document.querySelector(".lightbox__image-overlay")
      if (overlay) {
        overlay.classList.remove("lightbox__image-overlay--visible")
        document.body.classList.remove("no-scroll")
      }
      let overlayTabNav = new OverlayTabNavigation()
      overlayTabNav.SetTabIndexUnderOverlay("0", null)
    }
  }

  const eventListenerAbortCtrlr = new AbortController()

  useEffect(() => {
    const closeIcon = document.querySelector(".lightbox__photo-overlay__close-svg")
    if (closeIcon) {
      closeIcon.addEventListener("click", e => CloseOverlay(e), { signal: eventListenerAbortCtrlr.signal })
    }
    const closeBtn = document.getElementById("overlay-close-button")
    if (closeBtn) {
      closeBtn.addEventListener("keyup", e => CloseOverlay(e), { signal: eventListenerAbortCtrlr.signal })
    }
    document.addEventListener("keyup", e => CloseOverlayOnEsc(e), { signal: eventListenerAbortCtrlr.signal })
    return () => eventListenerAbortCtrlr.abort()
  }, [])

  return (
    <div className="lightbox">
      <div className="lightbox__image-overlay">
        <button id="overlay-close-button" tabIndex="0" className="lightbox__image-overlay__close-btn">
          <span className="accessibility--hidden">Select this to close the photo.</span>
          <svg id="closeicon" className="lightbox__photo-overlay__close-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
            <path className="lightbox__photo-overlay__close-svg--path" d="M13 25.75C5.97 25.75.25 20.03.25 13S5.97.25 13 .25 25.75 5.97 25.75 13 20.03 25.75 13 25.75z" />
            <path className="lightbox__photo-overlay__close-svg--path" d="m8.59 17.41 8.92-8.92M17.459 17.459l-8.92-8.92" />
          </svg>
        </button>
        <div id="lightbox__image-overlay__image" className="lightbox__image-overlay__image"></div>
      </div>
    </div>
  )
}

export default ImageLightboxOverlay
