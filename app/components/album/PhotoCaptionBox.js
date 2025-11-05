import { useContext, useEffect } from "react"
// import DispatchContext from "../../DispatchContext"
// import StateContext from "../../StateContext"

//*** NO LONGER USED  *** */
//*** NO LONGER USED  *** */
//*** NO LONGER USED  *** */

function PhotoCaptionBox() {
  // const appDispatch = useContext(DispatchContext)
  // const appState = useContext(StateContext)

  // const TITLEBTNLEFT = "0"
  // const TITLEBTNRIGHT = "1"
  // let captionBoxBtnOrientation = TITLEBTNLEFT

  // function doToggleButtonClick(e) {
  //   console.log("PhotoCaptionBox doToggleButtonClick: " + e.type)
  //   if (e.type === "Enter" || e.type === "click") {
  //     e.stopPropagation(), e.preventDefault()
  //     console.log("appState.captionBoxBtn: " + appState.captionBoxBtn)
  //     if (appState.captionBoxBtn === "0") {
  //       console.log("dispatching " + TITLEBTNRIGHT)
  //       appDispatch({ type: "captionBoxBtn", captionBoxBtn: TITLEBTNRIGHT })
  //     } else {
  //       console.log("dispatching " + TITLEBTNLEFT)
  //       appDispatch({ type: "captionBoxBtn", captionBoxBtn: TITLEBTNLEFT })
  //     }
  //     if (captionBoxBtnOrientation == TITLEBTNRIGHT) {
  //       swapCaptionBoxBtnIco(TITLEBTNLEFT)
  //       captionBoxBtnOrientation = TITLEBTNLEFT
  //     } else {
  //       swapCaptionBoxBtnIco(TITLEBTNRIGHT)
  //       captionBoxBtnOrientation = TITLEBTNRIGHT
  //     }
  //   }
  // }
  // function swapCaptionBoxBtnIco(btnId) {
  //   let captionBoxBtnIcon = document.getElementById("caption-box-left-arrow")
  //   let captionBox = document.querySelector(".album-photos__photo-caption-box")
  //   if (btnId == TITLEBTNRIGHT) {
  //     captionBoxBtnIcon.classList.add("album-photos__photo-caption-box__button--icon-rotate-180")
  //     captionBoxBtnOrientation = TITLEBTNRIGHT
  //     captionBox.classList.add("album-photos__photo-caption-box--is-collapsed")
  //   } else {
  //     captionBoxBtnIcon.classList.remove("album-photos__photo-caption-box__button--icon-rotate-180")
  //     captionBoxBtnOrientation = TITLEBTNLEFT
  //     captionBox.classList.remove("album-photos__photo-caption-box--is-collapsed")
  //   }
  // }

  // const eventListenerAbortCtrlr = new AbortController()

  // useEffect(() => {
  //   let captionBoxToggleButton = document.querySelector(".album-photos__photo-caption-box__button")
  //   if (captionBoxToggleButton) {
  //     captionBoxToggleButton.addEventListener("click", e => doToggleButtonClick(e), { signal: eventListenerAbortCtrlr.signal })
  //     captionBoxToggleButton.addEventListener("keydown", e => doToggleButtonClick(e), { signal: eventListenerAbortCtrlr.signal })
  //     return () => eventListenerAbortCtrlr.abort()
  //   }
  // }, [])

  //*** NO LONGER USED  *** */
  //*** NO LONGER USED  *** */
  //*** NO LONGER USED  *** */

  return
}

export default PhotoCaptionBox
