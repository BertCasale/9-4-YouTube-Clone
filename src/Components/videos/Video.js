import { useParams } from "react-router-dom";
import Comments from "./Comments";
import YouTube from "react-youtube";
import "./Video.css"

export default function Video() {
  const { id } = useParams();
  const opts = {
    height: "360",
    width: "640",
    playerVars: {
      autoplay: 1
    }
  }

  return(<div className="Video">
    <YouTube videoId={id} opts={opts} className="youtube-video"/>
    <Comments />
    </div>
    );
}