import React, { useContext, useEffect } from "react"
import Page from "../Page"
import DispatchContext from "../../DispatchContext"
import StateContext from "../../StateContext"
import PhotoAlbum from "./PhotoAlbum"
import Breadcrumb from "../Breadcrumb"
import GTag from "../GTag"

function FavoritesPersimons() {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)

  appState.backgroundStyle == "light" ? (document.body.classList.remove("dark"), document.body.classList.add("light")) : (document.body.classList.remove("light"), document.body.classList.add("dark"))

  useEffect(() => {
    appDispatch({ type: "selectMenu", selectedMenu: "Favorites" })
    appDispatch({ type: "menuActiveCategory", menuActiveCategory: "2" })
  }, [])

  const photos = [
    { id: 1, lazy: false, src: "../../assets/images/2010s/2010-11-14_0531-thumbnail.webp", width: "320", height: "240", alt: "A basket of shiny ripe persimons", dataOrientation: "", dataPortraitsizes: "", dataSrcset: "320=320x240;360=360x270;393=393x295;432=432x324;608=608x456;672=672x504;768=768x576;896=896x672;960=960x720;1180=1180x885;1290=1290x968;1368=1368x1026;1442=1442x1082;1600=1600x1200;1852=1852x1389;1920=1920x1440;2120=2120x1590;2379=2379x1784;2560=2560x1920;2796=2796x2097;2960=2960x2220;3240=3240x2430;3840=3840x2880", captionHeading: "Company Kitchen", caption: "November 2010. Persimons from our neighbor's trees - similar to fuyu but their shape is not as square" },
    { id: 2, lazy: false, src: "../../assets/images/2010s/2010-11-12-IMG_0529-b-thumbnail.webp", width: "320", height: "240", alt: "Under the persimon trees, with fruit hanging down all around", dataOrientation: "", dataPortraitsizes: "", dataSrcset: "320=320x240;360=360x270;393=393x295;432=432x324;608=608x456;672=672x504;768=768x576;896=896x672;960=960x720;1180=1180x885;1290=1290x968;1368=1368x1026;1442=1442x1082;1600=1600x1200;1852=1852x1389;1920=1920x1440;2120=2120x1590;2379=2379x1784;2560=2560x1920;2796=2796x2097;2960=2960x2220;3240=3240x2430;3840=3840x2880", captionHeading: "Under Neighbor's Persimon Trees", caption: "November 2010. Persimons on the trees" },
    { id: 3, lazy: false, src: "../../assets/images/2010s/2010-11-12-IMG_0527-b-thumbnail.webp", width: "320", height: "480", alt: "Branches of chocolate persimons hanging down from the tree", dataOrientation: "portrait", dataPortraitsizes: "320=240;360=270;393=295;432=324;608=456;672=504;768=576;896=672;960=720;1180=885;1290=968;1368=1026;1442=1082;1600=1200;1852=1389;1920=1440;2120=1590;2379=1784;2560=1920;2796=2097;2960=2220;3240=2430;3840=2880", dataSrcset: "240=240x320;270=270x360;295=295x393;324=324x432;456=456x608;504=504x672;576=576x768;672=672x896;720=720x960;885=885x1180;968=968x1290;1026=1026x1368;1082=1082x1442;1200=1200x1600;1389=1389x1852;1440=1440x1920;1590=1590x2120;1784=1784x2379;1920=1920x2560;2097=2097x2796;2220=2220x2960;2430=2430x3240;2880=2880x3840", captionHeading: "Under Neighbor's Persimon Trees", caption: "November 2010. Chocolate persimons" },
    { id: 4, lazy: false, src: "../../assets/images/2010s/2016-11-05-DSC01113-b-thumbnail.webp", width: "320", height: "213", alt: "Persimon trees in old Norma's (now Henry and Lisa's) back yard", dataOrientation: "", dataPortraitsizes: "", dataSrcset: "320=320x213;360=360x240;393=393x262;432=432x288;608=608x405;672=672x448;768=768x512;896=896x597;960=960x640;1180=1180x787;1290=1290x860;1368=1368x912;1442=1442x961;1600=1600x1067;1852=1852x1235;1920=1920x1280;2120=2120x1413;2379=2379x1586;2560=2560x1707;2796=2796x1864;2960=2960x1973;3240=3240x2160;3840=3840x2560", captionHeading: "Neighbor's Persimon Trees", caption: "November 2016. Beautiful persimon leaves turning color in fall" },
    { id: 5, lazy: false, src: "../../assets/images/2010s/2016-11-05-DSC01118-b-thumbnail.webp", width: "320", height: "213", alt: "Under a persimon tree, up close to the leaves that are turning red", dataOrientation: "", dataPortraitsizes: "", dataSrcset: "320=320x213;360=360x240;393=393x262;432=432x288;608=608x405;672=672x448;768=768x512;896=896x597;960=960x640;1180=1180x787;1290=1290x860;1368=1368x912;1442=1442x961;1600=1600x1067;1852=1852x1235;1920=1920x1280;2120=2120x1413;2379=2379x1586;2560=2560x1707;2796=2796x1864;2960=2960x1973;3240=3240x2160;3840=3840x2560", captionHeading: "Neighbor's Persimon Trees", caption: "November 2016. Persimon leaves turning color" },
    { id: 6, lazy: false, src: "../../assets/images/2010s/2017-11-19-DSC01936-thumbnail.webp", width: "320", height: "213", alt: "Persimons in crates and bags in our living room", dataOrientation: "", dataPortraitsizes: "", dataSrcset: "320=320x213;360=360x240;393=393x262;432=432x288;608=608x405;672=672x448;768=768x512;896=896x597;960=960x640;1180=1180x787;1290=1290x860;1368=1368x912;1442=1442x961;1600=1600x1067;1852=1852x1235;1920=1920x1280;2120=2120x1413;2379=2379x1586;2560=2560x1707;2796=2796x1864;2960=2960x1973;3240=3240x2160;3840=3840x2560", captionHeading: "Our Living Room During Harvest", caption: "November 2017. Persimons everywhere in our living room, we give many to friends and neighbors" },
    { id: 7, lazy: true, src: "../../assets/images/2020s/2021-11-15-01-b-thumbnail.webp", width: "320", height: "240", alt: "A chocolate persimon cut in half crosswise on a plate next to knife", dataOrientation: "", dataPortraitsizes: "", dataSrcset: "320=320x240;360=360x270;393=393x295;432=432x324;608=608x456;672=672x504;768=768x576;896=896x672;960=960x720;1180=1180x885;1290=1290x968;1368=1368x1026;1442=1442x1082;1600=1600x1200;1852=1852x1389;1920=1920x1440;2120=2120x1590;2379=2379x1784;2560=2560x1920;2796=2796x2097;2960=2960x2220;3240=3240x2430;3840=3840x2880", captionHeading: "A Chocolate Persimon", caption: "November 2021. The seeds in a chocolate persimon give off alcohol, which turns the flesh of the fruit brown, thus the name; they have a dark brown sugary sweetness" },
    { id: 8, lazy: true, src: "../../assets/images/2020s/2022-02-26-02b-thumbnail.webp", width: "320", height: "180", alt: "Ru holding a rectangular plastic bin filled with ripe kumquats", dataOrientation: "", dataPortraitsizes: "", dataSrcset: "320=320x180;360=360x202;393=393x221;432=432x243;608=608x342;672=672x378;768=768x432;896=896x504;960=960x540;1180=1180x664;1290=1290x726;1368=1368x769;1442=1442x811;1600=1600x900;1852=1852x1042;1920=1920x1080;2120=2120x1192;2379=2379x1338;2560=2560x1440;2796=2796x1573;2960=2960x1665;3240=3240x1822;3840=3840x2160", captionHeading: "Kumquat Harvest", caption: "February 2022. Our neighbor in San Jose has a kumquat tree along with the five persimon trees, two tangerine trees, and a lemon tree" }
  ]
  //{id: , lazy: false, src: "../assets/", width: "", height: "", alt: "", dataOrientation: "", dataPortraitsizes: "", dataSrcset: "", captionHeading: "", caption: ""},
  const slideshows = [{ id: 1, url: "/album/favorites/favorites-persimons-slideshow", caption: "Persimons Slideshow" }]
  const videos = []

  const breadcrumbs = [
    { id: 0, toText: "Home", toUrl: "/" },
    { id: 1, toText: "Album", toUrl: "/album" },
    { id: 2, toText: "Favorites", toUrl: "/album/favorites" },
    { id: 3, toText: "Persimon Favorites", toUrl: "" }
  ]

  return (
    <Page title="Persimon Favorites">
      <GTag></GTag>
      <meta name="description" content="Swanson Software Album, Persimon Favorites" />
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <div className="wrapper wrapper--album">
        <h1 className="headline__h1">Persimon Favorites</h1>

        <PhotoAlbum slideshows={slideshows} photos={photos} videos={videos} />
      </div>
    </Page>
  )
}
export default FavoritesPersimons
