import React, { useContext, useEffect } from "react"
import DispatchContext from "../../DispatchContext"
import { Link } from "react-router-dom"
import Page from "../Page"
import StateContext from "../../StateContext"
import GTag from "../GTag"
import CanonicalLink from "../CanonicalLink"

function Recipes() {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)

  appState.backgroundStyle == "light" ? (document.body.classList.remove("dark"), document.body.classList.add("light")) : (document.body.classList.remove("light"), document.body.classList.add("dark"))

  useEffect(() => {
    appDispatch({ type: "backgroundStyleChange", color: "light" })
  }, [])

  return (
    <Page title="Recipes">
      <GTag></GTag>
      <CanonicalLink href="https://swansonsoftware.com/album/recipes"></CanonicalLink>
      <div className="wrapper wrapper--album wrapper--album--pull-left">
        <h1 className="headline__h1">Recipes</h1>
        <div className="album-recipe">
          <Link to="../album/recipes/vegetable-stock">Vegetable Stock</Link>
        </div>
        <div className="album-recipe">
          <Link to="../album/recipes/clam-chowder">Clam Chowder</Link>
        </div>
      </div>
    </Page>
  )
}
export default Recipes
