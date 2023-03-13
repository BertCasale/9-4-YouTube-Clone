import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMostPopular } from "../../Api/fetch";
import "./Home.css"

export default function Home() {
  const [popularVideos, setPopularVideos] = useState([]);

  useEffect(() => {
    getMostPopular()
    .then((response) => {
      setPopularVideos([...response.items]);
      console.log(response)
    })
    .catch((error) => {
      console.log(error);
    });
  }, [])


  return(<div className="Home">
    <div className="popular-videos">
      {popularVideos.map((video) => {
        return(<div
          className="pop-video-card"
          key={video.id}>
            
          <Link to={`/video/${video.id}`}>
            <img
              src={video.snippet.thumbnails.high.url}
              alt={video.snippet.title}
              width="200px"
            />
            <h3>{video.snippet.title}</h3>
            <h4>{video.snippet.channelTitle}</h4>
          </Link>

        </div>)
      })}
    </div>
  </div>);
}