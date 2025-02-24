import React, { useContext } from "react"
import Page from "../Page"
import StateContext from "../../StateContext"
import SlideShow from "./SlideShow"
import Breadcrumb from "../BreadcrumbSlideshow"

function FavoritesKauaiBeachVillasSlideshow() {
  const appState = useContext(StateContext)

  appState.backgroundStyle == "light" ? (document.body.classList.remove("dark"), document.body.classList.add("light")) : (document.body.classList.remove("light"), document.body.classList.add("dark"))

  const photos = [
    { id: 1, lazy: false, src: "", width: "320", height: "180", captionHeading: "", caption: "", alt: "", sizes: "100vw", srcset: "" },
    { id: 2, lazy: false, src: "", width: "320", height: "180", captionHeading: "", caption: "", alt: "", sizes: "100vw", srcset: "" },
    { id: 3, lazy: true, src: "", width: "320", height: "180", captionHeading: "", caption: "", alt: "", sizes: "100vw", srcset: "" },
    { id: 4, lazy: true, src: "", width: "320", height: "180", captionHeading: "", caption: "", alt: "", sizes: "100vw", srcset: "" },
    { id: 5, lazy: true, src: "", width: "320", height: "180", captionHeading: "", caption: "", alt: "", sizes: "100vw", srcset: "" },
    { id: 6, lazy: true, src: "", width: "320", height: "180", captionHeading: "", caption: "", alt: "", sizes: "100vw", srcset: "" },
    { id: 7, lazy: true, src: "", width: "320", height: "180", captionHeading: "", caption: "", alt: "", sizes: "100vw", srcset: "" },
    { id: 8, lazy: true, src: "", width: "320", height: "180", captionHeading: "", caption: "", alt: "", sizes: "100vw", srcset: "" },
    { id: 9, lazy: true, src: "", width: "320", height: "180", captionHeading: "", caption: "", alt: "", sizes: "100vw", srcset: "" },
    { id: 10, lazy: true, src: "", width: "320", height: "180", captionHeading: "", caption: "", alt: "", sizes: "100vw", srcset: "" },
    { id: 11, lazy: true, src: "", width: "320", height: "180", captionHeading: "", caption: "", alt: "", sizes: "100vw", srcset: "" },
    { id: 12, lazy: true, src: "", width: "320", height: "180", captionHeading: "", caption: "", alt: "", sizes: "100vw", srcset: "" },
    { id: 13, lazy: true, src: "", width: "320", height: "180", captionHeading: "", caption: "", alt: "", sizes: "100vw", srcset: "" },
    { id: 14, lazy: true, src: "", width: "320", height: "180", captionHeading: "", caption: "", alt: "", sizes: "100vw", srcset: "" },
    { id: 15, lazy: true, src: "", width: "320", height: "180", captionHeading: "", caption: "", alt: "", sizes: "100vw", srcset: "" },
    { id: 16, lazy: true, src: "", width: "320", height: "180", captionHeading: "", caption: "", alt: "", sizes: "100vw", srcset: "" },
    { id: 17, lazy: true, src: "", width: "320", height: "180", captionHeading: "", caption: "", alt: "", sizes: "100vw", srcset: "" },
    { id: 18, lazy: true, src: "", width: "320", height: "180", captionHeading: "", caption: "", alt: "", sizes: "100vw", srcset: "" },
    { id: 19, lazy: true, src: "", width: "320", height: "180", captionHeading: "", caption: "", alt: "", sizes: "100vw", srcset: "" },
    { id: 20, lazy: true, src: "", width: "320", height: "180", captionHeading: "", caption: "", alt: "", sizes: "100vw", srcset: "" },
    { id: 21, lazy: true, src: "", width: "320", height: "180", captionHeading: "", caption: "", alt: "", sizes: "100vw", srcset: "" },
    { id: 22, lazy: true, src: "", width: "320", height: "180", captionHeading: "", caption: "", alt: "", sizes: "100vw", srcset: "" },
    { id: 23, lazy: true, src: "", width: "320", height: "180", captionHeading: "", caption: "", alt: "", sizes: "100vw", srcset: "" },
    { id: 24, lazy: true, src: "", width: "320", height: "180", captionHeading: "", caption: "", alt: "", sizes: "100vw", srcset: "" },
    { id: 25, lazy: true, src: "", width: "320", height: "180", captionHeading: "", caption: "", alt: "", sizes: "100vw", srcset: "" },
    { id: 26, lazy: true, src: "", width: "320", height: "180", captionHeading: "", caption: "", alt: "", sizes: "100vw", srcset: "" }
  ]

  return (
    <Page title="Kauai Beach Villas Favorites Slideshow" background="dark">
      <Breadcrumb to="/album/favorites-kauai" linktext="Kauai Favorites" />
      <SlideShow photos={photos} />
    </Page>
  )
}

export default FavoritesKauaiBeachVillasSlideshow
