import React from "react"

function SlideShowVcrButtons() {
  return (
    <div className="slideshow__vcr-container">
      <button id="toggleplay" tabIndex={"0"} className="slideshow__vcr-container__vcr-button">
        <span className="accessibility--hidden">Select to alternately pause and start the slideshow</span>
        <svg id="pause" className="slideshow__vcr-container--svg" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
          <path className="slideshow__vcr-container--svg--path" d="M13 1.625c6.272 0 11.375 5.103 11.375 11.375S19.272 24.375 13 24.375 1.625 19.272 1.625 13 6.728 1.625 13 1.625M13 0C5.82 0 0 5.82 0 13s5.82 13 13 13 13-5.82 13-13S20.18 0 13 0z" />
          <path className="slideshow__vcr-container--svg--polygon" d="m15.033 8.187-.066 9.626M10.924 8.187l.031 9.626" />
        </svg>
        <svg id="play" className="slideshow__vcr-container--svg" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
          <path className="slideshow__vcr-container--svg--path" d="M13 1.625c6.272 0 11.375 5.103 11.375 11.375S19.272 24.375 13 24.375 1.625 19.272 1.625 13 6.728 1.625 13 1.625M13 0C5.82 0 0 5.82 0 13s5.82 13 13 13 13-5.82 13-13S20.18 0 13 0z" />
          <path className="slideshow__vcr-container--svg--polygon" d="m17.708 13-6.616-4.8v9.6z" />
        </svg>
      </button>
      <button id="prev" tabIndex={"0"} className="slideshow__vcr-container__vcr-button">
        <span className="accessibility--hidden">Select for previous slide</span>
        <svg id="prevslide" className="slideshow__vcr-container--svg-dbl-stroke" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
          <path className="slideshow__vcr-container--svg-dbl-stroke--path" d="m17.793 3.481-9.586 9.527M17.78 22.519l-9.573-9.511" />
        </svg>
      </button>
      <span>&nbsp;&nbsp;&nbsp;</span>
      <button id="next" tabIndex={"0"} className="slideshow__vcr-container__vcr-button">
        <span className="accessibility--hidden">Select for next slide</span>
        <svg id="nextslide" className="slideshow__vcr-container--svg-dbl-stroke" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
          <path className="slideshow__vcr-container--svg-dbl-stroke--path" d="m8.207 3.481 9.586 9.527M8.22 22.519l9.573-9.511" />
        </svg>
      </button>
      <button id="fullscreen" tabIndex={"0"} className="slideshow__vcr-container__vcr-button">
        <span className="accessibility--hidden">Select to toggle full screen</span>
        <svg id="showFullscreen" className="slideshow__vcr-container--svg-dbl-stroke" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
          <path className="slideshow__vcr-container--svg-dbl-stroke--path" d="M19.494 25h5.505M19.494 1H25M1 1h5.501M1 25v-5.503M1 25h5.507M1 6.506V1M25 6.506V1M24.999 25v-5.503" />
        </svg>
        <svg id="exitFullscreen" className="slideshow__vcr-container--svg-dbl-stroke" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
          <path className="slideshow__vcr-container--svg-dbl-stroke--path" d="M19.495 25.001v-5.505M19.494 1v5.506M6.504 6.504V1.002M6.505 19.495H1.002M6.505 19.495v5.507M.998 6.504h5.506M25 6.506h-5.506M19.495 19.496h5.502" />
        </svg>
      </button>
    </div>
  )
}

export default SlideShowVcrButtons
