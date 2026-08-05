import React, { useContext } from "react"
import StateContext from "../StateContext.js"
import LiteYTEmbed from "../assets/scripts/modules/lite-yt-embed.js"

function LiteYouTube(props) {
  const appState = useContext(StateContext)
  let liteYTEmbed = new LiteYTEmbed()

  appState.backgroundStyle == "light" ? (document.body.classList.remove("dark"), document.body.classList.add("light")) : (document.body.classList.remove("light"), document.body.classList.add("dark"))

  return (
    <div className="wrapper--album__video">
      <div className="lyt-video">
        <lite-youtube class="lyt-video--pull-left" videoid={props.videoId} playlabel="">
          {props.caption2 ? (
            <span className="lyt-video__video-caption">
              {props.caption} <br />
              {props.caption2}
            </span>
          ) : (
            <span className="lyt-video__video-caption">{props.caption}</span>
          )}
        </lite-youtube>
      </div>
    </div>
  )
}

export default LiteYouTube
