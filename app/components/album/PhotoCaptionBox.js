import { useEffect } from "react"

function PhotoCaptionBox() {
  const TITLEBTNLEFT = 0
  const TITLEBTNRIGHT = 1
  let captionBoxBtnOrientation = TITLEBTNLEFT

  function doToggleButtonClick(e) {
    // console.log("doToggleButtonClick " + e.code)

    if (e.code == "Enter" || e.type == "click") {
      e.stopPropagation(), e.preventDefault()
      if (captionBoxBtnOrientation == TITLEBTNRIGHT) {
        swapCaptionBoxBtnIco(TITLEBTNLEFT)
      } else {
        swapCaptionBoxBtnIco(TITLEBTNRIGHT)
      }
    }
  }
  function swapCaptionBoxBtnIco(btnId) {
    let captionBoxBtnIcon = document.getElementById("caption-box-left-arrow")
    let captionBox = document.querySelector(".album-photos__photo-caption-box")
    if (btnId == TITLEBTNRIGHT) {
      captionBoxBtnIcon.classList.add("album-photos__photo-caption-box__button--icon-rotate-180")
      captionBoxBtnOrientation = TITLEBTNRIGHT
      captionBox.classList.add("album-photos__photo-caption-box--is-collapsed")
    } else {
      captionBoxBtnIcon.classList.remove("album-photos__photo-caption-box__button--icon-rotate-180")
      captionBoxBtnOrientation = TITLEBTNLEFT
      captionBox.classList.remove("album-photos__photo-caption-box--is-collapsed")
    }
  }

  const eventListenerAbortCtrlr = new AbortController()

  useEffect(() => {
    let captionBoxToggleButton = document.querySelector(".album-photos__photo-caption-box__button")
    if (captionBoxToggleButton) {
      captionBoxToggleButton.addEventListener("click", e => doToggleButtonClick(e), { signal: eventListenerAbortCtrlr.signal })
      // captionBoxToggleButton.addEventListener("keydown", e => doToggleButtonClick(e))
      return () => eventListenerAbortCtrlr.abort()
    }
  }, [])

  return
}

export default PhotoCaptionBox
