import React, { useContext } from "react"
import { Link } from "react-router-dom"
import Page from "../Page"
import StateContext from "../../StateContext"
import GTag from "../GTag"

function Recipes() {
  const appState = useContext(StateContext)

  appState.backgroundStyle == "light" ? (document.body.classList.remove("dark"), document.body.classList.add("light")) : (document.body.classList.remove("light"), document.body.classList.add("dark"))

  return (
    <Page title="Recipes" background="dark">
      <GTag></GTag>
      <div className="wrapper wrapper--album wrapper--album--pull-left">
        <h1 className="headline__h1">Recipes</h1>
        <div className="album-recipe">
          <Link to="../album/vegetable-stock">Vegetable Stock</Link>
        </div>
        <div className="album-recipe">
          <Link to="../album/clam-chowder">Clam Chowder</Link>
        </div>
      </div>
    </Page>
  )
}
export default Recipes
