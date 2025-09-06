import React, { useContext, useEffect } from "react"
import DispatchContext from "../../DispatchContext"
import Page from "../Page"
import StateContext from "../../StateContext"
import Breadcrumb from "../Breadcrumb"
import GTag from "../GTag"
import ImageBlock from "../ImageBlock"
import ImageLightboxOverlay from "../ImageLighboxOverlay"
import GStructuredData from "../GStructuredData"

function VegetableStock() {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)

  appState.backgroundStyle == "light" ? (document.body.classList.remove("dark"), document.body.classList.add("light")) : (document.body.classList.remove("light"), document.body.classList.add("dark"))

  useEffect(() => {
    appDispatch({ type: "backgroundStyleChange", color: "light" })
  }, [])

  const images = [
    { id: 1, lazy: false, src: "../../assets/images/2020s/DSC04271-b-thumbnail.webp", srcset: "../../assets/images/2020s/DSC04271-b-thumbnail.webp 1x, ../../assets/images/2020s/DSC04271-b-672.webp 2x", sizes: "(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw", width: "320", height: "180", alt: "Sliced leeks on white cutting board", dataOrientation: "", dataPortraitsizes: "", captionHeading: "", caption: "Leeks sliced thinly crosswise", dataSrcset: "320=320x180;360=360x202;393=393x221;432=432x243;608=608x342;672=672x378;768=768x432;896=896x504;960=960x540;1180=1180x664;1290=1290x726;1368=1368x769;1442=1442x811;1600=1600x900;1852=1852x1042;1920=1920x1080;2120=2120x1192;2379=2379x1338;2560=2560x1440;2796=2796x1573;2960=2960x1665;3240=3240x1822;3840=3840x2160" },
    { id: 2, lazy: false, src: "../../assets/images/2020s/DSC04273-b-thumbnail.webp", srcset: "../../assets/images/2020s/DSC04273-b-thumbnail.webp 1x, ../../assets/images/2020s/DSC04273-b-672.webp 2x", sizes: "(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw", width: "320", height: "180", alt: "Sliced leeks on bowl of water", dataOrientation: "", dataPortraitsizes: "", captionHeading: "", caption: "Soak the leeks to loosen any dirt", dataSrcset: "320=320x180;360=360x202;393=393x221;432=432x243;608=608x342;672=672x378;768=768x432;896=896x504;960=960x540;1180=1180x664;1290=1290x726;1368=1368x769;1442=1442x811;1600=1600x900;1852=1852x1042;1920=1920x1080;2120=2120x1192;2379=2379x1338;2560=2560x1440;2796=2796x1573;2960=2960x1665;3240=3240x1822;3840=3840x2160" },
    { id: 3, lazy: false, src: "../../assets/images/2020s/DSC04276-b-thumbnail.webp", srcset: "../../assets/images/2020s/DSC04276-b-thumbnail.webp 1x, ../../assets/images/2020s/DSC04276-b-672.webp 2x", sizes: "(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw", width: "320", height: "180", alt: "Steamer pot with cooked leeks and slotted spoon.", dataOrientation: "", dataPortraitsizes: "", captionHeading: "", caption: "Pressing juices out of cooked leeks", dataSrcset: "320=320x180;360=360x202;393=393x221;432=432x243;608=608x342;672=672x378;768=768x432;896=896x504;960=960x540;1180=1180x664;1290=1290x726;1368=1368x769;1442=1442x811;1600=1600x900;1852=1852x1042;1920=1920x1080;2120=2120x1192;2379=2379x1338;2560=2560x1440;2796=2796x1573;2960=2960x1665;3240=3240x1822;3840=3840x2160" }
  ]

  return (
    <Page title="Vegetable Stock Recipe">
      <ImageLightboxOverlay />
      <GTag></GTag>
      <meta name="description" content="Gregory Swanson's Vegetable Stock Recipe" />
      <div className="wrapper wrapper--album wrapper--album--pull-left album-recipe">
        <Breadcrumb to="../album/recipes" linktext="Recipes" />

        <h1 className="headline__h1">Vegetable Stock</h1>

        <div className="album-recipe__author">Gregory Swanson</div>
        <div>
          <b>PREP:</b> 30 min; <b>Cooking time:</b> 4 hours
        </div>

        <div>Makes about 9 cups</div>

        <div className="row row--gutters">
          <div className="row__colspan-12">
            <p className="album-recipe__intro">I use this vegetable stock as the base in the clam chowder recipe and for risotto. As it takes a few hours to make, I like to make it ahead of time and freeze it in ready-to-use portions.</p>
          </div>

          <div className="row__colspan-4">
            <ImageBlock key={images[0].id} image={images[0]}></ImageBlock>
          </div>
          <div className="row__colspan-8">
            <p>Cut off the roots and any greens that extend beyond the round body of the leeks, then slice the leeks crosswise into rounds about 1/4-inch-thick.</p>
          </div>
          <div className="row__colspan-4">
            <ImageBlock key={images[1].id} image={images[1]}></ImageBlock>
          </div>
          <div className="row__colspan-8">
            <p>Soak the leeks a few minutes, then break apart the green rounds where soil is often trapped.</p>
          </div>
          <div className="row__colspan-4">
            <ImageBlock key={images[2].id} image={images[2]}></ImageBlock>
          </div>
          <div className="row__colspan-8">
            <p>A sturdy steamer can be used to press the liquid from the vegetables. Remove the carrots first and set them aside for snacks.</p>
          </div>
        </div>

        <h2 className="headline__h2 headline__h2--recipe">Ingredients</h2>

        <div className="album-recipe__listItem">
          <span className="album-recipe__ingredientAmount">24</span>
          <span className="album-recipe__ingredient">Oz. leeks (about 8 small leeks)</span>
        </div>
        <div className="album-recipe__listItem">
          <span className="album-recipe__ingredientAmount">1</span>
          <span className="album-recipe__ingredient">fennel bulb, coarsly chopped</span>
        </div>
        <div className="album-recipe__listItem">
          <span className="album-recipe__ingredientAmount">1</span>
          <span className="album-recipe__ingredient">16 oz. bag baby carrots</span>
        </div>
        <div className="album-recipe__listItem">
          <span className="album-recipe__ingredientAmount">2</span>
          <span className="album-recipe__ingredient">sprigs thyme (optional)</span>
        </div>
        <div className="album-recipe__listItem">
          <span className="album-recipe__ingredientAmount">12</span>
          <span className="album-recipe__ingredient">cups water</span>
        </div>

        <h2 className="headline__h2 headline__h2--recipe">Directions</h2>
        <ol>
          <li>Add 12 cups of water to a large (6 1/2 quart) stock pot</li>
          <li>
            <b>Cut and wash the leeks</b>: Cut off the roots and any greens that extend beyond the round body of the leeks. Slice the round body of the leeks crosswise into rounds about 1/4-inch thick. Put the rounds in a large (4 quart) mixing bowl, then fill the bowl with water to cover the leeks by a couple of inches. Soak for 5 minutes, then stir the leeks with your hands, breaking apart the rounds so that any dirt lodged in them is released. Transfer the leeks a few at a time to a colander or another bowl of water and rinse. Transfer the rinsed leeks to the stock pot.
          </li>
          <li>Add the remaining ingredients to the stock pot. Bring to a boil, then reduce heat to a slow simmer and simmer for 4 hours, partially covered.</li>
          <li>Off heat, strain the stock, pressing the liquid from the vegetables.</li>
          <li>Once the solids have been strained, re-strain the stock. Portion the stock as desired and freeze until needed.</li>
        </ol>
      </div>
    </Page>
  )
}
export default VegetableStock
