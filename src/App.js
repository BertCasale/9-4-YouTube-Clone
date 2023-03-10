import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./Components/common/Navbar";
import Home from "./Components/home/Home";
import Video from "./Components/videos/Video";
import Videos from "./Components/videos/Videos";
import About from "./Components/about/About";

// const test = process.env.REACT_APP_YOUTUBE_API_KEY;

function App() {
  // console.log(test);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos/:topic" element={<Videos />} />
          <Route path="/video/:id" element={<Video />} />
          <Route path="/about" element={<About />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
