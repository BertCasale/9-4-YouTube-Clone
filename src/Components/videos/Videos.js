import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTopic } from "../../Api/fetch";
import "./Videos.css"

export default function Videos() {
  const { topic } = useParams();
  let [searchResults, setSearchResults] = useState([]);

  //fetch the search results once when the page renders
  useEffect(() => {
    getTopic(topic)
    .then((response) => {
      setSearchResults([...response.items]);
    })
  }, []);


  return(<div className="search-results">
    {/* {console.log(searchResults)} */}
    {searchResults.map((video) => {
      return(<div 
        className="video-card"
        key={video.id.videoId}>
        
        <Link to={`/video/${video.id.videoId}`}>
          <img
            src={video.snippet.thumbnails.high.url}
            alt={video.snippet.title}
            height="150px"
          />
          <h3>{video.snippet.title}</h3>
          <h4>{video.snippet.channelTitle}</h4>
        </Link>

      </div>);
    })}
  </div>);
}