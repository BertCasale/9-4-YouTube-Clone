import { useParams, useLocation } from "react-router-dom";
import Comments from "./Comments";
import YouTube from "react-youtube";
import "./Video.css"

export default function Video({comments, setComments}) {
  const location = useLocation();

  const urlPruner = (urlString, pruneCharacter = "/", pruneCount = 2) => {
      if (pruneCount === 0) {
          return urlString;
      }
      const loopReference = urlString.indexOf(pruneCharacter);
      const loopPrune = urlString.slice(loopReference + 1);
      pruneCount = pruneCount - 1;
      return urlPruner(loopPrune, pruneCharacter, pruneCount);
  }
  //setPrunedURL(urlPruner(location.pathname));

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
    <Comments comments={comments} setComments={setComments} />
    </div>
    );
}