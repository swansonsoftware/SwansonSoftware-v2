import React, { useContext } from "react"
import Page from "../Page"
import StateContext from "../../StateContext"
import PhotoAlbum from "./PhotoAlbum"
import Breadcrumb from "../Breadcrumb"
import GTag from "../GTag"

function FavoritesGardens() {
  const appState = useContext(StateContext)

  appState.backgroundStyle == "light" ? (document.body.classList.remove("dark"), document.body.classList.add("light")) : (document.body.classList.remove("light"), document.body.classList.add("dark"))

  const photos = [
    { id: 1, lazy: false, src: "../assets/images/1900s/1999-limahuli-valley1-b008-thumbnail.webp", width: "320", height: "180", alt: "Tropical valley with terraced taro ponds constructed of basalt", dataOrientation: "", dataPortraitsizes: "", dataSrcset: "320=320x180;360=360x202;393=393x221;432=432x243;608=608x342;672=672x378;768=768x432;896=896x504;960=960x540;1180=1180x664;1290=1290x726;1368=1368x769;1442=1442x811;1600=1600x900;1852=1852x1042;1920=1920x1080;2120=2120x1192;2379=2379x1338;2560=2560x1440;2796=2796x1573;2960=2960x1665;3240=3240x1822;3840=3840x2160", captionHeading: "Limahuli Valley, Kauai", caption: "1999, Limahuli is one of five National Tropical Botanical Gardens" },
    { id: 2, lazy: false, src: "../assets/images/2000s/2004-15A-b-thumbnail.webp", width: "320", height: "213", alt: "A door leading from one garden into another", dataOrientation: "", dataPortraitsizes: "", dataSrcset: "320=320x213;360=360x240;393=393x262;432=432x288;608=608x405;672=672x448;768=768x512;896=896x597;960=960x640;1180=1180x787;1290=1290x860;1368=1368x912;1442=1442x961;1600=1600x1067;1852=1852x1235;1920=1920x1280;2120=2120x1413;2379=2379x1586;2560=2560x1707;2796=2796x1864;2960=2960x1973;3240=3240x2160;3840=3840x2560", captionHeading: "Filoli Estate", caption: "July 2004, Woodside, California. A door into a garden" },
    { id: 3, lazy: false, src: "../assets/images/2010s/2014-05-02-011-thumbnail.webp", width: "320", height: "240", alt: "Ru behind large purple rose bushes", dataOrientation: "", dataPortraitsizes: "", dataSrcset: "320=320x240;360=360x270;393=393x295;432=432x324;608=608x456;672=672x504;768=768x576;896=896x672;960=960x720;1180=1180x885;1290=1290x968;1368=1368x1026;1442=1442x1082;1600=1600x1200;1852=1852x1389;1920=1920x1440;2120=2120x1590;2379=2379x1784;2560=2560x1920;2796=2796x2097;2960=2960x2220;3240=3240x2430;3840=3840x2880", captionHeading: "San Jose Municipal Rose Garden", caption: "May 2014. These light-purple roses were huge" },
    { id: 4, lazy: false, src: "../assets/images/2010s/2016-04-16_hrg_273b-thumbnail.webp", width: "320", height: "180", alt: "A beautiful orange rose", dataOrientation: "", dataPortraitsizes: "", dataSrcset: "320=320x180;360=360x202;393=393x221;432=432x243;608=608x342;672=672x378;768=768x432;896=896x504;960=960x540;1180=1180x664;1290=1290x726;1368=1368x769;1442=1442x811;1600=1600x900;1852=1852x1042;1920=1920x1080;2120=2120x1192;2379=2379x1338;2560=2560x1440;2796=2796x1573;2960=2960x1665;3240=3240x1822;3840=3840x2160", captionHeading: "San Jose Municipal Rose Garden", caption: "April 2016" },
    { id: 5, lazy: false, src: "../assets/images/2010s/2016-07-02_dsc00801b-thumbnail.webp", width: "320", height: "180", alt: "Terraced lawns with lily pond", dataOrientation: "", dataPortraitsizes: "", dataSrcset: "320=320x180;360=360x202;393=393x221;432=432x243;608=608x342;672=672x378;768=768x432;896=896x504;960=960x540;1180=1180x664;1290=1290x726;1368=1368x769;1442=1442x811;1600=1600x900;1852=1852x1042;1920=1920x1080;2120=2120x1192;2379=2379x1338;2560=2560x1440;2796=2796x1573;2960=2960x1665;3240=3240x1822;3840=3840x2160", captionHeading: "Filoli Estate", caption: "July 2016. The sculpture in the pond is strangely fascinating" },
    { id: 6, lazy: false, src: "../assets/images/2010s/2016-07-02_dsc00773-b-thumbnail.webp", width: "320", height: "180", alt: "Exquisitely ornamented formal pond", dataOrientation: "", dataPortraitsizes: "", dataSrcset: "320=320x180;360=360x202;393=393x221;432=432x243;608=608x342;672=672x378;768=768x432;896=896x504;960=960x540;1180=1180x664;1290=1290x726;1368=1368x769;1442=1442x811;1600=1600x900;1852=1852x1042;1920=1920x1080;2120=2120x1192;2379=2379x1338;2560=2560x1440;2796=2796x1573;2960=2960x1665;3240=3240x1822;3840=3840x2160", captionHeading: "Filoli Estate", caption: "July 2016. Exquisitely ornamented formal pond" },
    { id: 7, lazy: true, src: "../assets/images/2010s/2017-04-30-Dsc01613-b-thumbnail.webp", width: "320", height: "180", alt: "Young pink rose", dataOrientation: "", dataPortraitsizes: "", dataSrcset: "320=320x180;360=360x202;393=393x221;432=432x243;608=608x342;672=672x378;768=768x432;896=896x504;960=960x540;1180=1180x664;1290=1290x726;1368=1368x769;1442=1442x811;1600=1600x900;1852=1852x1042;1920=1920x1080;2120=2120x1192;2379=2379x1338;2560=2560x1440;2796=2796x1573;2960=2960x1665;3240=3240x1822;3840=3840x2160", captionHeading: "San Jose Municipal Rose Garden", caption: "April 2017" },
    { id: 8, lazy: true, src: "../assets/images/2020s/2024-05-11-DSC04153b-thumbnail.webp", width: "320", height: "180", alt: "Yellow and red roses", dataOrientation: "", dataPortraitsizes: "", dataSrcset: "320=320x180;360=360x202;393=393x221;432=432x243;608=608x342;672=672x378;768=768x432;896=896x504;960=960x540;1180=1180x664;1290=1290x726;1368=1368x769;1442=1442x811;1600=1600x900;1852=1852x1042;1920=1920x1080;2120=2120x1192;2379=2379x1338;2560=2560x1440;2796=2796x1573;2960=2960x1665;3240=3240x1822;3840=3840x2160", captionHeading: "San Jose Municipal Rose Garden", caption: "May 12, 2024. Yellow and red multi-colored rose" },
    { id: 9, lazy: true, src: "../assets/images/2010s/2018-06-29-DSC02525-b-thumbnail.webp", width: "320", height: "180", alt: "Red plumeria flowers with a tint of yellow in their centers", dataOrientation: "", dataPortraitsizes: "", dataSrcset: "320=320x180;360=360x202;393=393x221;432=432x243;608=608x342;672=672x378;768=768x432;896=896x504;960=960x540;1180=1180x664;1290=1290x726;1368=1368x769;1442=1442x811;1600=1600x900;1852=1852x1042;1920=1920x1080;2120=2120x1192;2379=2379x1338;2560=2560x1440;2796=2796x1573;2960=2960x1665;3240=3240x1822;3840=3840x2160", captionHeading: "Allerton Garden, Kauai", caption: "June 2018. Red and yellow plumeria flowers" },
    { id: 10, lazy: true, src: "../assets/images/2010s/2019-07-07-DSC03200-b-thumbnail.webp", width: "320", height: "180", alt: "Red plumeria flowers on tree", dataOrientation: "", dataPortraitsizes: "", dataSrcset: "320=320x180;360=360x202;393=393x221;432=432x243;608=608x342;672=672x378;768=768x432;896=896x504;960=960x540;1180=1180x664;1290=1290x726;1368=1368x769;1442=1442x811;1600=1600x900;1852=1852x1042;1920=1920x1080;2120=2120x1192;2379=2379x1338;2560=2560x1440;2796=2796x1573;2960=2960x1665;3240=3240x1822;3840=3840x2160", captionHeading: "Allerton Garden, Kauai", caption: "July 2019. Beautiful red plumeria flowers" },
    { id: 11, lazy: true, src: "../assets/images/2010s/2019-04-27-DSC02801-b-thumbnail.webp", width: "320", height: "180", alt: "Large yellow rose surrounded by buds", dataOrientation: "", dataPortraitsizes: "", dataSrcset: "320=320x180;360=360x202;393=393x221;432=432x243;608=608x342;672=672x378;768=768x432;896=896x504;960=960x540;1180=1180x664;1290=1290x726;1368=1368x769;1442=1442x811;1600=1600x900;1852=1852x1042;1920=1920x1080;2120=2120x1192;2379=2379x1338;2560=2560x1440;2796=2796x1573;2960=2960x1665;3240=3240x1822;3840=3840x2160", captionHeading: "San Jose Municipal Rose Garden", caption: "April 2019" },
    { id: 12, lazy: true, src: "../assets/images/2010s/2019-05-04-DSC03085-b-thumbnail.webp", width: "320", height: "180", alt: "Red and white-streaked roses growing on cast iron fence", dataOrientation: "", dataPortraitsizes: "", dataSrcset: "320=320x180;360=360x202;393=393x221;432=432x243;608=608x342;672=672x378;768=768x432;896=896x504;960=960x540;1180=1180x664;1290=1290x726;1368=1368x769;1442=1442x811;1600=1600x900;1852=1852x1042;1920=1920x1080;2120=2120x1192;2379=2379x1338;2560=2560x1440;2796=2796x1573;2960=2960x1665;3240=3240x1822;3840=3840x2160", captionHeading: "San Jose Municipal Rose Garden", caption: "May 2019" },
    { id: 13, lazy: true, src: "../assets/images/2020s/2023-05-07-DSC04016-thumbnail.webp", width: "320", height: "180", alt: "Closeup of red and yellow rose", dataOrientation: "", dataPortraitsizes: "", dataSrcset: "320=320x180;360=360x202;393=393x221;432=432x243;608=608x342;672=672x378;768=768x432;896=896x504;960=960x540;1180=1180x664;1290=1290x726;1368=1368x769;1442=1442x811;1600=1600x900;1852=1852x1042;1920=1920x1080;2120=2120x1192;2379=2379x1338;2560=2560x1440;2796=2796x1573;2960=2960x1665;3240=3240x1822;3840=3840x2160", captionHeading: "San Jose Municipal Rose Garden", caption: "May 7, 2023" },
    { id: 14, lazy: true, src: "../assets/images/2020s/2023-05-07-DSC04017b-thumbnail.webp", width: "320", height: "180", alt: "Beautiful red and yellow rose", dataOrientation: "", dataPortraitsizes: "", dataSrcset: "320=320x180;360=360x202;393=393x221;432=432x243;608=608x342;672=672x378;768=768x432;896=896x504;960=960x540;1180=1180x664;1290=1290x726;1368=1368x769;1442=1442x811;1600=1600x900;1852=1852x1042;1920=1920x1080;2120=2120x1192;2379=2379x1338;2560=2560x1440;2796=2796x1573;2960=2960x1665;3240=3240x1822;3840=3840x2160", captionHeading: "San Jose Municipal Rose Garden", caption: "May 7, 2023" },
    { id: 15, lazy: true, src: "../assets/images/2020s/2023-05-07-DSC04020b-thumbnail.webp", width: "320", height: "180", alt: "Closeup of white rose", dataOrientation: "", dataPortraitsizes: "", dataSrcset: "320=320x180;360=360x202;393=393x221;432=432x243;608=608x342;672=672x378;768=768x432;896=896x504;960=960x540;1180=1180x664;1290=1290x726;1368=1368x769;1442=1442x811;1600=1600x900;1852=1852x1042;1920=1920x1080;2120=2120x1192;2379=2379x1338;2560=2560x1440;2796=2796x1573;2960=2960x1665;3240=3240x1822;3840=3840x2160", captionHeading: "San Jose Municipal Rose Garden", caption: "May 7, 2023" }
  ]
  //{id: , lazy: false, src: "../assets/", width: "", height: "", alt: "", dataOrientation: "", dataPortraitsizes: "", dataSrcset: "", captionHeading: "", caption: ""},
  const slideshows = []
  const videos = [{ id: 1, videoId: "KOq_u868VOM", caption: "Filoli Estate", caption2: "2016" }]

  return (
    <Page title="Garden Favorites">
      <GTag></GTag>
      <div className="wrapper wrapper--album">
        <Breadcrumb to="/album/Favorites" linktext="Favorites" />
        <h1 className="headline__h1">Garden Favorites</h1>

        <PhotoAlbum slideshows={slideshows} photos={photos} videos={videos} />
      </div>
    </Page>
  )
}
export default FavoritesGardens
