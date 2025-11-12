import React, { useContext, useEffect } from "react"
import DispatchContext from "../../DispatchContext"
import { Link } from "react-router-dom"
import Page from "../Page"
import StateContext from "../../StateContext"
import Breadcrumb from "../Breadcrumb"
import GTag from "../GTag"
import CanonicalLink from "../CanonicalLink"

function Recipes() {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)

  appState.backgroundStyle == "light" ? (document.body.classList.remove("dark"), document.body.classList.add("light")) : (document.body.classList.remove("light"), document.body.classList.add("dark"))

  useEffect(() => {
    appDispatch({ type: "backgroundStyleChange", color: "light" })
  }, [])

  const breadcrumbs = [
    { id: 0, toText: "Home", toUrl: "/" },
    { id: 1, toText: "Album", toUrl: "/album" },
    { id: 2, toText: "Recipes", toUrl: "" }
  ]

  return (
    <Page title="Recipes">
      <GTag></GTag>
      <CanonicalLink href="https://swansonsoftware.com/album/recipes"></CanonicalLink>
      <div className="wrapper wrapper__article">
        <Breadcrumb breadcrumbs={breadcrumbs} />
        <h1 className="headline__h1">Recipes</h1>
        <p>A short list of recipes, short because they really are my recipes. But the ideas for them came from here and there.</p>

        <div className="row row__margin-bottom-0 row--gutters">
          <div className="row__colspan-4">
            <h2 className="headline__h2-contents">
              <Link to="../album/recipes/vegetable-stock">Vegetable Stock</Link>
            </h2>
          </div>
          <div className="row__colspan-8">
            <p>I use this vegetable stock for risotto and for clam chowder. It makes a good beverage too. I'm sure I will find other recipes that it will work in.</p>
          </div>
        </div>
        <div className="row row__margin-bottom-0 row--gutters">
          <div className="row__colspan-4">
            <h2 className="headline__h2-contents">
              <Link to="../album/recipes/clam-chowder">Clam Chowder</Link>
            </h2>
          </div>
          <div className="row__colspan-8">
            <p>I wonder if anyone has noticed how the aroma of clam chowder resembles leek and potato soup: the aroma that rises when adding the cream.</p>
          </div>
        </div>
        <div className="row row__margin-bottom-0 row--gutters">
          <div className="row__colspan-4">
            <h2 className="headline__h2-contents">
              <Link to="../album/recipes/pie-dough">Pie Dough</Link>
            </h2>
          </div>
          <div className="row__colspan-8">
            <p>Recipes for making all-butter pie dough by hand tell you to get your hands in the dough. But that warms the dough, and dough needs to be kept cold, or the baked crust will be tough.</p>
          </div>
        </div>
      </div>
    </Page>
  )
}
export default Recipes
