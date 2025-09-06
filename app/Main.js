import React, { useReducer, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ReactDOM from "react-dom/client"
import "./assets/styles/styles.css"
import StateContext from "./StateContext"
import DispatchContext from "./DispatchContext"

// Components
import NotFound from "./components/NotFound"
const LoadingDotsIcon = React.lazy(() => import("./components/DotsLoading"))
import Home from "./components/Home"
import SkipToContent from "./components/SkipToContent"
import Header from "./components/Header"
import Footer from "./components/Footer"
const Thankyou = React.lazy(() => import("./components/Thankyou"))
const _1900s = React.lazy(() => import("./components/album/_1900s"))
const _1999KauaiSlideshow = React.lazy(() => import("./components/album/_1999KauaiSlideshow"))
const _2000s = React.lazy(() => import("./components/album/_2000s"))
const _2010s = React.lazy(() => import("./components/album/_2010s"))
const _2010sSlideshow = React.lazy(() => import("./components/album/_2010sSlideshow"))
const _2010sSlideshowGardens = React.lazy(() => import("./components/album/_2010sSlideshowGardens"))
const _2010sSlideshowWashington = React.lazy(() => import("./components/album/_2012SlideshowWashington"))
const _2013SlideshowNormas = React.lazy(() => import("./components/album/_2013SlideshowNormas"))
const _2020s = React.lazy(() => import("./components/album/_2020s"))
const _2020sSlideshow = React.lazy(() => import("./components/album/_2020sSlideshow"))
const About = React.lazy(() => import("./components/About"))
const Blogs2025 = React.lazy(() => import("./components/blog/_2025"))
const ContactUs = React.lazy(() => import("./components/ContactUs"))
const Design = React.lazy(() => import("./components/principles/Design"))
const Favorites = React.lazy(() => import("./components/album/Favorites"))
const FavoritesCats = React.lazy(() => import("./components/album/FavoritesCats"))
const FavoritesGardens = React.lazy(() => import("./components/album/FavoritesGardens"))
const FavoritesKauai = React.lazy(() => import("./components/album/FavoritesKauai"))
const FavoritesKauaiSlideshow = React.lazy(() => import("./components/album/FavoritesKauaiSlideshow"))
const FavoritesKauaiBeachVillasSlideshow = React.lazy(() => import("./components/album/FavoritesKauaiBeachVillasSlideshow"))
const FavoritesKauaiStreamSlideshow = React.lazy(() => import("./components/album/FavoritesKauaiStreamSlideshow"))
const FavoritesPersimons = React.lazy(() => import("./components/album/FavoritesPersimons"))
const FavoritesPersimonsSlideshow = React.lazy(() => import("./components/album/FavoritesPersimonsSlideshow"))
const LifecycleModels = React.lazy(() => import("./components/principles/LifeCycleModels"))
const ProcessModels = React.lazy(() => import("./components/principles/ProcessModels"))
const Recipes = React.lazy(() => import("./components/album/Recipes"))
const RecipeClamChowder = React.lazy(() => import("./components/album/RecipeClamChowder"))
const RecipeVegetableStock = React.lazy(() => import("./components/album/RecipeVegetableStock"))
const Requirements = React.lazy(() => import("./components/principles/Requirements"))
const Reviews = React.lazy(() => import("./components/principles/Reviews"))
const BlogResolutionSwitchingImages = React.lazy(() => import("./components/blog/2025/_01_ResolutionSwitching"))
const BlogResolutionSwitchingImages2 = React.lazy(() => import("./components/blog/2025/_01_ResolutionSwitching2"))
const BlogResolutionSwitchingImages3 = React.lazy(() => import("./components/blog/2025/_01_ResolutionSwitching3"))
const BlogTimeVsQuality = React.lazy(() => import("./components/blog/2025/_02_TimeVsQuality"))

function Main() {
  const initialState = { backgroundStyle: "dark", color: "red", isMenuOpen: false }

  function theReducer(state, action) {
    // console.log("Main - action type: " + action.type + ", change to: " + action.color)
    switch (action.type) {
      case "backgroundStyleChange": {
        return {
          backgroundStyle: action.color,
          color: state.color,
          isMenuOpen: state.isMenuOpen
        }
      }
      case "closeOverlay": {
        return {
          backgroundStyle: state.backgroundStyle,
          color: state.color,
          isMenuOpen: false
        }
      }
      case "openOverlay": {
        return {
          backgroundStyle: state.backgroundStyle,
          color: state.color,
          isMenuOpen: true
        }
      }
    }
  }

  const [state, dispatch] = useReducer(theReducer, initialState)

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <BrowserRouter>
          <SkipToContent />
          <Header />
          <main className="page" id="maincontent">
            <Suspense fallback={<LoadingDotsIcon />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<About />} />
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
                <Route path="/album/favorites-kauai" element={<FavoritesKauai />} />
                <Route path="/album/favorites-kauai-slideshow" element={<FavoritesKauaiSlideshow />} />
                <Route path="/album/favorites-kauai-beach-villas-slideshow" element={<FavoritesKauaiBeachVillasSlideshow />} />
                <Route path="/album/favorites-kauai-stream-slideshow" element={<FavoritesKauaiStreamSlideshow />} />
                <Route path="/album/favorites-cats" element={<FavoritesCats />} />
                <Route path="/album/favorites-persimons" element={<FavoritesPersimons />} />
                <Route path="/album/favorites-gardens" element={<FavoritesGardens />} />
                <Route path="/album/favorites-persimons-slideshow" element={<FavoritesPersimonsSlideshow />} />
                <Route path="/album/recipes" element={<Recipes />} />
                <Route path="/album/recipes/clam-chowder" element={<RecipeClamChowder />} />
                <Route path="/album/recipes/vegetable-stock" element={<RecipeVegetableStock />} />
                <Route path="/blog/2025" element={<Blogs2025 body="light" />} />
                <Route path="/blog/2025/01/resolution-switching-images" element={<BlogResolutionSwitchingImages />} />
                <Route path="/blog/2025/01/resolution-switching-images-part2" element={<BlogResolutionSwitchingImages2 />} />
                <Route path="/blog/2025/01/resolution-switching-images-part3" element={<BlogResolutionSwitchingImages3 />} />
                <Route path="/blog/2025/02/time-vs-quality" element={<BlogTimeVsQuality />} />
                <Route path="/contact" element={<ContactUs body="light" />} />
                {/* <Route path="/principles/process-models" element={<ProcessModels body="light" />} /> */}
                <Route path="/principles/requirements" element={<Requirements />} />
                <Route path="/principles/design" element={<Design />} />
                <Route path="/principles/lifecycle-models" element={<LifecycleModels />} />
                <Route path="/principles/reviews" element={<Reviews />} />
                <Route path="/thankyou" element={<Thankyou />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

const root = ReactDOM.createRoot(document.querySelector("#app"))
root.render(<Main />)

if (module.hot) {
  module.hot.accept()
}
