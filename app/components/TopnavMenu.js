import React, { useContext, useEffect, useRef } from "react"
import ReactDOM from "react-dom"
import { Link } from "react-router-dom"
import DispatchContext from "../DispatchContext"
import StateContext from "../StateContext"

function TopnavMenu({ isMenuExpanded, setIsMenuExpanded = { SetMenu }, CloseMenu = { CloseMenu }, ShrinkDropdownMenu = { ShrinkDropdownMenu }, UnRotateMenuIcon = { UnRotateMenuIcon }, LightboxOverlayDisplay = { MenuOverlayDisplay }, NavMenuContentDisplay = { MenuContentDisplay }, Show_Hamburger_MenuIcon = { Show_Hamburger_MenuIcon } }) {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)

  const SHOW = true
  const HIDE = false

  // { topic: "Principles", name: "Process Models", link: "/principles/process-models", pages: "Software Development Principles pages", topicid: 0, id: 0 },
  // { topic: "Principles", name: "Requirements", link: "/principles/requirements", pages: "Software Development Principles pages", topicid: 0, id: 1 },
  const menuitems = [
    { topic: "Principles", name: "Software Design", link: "/principles/design", pages: "Software Development Principles pages", topicid: 0, id: 2 },
    { topic: "Principles", name: "Life Cycle Models", link: "/principles/lifecycle-models", pages: "Software Development Principles pages", topicid: 0, id: 3 },
    { topic: "Principles", name: "Software Reviews", link: "/principles/reviews", pages: "Software Development Principles pages", topicid: 0, id: 4 },
    { topic: "Blog", name: "2025", link: "/blog/2025", pages: "Blog pages", topicid: 1, id: 7 },
    { topic: "Album", name: "Recipes", link: "/album/recipes", pages: "Album pages", topicid: 2, id: 8 },
    { topic: "Album", name: "Favorites", link: "/album/favorites", pages: "Album pages", topicid: 2, id: 9 },
    { topic: "Album", name: "1900s", link: "/album/1900s", pages: "Album pages", topicid: 2, id: 10 },
    { topic: "Album", name: "2000s", link: "/album/2000s", pages: "Album pages", topicid: 2, id: 11 },
    { topic: "Album", name: "2010s", link: "/album/2010s", pages: "Album pages", topicid: 2, id: 12 },
    { topic: "Album", name: "2020s", link: "/album/2020s", pages: "Album pages", topicid: 2, id: 13 }
  ]

  const topicSubtext = [
    { topic: "Principles", subtext: "On the principles of software development" },
    { topic: "Blog", subtext: "Rants and ruminations" },
    { topic: "Album", subtext: "Photos, slideshows, a couple recipes" }
  ]

  // Get menu topics for the top level
  function GetMenuTopics() {
    var prevTopicId = -1

    let menuTopics = menuitems.filter((curritem, idx, arr) => {
      if (idx > 0) {
        return prevTopicId != curritem.topicid ? ((prevTopicId = curritem.topicid), true) : false
      }
    })

    return menuTopics
  }

  function CreateMenuItems(backgroundStyle) {
    const menuTopicsFiltered = []
    const menuTopics = GetMenuTopics()
    var idprefix = "ul-id-"
    var idpostfix = "-menu"

    menuTopics.forEach(menuTopic =>
      menuTopicsFiltered.push(
        <li key={menuTopic.topicid}>
          <button
            type="button"
            tabIndex="0"
            onClick={e => {
              e.stopPropagation(), ToggleMenuExpansion(e)
            }}
            className={backgroundStyle == "dark" ? "nav__button nav__button--dark" : "nav__button nav__button--lite"}
            aria-expanded="false"
            aria-controls={idprefix + menuTopic.topic + idpostfix}
            aria-label={menuTopic.pages}
          >
            <span className="nav__button--icon-spacer">{menuTopic.topic}</span>
            <svg id={"svg-" + menuTopic.topic} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path d="m14.673 4.579-6.527 6.842M1.327 4.586l6.819 6.835" className={backgroundStyle == "dark" ? "nav__button--icon-stroke--dark" : "nav__button--icon-stroke"} />
            </svg>
          </button>
          {CreateMenuDropdownItems(menuTopic.topic, backgroundStyle)}
        </li>
      )
    )

    return menuTopicsFiltered
  }

  // Create a dropdown menu with subtopic items for the menu topic
  function CreateMenuDropdownItems(topic, backgroundStyle) {
    var idprefix = "ul-id-"
    var idpostfix = "-menu"
    var prevTopic = ""
    var subtext = ""

    topicSubtext.filter((curritem, idx) => {
      if (idx > 0) {
        return prevTopic != curritem.topic ? ((prevTopic = curritem.topic), true) : false
      }
    })

    topicSubtext.forEach(item => {
      if (item.topic == topic) subtext = item.subtext
    })

    return (
      <div className="site-header__menu-dropdown" data-menuname={topic}>
        <div className={backgroundStyle == "dark" ? "site-header__menu-dropdown--container site-header__menu-dropdown--container--dark" : "site-header__menu-dropdown--container"}>
          <div className="col-1">
            <h2 className={backgroundStyle == "dark" ? "menu-item__subheading-2 menu-item__subheading-2--dark" : "menu-item__subheading-2"}>{topic}</h2>
            <p>{subtext}</p>
          </div>
          <div className="col-2">
            <ul id={idprefix + topic + idpostfix} className="menu-item">
              {CreateSubTopicItems(topic, backgroundStyle)}
            </ul>
          </div>
        </div>
      </div>
    )
  }

  function CreateSubTopicItems(topic, backgroundStyle) {
    console.log("CreateSubTopicItems")
    let theBackgroundStyle = backgroundStyle == "dark" ? "menu-item__link menu-item__link--dark" : "menu-item__link menu-item__link--lite"

    let topicitems = menuitems
      .filter(menuitem => menuitem.topic == topic)
      .map(item => (
        <li key={item.id}>
          <Link
            to={item.link}
            tabIndex="0"
            className={getMenuItemClass(theBackgroundStyle, item.name)}
            onClick={e => {
              setSelected(e), CloseMenu()
            }}
          >
            {item.name}
          </Link>
        </li>
      ))
    return topicitems
  }

  function getMenuItemClass(theBackgroundStyle, menuItemName) {
    let theMenuItemClass = (theBackgroundStyle += appState.selectedMenu == menuItemName ? " menu-item__link__active" : "")
    return theMenuItemClass
  }

  function setSelected(e) {
    appDispatch({ type: "selectMenu", selectedMenu: e.target.innerText })
  }

  function ToggleMenuExpansion(e) {
    let targetText = ""
    let icon = null

    switch (e.target.nodeName) {
      case "BUTTON":
        targetText = e.target.innerText
        icon = e.target.children[1]
        break
      case "SPAN":
        if (e.target.parentElement.nodeName == "BUTTON") {
          targetText = e.target.parentElement.innerText
          icon = e.target.parentElement.children[1]
        }
        break
      case "svg":
        if (e.target.parentElement.nodeName == "BUTTON") {
          targetText = e.target.parentElement.innerText
          icon = e.target.parentElement.children[1]
        }
        break
      case "path":
        if (e.target.parentElement.parentElement.nodeName == "BUTTON") {
          targetText = e.target.parentElement.parentElement.innerText
          icon = e.target.parentElement.parentElement.children[1]
        }
        break
      default:
        // console.log("? " + e.target.parentElement.nodeName)
        return
    }

    if (!targetText) {
      // can't continue
      return
    }
    targetText = targetText.trim()

    let pageOverlays = document.querySelectorAll(".site-header__menu-dropdown")
    let pageOverlay = null

    // Determine which menu button was selected
    if (pageOverlays) {
      pageOverlays.forEach(idx => {
        if (idx.dataset["menuname"] == targetText) {
          pageOverlay = idx
        }
      })
    }

    let breadcrumb = document.querySelector(".site-header__breadcrumb")
    let breadcrumbLink = document.querySelector("#breadcrumb-link")

    // If the same menu was selected, close it;
    // if a different menu was selected, close the open menu (if any) and open the selected menu
    if (pageOverlay) {
      // Can't call ShrinkDropdownMenu here because it breaks the logic below
      if (pageOverlay.classList.contains("site-header__menu-dropdown--visible")) {
        ShrinkDropdownMenu()

        // Don't hide the overlay when mobile menu is showing and user clicks/taps to collapse menu topic
        let siteHeaderMenuIcon = document.querySelector(".site-header__menu-icon--collapsed")
        if (siteHeaderMenuIcon) {
          LightboxOverlayDisplay(HIDE)

          //unhide breadcrumb
          if (breadcrumb) {
            breadcrumb.classList.remove("site-header__breadcrumb--is-hidden")
            if (breadcrumbLink) {
              breadcrumbLink.tabIndex = "0"
            }
          }
        }
        pageOverlay.children[0].children[1].classList.add("col-2--shrink")
        UnRotateMenuIcon()
      } else {
        ShrinkDropdownMenu()
        LightboxOverlayDisplay(SHOW)

        //hide breadcrumb
        if (breadcrumb) {
          breadcrumb.classList.add("site-header__breadcrumb--is-hidden")
          // console.log("setting breadcrumb tabindex -1")
          if (breadcrumbLink) {
            breadcrumbLink.tabIndex = "-1"
          }
        }

        pageOverlay.classList.add("site-header__menu-dropdown--visible")

        const menu = document.getElementById("exTest")
        if (menu) {
          menu.classList.add("nav__menu-content--allow-scroll")
        }

        setIsMenuExpanded(true)

        if (icon) {
          UnRotateMenuIcon()
          icon.classList.add("nav__button--icon-rotate-180")
        }

        pageOverlay.children[0].children[1].classList.add("col-2--grow")
      }
    }
  }

  // Menu icon event handler
  function ToggleMenuIcon(e) {
    if (e.code == "Enter" || e.type == "click") {
      if (!isMenuExpanded) {
        NavMenuContentDisplay(SHOW)
      }

      let siteHeaderMenuIcon = document.querySelector(".site-header__menu-icon--collapsed")
      let menuButtons = document.querySelectorAll(".nav__button")
      let breadcrumb = document.querySelector(".site-header__breadcrumb")
      let slideshowCaptionBox = document.querySelector(".slideshow__slide-caption-box")

      if (siteHeaderMenuIcon && !isMenuExpanded) {
        siteHeaderMenuIcon.classList.remove("site-header__menu-icon--collapsed")
        siteHeaderMenuIcon.classList.add("site-header__menu-icon--expanded")
        siteHeaderMenuIcon.setAttribute("aria-label", "Close menu")
        LightboxOverlayDisplay(SHOW)
        if (menuButtons) {
          menuButtons.forEach(button => {
            button.tabIndex = 0
          })
        }
        if (slideshowCaptionBox) {
          slideshowCaptionBox.style.zIndex = "0"
        }
        //hide breadcrumb
        if (breadcrumb) {
          breadcrumb.classList.add("site-header__breadcrumb--is-hidden")
        }
      } else {
        ShrinkDropdownMenu()
        NavMenuContentDisplay(HIDE)
        Show_Hamburger_MenuIcon()
        UnRotateMenuIcon()
        //prevent tabbinhg to hidden menu buttons
        if (menuButtons) {
          menuButtons.forEach(button => {
            button.tabIndex = -1
          })
        }
        if (slideshowCaptionBox) {
          slideshowCaptionBox.style.zIndex = "1"
        }

        if (breadcrumb) {
          breadcrumb.classList.remove("site-header__breadcrumb--is-hidden")
        }
      }
    }
  }

  const prevIndex = useRef(-2)

  function menuKeyPressHandler(e) {
    if (e.code == "Escape") {
      appDispatch({ type: "closeOverlay", isMenuOpen: false })
      CloseMenu()
    } else if (e.code == "ArrowDown" || e.code == "ArrowUp" || e.code == "ArrowRight" || e.code == "ArrowLeft") {
      let direction = 0
      if (e.code == "ArrowDown" || e.code == "ArrowRight") {
        direction = 1
      } else if (e.code == "ArrowUp" || e.code == "ArrowLeft") {
        direction = -1
      }

      const currentElement = document.activeElement
      const focusableElements = Array.from(document.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])')).filter(el => !el.hasAttribute("disabled"))

      const currentIndex = focusableElements.indexOf(currentElement)

      let nextIndex = currentIndex + direction

      if (nextIndex >= focusableElements.length) {
        nextIndex = 0
      } else if (nextIndex < 0) {
        nextIndex = focusableElements.length - 1
      }
      focusableElements[nextIndex].focus()
    }
  }

  function showHeader() {
    // Same as when scrolling up
    let siteHeader = document.querySelector(".site-header")

    if (siteHeader.classList.contains("site-header--collapse")) {
      siteHeader.classList.remove("site-header--collapse")
      siteHeader.classList.add("site-header--expand")

      let breadcrumb = document.querySelector(".site-header__breadcrumb")
      if (breadcrumb) {
        breadcrumb.classList.remove("site-header__breadcrumb__fixed")
      }
    }
  }

  const eventListenerAbortCtrlr = new AbortController()

  useEffect(() => {
    let overlay = document.getElementById("overlay")
    if (overlay) {
      overlay.addEventListener("click", CloseMenu, { signal: eventListenerAbortCtrlr.signal })
    }
    let menuIcon = document.querySelector(".site-header__menu-icon")
    if (menuIcon) {
      menuIcon.addEventListener("click", e => ToggleMenuIcon(e), { signal: eventListenerAbortCtrlr.signal })
    }
    let menuButtons = document.querySelectorAll(".nav__button")
    if (menuButtons) {
      menuButtons.forEach(button => {
        button.addEventListener("focus", showHeader, { signal: eventListenerAbortCtrlr.signal })
      })
    }
    document.addEventListener("keyup", menuKeyPressHandler, { signal: eventListenerAbortCtrlr.signal })
    return () => eventListenerAbortCtrlr.abort()
  }, [])

  useEffect(() => {
    if (!isMenuExpanded) {
      CloseMenu()
    }
  }, [isMenuExpanded])

  return (
    <nav className="nav nav--pull-right">
      <ul id="exTest" className="disclosure-nav nav__topnav nav__menu-content nav__menu-content--icon-hidden">
        {CreateMenuItems(appState.backgroundStyle)}
      </ul>
    </nav>
  )
}
export default TopnavMenu
