import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

// const test = process.env.REACT_APP_YOUTUBE_API_KEY;

function App() {
  // console.log(test);
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos/:topic" element={<Videos />} />
          <Route path="/video/:id" element={<Video />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
