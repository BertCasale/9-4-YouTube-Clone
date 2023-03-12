import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTopic } from "../../Api/fetch";
import "./Videos.css"
import ErrorMessage from "../errors/ErrorMessage";

export default function Videos() {
  const { topic } = useParams();
  let [searchResults, setSearchResults] = useState([]);
  const [errorShown, setErrorShown] = useState(false);

  //fetch the search results once when the page renders
  //if theres an error, show an error message
  useEffect(() => {
    try{getTopic(topic)
    .then((response) => {
      setSearchResults([...response.items]);
    })} catch (error) {
      console.log(error);
      setErrorShown(true);
    }
  }, [topic]);

  return(<div className="Videos">
    <div className="search-results">
      {searchResults.map((video) => {
        return(<div 
          className="video-card"
          key={video.id.videoId}>
          
          <Link to={`/video/${video.id.videoId}`}>
            <img
              src={video.snippet.thumbnails.high.url}
              alt={video.snippet.title}
              width="200px"
            />
            <h3>{video.snippet.title}</h3>
            <h4>{video.snippet.channelTitle}</h4>
          </Link>

        </div>);
      })}
    </div>
    
    {/* remove this after finalizing css */}
      <button onClick={() => setErrorShown(true)}>show error message</button>

      {errorShown ? <ErrorMessage setErrorShown={setErrorShown} />
      : null}
  </div>);
}