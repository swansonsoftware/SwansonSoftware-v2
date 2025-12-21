import React, { useContext, useEffect, useState } from "react"
import ReactDOM from "react-dom"
import { Link } from "react-router-dom"
import DispatchContext from "../DispatchContext"
import StateContext from "../StateContext"

function TopnavMenu({ CloseMenu = { CloseMenu }, updateBreadcrumbStyle = { updateBreadcrumbStyle }, updateSiteHeaderClass = { updateSiteHeaderClass } }) {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)

  const EXPANDED = true

  var prevTopicId = -1
  var idprefix = "ul-id-"
  var idpostfix = "-menu"

  // { topic: "Principles", name: "Process Models", link: "/principles/process-models", pages: "Software Development Principles pages", topicid: 0, id: 0 },
  // { topic: "Principles", name: "Requirements", link: "/principles/requirements", pages: "Software Development Principles pages", topicid: 0, id: 1 },
  // { topic: "Materials", name: "blah", link: "/blog/2025", pages: "Blog pages", topicid: 1, id: 20 },
  const menuitems = [
    { topic: "Principles", name: "Software Design", link: "/principles/design", pages: "Software Development Principles pages", topicid: 0, id: 2 },
    { topic: "Principles", name: "Life Cycle Models", link: "/principles/lifecycle-models", pages: "Software Development Principles pages", topicid: 0, id: 3 },
    { topic: "Principles", name: "Software Reviews", link: "/principles/reviews", pages: "Software Development Principles pages", topicid: 0, id: 4 },
    { topic: "Blog", name: "2025", link: "/blog/2025", pages: "Blog pages", topicid: 1, id: 5 },
    { topic: "Album", name: "Recipes", link: "/album/recipes", pages: "Album pages", topicid: 2, id: 6 },
    { topic: "Album", name: "Favorites", link: "/album/favorites", pages: "Album pages", topicid: 2, id: 7 },
    { topic: "Album", name: "1900s", link: "/album/1900s", pages: "Album pages", topicid: 2, id: 8 },
    { topic: "Album", name: "2000s", link: "/album/2000s", pages: "Album pages", topicid: 2, id: 9 },
    { topic: "Album", name: "2010s", link: "/album/2010s", pages: "Album pages", topicid: 2, id: 10 },
    { topic: "Album", name: "2020s", link: "/album/2020s", pages: "Album pages", topicid: 2, id: 11 }
  ]

  // { topic: "Materials", subtext: "Materials for software construction", link: "/blog" },
  const topicSubtext = [
    { topic: "Principles", subtext: "On the principles of software development", link: "/principles" },
    { topic: "Blog", subtext: "Rants and ruminations", link: "/blog" },
    { topic: "Album", subtext: "Photos, slideshows, a couple recipes", link: "/album" }
  ]

  function CreateMenuDropdownItems(topic, backgroundStyle, idx) {
    var idprefix = "ul-id-"
    var idpostfix = "-menu"
    var prevTopic = ""
    var subtext = ""
    var link = ""

    topicSubtext.filter((curritem, idx) => {
      if (idx > 0) {
        return prevTopic != curritem.topic ? ((prevTopic = curritem.topic), true) : false
      }
    })

    topicSubtext.forEach(item => {
      if (item.topic == topic) {
        subtext = item.subtext
        link = item.link
      }
    })

    return (
      <div className={idx === appState.menuDropdownActiveTopic ? "site-header__menu-dropdown site-header__menu-dropdown--visible" : "site-header__menu-dropdown"} data-menuname={topic}>
        <div className={backgroundStyle == "dark" ? "site-header__menu-dropdown--container site-header__menu-dropdown--container--dark" : "site-header__menu-dropdown--container"}>
          <div className="col-1">
            <h2 className={backgroundStyle == "dark" ? "menu-item__subheading-2 menu-item__subheading-2--dark" : "menu-item__subheading-2"}>
              <Link
                to={link}
                tabIndex="0"
                className={getMenuItemClass(backgroundStyle == "dark" ? "menu-item__link menu-item__link--dark" : "menu-item__link menu-item__link--lite", topic)}
                onClick={e => {
                  CloseMenu()
                }}
              >
                {topic}
              </Link>
            </h2>
            <h3 className={backgroundStyle == "dark" ? "menu-item__subheading-3 menu-item__subheading-3--dark" : "menu-item__subheading-3"}>{subtext}</h3>
          </div>
          <div className={idx === appState.menuDropdownActiveTopic ? "col-2 col-2--grow" : "col-2"}>
            <ul id={idprefix + topic + idpostfix} className="menu-item">
              {CreateSubTopicItems(topic, backgroundStyle)}
            </ul>
          </div>
        </div>
      </div>
    )
  }

  function CreateSubTopicItems(topic, backgroundStyle) {
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
              CloseMenu()
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

  function ToggleMenuExpansion(e, idx) {
    let breadcrumbStyle = appState.breadcrumbClass

    if (idx === appState.menuDropdownActiveTopic) {
      //collapse
      appDispatch({ type: "menuDropdownActiveTopic", menuDropdownActiveTopic: "" })
      let menuIconExpanded = document.querySelector(".site-header__menu-icon--expanded")
      if (!menuIconExpanded) {
        appDispatch({ type: "menuOverlay", menuOverlay: "lightbox__menu-overlay" })
        if (breadcrumbStyle.includes("site-header__breadcrumb--is-hidden")) {
          let classlist = breadcrumbStyle.split(" ")
          let filtered = classlist.filter(classname => classname !== "site-header__breadcrumb--is-hidden")
          breadcrumbStyle = filtered.join(" ")
          appDispatch({ type: "updateBreadcrumbClass", class: breadcrumbStyle })
        }
      }
    } else {
      //expand
      appDispatch({ type: "menuDropdownActiveTopic", menuDropdownActiveTopic: idx })
      appDispatch({ type: "menuOverlay", menuOverlay: "lightbox__menu-overlay lightbox__menu-overlay--visible" })
      if (!breadcrumbStyle.includes("site-header__breadcrumb--is-hidden")) {
        breadcrumbStyle += " site-header__breadcrumb--is-hidden"
        appDispatch({ type: "updateBreadcrumbClass", class: breadcrumbStyle })
      }
      var classList = appState.menuListClassByIconState
      if (!classList.includes("nav__menu-content--allow-scroll")) {
        classList += " nav__menu-content--allow-scroll"
        appDispatch({ type: "menuListClassByIconState", class: classList })
      }
    }
  }

  function handleFocus() {
    // Show the header
    let siteHeader = document.querySelector(".site-header")
    if (siteHeader) {
      if (siteHeader.classList.contains("site-header--collapse")) {
        siteHeader.classList.remove("site-header--collapse")
      }
    }
    // Show the breadcrumb
    let breadcrumbStyle = appState.breadcrumbClass
    let mustDispatch = false
    if (breadcrumbStyle.includes("site-header__breadcrumb__fixed")) {
      let classlist = breadcrumbStyle.split(" ")
      let filtered = classlist.filter(classname => classname !== "site-header__breadcrumb__fixed")
      breadcrumbStyle = filtered.join(" ")
      mustDispatch = true
    }
    if (breadcrumbStyle.includes("site-header__breadcrumb--is-hidden")) {
      let classlist = breadcrumbStyle.split(" ")
      let filtered = classlist.filter(classname => classname !== "site-header__breadcrumb--is-hidden")
      breadcrumbStyle = filtered.join(" ")
      mustDispatch = true
    }
    let breadcrumb = document.getElementById("breadcrumb")
    if (breadcrumb && !breadcrumbStyle.includes("site-header__breadcrumb--transparent")) {
      breadcrumbStyle += " site-header__breadcrumb--transparent"
      mustDispatch = true
    }
    if (mustDispatch) {
      appDispatch({ type: "updateBreadcrumbClass", class: breadcrumbStyle })
    }
  }

  function menuKeyPressHandler(e) {
    if (e.code == "Escape") {
      CloseMenu()
    } else if (e.code == "ArrowRight" || e.code == "ArrowLeft") {
      let direction = 0
      if (e.code == "ArrowRight") {
        direction = 1
      } else if (e.code == "ArrowLeft") {
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
    updateSiteHeaderClass(EXPANDED)
    let breadcrumbStyle = appState.breadcrumbClass
    if (breadcrumbStyle.includes("site-header__breadcrumb__fixed")) {
      let classlist = breadcrumbStyle.split(" ")
      let filtered = classlist.filter(classname => classname !== "site-header__breadcrumb__fixed")
      breadcrumbStyle = filtered.join(" ")
      appDispatch({ type: "updateBreadcrumbClass", class: breadcrumbStyle })
    }
  }

  const eventListenerAbortCtrlr = new AbortController()

  useEffect(() => {
    let overlay = document.getElementById("overlay")
    if (overlay) {
      overlay.addEventListener("click", CloseMenu, { signal: eventListenerAbortCtrlr.signal })
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
    // add underline to menu category button
    var navBtns = document.querySelectorAll(".nav__button")
    var baseClass = appState.backgroundStyle == "dark" ? "nav__button nav__button--dark" : "nav__button nav__button--lite"
    navBtns.forEach(el => {
      el.id == appState.menuActiveCategory ? (el.className = baseClass + " nav__button--selected") : (el.className = baseClass)
    })
  }, [appState.menuActiveCategory])

  useEffect(() => {
    // switch between lite and dark theme
    var navBtns = document.querySelectorAll(".nav__button")
    var baseClass = appState.backgroundStyle == "dark" ? "nav__button nav__button--dark" : "nav__button nav__button--lite"
    navBtns.forEach(el => {
      el.id == appState.menuActiveCategory ? (el.className = baseClass + " nav__button--selected") : (el.className = baseClass)
    })
  }, [appState.backgroundStyle])

  return (
    <>
      <nav className="nav nav--pull-right">
        <ul id="exTest" className={appState.menuListClassByIconState}>
          {menuitems
            .filter((curritem, idx, arr) => {
              if (idx > 0) {
                return prevTopicId != curritem.topicid ? ((prevTopicId = curritem.topicid), true) : false
              }
            })
            .map(menuTopic => {
              return (
                <React.Fragment key={menuTopic.topicid}>
                  <li key={menuTopic.topicid}>
                    <button
                      id={menuTopic.topicid}
                      type="button"
                      tabIndex="0"
                      onClick={e => {
                        ToggleMenuExpansion(e, menuTopic.topicid)
                      }}
                      onFocus={e => {
                        handleFocus()
                      }}
                      className={appState.backgroundStyle == "dark" ? "nav__button nav__button--dark" : "nav__button nav__button--lite"}
                      aria-expanded="false"
                      aria-controls={idprefix + menuTopic.topic + idpostfix}
                      aria-label={menuTopic.pages}
                    >
                      <span className="nav__button--icon-spacer">{menuTopic.topic}</span>
                      <svg id={"svg-" + menuTopic.topic} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={appState.menuDropdownActiveTopic === menuTopic.topicid ? "nav__button--icon-rotate-180" : ""}>
                        <path d="m14.673 4.579-6.527 6.842M1.327 4.586l6.819 6.835" className={appState.backgroundStyle == "dark" ? "nav__button--icon-stroke--dark" : "nav__button--icon-stroke"} />
                      </svg>
                    </button>
                    {CreateMenuDropdownItems(menuTopic.topic, appState.backgroundStyle, menuTopic.topicid)}
                  </li>
                </React.Fragment>
              )
            })}
        </ul>
      </nav>
    </>
  )
}
export default TopnavMenu
