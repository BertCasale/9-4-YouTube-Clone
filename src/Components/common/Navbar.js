import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import ErrorMessage from "../errors/ErrorMessage";
import "./Navbar.css"

export default function Navbar({setOpaque}) {
  const [search, setSearch] = useState("");
  const [errorShown, setErrorShown] = useState(false);
  const navigate = useNavigate();

  //when the text changes, set the search state
  function textChange(event) {
    setSearch(event.target.value);
  }

  function showError() {
    setErrorShown(true);
    setOpaque(false);
  }

  //when the search form is submitted, navigate to the page with the videos
  function searchSubmit(event) {
    event.preventDefault();
    event.target.searchbox.value = "";
    navigate(`/videos/${encodeURIComponent(search)}`);
  }

  return(<div>

    <div className="navbar">
      <nav>
        <p>YouTube</p>
        <p className="home-link"><NavLink to="/">Home</NavLink></p>
        <p className="about-link"><NavLink to="/about">About</NavLink></p>
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
    </div>

    {/* remove this, for showing error message manually/testing purposes*/}
    <button onClick={showError}>open error message</button>

    
    {errorShown ? <ErrorMessage setErrorShown={setErrorShown} setOpaque={setOpaque}/>
    : null}

  </div>);
}