import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css"

export default function Navbar() {
  const [search, setSearch] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const navigate = useNavigate();

  //when the text changes, set the search state
  function textChange(event) {
    setSearch(event.target.value);
  }

  //when the search form is submitted, navigate to the page with the videos
  function searchSubmit(event) {
    event.preventDefault();
    event.target.searchbox.value = "";
    navigate(`/videos/${encodeURIComponent(search)}`);
  }

  function showOrHideFilters() {
    setShowFilters(!showFilters);
  }

  return(<div className="navbar">
    <nav>
      <p>YouTube</p>
      <p className="home-link"><NavLink to="/">Home</NavLink></p>
      <p className="about-link"><NavLink to="/about">About</NavLink></p>
    </nav>

    <form className="search-form" onSubmit={searchSubmit}>
      <input 
        type="search" 
        onChange={textChange}
        placeholder="Search..." 
        id="searchbox" 
        name="searchbox"/>

      <button className="filters-button" onClick={showOrHideFilters}>{showFilters ? "Hide Filters" : "Show Filters"}</button>
      {showFilters ? <div className="filters">
        <label for="quantity">Quantity:</label>
        <input 
          type="number"
          min="5"
          max="50"
          id="quantity"
          name="quantity"
          defaultValue="20"/>

        <label for="sortby"></label>
        <select id="sortby" name="sortby">
          <option Value="Relevance" selected>Relevance</option>
          <option Value="Date">Date</option>
          <option Value="Rating">Rating</option>
          <option Value="Title">Title</option>
        </select>

        <label for="safe-search">Safe Search</label>
        <select id="safe-search" name="safe-search">
          <option Value="moderate" selected>Moderate</option>
          <option Value="none">None</option>
          <option Value="strict">Strict</option>
        </select>

        <button type="submit">Search</button>
      </div>
      : null}
      
    </form>
  </div>

  );
}