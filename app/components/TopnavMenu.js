import React, { useContext, useEffect, useState, useRef } from "react"
import ReactDOM from "react-dom"
import { Link } from "react-router-dom"
import DispatchContext from "../DispatchContext.js"
import StateContext from "../StateContext.js"

function TopnavMenu({ CloseMenu = { CloseMenu }, updateSiteHeaderClass = { updateSiteHeaderClass } }) {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)

  const currentElement = useRef()

  const EXPANDED = true

  var prevTopicId = -1
  var idprefix = "ul-id-"
  var idpostfix = "-menu"
  var focusableElements

  // { topic: "Principles", name: "Process Models", link: "/principles/process-models", pages: "Software Development Principles pages", topicid: 0, id: 0 },
  // { topic: "Principles", name: "Requirements", link: "/principles/requirements", pages: "Software Development Principles pages", topicid: 0, id: 1 },
  // { topic: "Materials", name: "blah", link: "/blog/2025", pages: "Blog pages", topicid: 1, id: 20 },
  const menuitems = [
    { topic: "Principles", name: "Software Design", link: "/principles/design", pages: "Software Development Principles pages", topicid: 0, id: 2 },
    { topic: "Principles", name: "Software Life Cycle", link: "/principles/lifecycle", pages: "Software Development Principles pages", topicid: 0, id: 3 },
    { topic: "Principles", name: "Software Reviews", link: "/principles/reviews", pages: "Software Development Principles pages", topicid: 0, id: 4 },
    { topic: "Blog", name: "2025", link: "/blog/2025", pages: "Blog pages", topicid: 1, id: 5 },
    { topic: "Blog", name: "2026", link: "/blog/2026", pages: "Blog pages", topicid: 1, id: 6 },
    { topic: "Album", name: "Recipes", link: "/album/recipes", pages: "Album pages", topicid: 2, id: 7 },
    { topic: "Album", name: "Favorites", link: "/album/favorites", pages: "Album pages", topicid: 2, id: 8 },
    { topic: "Album", name: "1900s", link: "/album/1900s", pages: "Album pages", topicid: 2, id: 9 },
    { topic: "Album", name: "2000s", link: "/album/2000s", pages: "Album pages", topicid: 2, id: 10 },
    { topic: "Album", name: "2010s", link: "/album/2010s", pages: "Album pages", topicid: 2, id: 11 },
    { topic: "Album", name: "2020s", link: "/album/2020s", pages: "Album pages", topicid: 2, id: 12 }
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
      <div className={String(idx) === appState.menuDropdownActiveTopic ? "site-header__menu-dropdown site-header__menu-dropdown--visible" : "site-header__menu-dropdown"} data-menuname={topic}>
        <div className={backgroundStyle == "dark" ? "site-header__menu-dropdown--container site-header__menu-dropdown--container--dark" : "site-header__menu-dropdown--container"}>
          <div className="col-1">
            <span role="menu" className={backgroundStyle == "dark" ? "menu-item__subheading-2 menu-item__subheading-2--dark" : "menu-item__subheading-2"}>
              <Link
                to={link}
                tabIndex="0"
                role="menuitem"
                className={getMenuItemClass(backgroundStyle == "dark" ? "menu-item__link menu-item__link--dark" : "menu-item__link menu-item__link--lite", topic)}
                aria-current={appState.selectedMenu == topic ? "page" : undefined}
                onClick={e => {
                  CloseMenu()
                }}
              >
                {topic}
              </Link>
            </span>
            <span className={backgroundStyle == "dark" ? "menu-item__subheading-3 menu-item__subheading-3--dark" : "menu-item__subheading-3"}>{subtext}</span>
          </div>
          <div className={String(idx) === appState.menuDropdownActiveTopic ? "col-2 col-2--grow" : "col-2"}>
            <ul id={idprefix + topic + idpostfix} className="menu-item" role="menu">
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
        <li key={item.id} role="none">
          <Link
            to={item.link}
            tabIndex="0"
            role="menuitem"
            className={getMenuItemClass(theBackgroundStyle, item.name)}
            aria-current={appState.selectedMenu == item.name ? "page" : undefined}
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
    // set all aria-expanded to false
    var i = 0
    topicSubtext.forEach(item => {
      var expandedMenuItem = document.getElementById(i)
      if (expandedMenuItem) {
        expandedMenuItem.attributes["aria-expanded"].value = "false"
      }
      i++
    })

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
      var expandedMenuItem = document.getElementById(idx)
      if (expandedMenuItem) {
        expandedMenuItem.attributes["aria-expanded"].value = "true"
      }
    }
  }

  function handleFocus() {
    // Show the header
    // should replace below with updateSiteHeaderClass(EXPANDED)
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

  function moveWithinSubmenu(currElement, direction) {
    // Find the index of the current element in the full list
    const currentIndex = focusableElements.indexOf(currElement)

    let buttonIndex = currentIndex
    while (buttonIndex >= 0 && focusableElements[buttonIndex].tagName !== "BUTTON") {
      buttonIndex--
    }

    const submenuItems = getSubmenuItems(buttonIndex)
    const submenuIndex = submenuItems.indexOf(currElement)

    // Compute the next index inside the submenu
    const nextIndex = (submenuIndex + direction + submenuItems.length) % submenuItems.length

    if (nextIndex < 0 || nextIndex >= submenuItems.length) {
      return
    }

    submenuItems[nextIndex].focus()
  }

  // Get all submenu items under the button
  function getSubmenuItems(buttonIndex) {
    const submenu = []

    for (let i = buttonIndex + 1; i < focusableElements.length; i++) {
      const el = focusableElements[i]
      if (el.type === "button") break
      submenu.push(el)
    }

    return submenu
  }

  function menuKeyPressHandler(e) {
    if (e.code == "Escape") {
      CloseMenu()
    } else {
      focusableElements = Array.from(document.querySelectorAll('button[role="menuitem"], a[role="menuitem"]'))
      let direction = 0
      currentElement.current = document.activeElement
      var flag = false
      var selectedIndex = -1

      // Distinguish between buttons and links using element id and type.

      switch (e.code) {
        case "ArrowRight":
          direction = 1
          if (currentElement.current.type === "button") {
            let currentIndex = Number(currentElement.current.id)
            const btnCount = focusableElements.filter(el => el.type === "button").length

            let nextIndex = currentIndex + direction
            if (nextIndex > btnCount - 1) {
              nextIndex = 0
            }

            if (nextIndex >= 0) {
              focusableElements.filter(el => el.type === "button")[nextIndex].focus()
            }
          }
          flag = true
          break
        case "ArrowLeft":
          direction = -1
          if (currentElement.current.type === "button") {
            let currentIndex = Number(currentElement.current.id)
            const btnCount = focusableElements.filter(el => el.type === "button").length

            let nextIndex = currentIndex + direction
            if (nextIndex < 0) {
              nextIndex = btnCount - 1
            }

            if (nextIndex >= 0) {
              focusableElements.filter(el => el.type === "button")[nextIndex].focus()
            }
          }
          flag = true
          break
        case "ArrowDown":
        case "Down":
          if (currentElement.current.type === "button") {
            const topicId = currentElement.current.id

            const isExpanded = currentElement.current.getAttribute("aria-expanded") === "true"
            if (!isExpanded) {
              ToggleMenuExpansion(e, topicId)
            }

            focusableElements = Array.from(document.querySelectorAll('button[role="menuitem"], a[role="menuitem"]'))

            // After expansion, move focus to the first submenu item
            const buttonIndex = focusableElements.indexOf(currentElement.current)
            const submenuItems = getSubmenuItems(buttonIndex)

            // gs: setting focus is broken here, as of 7/30/2026.
            if (submenuItems.length > 0) {
              submenuItems[0].focus()
            }
          } else if (currentElement.current.getAttribute("role") == "menuitem") {
            direction = 1
            moveWithinSubmenu(currentElement.current, direction)
          }
          flag = true
          break
        case "ArrowUp":
        case "Up":
          if (currentElement.current.type === "button" || currentElement.current.getAttribute("role") == "menuitem") {
            direction = -1
            moveWithinSubmenu(currentElement.current, direction)
            flag = true
          }
          break
        default:
          break
      }

      if (flag) {
        e.stopPropagation()
        e.preventDefault()
      }
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

    focusableElements = Array.from(document.querySelectorAll('[role="menuitem"]'))
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
      <nav
        aria-label="Primary"
        className="nav nav--pull-right"
        onBlur={e => {
          if (!e.currentTarget.contains(e.relatedTarget)) {
            CloseMenu()
          }
        }}
        onKeyDown={menuKeyPressHandler}
      >
        <ul id="exTest" role="menubar" className={appState.menuListClassByIconState}>
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
                        ToggleMenuExpansion(e, String(menuTopic.topicid))
                      }}
                      onFocus={e => {
                        handleFocus()
                      }}
                      className={appState.backgroundStyle == "dark" ? "nav__button nav__button--dark" : "nav__button nav__button--lite"}
                      aria-expanded="false"
                      aria-controls={idprefix + menuTopic.topic + idpostfix}
                      aria-label={menuTopic.pages}
                      aria-haspopup="true"
                      role="menuitem"
                    >
                      <span className="nav__button--icon-spacer">{menuTopic.topic}</span>
                      <svg id={"svg-" + menuTopic.topic} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={appState.menuDropdownActiveTopic === String(menuTopic.topicid) ? "nav__button--icon-rotate-180" : ""}>
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
