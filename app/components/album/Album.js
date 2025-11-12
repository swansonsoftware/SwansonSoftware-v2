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
  }, [])

  const breadcrumbs = [
    { id: 0, toText: "Home", toUrl: "/" },
    { id: 1, toText: "Album", toUrl: "" }
  ]

  return (
    <Page title="Album">
      <GTag></GTag>
      <CanonicalLink href="https://swansonsoftware.com/album"></CanonicalLink>
      <div className="wrapper wrapper__article">
        <Breadcrumb breadcrumbs={breadcrumbs} />
        <h1 className="headline__h1-cg">Album</h1>
        <h2 className="headline__h2">Photos, Slideshows, a Couple Recipes</h2>
        <p></p>

        <div className="row row__margin-bottom-0 row--gutters">
          <div className="row__colspan-4">
            <h2 className="headline__h2-contents">
              <Link to="../album/recipes">Recipes</Link>
            </h2>
          </div>
          <div className="row__colspan-8">
            <p>The list is short, it includes only the recipes that I developed over many years.</p>
          </div>
        </div>

        <div className="row row__margin-bottom-0 row--gutters">
          <div className="row__colspan-4">
            <h2 className="headline__h2-contents">
              <Link to="../album/favorites">Favorites</Link>
            </h2>
          </div>
          <div className="row__colspan-8">
            <p>All the photos throughout this album are favorites of the many photos I have taken, and the photos in Favorites are the best of those.</p>
          </div>
        </div>

        <div className="row row__margin-bottom-0 row--gutters">
          <div className="row__colspan-4">
            <h2 className="headline__h2-contents">
              <Link to="../album/1900s">1900s</Link>
            </h2>
          </div>
          <div className="row__colspan-8">
            <p>The photos on this page are from long ago, taken with film cameras.</p>
          </div>
        </div>

        <div className="row row__margin-bottom-0 row--gutters">
          <div className="row__colspan-4">
            <h2 className="headline__h2-contents">
              <Link to="../album/2000s">2000s</Link>
            </h2>
          </div>
          <div className="row__colspan-8">
            <p>The earliest photos from the 2000s were the last I took with film, the rest were taken with a digital camera.</p>
          </div>
        </div>

        <div className="row row__margin-bottom-0 row--gutters">
          <div className="row__colspan-4">
            <h2 className="headline__h2-contents">
              <Link to="../album/2010s">2010s</Link>
            </h2>
          </div>
          <div className="row__colspan-8">
            <p>Photos from the 2010s.</p>
          </div>
        </div>

        <div className="row row__margin-bottom-0 row--gutters">
          <div className="row__colspan-4">
            <h2 className="headline__h2-contents">
              <Link to="../album/2020s">2020s</Link>
            </h2>
          </div>
          <div className="row__colspan-8">
            <p>Photos from the 2020s.</p>
          </div>
        </div>
      </div>
    </Page>
  )
}
export default Album
