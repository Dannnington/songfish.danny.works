import "./css/Core.css";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

const NavStyle = { color: "var(--black)", textDecoration: "none" };

function Core() {
  return (
    <BrowserRouter>
      <nav className="Nav">
        <input type="checkbox" id="nav" style={{marginLeft: "2.5%"}} />
        <label for="nav" className="Nav-Name"><NavLink to="/home" style={NavStyle}>Songfish</NavLink></label>
        <ul className="Nav-Menu">
          <li><h1 className="Nav-Text"><NavLink to="/home" style={NavStyle}>Home</NavLink></h1></li>
          <li><h2 className="Nav-Text">Commands</h2></li>
          <li><h2 className="Nav-Text">Apply for access</h2></li>
        </ul>
      </nav>
    </BrowserRouter>
  );
}

export default Core;
