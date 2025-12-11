import React, { useContext, useEffect } from "react"
import DispatchContext from "../../DispatchContext"
import { Link } from "react-router-dom"
import Page from "../Page"
import StateContext from "../../StateContext"
import Breadcrumb from "../Breadcrumb"
import GTag from "../GTag"
import CanonicalLink from "../CanonicalLink"

function Album() {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)

  appState.backgroundStyle == "light" ? (document.body.classList.remove("dark"), document.body.classList.add("light")) : (document.body.classList.remove("light"), document.body.classList.add("dark"))

  useEffect(() => {
    appDispatch({ type: "backgroundStyleChange", color: "light" })
    appDispatch({ type: "selectMenu", selectedMenu: "Album" })
    appDispatch({ type: "menuActiveCategory", menuActiveCategory: "2" })
    appDispatch({ type: "homePageClass", homePageClass: "page" })
  }, [])

  const breadcrumbs = [
    { id: 0, toText: "Home", toUrl: "/" },
    { id: 1, toText: "Album", toUrl: "" }
  ]

  return (
    <Page title="Album">
      <GTag></GTag>
      <CanonicalLink href="https://swansonsoftware.com/album"></CanonicalLink>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <div className="wrapper wrapper__article">
        <h1 className="headline__h1-cg">Album</h1>
        <h2 className="headline__h2">Photos, Videos, Slideshows, a Couple Recipes</h2>

        <div className="row row__margin-bottom-0 row--gutters">
          <div className="row__colspan-4">
            <h2 className="headline__h2-contents">
              <Link to="../album/recipes">Recipes</Link>
            </h2>
          </div>
          <div className="row__colspan-8">
            <p>A short list of recipes, developed through many attempts.</p>
          </div>
        </div>

        <div className="row row__margin-bottom-0 row--gutters">
          <div className="row__colspan-4">
            <h2 className="headline__h2-contents">
              <Link to="../album/favorites">Favorites</Link>
            </h2>
          </div>
          <div className="row__colspan-8">
            <p>Favorite photos from this album, maybe not always the best photos, but my favorites.</p>
          </div>
        </div>

        <div className="row row__margin-bottom-0 row--gutters">
          <div className="row__colspan-12">
            <h2 className="headline__h2">Through the Years</h2>
          </div>
        </div>

        <div className="row row__margin-bottom-0 row--gutters">
          <div className="row__colspan-4">
            <h2 className="headline__h2-contents">
              <Link to="../album/1900s">1900s</Link>
            </h2>
          </div>
          <div className="row__colspan-8"></div>
        </div>

        <div className="row row__margin-bottom-0 row--gutters">
          <div className="row__colspan-4">
            <h2 className="headline__h2-contents">
              <Link to="../album/2000s">2000s</Link>
            </h2>
          </div>
          <div className="row__colspan-8"></div>
        </div>

        <div className="row row__margin-bottom-0 row--gutters">
          <div className="row__colspan-4">
            <h2 className="headline__h2-contents">
              <Link to="../album/2010s">2010s</Link>
            </h2>
          </div>
          <div className="row__colspan-8"></div>
        </div>

        <div className="row row__margin-bottom-0 row--gutters">
          <div className="row__colspan-4">
            <h2 className="headline__h2-contents">
              <Link to="../album/2020s">2020s</Link>
            </h2>
          </div>
          <div className="row__colspan-8"></div>
        </div>
      </div>
    </Page>
  )
}
export default Album
