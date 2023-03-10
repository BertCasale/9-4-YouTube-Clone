import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  //when the text changes, set the search state
  function textChange(event) {
    setSearch(event.target.value);
  }

  //when the search form is submitted, navigate to the page with the videos
  function searchSubmit(event) {
    event.preventDefault();
    event.target.searchbox.value = "";
    navigate(`/videos/${search}`);
  }

  return(<div className="navbar">
    <p>YouTube</p>
    <nav>
      <p><NavLink to="/">Home</NavLink></p>
      <p><NavLink to="/about">About</NavLink></p>
    </nav>

    <form className="search-form" onSubmit={searchSubmit}>
      <input 
        type="text" 
        onChange={textChange}
        placeholder="Search..." 
        id="searchbox" 
        name="searchbox"></input>
      <button type="submit">Search</button>
    </form>
    
  </div>);
}