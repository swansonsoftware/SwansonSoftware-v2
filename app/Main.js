import React, { useReducer, Suspense, useContext, useEffect } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import ReactDOM from "react-dom/client"
import "./assets/styles/styles.css"
import StateContext from "./StateContext.js"
import DispatchContext from "./DispatchContext.js"

// Components
import NotFound from "./components/NotFound.js"
const LoadingDotsIcon = React.lazy(() => import("./components/DotsLoading.js"))
import Home from "./components/Home.js"
import SkipToContent from "./components/SkipToContent.js"
import ScrollToTop from "./components/ScrollToTop.js"
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
const Thankyou = React.lazy(() => import("./components/Thankyou.js"))
const _1900s = React.lazy(() => import("./components/album/_1900s.js"))
const _1999KauaiSlideshow = React.lazy(() => import("./components/album/_1999KauaiSlideshow.js"))
const _2000s = React.lazy(() => import("./components/album/_2000s.js"))
const _2010s = React.lazy(() => import("./components/album/_2010s.js"))
const _2010sSlideshow = React.lazy(() => import("./components/album/_2010sSlideshow.js"))
const _2010sSlideshowGardens = React.lazy(() => import("./components/album/_2010sSlideshowGardens.js"))
const _2010sSlideshowWashington = React.lazy(() => import("./components/album/_2012SlideshowWashington.js"))
const _2013SlideshowNormas = React.lazy(() => import("./components/album/_2013SlideshowNormas.js"))
const _2020s = React.lazy(() => import("./components/album/_2020s.js"))
const _2020sSlideshow = React.lazy(() => import("./components/album/_2020sSlideshow.js"))
const About = React.lazy(() => import("./components/About.js"))
const Album = React.lazy(() => import("./components/album/Album.js"))
const Blog = React.lazy(() => import("./components/blog/Blog.js"))
const Blogs2025 = React.lazy(() => import("./components/blog/_2025.js"))
const Blogs2026 = React.lazy(() => import("./components/blog/_2026.js"))
const ContactUs = React.lazy(() => import("./components/ContactUs.js"))
const Design = React.lazy(() => import("./components/principles/Design.js"))
const Favorites = React.lazy(() => import("./components/album/Favorites.js"))
const FavoritesCats = React.lazy(() => import("./components/album/FavoritesCats.js"))
const FavoritesGardens = React.lazy(() => import("./components/album/FavoritesGardens.js"))
const FavoritesKauai = React.lazy(() => import("./components/album/FavoritesKauai.js"))
const FavoritesKauaiSlideshow = React.lazy(() => import("./components/album/FavoritesKauaiSlideshow.js"))
const FavoritesKauaiBeachVillasSlideshow = React.lazy(() => import("./components/album/FavoritesKauaiBeachVillasSlideshow.js"))
const FavoritesKauaiStreamSlideshow = React.lazy(() => import("./components/album/FavoritesKauaiStreamSlideshow.js"))
const FavoritesPersimons = React.lazy(() => import("./components/album/FavoritesPersimons.js"))
const FavoritesPersimonsSlideshow = React.lazy(() => import("./components/album/FavoritesPersimonsSlideshow.js"))
const LifecycleModels = React.lazy(() => import("./components/principles/LifeCycleModels.js"))
const Principles = React.lazy(() => import("./components/principles/Principles.js"))
const PrivacyPolicy = React.lazy(() => import("./components/PrivacyPolicy.js"))
const ProcessModels = React.lazy(() => import("./components/principles/ProcessModels.js"))
const Recipes = React.lazy(() => import("./components/album/Recipes.js"))
const RecipeClamChowder = React.lazy(() => import("./components/album/RecipeClamChowder.js"))
const RecipePieDough = React.lazy(() => import("./components/album/RecipePieDough.js"))
const RecipeVegetableStock = React.lazy(() => import("./components/album/RecipeVegetableStock.js"))
const Requirements = React.lazy(() => import("./components/principles/Requirements.js"))
const Reviews = React.lazy(() => import("./components/principles/Reviews.js"))
const BlogResolutionSwitchingImages = React.lazy(() => import("./components/blog/2025/_01_ResolutionSwitching.js"))
const BlogResolutionSwitchingImages2 = React.lazy(() => import("./components/blog/2025/_01_ResolutionSwitching2.js"))
const BlogResolutionSwitchingImages3 = React.lazy(() => import("./components/blog/2025/_01_ResolutionSwitching3.js"))
const BlogWebsiteDesignStandard1 = React.lazy(() => import("./components/blog/2026/_01_WebsiteDesignStandard1.js"))
const BlogWebsiteDesignStandard2 = React.lazy(() => import("./components/blog/2026/_01_WebsiteDesignStandard2.js"))

