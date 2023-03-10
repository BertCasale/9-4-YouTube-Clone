import { NavLink } from "react-router-dom";

export default function Navbar() {

  return(<div className="navbar">
    <p>YouTube</p>
    <nav>
      <p><NavLink to="/">Home</NavLink></p>
      <p><NavLink to="/about">About</NavLink></p>
    </nav>

    <form>
      <input type="text"></input>
      <button type="submit">Search</button>
    </form>
    
  </div>);
}