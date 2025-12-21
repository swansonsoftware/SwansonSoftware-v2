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
    appDispatch({ type: "selectMenu", selectedMenu: "Recipes" })
    appDispatch({ type: "menuActiveCategory", menuActiveCategory: "2" })
    appDispatch({ type: "homePageClass", homePageClass: "page" })
    const app = document.getElementById("app")
    if (app) {
      app.focus()
    }
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
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <div className="wrapper wrapper__article" id="maincontent">
        <h1 className="headline__h1">Recipes</h1>
        <p>A short list of recipes, short because they really are my recipes, at least some of the ideas for them are mine. There was no single inventor of vegetable stock, clam chowder, or pie crust: they developed over hundreds or even thousands of years.</p>

        <div className="row row__margin-bottom-0 row--gutters">
          <div className="row__colspan-4">
            <h2 className="headline__h2-contents">
              <Link to="../album/recipes/vegetable-stock">Vegetable Stock</Link>
            </h2>
          </div>
          <div className="row__colspan-8">
            <p>I use this vegetable stock for risotto and for clam chowder. It makes a good beverage too.</p>
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
            <p>This pie dough recipe was refined through many attempts following the recipes from:</p>
            <ul>
              <li className="list">The Perfect Pie: Your Ultimate Guide to Classic and Modern Pies, Tarts, Galettes, and More (Perfect Baking Cookbooks) by America's Test Kitchen (2019)</li>
              <li className="list">Pie Academy: Master the Perfect Crust and 255 Amazing Fillings, with Fruits, Nuts, Creams, Custards, Ice Cream, and More; Expert Techniques for Making Fabulous Pies from Scratch by Ken Haedrich (2020)</li>
              <li className="list">The Book On Pie: Everything You Need to Know to Bake Perfect Pies by Erin Jeanne McDowell (2020)</li>
              <li className="list">Mastering the Art of French Cooking (Volumes 1 and 2) by Julia Child, Louisette Bertholle, Simone Beck, and Sidonie Coryn (2001, 40th anniversary edition of the 1961 original)</li>
            </ul>
          </div>
        </div>
      </div>
    </Page>
  )
}
export default Recipes