function Main() {
  const initialState = { backgroundStyle: "dark", siteHeaderClass: "site-header site-header--expand", homePageClass: "page", breadcrumbClass: "site-header__breadcrumb", selectedMenu: "", menuOverlay: "lightbox__menu-overlay", menuActiveCategory: "-1", menuDropdownActiveTopic: "-1", menuListClassByIconState: "disclosure-nav nav__topnav nav__menu-content nav__menu-content--icon-hidden", mobileMenuIconState: "site-header__menu-icon", captionBoxBtn: "0", imageOverlay: "lightbox__image-overlay", scrollTop: true, headerVisClass: "site-header site-header--expand" }

  function theReducer(state, action) {
    switch (action.type) {
      case "backgroundStyleChange": {
        return {
          backgroundStyle: action.color,
          siteHeaderClass: state.siteHeaderClass,
          homePageClass: state.homePageClass,
          breadcrumbClass: state.breadcrumbClass,
          selectedMenu: state.selectedMenu,
          menuOverlay: state.menuOverlay,
          menuActiveCategory: state.menuActiveCategory,
          menuDropdownActiveTopic: state.menuDropdownActiveTopic,
          menuListClassByIconState: state.menuListClassByIconState,
          mobileMenuIconState: state.mobileMenuIconState,
          captionBoxBtn: state.captionBoxBtn,
          imageOverlay: state.imageOverlay,
          scrollTop: state.scrollTop,
          headerVisClass: state.headerVisClass
        }
      }
      case "siteHeaderClass": {
        return {
          backgroundStyle: state.color,
          siteHeaderClass: action.class,
          homePageClass: state.homePageClass,
          breadcrumbClass: state.breadcrumbClass,
          selectedMenu: state.selectedMenu,
          menuOverlay: state.menuOverlay,
          menuActiveCategory: state.menuActiveCategory,
          menuDropdownActiveTopic: state.menuDropdownActiveTopic,
          menuListClassByIconState: state.menuListClassByIconState,
          mobileMenuIconState: state.mobileMenuIconState,
          captionBoxBtn: state.captionBoxBtn,
          imageOverlay: state.imageOverlay,
          scrollTop: state.scrollTop,
          headerVisClass: state.headerVisClass
        }
      }
      case "homePageClass": {
        // set page-specific styles; home page background image
        return {
          backgroundStyle: state.backgroundStyle,
          siteHeaderClass: state.siteHeaderClass,
          homePageClass: action.homePageClass,
          breadcrumbClass: state.breadcrumbClass,
          selectedMenu: state.selectedMenu,
          menuOverlay: state.menuOverlay,
          menuActiveCategory: state.menuActiveCategory,
          menuDropdownActiveTopic: state.menuDropdownActiveTopic,
          menuListClassByIconState: state.menuListClassByIconState,
          mobileMenuIconState: state.mobileMenuIconState,
          captionBoxBtn: state.captionBoxBtn,
          imageOverlay: state.imageOverlay,
          scrollTop: state.scrollTop,
          headerVisClass: state.headerVisClass
        }
      }
      case "updateBreadcrumbClass": {
        return {
          backgroundStyle: state.backgroundStyle,
          siteHeaderClass: state.siteHeaderClass,
          homePageClass: state.homePageClass,
          breadcrumbClass: action.class,
          selectedMenu: state.selectedMenu,
          menuOverlay: state.menuOverlay,
          menuActiveCategory: state.menuActiveCategory,
          menuDropdownActiveTopic: state.menuDropdownActiveTopic,
          menuListClassByIconState: state.menuListClassByIconState,
          mobileMenuIconState: state.mobileMenuIconState,
          captionBoxBtn: state.captionBoxBtn,
          imageOverlay: state.imageOverlay,
          scrollTop: state.scrollTop,
          headerVisClass: state.headerVisClass
        }
      }
      case "selectMenu": {
        // selected sub menu is underlined
        return {
          backgroundStyle: state.backgroundStyle,
          siteHeaderClass: state.siteHeaderClass,
          homePageClass: state.homePageClass,
          breadcrumbClass: state.breadcrumbClass,
          selectedMenu: action.selectedMenu,
          menuOverlay: state.menuOverlay,
          menuActiveCategory: state.menuActiveCategory,
          menuDropdownActiveTopic: state.menuDropdownActiveTopic,
          menuListClassByIconState: state.menuListClassByIconState,
          mobileMenuIconState: state.mobileMenuIconState,
          captionBoxBtn: state.captionBoxBtn,
          imageOverlay: state.imageOverlay,
          scrollTop: state.scrollTop,
          headerVisClass: state.headerVisClass
        }
      }
      case "menuOverlay": {
        return {
          backgroundStyle: state.backgroundStyle,
          siteHeaderClass: state.siteHeaderClass,
          homePageClass: state.homePageClass,
          breadcrumbClass: state.breadcrumbClass,
          selectedMenu: state.selectedMenu,
          menuOverlay: action.menuOverlay,
          menuActiveCategory: state.menuActiveCategory,
          menuDropdownActiveTopic: state.menuDropdownActiveTopic,
          menuListClassByIconState: state.menuListClassByIconState,
          mobileMenuIconState: state.mobileMenuIconState,
          captionBoxBtn: state.captionBoxBtn,
          imageOverlay: state.imageOverlay,
          scrollTop: state.scrollTop,
          headerVisClass: state.headerVisClass
        }
      }
      case "menuActiveCategory": {
        // selected top-level menu is underlined
        return {
          backgroundStyle: state.backgroundStyle,
          siteHeaderClass: state.siteHeaderClass,
          homePageClass: state.homePageClass,
          breadcrumbClass: state.breadcrumbClass,
          selectedMenu: state.selectedMenu,
          menuOverlay: state.menuOverlay,
          menuActiveCategory: action.menuActiveCategory,
          menuDropdownActiveTopic: state.menuDropdownActiveTopic,
          menuListClassByIconState: state.menuListClassByIconState,
          mobileMenuIconState: state.mobileMenuIconState,
          captionBoxBtn: state.captionBoxBtn,
          imageOverlay: state.imageOverlay,
          scrollTop: state.scrollTop,
          headerVisClass: state.headerVisClass
        }
      }
      case "menuDropdownActiveTopic": {
        return {
          backgroundStyle: state.backgroundStyle,
          siteHeaderClass: state.siteHeaderClass,
          homePageClass: state.homePageClass,
          breadcrumbClass: state.breadcrumbClass,
          selectedMenu: state.selectedMenu,
          menuOverlay: state.menuOverlay,
          menuActiveCategory: state.menuActiveCategory,
          menuDropdownActiveTopic: String(action.menuDropdownActiveTopic),
          menuListClassByIconState: state.menuListClassByIconState,
          mobileMenuIconState: state.mobileMenuIconState,
          captionBoxBtn: state.captionBoxBtn,
          imageOverlay: state.imageOverlay,
          scrollTop: state.scrollTop,
          headerVisClass: state.headerVisClass
        }
      }
      case "menuListClassByIconState": {
        return {
          backgroundStyle: state.backgroundStyle,
          siteHeaderClass: state.siteHeaderClass,
          homePageClass: state.homePageClass,
          breadcrumbClass: state.breadcrumbClass,
          selectedMenu: state.selectedMenu,
          menuOverlay: state.menuOverlay,
          menuActiveCategory: state.menuActiveCategory,
          menuDropdownActiveTopic: state.menuDropdownActiveTopic,
          menuListClassByIconState: action.class,
          mobileMenuIconState: state.mobileMenuIconState,
          captionBoxBtn: state.captionBoxBtn,
          imageOverlay: state.imageOverlay,
          scrollTop: state.scrollTop,
          headerVisClass: state.headerVisClass
        }
      }
      case "mobileMenuIconState": {
        return {
          backgroundStyle: state.backgroundStyle,
          siteHeaderClass: state.siteHeaderClass,
          homePageClass: state.homePageClass,
          breadcrumbClass: state.breadcrumbClass,
          selectedMenu: state.selectedMenu,
          menuOverlay: state.menuOverlay,
          menuActiveCategory: state.menuActiveCategory,
          menuDropdownActiveTopic: state.menuDropdownActiveTopic,
          menuListClassByIconState: state.menuListClassByIconState,
          mobileMenuIconState: action.mobileMenuIconState,
          captionBoxBtn: state.captionBoxBtn,
          imageOverlay: state.imageOverlay,
          scrollTop: state.scrollTop,
          headerVisClass: state.headerVisClass
        }
      }
      case "captionBoxBtn": {
        return {
          backgroundStyle: state.backgroundStyle,
          siteHeaderClass: state.siteHeaderClass,
          homePageClass: state.homePageClass,
          breadcrumbClass: state.breadcrumbClass,
          selectedMenu: state.selectedMenu,
          menuOverlay: state.menuOverlay,
          menuActiveCategory: state.menuActiveCategory,
          menuDropdownActiveTopic: state.menuDropdownActiveTopic,
          menuListClassByIconState: state.menuListClassByIconState,
          mobileMenuIconState: state.mobileMenuIconState,
          captionBoxBtn: action.captionBoxBtn,
          imageOverlay: state.imageOverlay,
          scrollTop: state.scrollTop,
          headerVisClass: state.headerVisClass
        }
      }
      case "imageOverlay": {
        return {
          backgroundStyle: state.backgroundStyle,
          siteHeaderClass: state.siteHeaderClass,
          homePageClass: state.homePageClass,
          breadcrumbClass: state.breadcrumbClass,
          selectedMenu: state.selectedMenu,
          menuOverlay: state.menuOverlay,
          menuActiveCategory: state.menuActiveCategory,
          menuDropdownActiveTopic: state.menuDropdownActiveTopic,
          menuListClassByIconState: state.menuListClassByIconState,
          mobileMenuIconState: state.mobileMenuIconState,
          captionBoxBtn: state.captionBoxBtn,
          imageOverlay: action.imageOverlay,
          scrollTop: state.scrollTop,
          headerVisClass: state.headerVisClass
        }
      }
      case "scrollTop": {
        //Show or hide the scroll to top button on page (hide on slideshow)
        return {
          backgroundStyle: state.backgroundStyle,
          siteHeaderClass: state.siteHeaderClass,
          homePageClass: state.homePageClass,
          breadcrumbClass: state.breadcrumbClass,
          selectedMenu: state.selectedMenu,
          menuOverlay: state.menuOverlay,
          menuActiveCategory: state.menuActiveCategory,
          menuDropdownActiveTopic: state.menuDropdownActiveTopic,
          menuListClassByIconState: state.menuListClassByIconState,
          mobileMenuIconState: state.mobileMenuIconState,
          captionBoxBtn: state.captionBoxBtn,
          imageOverlay: state.imageOverlay,
          scrollTop: action.scrollTop,
          headerVisClass: state.headerVisClass
        }
      }
      case "headerVisClass": {
        //Show or hide the menu
        return {
          backgroundStyle: state.backgroundStyle,
          siteHeaderClass: state.siteHeaderClass,
          homePageClass: state.homePageClass,
          breadcrumbClass: state.breadcrumbClass,
          selectedMenu: state.selectedMenu,
          menuOverlay: state.menuOverlay,
          menuActiveCategory: state.menuActiveCategory,
          menuDropdownActiveTopic: state.menuDropdownActiveTopic,
          menuListClassByIconState: state.menuListClassByIconState,
          mobileMenuIconState: state.mobileMenuIconState,
          captionBoxBtn: state.captionBoxBtn,
          imageOverlay: state.imageOverlay,
          scrollTop: state.scrollTop,
          headerVisClass: action.headerVisClass
        }
      }
    }
  }

  const [state, dispatch] = useReducer(theReducer, initialState)

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <BrowserRouter>
          {/*<SkipToContent />*/}
          <Header />
          <main className={state.homePageClass}>
            <Suspense fallback={<LoadingDotsIcon />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/album" element={<Album />} />
                <Route path="/album/1900s" element={<_1900s />} />
                <Route path="/album/2000s" element={<_2000s />} />
                <Route path="/album/2010s" element={<_2010s />} />
                <Route path="/album/2020s" element={<_2020s />} />
                <Route path="/album/1999-kauai-slideshow" element={<_1999KauaiSlideshow />} />
                <Route path="/album/2010s-slideshow" element={<_2010sSlideshow />} />
                <Route path="/album/2010s-slideshow-gardens" element={<_2010sSlideshowGardens />} />
                <Route path="/album/2012-slideshow-washington" element={<_2010sSlideshowWashington />} />
                <Route path="/album/2013-slideshow-normas" element={<_2013SlideshowNormas />} />
                <Route path="/album/2020s-slideshow" element={<_2020sSlideshow />} />
                <Route path="/album/favorites" element={<Favorites />} />
                <Route path="/album/favorites/favorites-kauai" element={<FavoritesKauai />} />
                <Route path="/album/favorites/favorites-kauai-slideshow" element={<FavoritesKauaiSlideshow />} />
                <Route path="/album/favorites/favorites-kauai-beach-villas-slideshow" element={<FavoritesKauaiBeachVillasSlideshow />} />
                <Route path="/album/favorites/favorites-kauai-stream-slideshow" element={<FavoritesKauaiStreamSlideshow />} />
                <Route path="/album/favorites/favorites-cats" element={<FavoritesCats />} />
                <Route path="/album/favorites/favorites-persimons" element={<FavoritesPersimons />} />
                <Route path="/album/favorites/favorites-gardens" element={<FavoritesGardens />} />
                <Route path="/album/favorites/favorites-persimons-slideshow" element={<FavoritesPersimonsSlideshow />} />
                <Route path="/album/recipes" element={<Recipes />} />
                <Route path="/album/recipes/clam-chowder" element={<RecipeClamChowder />} />
                <Route path="/album/clam-chowder" element={<Navigate to="/album/recipes/clam-chowder" replace />} />
                <Route path="/album/recipes/pie-dough" element={<RecipePieDough />} />
                <Route path="/album/vegetable-stock" element={<Navigate to="/album/recipes/vegetable-stock" replace />} />
                <Route path="/album/recipes/vegetable-stock" element={<RecipeVegetableStock />} />
                <Route path="/blog" element={<Blog body="light" />} />
                <Route path="/blog/2025" element={<Blogs2025 body="light" />} />
                <Route path="/blog/2025/01/resolution-switching-images" element={<Navigate to="/blog/2025/01/resolution-switching-images-part1-ideas-for-choosing-breakpoints" replace />} />
                <Route path="/blog/2025/01/resolution-switching-images-part2" element={<Navigate to="/blog/2025/01/resolution-switching-images-part2-finding-the-breakpoints" replace />} />
                <Route path="/blog/2025/01/resolution-switching-images-part3" element={<Navigate to="/blog/2025/01/resolution-switching-images-part3-portrait-orientation-dpr-and-sizes-image-compression" replace />} />
                <Route path="/blog/2025/01/resolution-switching-images-part1-ideas-for-choosing-breakpoints" element={<BlogResolutionSwitchingImages />} />
                <Route path="/blog/2025/01/resolution-switching-images-part2-finding-the-breakpoints" element={<BlogResolutionSwitchingImages2 />} />
                <Route path="/blog/2025/01/resolution-switching-images-part3-portrait-orientation-dpr-and-sizes-image-compression" element={<BlogResolutionSwitchingImages3 />} />
                <Route path="/blog/2026" element={<Blogs2026 body="light" />} />
                <Route path="/blog/2026/01/elements-of-a-standard-for-website-design-part1-conventions" element={<BlogWebsiteDesignStandard1 />} />
                <Route path="/blog/2026/01/elements-of-a-standard-for-website-design-part2-accessibility" element={<BlogWebsiteDesignStandard2 />} />
                <Route path="/contact" element={<ContactUs body="light" />} />
                {/* <Route path="/principles/process-models" element={<ProcessModels body="light" />} /> */}
                <Route path="/principles" element={<Principles />} />
                <Route path="/principles/requirements" element={<Requirements />} />
                <Route path="/principles/design" element={<Navigate to="/principles/software-design" replace />} />
                <Route path="/principles/software-design" element={<Design />} />
                <Route path="/principles/software-lifecycle" element={<LifecycleModels />} />
                <Route path="/principles/lifecycle-models" element={<Navigate to="/principles/software-lifecycle" replace />} />
                <Route path="/principles/lifecycle" element={<Navigate to="/principles/software-lifecycle" replace />} />
                <Route path="/principles/reviews" element={<Navigate to="/principles/software-reviews" replace />} />
                <Route path="/principles/software-reviews" element={<Reviews />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/thankyou" element={<Thankyou />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <ScrollToTop />
        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

const root = ReactDOM.createRoot(document.querySelector("#app"))
root.render(<Main />)
