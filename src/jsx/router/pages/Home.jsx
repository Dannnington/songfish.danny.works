import "../../css/Home.css";
import UtilCentre from "../../componentry/Centre";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import Core from "../../Core";
import { NavLink } from "react-router-dom";
const avatarURL = "https://cdn.discordapp.com/avatars/461995836063088652/8a11573247864ec25b9a922e274c9941.webp?size=512";

export default function NavHome() {
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", justifySelf: "center", width: "100%" }}>
            <UtilCentre>
                <img className="Home-Avatar" src={avatarURL} height="250vh" alt="Songfish avatar"></img>
            </UtilCentre>
            <UtilCentre column>
                <h1 className="Title">Songfish</h1>
                <h2 className="Tagline">The only audio playback Discord bot you'll ever need.</h2>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <a style={Core.LinkStyle} href="https://github.com/Dannnington/songfish" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="2x" className="Home-Icon" style={{ marginRight: "20%", marginLeft: "-20%" }} />
                    </a>
                    <NavLink to="/apply" styles={Core.LinkStyle}>
                        <FontAwesomeIcon icon={faPlusCircle} style={{ marginLeft: "20%", marginRight: "-20%" }} className="Home-Icon" size="2x" />
                    </NavLink>
                </div>
            </UtilCentre>
        </div>
    );
};