import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import Page from "../Page"
import DispatchContext from "../../DispatchContext"
import StateContext from "../../StateContext"
import Breadcrumb from "../Breadcrumb"
import RecipePhotos from "./RecipePhotos"

function ClamChowder() {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)

  appState.backgroundStyle == "light" ? (document.body.classList.remove("dark"), document.body.classList.add("light")) : (document.body.classList.remove("light"), document.body.classList.add("dark"))

  useEffect(() => {
    appDispatch({ type: "backgroundStyleChange", color: "dark" })
  }, [])

  const photos = [{ id: 1, src: "../assets/images/2020s/2023-05-14-DSC04079-thumbnail.webp", width: "320", height: "180", alt: "New England (white) clam chowder.", dataOrientation: "", dataPortraitsizes: "", dataSrcset: "320=320x180;360=360x202;393=393x221;432=432x243;608=608x342;672=672x378;768=768x432;896=896x504;960=960x540;1180=1180x664;1290=1290x726;1368=1368x769;1442=1442x811;1600=1600x900;1852=1852x1042;1920=1920x1080;2120=2120x1192;2379=2379x1338;2560=2560x1440;2796=2796x1573;2960=2960x1665;3240=3240x1822;3840=3840x2160", captionHeading: "", caption: "Clam chowder, finished." }]

  return (
    <Page title="Clam Chowder" background="dark">
      <div className="wrapper wrapper--album wrapper--album--pull-left album-recipe">
        <Breadcrumb to="../album/Recipes" linktext="Recipes" />

        <h1 className="headline__h1">Clam Chowder</h1>

        <div className="album-recipe__author">Gregory Swanson</div>
        <div>
          <b>PREP:</b> 15 min; <b>Cooking time:</b> 1 1/4 hr
        </div>

        <p className="album-recipe__intro">This is the New England (white) clam chowder. All chowders are made with pork, often bacon. I prefer to make this without any pork at all.</p>

        <p>
          The leek broth from leek and potato soup is a good starting point for clam chowder. This chowder uses the&nbsp;
          <Link to="../album/vegetable-stock">vegetable stock</Link> recipe which starts with lots of leeks and adds a few character-building extras. The salt from the canned clams and bottled clam juice seems to be enough so that additional salt is not required. Correct the seasoning as needed.
        </p>

        <RecipePhotos photos={photos} />

        <h2 className="headline__h2 headline__h2--recipe">Ingredients</h2>

        <div className="album-recipe__listItem">
          <span className="album-recipe__ingredientAmount">2</span>
          <span className="album-recipe__ingredient">
            cups <Link to="../album/vegetable-stock">vegetable stock</Link>
          </span>
        </div>

        <div className="album-recipe__listItem">
          <span className="album-recipe__ingredientAmount">2</span>
          <span className="album-recipe__ingredient">6.5 ounce cans chopped clams and the juice (substitute 4 lbs. fresh clams)</span>
        </div>

        <div className="album-recipe__listItem">
          <span className="album-recipe__ingredientAmount">1</span>
          <span className="album-recipe__ingredient">bottle Bar Harbor Clam Juice (or equivalent)</span>
        </div>

        <div className="album-recipe__listItem">
          <span className="album-recipe__ingredientAmount">2</span>
          <span className="album-recipe__ingredient">lbs white potatos, peeled and chopped in 1/2-inch cubes</span>
        </div>

        <div className="album-recipe__listItem">
          <span className="album-recipe__ingredientAmount">1</span>
          <span className="album-recipe__ingredient">cup heavy cream</span>
        </div>

        <div className="album-recipe__listItem">
          <span className="album-recipe__ingredientAmount">1</span>
          <span className="album-recipe__ingredient">bay leaf</span>
        </div>

        <div className="album-recipe__listItem">
          <span className="album-recipe__ingredientAmount">+</span>
          <span className="album-recipe__ingredient">optional: 1 cup cooked bacon, drained and crumbled</span>
        </div>

        <h2 className="headline__h2 headline__h2--recipe">Directions</h2>
        <ol>
          <li>In a medium (3.5 quart) saucepan add the vegetable stock and bay leaf.</li>

          <li>Open the bottle of clam juice and pour it into the stock.</li>

          <li>
            Option 1: canned clams.
            <br />
            Open caned clams and pour the clams and juice from the cans into the stock.
            <br />
            <br />
            Option 2: fresh clams.
            <br />
            Rinse clams under cold water and put them in a steamer. Bring to boil and steam the clams for no more than four or five minutes. Rinse clams under cold water again. Save the steamer water, adjust it to 1 cup, and pour it into the stock leaving behind any sand.
          </li>

          <li>Add the diced potatoes to the stock. If using bacon, add it to the stock. Stir to mix the ingredients.</li>

          <li>Bring to a boil on medium heat, then reduce heat to a simmer. Simmer uncovered until the liquid is almost all gone, which takes about 1 to 1 1/4 hour. It is done when you hear a slurping sound when stirring at the bottom of the pan. Turn off the heat and remove the bay leaf.</li>

          <li>Pour in the heavy cream and stir well.</li>
        </ol>
      </div>
    </Page>
  )
}
export default ClamChowder
