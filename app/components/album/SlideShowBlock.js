import React from "react"

function SlideShowBlock(props) {
  const image = props.photo

  return (
    <li className="slideshow__slides__slide">
      <div className="slideshow__slides__slide--spinner"></div>
      <img className="slide-image" data-captionheading={image.captionHeading} data-caption={image.caption} loading={image.lazy ? "lazy" : "eager"} src={image.src} width={image.width} height={image.height} alt={image.alt} srcSet={image.srcset} sizes={image.sizes}></img>
    </li>
  )
}

export default SlideShowBlock
