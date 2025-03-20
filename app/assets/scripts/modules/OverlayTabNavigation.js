class OverlayTabNavigation {
  constructor() {}

  SetTabIndexUnderOverlay(tabindex, selectedImage) {
    const navMenuItems = document.querySelectorAll(".nav__button, .menu-item__link")
    if (navMenuItems) {
      navMenuItems.forEach(el => {
        el.setAttribute("tabindex", tabindex)
      })
    }
    const main = document.getElementById("maincontent")
    if (main) {
      const photos = main.querySelectorAll("button, a")
      if (photos) {
        photos.forEach(button => {
          if (button.id != "overlay-close-button" && button.id != "photo-caption-box-button") {
            button.setAttribute("tabindex", tabindex)
          }
        })
      }
    }
    let skiptocontent = document.getElementById("skiptocontent")
    if (skiptocontent) {
      skiptocontent.tabIndex = tabindex
    }
    let aboutUsLink = document.getElementById("about-us-link")
    if (aboutUsLink) {
      aboutUsLink.tabIndex = tabindex
    }
    let contactUsLink = document.getElementById("contact-us-link")
    if (contactUsLink) {
      contactUsLink.tabIndex = tabindex
    }
    let headerLogoLink = document.getElementById("header-logo-link")
    if (headerLogoLink) {
      headerLogoLink.tabIndex = tabindex
    }

    // console.log("setting focus to " + selectedImage)
    if (selectedImage) {
      selectedImage.focus()
    }
  }
}

export default OverlayTabNavigation
