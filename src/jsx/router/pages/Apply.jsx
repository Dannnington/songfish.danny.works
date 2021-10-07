import UtilCentre from "../../componentry/Centre";
import ToggleDiv from "../../componentry/ToggleDiv";
import { faHardHat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavApply() {
    return (
        <div style={{ display: "flex", width: "100%", justifyItems: "center", flexDirection: "column", paddingLeft: "5%", paddingRight: "5%" }}>
                {/*ToggleDiv for closed applications*/}
                <ToggleDiv disabled>
                    <UtilCentre column>
                        <FontAwesomeIcon icon={faHardHat} size="6x" />
                        <h1 className="Title">We're closed for the time being.</h1>
                        <h2 className="Body">Songfish isn't currently accepting new applicants. Come back soon for more updates.</h2>
                    </UtilCentre>
                </ToggleDiv>
                {/*ToggleDiv for open applications*/}
                <ToggleDiv>

                </ToggleDiv>
        </div>
    );
};