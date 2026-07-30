import React, { useContext, useEffect } from "react"
import DispatchContext from "../DispatchContext"

export default function InitializePage({ backgroundStyleChangeColor, selectMenu, menuActiveCategory, homePageClass, scrollTop }) {
  const appDispatch = useContext(DispatchContext)
  let breadcrumbStyle = "site-header__breadcrumb"
  let headerStyle = "site-header site-header--expand"

  useEffect(() => {
    appDispatch({ type: "backgroundStyleChange", color: backgroundStyleChangeColor })
    appDispatch({ type: "selectMenu", selectedMenu: selectMenu })
    appDispatch({ type: "menuActiveCategory", menuActiveCategory })
    appDispatch({ type: "homePageClass", homePageClass })
    if (scrollTop) {
      appDispatch({ type: "scrollTop", scrollTop: true })
    } else {
      appDispatch({ type: "scrollTop", scrollTop: false })
    }
    if (backgroundStyleChangeColor === "dark") {
      breadcrumbStyle += " site-header__breadcrumb--dark-bg"
      headerStyle += " site-header--dark"
    }

    appDispatch({ type: "headerVisClass", headerVisClass: headerStyle })
    appDispatch({ type: "updateBreadcrumbClass", class: breadcrumbStyle })

    const topTarget = document.getElementById("overlay")
    if (topTarget) {
      topTarget.focus()
    }
  }, [])
}
