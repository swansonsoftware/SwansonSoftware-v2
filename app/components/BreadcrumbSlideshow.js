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
    <span className="wrapper wrapper--album-slideshow-breadcrumb">
      <div className="wrapper--album wrapper--album-slideshow-backlink wrapper--album--pull-left">
        <span id="breadcrumb" className="site-header__breadcrumb site-header__breadcrumb--transparent">
          <Link
            id="breadcrumb-link"
            onFocus={e => {
              handleFocus()
            }}
            onClick={e => {
              unhideMenu()
            }}
            to={props.to}
          >
            &laquo; Back to {props.linktext}
          </Link>
        </span>
      </div>
    </span>
  )
}

export default Breadcrumb
