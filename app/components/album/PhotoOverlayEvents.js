import { useEffect } from "react"
import OverlayTabNavigation from "../../assets/scripts/modules/OverlayTabNavigation"

function PhotoOverlayEvents(props) {
  function CloseOverlayOnEsc(e) {
    if (e.keyCode == 27) {
      CloseOverlay(e)
    }
  }

  function CloseOverlay(e) {
    e.preventDefault()
    if (e.keyCode == 27 || e.code == "Enter" || e.type == "click") {
      // console.log("CloseOverlay ")

      let overlay = document.querySelector(".lightbox__photo-overlay")
      if (overlay) {
        overlay.classList.remove("lightbox__photo-overlay--visible")
        document.body.classList.remove("no-scroll")
      }
      let overlayTabNav = new OverlayTabNavigation()
      overlayTabNav.SetTabIndexUnderOverlay("0", props.GetSelectedImage())
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

  return
}

export default PhotoOverlayEvents
