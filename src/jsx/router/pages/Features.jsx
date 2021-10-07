import "../../css/Features.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRunning, faNewspaper, faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
const Left = { textAlign: "left" };
const Right = { textAlign: "right" };

export default function NavFeatures() {
    return (
        <div style={{ display: "flex", justifyItems: "flex-start", flexDirection: "column", paddingLeft: "5%", paddingRight: "5%" }}>
                <div className="Features-Title">
                    <FontAwesomeIcon icon={faRunning} size="2x" />
                    <h1 className="Title" style={Left}>
                        Fast.
                    </h1>
                </div>
                <h2 className="Body Features-Body" style={Left}>Our voice servers are located in Sydney, Australia, and with our main cluster being based in nearby Singapore - a mere 90 milliseconds away - you are guaranteed to have a smooth experience listening to music.</h2>
                
                <div className="Features-Title">
                    <FontAwesomeIcon icon={faNewspaper} size="2x" />
                    <h1 className="Title" style={Left}>
                        Minimalistic.
                    </h1>
                </div>
                <h2 className="Body Features-Body" style={Right}>Songfish has an extremely minimalist interface - meaning that you only get the information that you need. That way, you can focus on whatever you're doing, no distractions from Songfish.</h2>

                <div className="Features-Title">
                    <FontAwesomeIcon icon={faClipboardCheck} size="2x" />
                    <h1 className="Title" style={Left}>
                        Easy to use.
                    </h1>
                </div>
                <h2 className="Body Features-Body" style={Left}>No need for a help command. Simply type a slash in your Discord message box, and a directory containing all of Songfish's commands will appear. (If any of your other bots have slash commands, they'll appear here too.)</h2>
        </div>
    );
};