import React from "react"
import LiteYouTube from "../LiteYouTube"

function Video(props) {
  return <LiteYouTube videoId={props.videoId} caption={props.caption} caption2={props.caption2} />
}

export default Video
