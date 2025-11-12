import React from "react"
import { Link } from "react-router-dom"

function Breadcrumb(props) {
  function handleFocus() {
    let breadcrumb = document.querySelector(".site-header__breadcrumb")
    //unhide breadcrumb
    if (breadcrumb) {
      breadcrumb.classList.remove("site-header__breadcrumb--is-hidden")
    }
  }

  function unhideMenu() {
    let siteHeader = document.querySelector(".site-header")
    if (siteHeader) {
      if (siteHeader.classList.contains("site-header--collapse")) {
        siteHeader.classList.remove("site-header--collapse")
      }
    }
  }

  return (
    <nav aria-label="breadcrumb" className="wrapper wrapper--album-slideshow-breadcrumb">
      <div className="wrapper--album wrapper--album-slideshow-backlink wrapper--album--pull-left">
        <span id="breadcrumb" className="site-header__breadcrumb site-header__breadcrumb--transparent">
          {props.breadcrumbs.map((link, index) => {
            const isLast = index === props.breadcrumbs.length - 1
            return (
              <span key={index}>
                {isLast ? (
                  link.toText
                ) : (
                  <>
                    <Link
                      id={link.id}
                      onFocus={e => {
                        handleFocus()
                      }}
                      onClick={e => {
                        unhideMenu()
                      }}
                      to={link.toUrl}
                    >
                      {link.toText}
                    </Link>
                    <span style={{ margin: "0 8px" }}>{">"}</span>
                  </>
                )}
              </span>
            )
          })}
        </span>
      </div>
    </nav>
  )
}

export default Breadcrumb
