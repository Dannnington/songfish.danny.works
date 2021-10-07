import "./css/Core.css";
import "./css/Util.css";
import "./css/Page.css";
import Switch from "./router/Switch";
import UtilFooter from "./componentry/Footer";
import { BrowserRouter, NavLink } from "react-router-dom";

const LinkStyle = { color: "var(--link)", textDecoration: "none" };
const NavStyle = { color: "var(--white)", textDecoration: "none" };

function Core() {
  let footerYear = new Date().getFullYear();
  if (footerYear > 2021) footerYear = `2021-${new Date().getFullYear()}`;

  let footerString = `${footerYear}, Hydrabank Studios.`;
  if (footerYear === 2021) footerString = `Hydrabank Studios, ${footerYear}.`;

  return (
    <BrowserRouter>
      <div className="bgImage" />
      <nav className="Nav">
        <label className="Nav-Name"><NavLink to="/" style={NavStyle}>Songfish</NavLink></label>
        <label className="Nav-Text"><NavLink to="/features" style={NavStyle}>Features</NavLink></label>
        <label className="Nav-Text"><NavLink to="/apply" style={NavStyle}>Apply</NavLink></label>
      </nav>

      <Switch />

      <UtilFooter style={{ visibility: "hidden", backgroundColor: "var(--transparent)" }}>
        <h1 className="Footer" style={{marginBottom: "0"}}>{footerString} Idea conceptualised by <a href="https://bean.codes" target="_blank" rel="noopener noreferrer" style={LinkStyle}>Dannington</a>.</h1>
        <h2 className="Footer">Hydrabank ❤️ OSS</h2>
      </UtilFooter>
    </BrowserRouter>
  );
};

Core.NavStyle = NavStyle;
Core.LinkStyle = LinkStyle;

export default Core;
