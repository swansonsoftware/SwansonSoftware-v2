import React, { useContext } from "react"
import Page from "../Page"
import StateContext from "../../StateContext"
import PhotoBookBlock from "./PhotoBookBlock"
import GTag from "../GTag"

function Favorites() {
  const appState = useContext(StateContext)

  appState.backgroundStyle == "light" ? (document.body.classList.remove("dark"), document.body.classList.add("light")) : (document.body.classList.remove("light"), document.body.classList.add("dark"))

  const photobooks = [
    { id: 1, href: "/album/favorites-kauai", src: "../assets/images/2000s/2001-006-thumbnail.webp", width: "320", height: "213", alt: "Photo album of Kauai favorites", caption: "Kauai (mostly)" },
    { id: 2, href: "/album/favorites-cats", src: "../assets/images/2000s/2000-princess-b-009-thumbnail.webp", width: "320", height: "180", alt: "Photo album of cat favorites", caption: "Cats" },
    { id: 3, href: "/album/favorites-persimons", src: "../assets/images/2010s/2016-11-05-DSC01113-b-thumbnail.webp", width: "320", height: "213", alt: "Photo album of persimons favorites", caption: "Persimons and Fruit Trees" },
    { id: 4, href: "/album/favorites-gardens", src: "../assets/images/2000s/2004-15A-b-thumbnail.webp", width: "320", height: "213", alt: "Photo album of garden favorites", caption: "Gardens" }
  ]

  return (
    <Page title="Favorites" background="dark">
      <GTag></GTag>
      <div className="wrapper wrapper--album">
        <h1 className="headline__h1">Favorites</h1>
        <div className="wrapper--album-photos">
          {photobooks.map(image => {
            return <PhotoBookBlock key={image.id} href={image.href} src={image.src} width={image.width} height={image.height} alt={image.alt} caption={image.caption} />
          })}
        </div>
      </div>
    </Page>
  )
}
export default Favorites
