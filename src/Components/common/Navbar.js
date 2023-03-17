import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css"

export default function Navbar() {
  const [showFilters, setShowFilters] = useState(false);
  const navigate = useNavigate();
  let search = "";
  let sortingBy = "relevance";
  let quantity = "20";
  let safeSearch = "moderate";

  //functions for getting the values from the inputs
  function textChange(event) {
    search = event.target.value;
  }

  function quantityChange(event) {
    quantity = event.target.value;
  }

  function sortChange(event) {
    sortingBy = event.target.value;
  }

  function safeSearchChange(event) {
    safeSearch = event.target.value;
  }

  //when the search form is submitted, navigate to the page with the videos
  function searchSubmit(event) {
    event.preventDefault();
    event.target.searchbox.value = "";
    navigate(`/videos/${encodeURIComponent(search)}&maxResults=${quantity}&order=${sortingBy}&safeSearch=${safeSearch}`);
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
        className="search-input"
        type="search" 
        onChange={textChange}
        placeholder="Search..." 
        id="searchbox" 
        name="searchbox"/>

      <button className="submit" type="submit">Search</button>

      <button className="filters-button" onClick={showOrHideFilters}>{showFilters ? "Hide Filters" : "Show Filters"}</button>

      {showFilters ? <div className="filters">
        <p><label htmlFor="quantity">Quantity:</label>
        <input 
          type="number"
          min="5"
          max="50"
          id="quantity"
          name="quantity"
          defaultValue="20"
          onChange={quantityChange}/></p>

        <p><label htmlFor="sortby">Sort By:</label>
        <select id="sortby" name="sortby" defaultValue="relevance" onChange={sortChange}>
          <option value="relevance">Relevance</option>
          <option value="date">Date</option>
          <option value="rating">Rating</option>
          <option value="title">Title</option>
        </select></p>

        <p><label htmlFor="safe-search">Safe Search:</label>
        <select id="safe-search" name="safe-search" defaultValue="moderate" onChange={safeSearchChange}>
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