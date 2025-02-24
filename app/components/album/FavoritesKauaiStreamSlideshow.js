import React, { useContext } from "react"
import Page from "../Page"
import StateContext from "../../StateContext"
import SlideShow from "./SlideShow"
import Breadcrumb from "../BreadcrumbSlideshow"

function FavoritesKauaiStreamSlideshow() {
  const appState = useContext(StateContext)

  appState.backgroundStyle == "light" ? (document.body.classList.remove("dark"), document.body.classList.add("light")) : (document.body.classList.remove("light"), document.body.classList.add("dark"))

  const photos = [
    { id: 1, lazy: false, src: "", width: "320", height: "180", captionHeading: "", caption: "", alt: "", sizes: "100vw", srcset: "" },
    { id: 2, lazy: false, src: "", width: "320", height: "180", captionHeading: "", caption: "", alt: "", sizes: "100vw", srcset: "" },
    { id: 3, lazy: true, src: "", width: "320", height: "180", captionHeading: "", caption: "", alt: "", sizes: "100vw", srcset: "" },
    { id: 4, lazy: true, src: "", width: "320", height: "180", captionHeading: "", caption: "", alt: "", sizes: "100vw", srcset: "" },
    { id: 5, lazy: true, src: "", width: "320", height: "180", captionHeading: "", caption: "", alt: "", sizes: "100vw", srcset: "" },
    { id: 6, lazy: true, src: "", width: "320", height: "180", captionHeading: "", caption: "", alt: "", sizes: "100vw", srcset: "" },
    { id: 7, lazy: true, src: "", width: "320", height: "180", captionHeading: "", caption: "", alt: "", sizes: "100vw", srcset: "" }
  ]

  return (
    <Page title="Kauai Stream Erosion" background="dark">
      <Breadcrumb to="/album/favorites-kauai" linktext="Kauai Favorites" />
      <SlideShow photos={photos} />
    </Page>
  )
}

export default FavoritesKauaiStreamSlideshow
