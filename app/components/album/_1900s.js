import React, { useContext, useEffect } from "react"
import Page from "../Page"
import StateContext from "../../StateContext"
import PhotoAlbum from "./PhotoAlbum"

function _1900s() {
  const appState = useContext(StateContext)

  appState.backgroundStyle == "light" ? (document.body.classList.remove("dark"), document.body.classList.add("light")) : (document.body.classList.remove("light"), document.body.classList.add("dark"))

  const photos = [
    { id: 1, src: "../assets/images/1900s/1989-Gaytonia-thumbnail.webp", width: "320", height: "213", alt: "Gaytonia apartment castle.", dataOrientation: "", dataPortraitsizes: "", dataSrcset: "320=320x213;360=360x240;393=393x262;432=432x288;608=608x405;672=672x448;768=768x512;896=896x597;960=960x640;1180=1180x787;1290=1290x860;1368=1368x912;1442=1442x961;1600=1600x1067;1852=1852x1235;1920=1920x1280;2120=2120x1413;2379=2379x1586;2560=2560x1707;2796=2796x1864;2960=2960x1973;3240=3240x2160;3840=3840x2560", captionHeading: "Apartment Castle", caption: "Long Beach, CA., 1989. I lived there!" },
    { id: 2, src: "../assets/images/1900s/1998-citp1-b-thumbnail.webp", width: "320", height: "213", alt: "Greg in front of the train.", dataOrientation: "", dataPortraitsizes: "", dataSrcset: "320=320x213;360=360x240;393=393x262;432=432x288;608=608x405;672=672x448;768=768x512;896=896x597;960=960x640;1180=1180x787;1290=1290x860;1368=1368x912;1442=1442x961;1600=1600x1067;1852=1852x1235;1920=1920x1280;2120=2120x1413;2379=2379x1586;2560=2560x1707;2796=2796x1864;2960=2960x1973;3240=3240x2160;3840=3840x2560", captionHeading: "Christmas In The Park", caption: "1998. Greg's favorite display: the train." },
    { id: 3, src: "../assets/images/1900s/1998-citp2-b-thumbnail.webp", width: "320", height: "213", alt: "Ru in front of the choir girls.", dataOrientation: "", dataPortraitsizes: "", dataSrcset: "320=320x213;360=360x240;393=393x262;432=432x288;608=608x405;672=672x448;768=768x512;896=896x597;960=960x640;1180=1180x787;1290=1290x860;1368=1368x912;1442=1442x961;1600=1600x1067;1852=1852x1235;1920=1920x1280;2120=2120x1413;2379=2379x1586;2560=2560x1707;2796=2796x1864;2960=2960x1973;3240=3240x2160;3840=3840x2560", captionHeading: "Christmas In The Park", caption: "1998. Ru's favorite display: choir girls." },
    { id: 4, src: "../assets/images/1900s/1999-lawai-fig-trees-24-thumbnail.webp", width: "320", height: "180", alt: "Lawai Garden, giant fig trees.", dataOrientation: "", dataPortraitsizes: "", dataSrcset: "320=320x180;360=360x202;393=393x221;432=432x243;608=608x342;672=672x378;768=768x432;896=896x504;960=960x540;1180=1180x664;1290=1290x726;1368=1368x769;1442=1442x811;1600=1600x900;1852=1852x1042;1920=1920x1080;2120=2120x1192;2379=2379x1338;2560=2560x1440;2796=2796x1573;2960=2960x1665;3240=3240x1822;3840=3840x2160", captionHeading: "Kauai, 1999", caption: "Lawai Garden (when we visited in 1999, renamed McBryde Garden in 2000). The giant fig trees shown in Jurassic Park, where the dinosaur eggs were found. August, 1999." },
    { id: 5, src: "../assets/images/1900s/1999-guavakai2-05-thumbnail.webp", width: "320", height: "480", alt: "Ru standing in front of bird of paradise.", dataOrientation: "portrait", dataPortraitsizes: "320=213;360=240;393=262;432=288;608=405;672=448;768=512;896=597;960=640;1180=787;1290=860;1368=912;1442=961;1600=1067;1852=1235;1920=1280;2120=1413;2379=1586;2560=1707;2796=1864;2960=1973;3240=2160;3840=2560", dataSrcset: "213=213x320;240=240x360;262=262x393;288=288x432;405=405x608;448=448x672;512=512x768;597=597x896;640=640x960;787=787x1180;860=860x1290;912=912x1368;961=961x1442;1067=1067x1600;1235=1235x1852;1280=1280x1920;1413=1413x2120;1586=1586x2379;1707=1707x2560;1864=1864x2796;1973=1973x2960;2160=2160x3240;2560=2560x3840", captionHeading: "Kauai, 1999", caption: "Guava Kai Farm, Ru in front of Bird of Paradise." },
    { id: 6, src: "../assets/images/1900s/1999-limahuli-valley-b007-b-thumbnail.webp", width: "320", height: "180", alt: "Limahuli National Tropical Botanical Garden, August 1999.", dataOrientation: "", dataPortraitsizes: "", dataSrcset: "320=320x180;360=360x202;393=393x221;432=432x243;608=608x342;672=672x378;768=768x432;896=896x504;960=960x540;1180=1180x664;1290=1290x726;1368=1368x769;1442=1442x811;1600=1600x900;1852=1852x1042;1920=1920x1080;2120=2120x1192;2379=2379x1338;2560=2560x1440;2796=2796x1573;2960=2960x1665;3240=3240x1822;3840=3840x2160", captionHeading: "Kauai, 1999", caption: "Limahuli Garden and Preserve, site of an ancient Hawaiian village, is a member of the National Tropical Botanical Gardens." },
    { id: 7, src: "../assets/images/1900s/1999-a019-b-thumbnail.webp", width: "320", height: "180", alt: "View of Princeville plateau from the road to the lighthouse, August 1999.", dataOrientation: "", dataPortraitsizes: "", dataSrcset: "320=320x180;360=360x202;393=393x221;432=432x243;608=608x342;672=672x378;768=768x432;896=896x504;960=960x540;1180=1180x664;1290=1290x726;1368=1368x769;1442=1442x811;1600=1600x900;1852=1852x1042;1920=1920x1080;2120=2120x1192;2379=2379x1338;2560=2560x1440;2796=2796x1573;2960=2960x1665;3240=3240x1822;3840=3840x2160", captionHeading: "Kauai, 1999", caption: "View of Princeville plateau from the road to the lighthouse." },
    { id: 8, src: "../assets/images/1900s/1999-santapaws-d010-thumbnail.webp", width: "320", height: "213", alt: "Ru and Greg sitting on bed with Santa Paws dogs.", dataOrientation: "", dataPortraitsizes: "", dataSrcset: "320=320x213;360=360x240;393=393x262;432=432x288;608=608x405;672=672x448;768=768x512;896=896x597;960=960x640;1180=1180x787;1290=1290x860;1368=1368x912;1442=1442x961;1600=1600x1067;1852=1852x1235;1920=1920x1280;2120=2120x1413;2379=2379x1586;2560=2560x1707;2796=2796x1864;2960=2960x1973;3240=3240x2160;3840=3840x2560", captionHeading: "Santa Paws, 1999", caption: "Freemont, California. Photo fee proceeds go to a charity for animals" }
  ]
  const slideshows = [{ id: 1, url: "/album/1999-kauai-slideshow", caption: "Kauai 1999 Slideshow" }]
  const videos = []

  return (
    <Page title="1900s" background="dark">
      <div className="wrapper wrapper--album">
        <h1 className="headline__h1">1900s - Old Times</h1>

        <PhotoAlbum slideshows={slideshows} photos={photos} videos={videos} />
      </div>
    </Page>
  )
}
export default _1900s
