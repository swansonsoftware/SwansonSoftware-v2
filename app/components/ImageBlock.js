import React from "react"
import ImageOverlayOpener from "../assets/scripts/modules/ImageOverlayOpener"

function ImageBlock(props) {
  const image = props.image
  const HIDE = false

  function OpenOverlay(e, image) {
    if (e.code == "Enter" || e.type == "click") {
      // selectedImage.current = FindButtonElement(e.target)

      let opener = new ImageOverlayOpener(e, image)
      opener.openOverlay()
    }
  }

  function closeMenuOverlay() {
    ShrinkDropdownMenu()
    MenuOverlayDisplay(HIDE)
    // MenuContentDisplay(HIDE)
    // Show_Hamburger_MenuIcon()
    UnRotateMenuIcon()

    //scroll into view
  }
  function UnRotateMenuIcon() {
    // Un-rotate any rotated menu icon
    let rotatedIcons = document.querySelectorAll(".nav__button--icon-rotate-180")
    if (rotatedIcons) {
      rotatedIcons.forEach(ri => {
        ri.classList.remove("nav__button--icon-rotate-180")
      })
    }
  }
  function ShrinkDropdownMenu() {
    let pageOverlays = document.querySelectorAll(".site-header__menu-dropdown")
    if (pageOverlays) {
      pageOverlays.forEach(pageOverlay => {
        if (pageOverlay.classList.contains("site-header__menu-dropdown--visible")) {
          pageOverlay.classList.remove("site-header__menu-dropdown--visible")
        }
        if (pageOverlay.children[0].children[1].classList.contains("col-2--grow")) {
          pageOverlay.children[0].children[1].classList.remove("col-2--grow")
        }
        if (pageOverlay.children[0].children[1].classList.contains("col-2--shrink")) {
          pageOverlay.children[0].children[1].classList.remove("col-2--shrink")
        }
      })
    }
    const menu = document.getElementById("exTest")
    if (menu) {
      if (menu.classList.contains("nav__menu-content--allow-scroll")) {
        menu.classList.remove("nav__menu-content--allow-scroll")
      }
    }
  }
  function MenuOverlayDisplay(visible) {
    let overlay = document.querySelector(".lightbox__menu-overlay")

    if (overlay) {
      if (visible) {
        if (!overlay.classList.contains("lightbox__menu-overlay--visible")) {
          overlay.classList.add("lightbox__menu-overlay--visible")
        }
        document.body.classList.add("no-scroll")
      } else {
        if (overlay.classList.contains("lightbox__menu-overlay--visible")) {
          overlay.classList.remove("lightbox__menu-overlay--visible")
        }
        if (document.body.classList.contains("no-scroll")) {
          document.body.classList.remove("no-scroll")
        }
      }
    }
  }

  const imgborder = {
    border: "1px solid black"
  }

  return (
    <div>
      <button
        type="button"
        name={image.captionHeading}
        tabIndex="0"
        className="wrapper--image"
        onClick={e => {
          OpenOverlay(e, image)
        }}
        onFocus={e => {
          closeMenuOverlay(e)
        }}
      >
        <img style={imgborder} loading={image.lazy ? "lazy" : "eager"} width={image.width} height={image.height} src={image.src} srcSet={image.srcset ? image.srcset : undefined} alt={image.alt} data-srcset={image.dataSrcset} sizes={image.sizes ? image.sizes : undefined}></img>
      </button>
      {image.caption ? <span className="row__imageCaptionSpan">{image.caption}</span> : ""}
    </div>
  )
}

export default ImageBlock
