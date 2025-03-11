import React, { useContext } from "react"
import Page from "../Page"
import StateContext from "../../StateContext"
import PhotoAlbum from "./PhotoAlbum"
import Breadcrumb from "../Breadcrumb"
import GTag from "../GTag"

function FavoritesKauai() {
  const appState = useContext(StateContext)

  appState.backgroundStyle == "light" ? (document.body.classList.remove("dark"), document.body.classList.add("light")) : (document.body.classList.remove("light"), document.body.classList.add("dark"))

  const photos = [
    { id: 1, lazy: false, src: "../assets/images/1900s/1999-kauai-a013-b-test.webp", srcset: "../assets/images/1900s/1999-kauai-a013-b-test.webp 1x, ../assets/images/1900s/1999-kauai-a013-b-test-672.webp 2x", width: "320", height: "180", alt: "Hanalei valley farm fields from the Scenic Overlook", dataOrientation: "", dataPortraitsizes: "", dataSrcset: "1180=1180x664;1290=1290x726;1368=1368x769;1442=1442x811;1600=1600x900;1852=1852x1042;1920=1920x1080;2120=2120x1192;2379=2379x1338;2560=2560x1440;2796=2796x1573;2960=2960x1665;3240=3240x1822;3840=3840x2160", captionHeading: "Kauai, August 1999", caption: "Hanalei Scenic Overlook" },
    { id: 2, lazy: false, src: "../assets/images/1900s/1999-lawai-fig-trees-24-thumbnail.webp", srcset: "../assets/images/1900s/1999-lawai-fig-trees-24-thumbnail.webp 1x, ../assets/images/1900s/1999-lawai-fig-trees-24-672.webp 2x", width: "320", height: "180", alt: "Lawai Garden, giant fig trees.", dataOrientation: "", dataPortraitsizes: "", dataSrcset: "960=960x540;1180=1180x664;1290=1290x726;1368=1368x769;1442=1442x811;1600=1600x900;1852=1852x1042;1920=1920x1080;2120=2120x1192;2379=2379x1338;2560=2560x1440;2796=2796x1573;2960=2960x1665;3240=3240x1822;3840=3840x2160", captionHeading: "Kauai, 1999", caption: "Lawai Garden (when we visited in 1999, renamed McBryde Garden in 2000). The giant fig trees shown in Jurassic Park, where the dinosaur eggs were found. August, 1999." },
    { id: 3, lazy: false, src: "../assets/images/2000s/2001-006-thumbnail.webp", srcset: "../assets/images/2000s/2001-006-thumbnail.webp 1x, ../assets/images/2000s/2001-006-thumbnail.webp 1x, ../assets/images/2000s/2001-006-672.webp 2x", width: "320", height: "213", alt: "Warren, Sue, and Ru on steps leading to historic site", dataOrientation: "", dataPortraitsizes: "", dataSrcset: "960=960x640;1180=1180x787;1290=1290x860;1368=1368x912;1442=1442x961;1600=1600x1067;1852=1852x1235;1920=1920x1280;2120=2120x1413;2379=2379x1586;2560=2560x1707;2796=2796x1864;2960=2960x1973;3240=3240x2160;3840=3840x2560", captionHeading: "Maui, 2001", caption: "A visit to Iao Valley with Sue and Warren, who were on Maui when we stayed there in 2001 on a timeshare exchange" },
    { id: 4, lazy: false, src: "../assets/images/2000s/2008-08-27-IMG_0312-b-thumbnail.webp", srcset: "../assets/images/2000s/2008-08-27-IMG_0312-b-thumbnail.webp 1x, ../assets/images/2000s/2008-08-27-IMG_0312-b-672.webp 2x", width: "320", height: "180", alt: "Beach and ocean, looking up the coast from the lanai of G5", dataOrientation: "", dataPortraitsizes: "", dataSrcset: "960=960x540;1180=1180x664;1290=1290x726;1368=1368x769;1442=1442x811;1600=1600x900;1852=1852x1042;1920=1920x1080;2120=2120x1192;2379=2379x1338;2560=2560x1440;2796=2796x1573;2960=2960x1665;3240=3240x1822;3840=3840x2160", captionHeading: "Kauai, 2008", caption: "View from the lanai of G5. Our first stay in this unit was in 2005." },
    { id: 5, lazy: false, src: "../assets/images/2000s/2009-IMG_0407-b-thumbnail.webp", srcset: "../assets/images/2000s/2009-IMG_0407-b-thumbnail.webp 1x, ../assets/images/2000s/2009-IMG_0407-b-672.webp 2x", width: "320", height: "180", alt: "Cute plantation-style house in Wainiha, Kauai", dataOrientation: "", dataPortraitsizes: "", dataSrcset: "960=960x540;1180=1180x664;1290=1290x726;1368=1368x769;1442=1442x811;1600=1600x900;1852=1852x1042;1920=1920x1080;2120=2120x1192;2379=2379x1338;2560=2560x1440;2796=2796x1573;2960=2960x1665;3240=3240x1822;3840=3840x2160", captionHeading: "Kauai, 2009", caption: "Hoona House, Wainiha. We stayed there a week, then moved to our timeshare at Kauai Beach Villas for a second week." },
    { id: 6, lazy: false, src: "../assets/images/2010s/2011-08-02-0741-thumbnail.webp", srcset: "../assets/images/2010s/2011-08-02-0741-thumbnail.webp 1x, ../assets/images/2010s/2011-08-02-0741-672.webp 2x", width: "320", height: "240", alt: "A charming plantation house surrounded by tropical plants", dataOrientation: "", dataPortraitsizes: "", dataSrcset: "960=960x720;1180=1180x885;1290=1290x968;1368=1368x1026;1442=1442x1082;1600=1600x1200;1852=1852x1389;1920=1920x1440;2120=2120x1590;2379=2379x1784;2560=2560x1920;2796=2796x2097;2960=2960x2220;3240=3240x2430;3840=3840x2880", captionHeading: "Kauai, August 2011", caption: "The gardener's house at Allerton Garden" },
    { id: 7, lazy: true, src: "../assets/images/2010s/2011-08-02-0742-thumbnail.webp", srcset: "../assets/images/2010s/2011-08-02-0742-thumbnail.webp 1x, ../assets/images/2010s/2011-08-02-0742-672.webp 2x", width: "320", height: "213", alt: "Basalt rock steps leading to wooden porch of the gardener's house", dataOrientation: "", dataPortraitsizes: "", dataSrcset: "960=960x720;1180=1180x885;1290=1290x968;1368=1368x1026;1442=1442x1082;1600=1600x1200;1852=1852x1389;1920=1920x1440;2120=2120x1590;2379=2379x1784;2560=2560x1920;2796=2796x2097;2960=2960x2220;3240=3240x2430;3840=3840x2880", captionHeading: "Kauai, August 2011", caption: "The basalt rock steps and planters are really over the top for such a modest house" },
    { id: 8, lazy: true, src: "../assets/images/2010s/2012_1079-thumbnail.webp", srcset: "../assets/images/2010s/2012_1079-thumbnail.webp 1x, ../assets/images/2010s/2012_1079-672.webp 2x", width: "320", height: "240", alt: "Young taro plants in taro pond at Haraguchi taro farm, Hanalei", dataOrientation: "", dataPortraitsizes: "", dataSrcset: "960=960x720;1180=1180x885;1290=1290x968;1368=1368x1026;1442=1442x1082;1600=1600x1200;1852=1852x1389;1920=1920x1440;2120=2120x1590;2379=2379x1784;2560=2560x1920;2796=2796x2097;2960=2960x2220;3240=3240x2430;3840=3840x2880", captionHeading: "Kauai, August 2012", caption: "Taro plants in taro pond, Haraguchi Rice Mill and Taro Farm, Hanalei" },
    { id: 9, lazy: true, src: "../assets/images/2010s/2014-059-thumbnail.webp", srcset: "../assets/images/2010s/2014-059-thumbnail.webp 1x, ../assets/images/2010s/2014-059-672.webp 2x", width: "320", height: "240", alt: "Spectacular blossoming Golden Shower trees in parking lot", dataOrientation: "", dataPortraitsizes: "", dataSrcset: "960=960x720;1180=1180x885;1290=1290x968;1368=1368x1026;1442=1442x1082;1600=1600x1200;1852=1852x1389;1920=1920x1440;2120=2120x1590;2379=2379x1784;2560=2560x1920;2796=2796x2097;2960=2960x2220;3240=3240x2430;3840=3840x2880", captionHeading: "Kauai, July 2014", caption: "Golden Shower trees in parking lot of Allerton and McBryde Gardens" },
    { id: 10, lazy: true, src: "../assets/images/2010s/2014-07-16-075-thumbnail.webp", srcset: "../assets/images/2010s/2014-07-16-075-thumbnail.webp 1x, ../assets/images/2010s/2014-07-16-075-672.webp 2x", width: "320", height: "240", alt: "The gift shop at Allerton and McBryde gardens, a cute plantation-style cottage", dataOrientation: "", dataPortraitsizes: "", dataSrcset: "960=960x720;1180=1180x885;1290=1290x968;1368=1368x1026;1442=1442x1082;1600=1600x1200;1852=1852x1389;1920=1920x1440;2120=2120x1590;2379=2379x1784;2560=2560x1920;2796=2796x2097;2960=2960x2220;3240=3240x2430;3840=3840x2880", captionHeading: "Kauai, July 2014", caption: "The Allerton and McBryde Gardens gift shop is a plantation-style cottage but without the corrugated tin roof" },
    { id: 11, lazy: true, src: "../assets/images/2010s/2015-09-02-kauai_054-thumbnail.webp", srcset: "../assets/images/2010s/2015-09-02-kauai_054-thumbnail.webp 1x, ../assets/images/2010s/2015-09-02-kauai_054-672.webp 2x", width: "320", height: "240", alt: "10 foot wave and rough surf viewed from lanai", dataOrientation: "", dataPortraitsizes: "", dataSrcset: "960=960x720;1180=1180x885;1290=1290x968;1368=1368x1026;1442=1442x1082;1600=1600x1200;1852=1852x1389;1920=1920x1440;2120=2120x1590;2379=2379x1784;2560=2560x1920;2796=2796x2097;2960=2960x2220;3240=3240x2430;3840=3840x2880", captionHeading: "Kauai, August 2015", caption: "Hurricane-driven surf at Kauai Beach Villas" },
    { id: 12, lazy: true, src: "../assets/images/2010s/2015-08-30-kauai_012-thumbnail.webp", srcset: "../assets/images/2010s/2015-08-30-kauai_012-thumbnail.webp 1x, ../assets/images/2010s/2015-08-30-kauai_012-672.webp 2x", width: "320", height: "240", alt: "Taking a selfie of us in front of a coffee tree at Kauai Coffee Plantation", dataOrientation: "", dataPortraitsizes: "", dataSrcset: "960=960x720;1180=1180x885;1290=1290x968;1368=1368x1026;1442=1442x1082;1600=1600x1200;1852=1852x1389;1920=1920x1440;2120=2120x1590;2379=2379x1784;2560=2560x1920;2796=2796x2097;2960=2960x2220;3240=3240x2430;3840=3840x2880", captionHeading: "Kauai, August 2015", caption: "Time for a selfie at Kauai Coffee Plantation" },
    { id: 13, lazy: true, src: "../assets/images/2010s/2017-07-13-Dsc01708-b-thumbnail.webp", srcset: "../assets/images/2010s/2017-07-13-Dsc01708-b-thumbnail.webp 1x, ../assets/images/2010s/2017-07-13-Dsc01708-b-672.webp 2x", width: "320", height: "180", alt: "Rays of sun light shining down through the clouds onto the ocean", dataOrientation: "", dataPortraitsizes: "", dataSrcset: "960=960x540;1180=1180x664;1290=1290x726;1368=1368x769;1442=1442x811;1600=1600x900;1852=1852x1042;1920=1920x1080;2120=2120x1192;2379=2379x1338;2560=2560x1440;2796=2796x1573;2960=2960x1665;3240=3240x1822;3840=3840x2160", captionHeading: "Kauai, July 2017", caption: "The view from the lanai of G5 never gets old" },
    { id: 14, lazy: true, src: "../assets/images/2010s/2017-07-Dsc01716-b-thumbnail.webp", srcset: "../assets/images/2010s/2017-07-Dsc01716-b-thumbnail.webp 1x, ../assets/images/2010s/2017-07-Dsc01716-b-672.webp 2x", width: "320", height: "180", alt: "Blossoms of red and yellow on rainbow shower trees on both sides of street", dataOrientation: "", dataPortraitsizes: "", dataSrcset: "960=960x540;1180=1180x664;1290=1290x726;1368=1368x769;1442=1442x811;1600=1600x900;1852=1852x1042;1920=1920x1080;2120=2120x1192;2379=2379x1338;2560=2560x1440;2796=2796x1573;2960=2960x1665;3240=3240x1822;3840=3840x2160", captionHeading: "Kauai, July 2017", caption: "Beautiful rainbow shower trees on Lopaka Paipa Blvd. The rainbow shower tree is a hybrid of the Golden Shower tree." },
    { id: 15, lazy: true, src: "../assets/images/2010s/2018-06-29-DSC02523-b-thumbnail.webp", srcset: "../assets/images/2010s/2018-06-29-DSC02523-b-thumbnail.webp 1x, ../assets/images/2010s/2018-06-29-DSC02523-b-672.webp 2x", width: "320", height: "180", alt: "Rare red plumeria tree in Allerton Garden", dataOrientation: "", dataPortraitsizes: "", dataSrcset: "960=960x540;1180=1180x664;1290=1290x726;1368=1368x769;1442=1442x811;1600=1600x900;1852=1852x1042;1920=1920x1080;2120=2120x1192;2379=2379x1338;2560=2560x1440;2796=2796x1573;2960=2960x1665;3240=3240x1822;3840=3840x2160", captionHeading: "Kauai, June 2018", caption: "Beautiful red plumeria tree at Allerton Garden" },
    { id: 16, lazy: true, src: "../assets/images/2010s/2019-07-07-DSC03133-b-thumbnail.webp", srcset: "../assets/images/2010s/2019-07-07-DSC03133-b-thumbnail.webp 1x, ../assets/images/2010s/2019-07-07-DSC03133-b-672.webp 2x", width: "320", height: "180", alt: "View of beach and ocean with green grass and palm trees, from lanai of G5", dataOrientation: "", dataPortraitsizes: "", dataSrcset: "960=960x540;1180=1180x664;1290=1290x726;1368=1368x769;1442=1442x811;1600=1600x900;1852=1852x1042;1920=1920x1080;2120=2120x1192;2379=2379x1338;2560=2560x1440;2796=2796x1573;2960=2960x1665;3240=3240x1822;3840=3840x2160", captionHeading: "Kauai, July 2019", caption: "View south from the lanai of G5, Kauai Beach Villas" },
    { id: 17, lazy: true, src: "../assets/images/2010s/2018-06-25-DSC03277-b-thumbnail.webp", srcset: "../assets/images/2010s/2018-06-25-DSC03277-b-thumbnail.webp 1x, ../assets/images/2010s/2018-06-25-DSC03277-b-672.webp 2x", width: "320", height: "180", alt: "Sunrise on the ocean, from third floor lanai", dataOrientation: "", dataPortraitsizes: "", dataSrcset: "960=960x540;1180=1180x664;1290=1290x726;1368=1368x769;1442=1442x811;1600=1600x900;1852=1852x1042;1920=1920x1080;2120=2120x1192;2379=2379x1338;2560=2560x1440;2796=2796x1573;2960=2960x1665;3240=3240x1822;3840=3840x2160", captionHeading: "Kauai, June 2018", caption: "Another view from lanai of G5" },
    { id: 18, lazy: true, src: "../assets/images/2010s/2019-07-10-DSC03233-b-thumbnail.webp", srcset: "../assets/images/2010s/2019-07-10-DSC03233-b-thumbnail.webp 1x, ../assets/images/2010s/2019-07-10-DSC03233-b-672.webp 2x", width: "320", height: "180", alt: "Looking straight out from the lanai, the lanai railing at bottom, very green shrubs and grass, sandy beach and ocean with a few clouds in blue sky ", dataOrientation: "", dataPortraitsizes: "", dataSrcset: "960=960x540;1180=1180x664;1290=1290x726;1368=1368x769;1442=1442x811;1600=1600x900;1852=1852x1042;1920=1920x1080;2120=2120x1192;2379=2379x1338;2560=2560x1440;2796=2796x1573;2960=2960x1665;3240=3240x1822;3840=3840x2160", captionHeading: "Kauai, July 2019", caption: "Another view from lanai of G5" },
    { id: 19, lazy: true, src: "../assets/images/2010s/2019-07-07-DSC03158-b-thumbnail.webp", srcset: "../assets/images/2010s/2019-07-07-DSC03158-b-thumbnail.webp 1x, ../assets/images/2010s/2019-07-07-DSC03158-b-672.webp 2x", width: "320", height: "180", alt: "Sandy vehicle trail along Nukolii beach", dataOrientation: "", dataPortraitsizes: "", dataSrcset: "960=960x540;1180=1180x664;1290=1290x726;1368=1368x769;1442=1442x811;1600=1600x900;1852=1852x1042;1920=1920x1080;2120=2120x1192;2379=2379x1338;2560=2560x1440;2796=2796x1573;2960=2960x1665;3240=3240x1822;3840=3840x2160", captionHeading: "Kauai, July 2019", caption: "Walking on the vehicle path along Nukolii Beach Park on the way back to Kauai Beach Villas" },
    { id: 20, lazy: true, src: "../assets/images/2010s/2019-07-07-DSC03186-b-thumbnail.webp", srcset: "../assets/images/2010s/2019-07-07-DSC03186-b-thumbnail.webp 1x, ../assets/images/2010s/2019-07-07-DSC03186-b-672.webp 2x", width: "320", height: "180", alt: "Corner windows in bedroom, louvered on bottom third, looking out to the ocean", dataOrientation: "", dataPortraitsizes: "", dataSrcset: "960=960x540;1180=1180x664;1290=1290x726;1368=1368x769;1442=1442x811;1600=1600x900;1852=1852x1042;1920=1920x1080;2120=2120x1192;2379=2379x1338;2560=2560x1440;2796=2796x1573;2960=2960x1665;3240=3240x1822;3840=3840x2160", captionHeading: "Kauai, July 2019", caption: "View from the bedroom windows in unit G5" },
    { id: 21, lazy: true, src: "../assets/images/2000s/2008-IMG_0216-b-test.webp", srcset: "../assets/images/2000s/2008-IMG_0216-b-test.webp 1x, ../assets/images/2000s/2008-IMG_0216-b-test-672.webp 2x", width: "320", height: "480", alt: "Hot air baloon taking off", dataOrientation: "portrait", dataPortraitsizes: "320=240;360=270;393=295;432=324;608=456;672=504;768=576;896=672;960=720;1180=885;1290=968;1368=1026;1442=1082;1600=1200;1852=1389;1920=1440;2120=1590;2379=1784;2560=1920;2796=2097;2960=2220;3240=2430;3840=2880", dataSrcset: "240=240x320;270=270x360;295=295x393;324=324x432;456=456x608;504=504x672;576=576x768;672=672x896;720=720x960;885=885x1180;968=968x1290;1026=1026x1368;1082=1082x1442;1200=1200x1600;1389=1389x1852;1440=1440x1920;1590=1590x2120;1784=1784x2379;1920=1920x2560;2097=2097x2796;2220=2220x2960;2430=2430x3240;2880=2880x3840", captionHeading: "2008 Company Offsite", caption: "AtHoc had its company offsite at Silverado Resort in Napa, California. The company chartered a hot air balooning adventure." }
  ]

  const slideshows = [
    { id: 1, url: "/album/favorites-kauai-slideshow", caption: "Kauai Slideshow" },
    { id: 2, url: "/album/favorites-kauai-stream-slideshow", caption: "Kauai Stream Slideshow" },
    { id: 3, url: "/album/favorites-kauai-beach-villas-slideshow", caption: "Kauai Beach Villas" }
  ]

  const videos = [
    { id: 1, videoId: "wRYuLtZ5cig", caption: "Moonrise over Nukoli'i Beach", caption2: "Kauai, 2018" },
    { id: 2, videoId: "oMnO8BjshFY", caption: "Stream and Ocean", caption2: "Kauai, 2018" }
  ]

  return (
    <Page title="Kauai Favorites" background="dark">
      <GTag></GTag>
      <div className="wrapper wrapper--album">
        <Breadcrumb to="/album/Favorites" linktext="Favorites" />
        <h1 className="headline__h1">Kauai Favorites</h1>
        <PhotoAlbum slideshows={slideshows} photos={photos} videos={videos} />
      </div>
    </Page>
  )
}
export default FavoritesKauai
