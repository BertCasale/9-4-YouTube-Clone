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

  function showOrHideFilters(event) {
    event.preventDefault();
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

      <button type="submit">Search</button>

      <button className="filters-button" onClick={showOrHideFilters}>{showFilters ? "Hide Filters" : "Show Filters"}</button>

      {showFilters ? <div className="filters">
        <p><label htmlFor="quantity">Quantity:</label>
        <input 
          type="number"
          min="5"
          max="50"
          id="quantity"
          name="quantity"
          defaultValue="20"/></p>

        <p><label htmlFor="sortby">Sort By:</label>
        <select id="sortby" name="sortby" defaultValue="Relevance">
          <option value="Relevance">Relevance</option>
          <option value="Date">Date</option>
          <option value="Rating">Rating</option>
          <option value="Title">Title</option>
        </select></p>

        <p><label htmlFor="safe-search">Safe Search:</label>
        <select id="safe-search" name="safe-search" defaultValue="Moderate">
          <option value="moderate">Moderate</option>
          <option value="none">None</option>
          <option value="strict">Strict</option>
        </select></p>

      </div>
      : null}
      
    </form>
  </div>

  );
}