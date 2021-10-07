import { Switch, Route, NavLink } from "react-router-dom";
import NavHome from "./pages/Home";
import NavFeatures from "./pages/Features";
import NavApply from "./pages/Apply";

export default function RouterSwitch() {
    return (
        <div className="Page-Body">
            <Switch>
                <Route exact path="/">
                    <NavHome />
                </Route>

                <Route exact path="/features">
                    <NavFeatures />
                </Route>

                <Route exact path="/apply">
                    <NavApply />
                </Route>
            </Switch>
        </div>
    );
};