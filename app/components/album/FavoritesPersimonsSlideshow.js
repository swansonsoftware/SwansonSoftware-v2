import React, { useContext } from "react"
import Page from "../Page"
import StateContext from "../../StateContext"
import SlideShow from "./SlideShow"
import Breadcrumb from "../BreadcrumbSlideshow"
import GTag from "../GTag"

function FavoritesPersimonsSlideshow() {
  const appState = useContext(StateContext)

  appState.backgroundStyle == "light" ? (document.body.classList.remove("dark"), document.body.classList.add("light")) : (document.body.classList.remove("light"), document.body.classList.add("dark"))

  const photos = [
    { id: 1, lazy: false, src: "../assets/images/2010s/2010-11-14_0531-608.webp", width: "608", height: "456", captionHeading: "Company Kitchen", caption: "Bringing persimons to share at work", alt: "Basket with persimons", sizes: "100vw", srcset: "../assets/images/2010s/2010-11-14_0531-320.webp 320w, ../assets/images/2010s/2010-11-14_0531-360.webp 360w, ../assets/images/2010s/2010-11-14_0531-393.webp 393w, ../assets/images/2010s/2010-11-14_0531-432.webp 432w, ../assets/images/2010s/2010-11-14_0531-608.webp 608w, ../assets/images/2010s/2010-11-14_0531-672.webp 672w, ../assets/images/2010s/2010-11-14_0531-768.webp 768w, ../assets/images/2010s/2010-11-14_0531-896.webp 896w, ../assets/images/2010s/2010-11-14_0531-960.webp 960w, ../assets/images/2010s/2010-11-14_0531-1180.webp 1180w, ../assets/images/2010s/2010-11-14_0531-1290.webp 1290w, ../assets/images/2010s/2010-11-14_0531-1368.webp 1368w, ../assets/images/2010s/2010-11-14_0531-1442.webp 1442w, ../assets/images/2010s/2010-11-14_0531-1600.webp 1600w, ../assets/images/2010s/2010-11-14_0531-1852.webp 1852w, ../assets/images/2010s/2010-11-14_0531-1920.webp 1920w, ../assets/images/2010s/2010-11-14_0531-2120.webp 2120w, ../assets/images/2010s/2010-11-14_0531-2379.webp 2379w, ../assets/images/2010s/2010-11-14_0531-2560.webp 2560w, ../assets/images/2010s/2010-11-14_0531-2796.webp 2796w, ../assets/images/2010s/2010-11-14_0531-2960.webp 2960w, ../assets/images/2010s/2010-11-14_0531-3240.webp 3240w, ../assets/images/2010s/2010-11-14_0531-3840.webp 3840w" },
    { id: 2, lazy: false, src: "../assets/images/2020s/2021-11-15-01-b-608.webp", width: "608", height: "456", captionHeading: "A Chocolate Persimon", caption: "November 2021. The seeds in a chocolate persimon give off alcohol, which turns the flesh of the fruit brown, thus the name; they have a dark brown sugary sweetness", alt: "A chocolate persimon sliced in half on a plate", sizes: "100vw", srcset: "../assets/images/2020s/2021-11-15-01-b-320.webp 320w, ../assets/images/2020s/2021-11-15-01-b-360.webp 360w, ../assets/images/2020s/2021-11-15-01-b-393.webp 393w, ../assets/images/2020s/2021-11-15-01-b-432.webp 432w, ../assets/images/2020s/2021-11-15-01-b-608.webp 608w, ../assets/images/2020s/2021-11-15-01-b-672.webp 672w, ../assets/images/2020s/2021-11-15-01-b-768.webp 768w, ../assets/images/2020s/2021-11-15-01-b-896.webp 896w, ../assets/images/2020s/2021-11-15-01-b-960.webp 960w, ../assets/images/2020s/2021-11-15-01-b-1180.webp 1180w, ../assets/images/2020s/2021-11-15-01-b-1290.webp 1290w, ../assets/images/2020s/2021-11-15-01-b-1368.webp 1368w, ../assets/images/2020s/2021-11-15-01-b-1442.webp 1442w, ../assets/images/2020s/2021-11-15-01-b-1600.webp 1600w, ../assets/images/2020s/2021-11-15-01-b-1852.webp 1852w, ../assets/images/2020s/2021-11-15-01-b-1920.webp 1920w, ../assets/images/2020s/2021-11-15-01-b-2120.webp 2120w, ../assets/images/2020s/2021-11-15-01-b-2379.webp 2379w, ../assets/images/2020s/2021-11-15-01-b-2560.webp 2560w, ../assets/images/2020s/2021-11-15-01-b-2796.webp 2796w, ../assets/images/2020s/2021-11-15-01-b-2960.webp 2960w, ../assets/images/2020s/2021-11-15-01-b-3240.webp 3240w, ../assets/images/2020s/2021-11-15-01-b-3840.webp 3840w" },
    { id: 3, lazy: true, src: "../assets/images/2010s/2016-11-05-DSC01113-b-608.webp", width: "608", height: "405", captionHeading: "Neighbor's Persimon Trees", caption: "November 2016. Beautiful persimon leaves turning color in fall", alt: "Persimon trees with leaves turning fall colors and some fallen and covering the ground", sizes: "100vw", srcset: "../assets/images/2010s/2016-11-05-DSC01113-b-320.webp 320w, ../assets/images/2010s/2016-11-05-DSC01113-b-360.webp 360w, ../assets/images/2010s/2016-11-05-DSC01113-b-393.webp 393w, ../assets/images/2010s/2016-11-05-DSC01113-b-432.webp 432w, ../assets/images/2010s/2016-11-05-DSC01113-b-608.webp 608w, ../assets/images/2010s/2016-11-05-DSC01113-b-672.webp 672w, ../assets/images/2010s/2016-11-05-DSC01113-b-768.webp 768w, ../assets/images/2010s/2016-11-05-DSC01113-b-896.webp 896w, ../assets/images/2010s/2016-11-05-DSC01113-b-960.webp 960w, ../assets/images/2010s/2016-11-05-DSC01113-b-1180.webp 1180w, ../assets/images/2010s/2016-11-05-DSC01113-b-1290.webp 1290w, ../assets/images/2010s/2016-11-05-DSC01113-b-1368.webp 1368w, ../assets/images/2010s/2016-11-05-DSC01113-b-1442.webp 1442w, ../assets/images/2010s/2016-11-05-DSC01113-b-1600.webp 1600w, ../assets/images/2010s/2016-11-05-DSC01113-b-1852.webp 1852w, ../assets/images/2010s/2016-11-05-DSC01113-b-1920.webp 1920w, ../assets/images/2010s/2016-11-05-DSC01113-b-2120.webp 2120w, ../assets/images/2010s/2016-11-05-DSC01113-b-2379.webp 2379w, ../assets/images/2010s/2016-11-05-DSC01113-b-2560.webp 2560w, ../assets/images/2010s/2016-11-05-DSC01113-b-2796.webp 2796w, ../assets/images/2010s/2016-11-05-DSC01113-b-2960.webp 2960w, ../assets/images/2010s/2016-11-05-DSC01113-b-3240.webp 3240w, ../assets/images/2010s/2016-11-05-DSC01113-b-3840.webp 3840w" },
    { id: 4, lazy: true, src: "../assets/images/2010s/2016-11-05-DSC01118-b-608.webp", width: "608", height: "405", captionHeading: "Neighbor's Persimon Trees", caption: "November 2016. Persimon leaves turning color", alt: "Under a persimon tree, the leaves turning the fall color", sizes: "100vw", srcset: "../assets/images/2010s/2016-11-05-DSC01118-b-320.webp 320w, ../assets/images/2010s/2016-11-05-DSC01118-b-360.webp 360w, ../assets/images/2010s/2016-11-05-DSC01118-b-393.webp 393w, ../assets/images/2010s/2016-11-05-DSC01118-b-432.webp 432w, ../assets/images/2010s/2016-11-05-DSC01118-b-608.webp 608w, ../assets/images/2010s/2016-11-05-DSC01118-b-672.webp 672w, ../assets/images/2010s/2016-11-05-DSC01118-b-768.webp 768w, ../assets/images/2010s/2016-11-05-DSC01118-b-896.webp 896w, ../assets/images/2010s/2016-11-05-DSC01118-b-960.webp 960w, ../assets/images/2010s/2016-11-05-DSC01118-b-1180.webp 1180w, ../assets/images/2010s/2016-11-05-DSC01118-b-1290.webp 1290w, ../assets/images/2010s/2016-11-05-DSC01118-b-1368.webp 1368w, ../assets/images/2010s/2016-11-05-DSC01118-b-1442.webp 1442w, ../assets/images/2010s/2016-11-05-DSC01118-b-1600.webp 1600w, ../assets/images/2010s/2016-11-05-DSC01118-b-1852.webp 1852w, ../assets/images/2010s/2016-11-05-DSC01118-b-1920.webp 1920w, ../assets/images/2010s/2016-11-05-DSC01118-b-2120.webp 2120w, ../assets/images/2010s/2016-11-05-DSC01118-b-2379.webp 2379w, ../assets/images/2010s/2016-11-05-DSC01118-b-2560.webp 2560w, ../assets/images/2010s/2016-11-05-DSC01118-b-2796.webp 2796w, ../assets/images/2010s/2016-11-05-DSC01118-b-2960.webp 2960w, ../assets/images/2010s/2016-11-05-DSC01118-b-3240.webp 3240w, ../assets/images/2010s/2016-11-05-DSC01118-b-3840.webp 3840w" },
    { id: 5, lazy: true, src: "../assets/images/2010s/2017-11-19-DSC01936-608.webp", width: "608", height: "405", captionHeading: "Our Living Room During Harvest", caption: "November 2017. Persimons everywhere in our living room, we give many to friends and neighbors", alt: "Persimons in crates and bags in our living room", sizes: "100vw", srcset: "../assets/images/2010s/2017-11-19-DSC01936-320.webp 320w, ../assets/images/2010s/2017-11-19-DSC01936-360.webp 360w, ../assets/images/2010s/2017-11-19-DSC01936-393.webp 393w, ../assets/images/2010s/2017-11-19-DSC01936-432.webp 432w, ../assets/images/2010s/2017-11-19-DSC01936-608.webp 608w, ../assets/images/2010s/2017-11-19-DSC01936-672.webp 672w, ../assets/images/2010s/2017-11-19-DSC01936-768.webp 768w, ../assets/images/2010s/2017-11-19-DSC01936-896.webp 896w, ../assets/images/2010s/2017-11-19-DSC01936-960.webp 960w, ../assets/images/2010s/2017-11-19-DSC01936-1180.webp 1180w, ../assets/images/2010s/2017-11-19-DSC01936-1290.webp 1290w, ../assets/images/2010s/2017-11-19-DSC01936-1368.webp 1368w, ../assets/images/2010s/2017-11-19-DSC01936-1442.webp 1442w, ../assets/images/2010s/2017-11-19-DSC01936-1600.webp 1600w, ../assets/images/2010s/2017-11-19-DSC01936-1852.webp 1852w, ../assets/images/2010s/2017-11-19-DSC01936-1920.webp 1920w, ../assets/images/2010s/2017-11-19-DSC01936-2120.webp 2120w, ../assets/images/2010s/2017-11-19-DSC01936-2379.webp 2379w, ../assets/images/2010s/2017-11-19-DSC01936-2560.webp 2560w, ../assets/images/2010s/2017-11-19-DSC01936-2796.webp 2796w, ../assets/images/2010s/2017-11-19-DSC01936-2960.webp 2960w, ../assets/images/2010s/2017-11-19-DSC01936-3240.webp 3240w, ../assets/images/2010s/2017-11-19-DSC01936-3840.webp 3840w" }
  ]
  // { id: 3, lazy: true, src: "", width: "320", height: "180", captionHeading: "", caption: "", alt: "", sizes: "100vw", srcset: "" },

  return (
    <Page title="2010s Slideshow">
      <GTag></GTag>
      <meta name="description" content="Swanson Software Album, Persimons Slideshow" />
      <Breadcrumb to="/album/favorites-persimons" linktext="Persimon Favorites" />
      <SlideShow photos={photos} />
    </Page>
  )
}

export default FavoritesPersimonsSlideshow
