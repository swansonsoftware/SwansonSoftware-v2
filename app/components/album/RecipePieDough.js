import React, { useContext, useEffect } from "react"
import DispatchContext from "../../DispatchContext"
import { Link } from "react-router-dom"
import Page from "../Page"
import StateContext from "../../StateContext"
import Breadcrumb from "../Breadcrumb"
import GTag from "../GTag"
import ImageBlock from "../ImageBlock"
import ImageLightboxOverlay from "../ImageLighboxOverlay"

function PieDough() {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)

  appState.backgroundStyle == "light" ? (document.body.classList.remove("dark"), document.body.classList.add("light")) : (document.body.classList.remove("light"), document.body.classList.add("dark"))

  useEffect(() => {
    appDispatch({ type: "backgroundStyleChange", color: "light" })
    appDispatch({ type: "selectMenu", selectedMenu: "Recipes" })
    appDispatch({ type: "menuActiveCategory", menuActiveCategory: "2" })
  }, [])

  //   const images = [{ id: 1, lazy: false, src: "../../assets/images/2020s/2023-05-14-DSC04079-thumbnail.webp", srcset: "../../assets/images/2020s/2023-05-14-DSC04079-thumbnail.webp 1x, ../../assets/images/2020s/2023-05-14-DSC04079-672.webp 2x", width: "320", height: "180", alt: "New England (white) clam chowder in a pot on stove", dataOrientation: "", dataPortraitsizes: "", captionHeading: "", caption: "Clam chowder, finished.", dataSrcset: "320=320x180;360=360x202;393=393x221;432=432x243;608=608x342;672=672x378;768=768x432;896=896x504;960=960x540;1180=1180x664;1290=1290x726;1368=1368x769;1442=1442x811;1600=1600x900;1852=1852x1042;1920=1920x1080;2120=2120x1192;2379=2379x1338;2560=2560x1440;2796=2796x1573;2960=2960x1665;3240=3240x1822;3840=3840x2160", sizes: "(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw" }]

  const breadcrumbs = [
    { id: 0, toText: "Home", toUrl: "/" },
    { id: 1, toText: "Album", toUrl: "/album" },
    { id: 2, toText: "Recipes", toUrl: "/album/recipes" },
    { id: 3, toText: "Pie Dough", toUrl: "" }
  ]

  return (
    <Page title="Pie Dough Recipe">
      <ImageLightboxOverlay />
      <GTag></GTag>
      <meta name="description" content="Gregory Swanson's Pie Dough Recipe" />
      <div className="wrapper wrapper__article">
        <Breadcrumb breadcrumbs={breadcrumbs} />

        <h1 className="headline__h1">Pie Dough</h1>

        <div className="album-recipe__author">Gregory Swanson | Updated November 6, 2025</div>
        <div className="album-recipe">
          <b>PREP:</b> 1 hr 15 min
        </div>

        <div className="album-recipe">Makes two 9-inch crusts</div>

        <div className="row row--gutters" style={{ margin: "0" }}>
          <div className="row__colspan-12">
            <p className="album-recipe__intro">This is an all-butter, hand-made dough where the flour and butter are mixed using a pastry cutter.</p>
            <p>Most modern pie dough recipes call for a food processor to mix the dough. One advantage you get with a food processor is that the dough stays cold, but what if you don't have a food processor?</p>
            <p>Working pie dough with your hands warms the dough, and at some point, the butter begins to melt. You could stop and refrigerate the dough, but to avoid warming the dough, I use a pastry cutter to cut the butter into the flour mixture and never touch the dough with my hands. Using a heavy ceramic or glass mixing bowl helps, as it will stay cold for a while after coming out of the refrigerator and that helps keep the dough cold.</p>
            <p> It is also important that the room where you are making the dough is not too warm. Below 73 degrees F is good. From 73 to 77 degrees F, you need to stop halfway through each step and refrigerate the dough for about 30 minutes. Avoid making pie dough above 77 degrees.</p>
            <h2 className="headline__h2 headline__h2--recipe" style={{ paddingBottom: "0" }}>
              Tips on Pie Dough
            </h2>
            <div className="album-recipe">
              <ul>
                <li>Overworking the dough during mixing or rolling can lead to gluten development, which leads to a tough crust.</li>
                <li>Small chunks of butter in the dough melt during baking, leaving small voids, which are expanded as water in the dough turns to steam, creating layers.</li>
                <li>Do not fraisage, it causes the unmixed chunks of butter to mix with the flour, creating lots of flaky layers but without the voids, which results in a sturdy crust more suitable for tarts.</li>
                <li>Refrigerating the disks of dough allows hydration of uncoated flour so the dough does not crumble when rolling it out.</li>
                <li>After refrigerating and before rolling it out, allow a disk to warm on the counter for about 10 minutes so that it becomes malleable enough that it does not crack when rolling it out.</li>
                <li>Both vinegar and cornstarch act as tenderizers. They are optional but recommended.</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="headline__h2 headline__h2--recipe">Ingredients</h2>

        <div className="album-recipe__listItem">
          <span className="album-recipe__ingredientAmount">13.5</span>
          <span className="album-recipe__ingredient">Ounces (3.5 cups) all-purpose flour</span>
        </div>

        <div className="album-recipe__listItem">
          <span className="album-recipe__ingredientAmount">1</span>
          <span className="album-recipe__ingredient">Tablespoon cornstarch (optional)</span>
        </div>

        <div className="album-recipe__listItem">
          <span className="album-recipe__ingredientAmount">1</span>
          <span className="album-recipe__ingredient">Teaspoon salt</span>
        </div>

        <div className="album-recipe__listItem">
          <span className="album-recipe__ingredientAmount">2.5</span>
          <span className="album-recipe__ingredient">Sticks (20 tablespoons) unsalted butter</span>
        </div>

        <div className="album-recipe__listItem">
          <span className="album-recipe__ingredientAmount">4</span>
          <span className="album-recipe__ingredient">Teaspoons white vinegar (optional)</span>
        </div>

        <h2 className="headline__h2 headline__h2--recipe">Directions</h2>
        <div className="album-recipe">
          <ol>
            <li>In a large mixing bowl, whisk together the flour, cornstarch, and salt. Divide the flour mixture, placing 5.5 ounces (about 1.5 cups) in a small bowl. Place both bowls in the refrigerator, for two hours or overnight.</li>
            <li>Grate 1/2 stick of butter on the large holes of a grater and place in the freezer. Quarter the remaining 2 sticks of butter lengthwise then cut crosswise into 1/2-inch cubes and place on a lightly-floured plate. Refrigerate the plate of butter. Measure vinegar, add cold water to the amount needed and refrigerate.</li>
            <li>Retrieve large bowl and toss the butter cubes with the flour mixture to coat. Never touch the butter cubes or the dough, use a pastry cutter to cut the butter cubes and flour mixture until the mixture smooths out and no longer clogs the cutter (about 10 minutes; use a fork to unclog the cutter). Retrieve the small bowl of flour, pour it into the dough, and cut the two mixtures together for 2 or 3 minutes. Retrieve the grated butter, pour it into the dough, and toss until the butter pieces are separated and coated with flour. Stop and refrigerate the bowl for 20 to 30 minutes when weather is warm.</li>
            <li>Retrieve the water and vinegar mixture from the refrigerator. Mound the dough in the center of the bowl, then add 4 tablespoons of the water/vinegar down the sides of the bowl. Use a fork to mix the dough for about 30 seconds. Add 3 more tablespoons of the water/vinegar over the dough and continue tossing for another 30 seconds. Add 2 more tablespoons and stir vigorously for about 30 seconds. Clumps should start to form. Cover and refrigerate the bowl for 20 to 30 minutes to let the dough hydrate.</li>
            <li>Retrieve the bowl and stir the dough with a fork. If it’s dry in places, add another tablespoon of the water/vinegar and stir. Divide the dough in half (if you are making a double-crust pie, you could make the bottom half about 2 ounces larger than the top). Put one portion on a sheet of plastic wrap. Draw the edges of plastic over the dough and press firmly on sides and top to form a compact, disk about 3/4-inch-thick, making sure to pinch together any fissures. Repeat with the other portion of dough. Refrigerate both disks for at least 2 hours.</li>
          </ol>
        </div>

        <h3 className="headline__h3 headline__h2--recipe">Rolling Out the Dough</h3>
        <div className="album-recipe" style={{ paddingTop: "0" }}>
          <p>Retrieve a disk of dough from the refrigerator and let it sit on the counter for 10 minutes to soften. While rolling out the dough, stop and refrigerate the dough when half way to size for 20 to 30 minutes when the weather is warm.</p>
        </div>
      </div>
    </Page>
  )
}
export default PieDough
