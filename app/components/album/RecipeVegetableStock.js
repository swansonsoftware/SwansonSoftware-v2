import React, { useContext, useEffect } from "react"
import Page from "../Page"
import DispatchContext from "../../DispatchContext"
import StateContext from "../../StateContext"
import Breadcrumb from "../Breadcrumb"
import RecipePhotos from "./RecipePhotos"

function VegetableStock() {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)

  appState.backgroundStyle == "light" ? (document.body.classList.remove("dark"), document.body.classList.add("light")) : (document.body.classList.remove("light"), document.body.classList.add("dark"))

  useEffect(() => {
    appDispatch({ type: "backgroundStyleChange", color: "dark" })
  }, [])

  const photos = [
    { id: 1, src: "../assets/images/2020s/2021-03-21-DSC03648-thumbnail.webp", width: "320", height: "180", alt: "Pot filled to the top with chopped Leeks.", dataOrientation: "", dataPortraitsizes: "", dataSrcset: "320=320x180;360=360x202;393=393x221;432=432x243;608=608x342;672=672x378;768=768x432;896=896x504;960=960x540;1180=1180x664;1290=1290x726;1368=1368x769;1442=1442x811;1600=1600x900;1852=1852x1042;1920=1920x1080;2120=2120x1192;2379=2379x1338;2560=2560x1440;2796=2796x1573;2960=2960x1665;3240=3240x1822;3840=3840x2160", captionHeading: "", caption: "Coarsley chopped leeks, piled high in a 6.5 quart pot." },
    { id: 2, src: "../assets/images/2020s/2023-05-13-DSC04068-thumbnail.webp", width: "320", height: "180", alt: "Pot with leeks softened and floating in stock.", dataOrientation: "", dataPortraitsizes: "", dataSrcset: "320=320x180;360=360x202;393=393x221;432=432x243;608=608x342;672=672x378;768=768x432;896=896x504;960=960x540;1180=1180x664;1290=1290x726;1368=1368x769;1442=1442x811;1600=1600x900;1852=1852x1042;1920=1920x1080;2120=2120x1192;2379=2379x1338;2560=2560x1440;2796=2796x1573;2960=2960x1665;3240=3240x1822;3840=3840x2160", captionHeading: "", caption: "Leeks soften after a while and float in the stock." }
  ]

  return (
    <Page title="Vegetable Stock" background="dark">
      <div className="wrapper wrapper--album wrapper--album--pull-left album-recipe">
        <Breadcrumb to="../album/Recipes" linktext="Recipes" />

        <h1 className="headline__h1">Vegetable Stock</h1>

        <div className="album-recipe__author">Gregory Swanson</div>
        <div>
          <b>PREP:</b> 60 min; <b>Cooking time:</b> 2 hr 30 min
        </div>

        <div>Makes about 5 cups</div>

        <p className="album-recipe__intro">I use this vegetable stock as the base in the clam chowder recipe and for risotto. As it takes a few hours to make, I like to make it ahead of time and freeze it in ready-to-use portions.</p>

        <p>Leeks often have soil between the leaves and need to be washed carefully. You can speed up the chore by cutting them crosswise into rings and then soak the rings in a bowl of water for 5 minutes. Then stir the leeks in the water with your hands, pushing through the rings and disloging any remaining soil. Drain the leeks in a collander and rinse once more.</p>
        <p>The leeks and all the vegetables can be washed, cut up and refrigerated a day or two ahead to reduce cooking fatigue. When the vegetables are prepared ahead of time you can add them all at once if the pot is large enough, then occasionally push them down into the liquid as they soften.</p>

        <RecipePhotos photos={photos} />

        <h2 className="headline__h2 headline__h2--recipe">Ingredients</h2>

        <div className="album-recipe__listItem">
          <span className="album-recipe__ingredientAmount">3.5</span>
          <span className="album-recipe__ingredient">lbs leeks coarsly chopped, including greens</span>
        </div>
        <div className="album-recipe__listItem">
          <span className="album-recipe__ingredientAmount">1</span>
          <span className="album-recipe__ingredient">fennel bulb coarsly chopped</span>
        </div>
        <div className="album-recipe__listItem">
          <span className="album-recipe__ingredientAmount">6+</span>
          <span className="album-recipe__ingredient">baby carrots sliced in half lengthwise</span>
        </div>
        <div className="album-recipe__listItem">
          <span className="album-recipe__ingredientAmount">6+</span>
          <span className="album-recipe__ingredient">stalks celery</span>
        </div>
        <div className="album-recipe__listItem">
          <span className="album-recipe__ingredientAmount">2</span>
          <span className="album-recipe__ingredient">sprigs thyme (optional)</span>
        </div>
        <div className="album-recipe__listItem">
          <span className="album-recipe__ingredientAmount">7</span>
          <span className="album-recipe__ingredient">cups water</span>
        </div>

        <h2 className="headline__h2 headline__h2--recipe">Directions</h2>
        <ol>
          <li>In a large (6 quart) pot add the water and all the ingredients (alternatively you can add the vegetables a little at a time as they soften in the liquid). Bring to a boil on high heat, then reduce heat to a fast simmer. Simmer uncovered for 2 to 2.5 hours. Push the vegetables down into the liquid occasionally. Adjust the time as desired; the longer the stock simmers the more the volume reduces, concentrating the flavor.</li>
          <li>Off heat, strain the stock and press the liquid from the vegetables. Once the solids have been strained, strain all the stock through a fine sieve.</li>
          <li>Separate into portions as desired.</li>
        </ol>
      </div>
    </Page>
  )
}
export default VegetableStock
