import React, { useContext, useEffect, useRef } from "react"
import DispatchContext from "../../DispatchContext"
import SlideShowBlock from "./SlideShowBlock"
import SlideCaptionBox from "./SlideCaptionBox"
import SlideShowVcrButtons from "./SlideShowVcrButtons"

function SlideShow(props) {
  const appDispatch = useContext(DispatchContext)
  const PAUSE = 0
  const PLAY = 1
  let btnIcon = PLAY
  const FULLSCREEN = 0
  const EXITFULLSCREEN = 1

  const slideIntervalRef = useRef(null)
  const headerIntervalRef = useRef(null)
  const vcrButtonsIntervalRef = useRef(null)
  let slideInterval = 4

  let isSmallScreen = false
  let hideDelayMS = 3000
  const isFullScreen = useRef(false)
  const pointermoveFlag = useRef(0)
  const touch = useRef(0)
  const noHideMenu = useRef(false)
  const touchInitialted = useRef(false)
  const delayHideVcrBtns = useRef(false)
  const passiveSupported = useRef(false)

  if (window.innerWidth > 500 && window.innerHeight > 500) {
    isSmallScreen = false
  } else {
    isSmallScreen = true
  }

  let prevSlideIndex = -1
  let slideIndex = 0

  function setNoHideMenu(e, hideMenuOption) {
    if (!isSmallScreen) {
      noHideMenu.current = hideMenuOption
    }
    pointermoveFlag.current = 0
  }

  let pointerListener = new AbortController()

  function ToggleFullScreen(e) {
    e.preventDefault()

    let wrapper = document.querySelector(".wrapper--album-slideshow")
    let siteHeader = document.querySelector(".site-header")
    let vcrContainer = document.querySelector(".slideshow__vcr-container")

    if (siteHeader) {
      if (isFullScreen.current == false) {
        wrapper.addEventListener("pointermove", () => RunOnPointerMove(), { signal: pointerListener.signal })
        if (passiveSupported.current) {
          wrapper.addEventListener("touchstart", e => runOnTouch(e), { signal: pointerListener.signal, passive: passiveSupported.current })
          wrapper.addEventListener("touchend", () => runOnTouchEnd(), { signal: pointerListener.signal })
          touchInitialted.current = true
        }
        pointermoveFlag.current = 1
        touch.current = 1
        clearInterval(headerIntervalRef.current)
        headerIntervalRef.current = setInterval(() => {
          HideControlsForFullScreen()
        }, hideDelayMS)

        isFullScreen.current = true
      } else {
        pointerListener.abort()
        pointerListener = new AbortController()

        clearInterval(headerIntervalRef.current)
        clearInterval(vcrButtonsIntervalRef.current)

        isFullScreen.current = false
      }
      if (isFullScreen.current == true) {
        SetHeaderTransparency(true)
        vcrContainer.classList.add("slideshow__vcr-container--fullscreen")
        swapVcrFullscreenBtn(FULLSCREEN)
        if (!isSmallScreen) {
          document.body.classList.add("no-scroll")
        }
      } else {
        SetHeaderTransparency(false)
        vcrContainer.classList.remove("slideshow__vcr-container--fullscreen")
        if (!isSmallScreen) {
          document.body.classList.remove("no-scroll")
        }
        ShowControlsOnFullScreenClose()
        swapVcrFullscreenBtn(EXITFULLSCREEN)
      }
    }

    if (wrapper) {
      wrapper.classList.toggle("wrapper--album-slideshow--fullscreen")
    }

    let slider = document.querySelector(".slideshow__slides")
    if (slider) {
      let slides = slider.getElementsByTagName("li")
      if (slides) {
        for (const slide of slides) {
          slide.classList.toggle("slideshow__slides__slide--full-screen")
        }
      }
    }
  }

  const menuListener = new AbortController()

  function Add_NoHide_MouseEvents() {
    //Prevent the menu from hiding when the mouse pointer hovers over
    if (!isSmallScreen) {
      let siteHeader = document.querySelector(".site-header")
      if (siteHeader) {
        siteHeader.addEventListener(
          "mouseover",
          e => {
            setNoHideMenu(e, true)
          },
          { signal: menuListener.signal }
        )
        siteHeader.addEventListener(
          "mouseout",
          e => {
            setNoHideMenu(e, false)
          },
          { signal: menuListener.signal }
        )
      }
      //Prevent the VCR buttons from hiding when the mouse pointer hovers over
      let vcrContainer = document.querySelector(".slideshow__vcr-container")
      if (vcrContainer) {
        vcrContainer.addEventListener(
          "mouseover",
          e => {
            setNoHideMenu(e, true)
          },
          { signal: menuListener.signal }
        )
        vcrContainer.addEventListener(
          "mouseout",
          e => {
            setNoHideMenu(e, false)
          },
          { signal: menuListener.signal }
        )
      }
    }
  }
  function Remove_NoHide_MouseEvents() {
    menuListener.abort()
  }

  /**
   * runOnTouch
   * Show VCR buttons and menu, for mobile devices
   */
  function runOnTouch(e) {
    switch (e.srcElement.id) {
      case "slideshow-caption-box-button":
      case "slide-caption-box-left-arrow":
        return
      default:
        ShowControlsOnFullScreenClose()
    }
  }

  /**
   * runOnTouchEnd
   * Hide VCR buttons and menu, for mobile devices
   */
  function runOnTouchEnd() {
    touchInitialted.current = true
    if (touch.current == 0) {
      touch.current = 1
      clearInterval(vcrButtonsIntervalRef.current)
      vcrButtonsIntervalRef.current = setInterval(() => {
        touchHideNav()
      }, hideDelayMS)
    }
  }

  function touchHideNav() {
    if (touch.current == 1) {
      let menuIcon = document.querySelector(".site-header__menu-icon--expanded")
      if (menuIcon) {
        //don't hide the menu icon while the menu is expanded
        clearInterval(vcrButtonsIntervalRef.current)
        vcrButtonsIntervalRef.current = setInterval(() => {
          touchHideNav()
        }, hideDelayMS)
      } else {
        HideControlsForFullScreen()
      }
    }
  }

  /**
   * runOnPointerMove
   * Show menu and VCR buttons, for desktop
   */
  function RunOnPointerMove() {
    ShowControlsOnFullScreenClose()
    if (!isSmallScreen) {
      if (pointermoveFlag.current == 0) {
        pointermoveFlag.current = 1 //prevent menu flicker
        clearInterval(headerIntervalRef.current)
        headerIntervalRef.current = setInterval(() => {
          HideControlsForFullScreen()
        }, hideDelayMS)
      }
    }
  }

  function SetHeaderTransparency(transparent) {
    let siteHeader = document.querySelector(".site-header")
    let breadcrumb = document.getElementById("breadcrumb")
    if (transparent) {
      if (siteHeader && siteHeader.classList.contains("site-header--dark")) {
        siteHeader.classList.add("site-header--slideshow")
        siteHeader.classList.remove("site-header--dark")
      }
      if (breadcrumb) {
        let breadcrumbStyle = breadcrumb.classList.toString()
        // console.log("SlideShow breadcrumb class list: " + breadcrumbStyle)
        if (!breadcrumbStyle.includes("site-header__breadcrumb--transparent")) {
          breadcrumbStyle += " site-header__breadcrumb--transparent"
          appDispatch({ type: "updateBreadcrumbClass", class: breadcrumbStyle })
        }
      }
    } else {
      if (siteHeader && siteHeader.classList.contains("site-header--slideshow")) {
        siteHeader.classList.remove("site-header--slideshow")
        siteHeader.classList.add("site-header--dark")
      }
    }
  }

  function ShowControlsOnFullScreenClose() {
    let siteHeader = document.querySelector(".site-header")
    let breadcrumb = document.getElementById("breadcrumb")
    //show header and menu
    if (siteHeader && siteHeader.classList.contains("site-header--collapse")) {
      siteHeader.classList.remove("site-header--collapse")
      siteHeader.classList.add("site-header--expand")
    }

    //show breadcrumb
    if (breadcrumb && breadcrumb.classList.contains("site-header__breadcrumb__fixed")) {
      breadcrumb.classList.remove("site-header__breadcrumb__fixed")
      breadcrumb.classList.remove("site-header__breadcrumb--is-hidden")
    }

    showVcrButtons()

    let skiptocontent = document.getElementById("skiptocontent")
    if (skiptocontent) {
      skiptocontent.tabIndex = 0
    }
  }

  function HideControlsForFullScreen() {
    let siteHeader = document.querySelector(".site-header")
    let breadcrumb = document.getElementById("breadcrumb")
    if (pointermoveFlag.current == 1 || touch.current == 1) {
      if (noHideMenu.current == false || touchInitialted.current == true) {
        siteHeader.classList.add("site-header--collapse")
        siteHeader.classList.remove("site-header--expand")

        if (breadcrumb) {
          breadcrumb.classList.add("site-header__breadcrumb__fixed")
          //hide breadcrumb also, until pointermove shows it
          breadcrumb.classList.add("site-header__breadcrumb--is-hidden")
        }

        if (delayHideVcrBtns.current == true) {
          delayHideVcrBtns.current = false
          clearInterval(headerIntervalRef.current)
          headerIntervalRef.current = setInterval(() => {
            HideControlsForFullScreen()
          }, hideDelayMS)
          return
        } else {
          hideVcrButtons()
        }

        //no need for Skip to Content here
        let skiptocontent = document.getElementById("skiptocontent")
        if (skiptocontent) {
          skiptocontent.tabIndex = -1
        }
        pointermoveFlag.current = 0
        touch.current = 0
        touchInitialted.current = false
      }
    }
  }

  function hideVcrButtons() {
    let vcrContainer = document.querySelector(".slideshow__vcr-container")
    if (vcrContainer) {
      vcrContainer.classList.add("slideshow__vcr-container--is-hidden")
      vcrContainer.classList.remove("slideshow__vcr-container--is-visible")
    }
    const slideCaptionBox = document.querySelector(".album-photos__photo-caption-box")
    if (slideCaptionBox) {
      slideCaptionBox.classList.add("album-photos__photo-caption-box--is-hidden")
    }
  }

  function showVcrButtons() {
    let vcrContainer = document.querySelector(".slideshow__vcr-container")
    if (vcrContainer) {
      vcrContainer.classList.add("slideshow__vcr-container--is-visible")
      vcrContainer.classList.remove("slideshow__vcr-container--is-hidden")
    }
    const slideCaptionBox = document.querySelector(".album-photos__photo-caption-box")
    if (slideCaptionBox) {
      slideCaptionBox.classList.remove("album-photos__photo-caption-box--is-hidden")
    }
  }

  function play(e) {
    if (e) {
      e.preventDefault()
    }

    swapVcrPausePlayBtn(PLAY)
    FooterVisible(false)

    let slider = document.querySelector(".slideshow__slides")

    if (slider) {
      let slides = slider.getElementsByTagName("li")
      var captionText, slideImg

      if (slides.length > 2) {
        prevSlideIndex = slideIndex
        slideIndex++
        if (slideIndex > slides.length) {
          slideIndex = 1
        }

        if (prevSlideIndex > 0) {
          slides[prevSlideIndex - 1].classList.remove("slideshow__slides__slide--is-visible")
        }

        //Show the slide
        slides[slideIndex - 1].classList.add("slideshow__slides__slide--is-visible")

        slideImg = slides[slideIndex - 1].querySelector(".slide-image")

        captionText = slideImg.dataset["caption"]
      } else {
        prevSlideIndex = slideIndex
        slideIndex++
        if (slideIndex > slides.length) {
          slideIndex = 1
        }

        if (prevSlideIndex == 0) {
          slides[0].classList.add("slideshow__slides__slide--is-visible")
          slideImg = slides[0].querySelector(".slide-image")
        } else if (prevSlideIndex == 1) {
          slides[1].classList.add("slideshow__slides__slide--is-visible")
          slideImg = slides[1].querySelector(".slide-image")
          slides[0].classList.remove("slideshow__slides__slide--is-visible")
        } else if (prevSlideIndex == 2) {
          slides[0].classList.add("slideshow__slides__slide--is-visible")
          slides[1].classList.remove("slideshow__slides__slide--is-visible")
          slideImg = slides[0].querySelector(".slide-image")
        }

        captionText = slideImg.dataset["caption"]
      }

      HandleSlideCaption(captionText)
    } else {
      console.log("Play - no slider?")
    }

    clearInterval(slideIntervalRef.current)

    slideIntervalRef.current = setInterval(() => {
      play(e)
    }, slideInterval * 1000)
  }

  function HandleSlideCaption(captionText) {
    const slideCaptionBox = document.querySelector(".album-photos__photo-caption-box")
    const slideCaption = document.querySelector(".slideshow__slide-caption")

    if (slideCaption) {
      if (captionText.length == 0) {
        slideCaptionBox.classList.add("album-photos__photo-caption-box--is-hidden")
        slideCaption.innerText = ""
        slideCaption.classList.remove("slideshow__slide-caption--is-visible")
      } else {
        if (isFullScreen.current == false) {
          slideCaptionBox.classList.remove("album-photos__photo-caption-box--is-hidden")
        }
        slideCaption.innerText = captionText
        slideCaption.classList.add("slideshow__slide-caption--is-visible")
      }
    }
  }

  function pause(e) {
    e.preventDefault()
    clearInterval(slideIntervalRef.current)
    swapVcrPausePlayBtn(PAUSE)
  }

  function TogglePlay(e) {
    if (e.code == "Enter" || e.type == "click") {
      if (btnIcon == PLAY) {
        play(e)
      } else {
        pause(e)
      }
    }
  }

  function prevSlide(e) {
    e.preventDefault()
    clearInterval(slideIntervalRef.current)
    delayHideVcrBtns.current = true

    swapVcrPausePlayBtn(PAUSE)

    let captionText = ""
    let slideImg = null

    let slider = document.querySelector(".slideshow__slides")

    if (slider) {
      let slides = slider.getElementsByTagName("li")

      // Hide current slide
      slides[slideIndex - 1].classList.remove("slideshow__slides__slide--is-visible")

      // Update slideIndex to the previous slide index
      if (slideIndex > 1) {
        slideIndex--
      } else {
        slideIndex = slides.length
      }

      //Show the slide
      slideImg = slides[slideIndex - 1].querySelector(".slide-image")
      captionText = slideImg.dataset["caption"]
      slides[slideIndex - 1].classList.add("slideshow__slides__slide--is-visible")
      HandleSlideCaption(captionText)

      prevSlideIndex = slideIndex - 1
      if (prevSlideIndex < 1) {
        prevSlideIndex = slides.length - 1
      }
    }
  }

  function nextSlide(e) {
    e.preventDefault()
    clearInterval(slideIntervalRef.current)
    delayHideVcrBtns.current = true

    swapVcrPausePlayBtn(PAUSE)

    let captionText = ""
    let slideImg = null

    let slider = document.querySelector(".slideshow__slides")

    if (slider) {
      let slides = slider.getElementsByTagName("li")

      // Hide current slide
      slides[slideIndex - 1].classList.remove("slideshow__slides__slide--is-visible")

      // Update slideIndex to the next slide index
      if (slideIndex == slides.length) {
        slideIndex = 1
      } else {
        slideIndex++
      }

      //Show the slide
      slideImg = slides[slideIndex - 1].querySelector(".slide-image")
      captionText = slideImg.dataset["caption"]
      slides[slideIndex - 1].classList.add("slideshow__slides__slide--is-visible")
      HandleSlideCaption(captionText)

      prevSlideIndex = slideIndex - 1
      if (prevSlideIndex < 1) {
        prevSlideIndex = slides.length - 1
      }
    }
  }

  function swapVcrPausePlayBtn(btnId) {
    const svgPause = document.getElementById("pause")
    const svgPlay = document.getElementById("play")
    if (svgPause && svgPlay) {
      if (btnId == PAUSE) {
        svgPause.style.display = "none"
        svgPlay.style.display = "inline"
        btnIcon = PLAY
      } else {
        svgPause.style.display = "inline"
        svgPlay.style.display = "none"
        btnIcon = PAUSE
      }
    }
  }

  function swapVcrFullscreenBtn(btnId) {
    const svgFullscreen = document.getElementById("showFullscreen")
    const svgFullscreenExit = document.getElementById("exitFullscreen")
    if (svgFullscreen && svgFullscreenExit) {
      if (btnId == FULLSCREEN) {
        svgFullscreen.style.display = "none"
        svgFullscreenExit.style.display = "inline"
      } else {
        svgFullscreen.style.display = "inline"
        svgFullscreenExit.style.display = "none"
      }
    }
  }

  function CancelTimers() {
    noHideMenu.current = true
    clearInterval(slideIntervalRef.current)
    clearInterval(headerIntervalRef.current)
    SetHeaderTransparency(false)
  }

  function FooterVisible(showFooter) {
    let footer = document.querySelector(".footer")
    if (footer) {
      if (showFooter == true) {
        if (footer.classList.contains("footer__hidden")) {
          footer.classList.remove("footer__hidden")
        }
      } else {
        footer.classList.add("footer__hidden")
      }
    }
  }

  function testPassive() {
    try {
      const options = {
        get passive() {
          return false
        }
      }
      passiveSupported.current = true
    } catch (e) {
      console.log("Error testing passive support")
    }
  }

  useEffect(() => {
    let footer = document.querySelector(".footer")

    if (footer) {
      footer.classList.add("footer__hidden")
    }
    return () => FooterVisible(true)
  }, [])

  useEffect(() => {
    appDispatch({ type: "backgroundStyleChange", color: "dark" })
  }, [])

  useEffect(() => {
    testPassive()
  }, [])

  const VcrButtonsListener = new AbortController()

  useEffect(() => {
    const btnTogglePlay = document.getElementById("toggleplay")
    if (btnTogglePlay) {
      btnTogglePlay.addEventListener("click", e => TogglePlay(e), { signal: VcrButtonsListener.signal })
      btnTogglePlay.addEventListener("focus", e => showVcrButtons(), { signal: VcrButtonsListener.signal })
    }
    const btnPrevSlide = document.getElementById("prev")
    if (btnPrevSlide) {
      btnPrevSlide.addEventListener("click", e => prevSlide(e), { signal: VcrButtonsListener.signal })
      btnPrevSlide.addEventListener("touchend", e => prevSlide(e), { signal: VcrButtonsListener.signal })
      btnPrevSlide.addEventListener("focus", e => showVcrButtons(), { signal: VcrButtonsListener.signal })
    }
    const btnNextSlide = document.getElementById("next")
    if (btnNextSlide) {
      btnNextSlide.addEventListener("click", e => nextSlide(e), { signal: VcrButtonsListener.signal })
      btnNextSlide.addEventListener("touchend", e => nextSlide(e), { signal: VcrButtonsListener.signal })
      btnNextSlide.addEventListener("focus", e => showVcrButtons(), { signal: VcrButtonsListener.signal })
    }
    let btnFullScreen = document.getElementById("fullscreen")
    if (btnFullScreen) {
      btnFullScreen.addEventListener("click", e => ToggleFullScreen(e), { signal: VcrButtonsListener.signal })
      btnFullScreen.addEventListener("focus", e => showVcrButtons(), { signal: VcrButtonsListener.signal })
      btnFullScreen.addEventListener("touchend", e => showVcrButtons(), { signal: VcrButtonsListener.signal })
    }
    return () => VcrButtonsListener.abort()
  }, [])

  useEffect(() => {
    //Prevent the menu from hiding when the mouse pointer hovers over
    Add_NoHide_MouseEvents()
    return () => {
      Remove_NoHide_MouseEvents()
    }
  }, [])

  useEffect(() => {
    swapVcrFullscreenBtn(EXITFULLSCREEN)
    play()
    return () => {
      CancelTimers(), document.body.classList.remove("no-scroll")
    }
  }, [])

  return (
    <>
      <div className="wrapper--album-slideshow">
        <SlideCaptionBox />

        <ul className="slideshow__slides">
          {props.photos.map(image => {
            return <SlideShowBlock key={image.id} photo={image} />
          })}
        </ul>
        <SlideShowVcrButtons />
      </div>
    </>
  )
}

export default SlideShow
