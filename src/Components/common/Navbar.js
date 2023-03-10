import { NavLink } from "react-router-dom";

export default function Navbar() {

  return(<div classname="navbar">
    YouTube
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>

    <form>
      <input type="text"></input>
      <button type="submit">Search</button>
    </form>
    
  </div>);
}