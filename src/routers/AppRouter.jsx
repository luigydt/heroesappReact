import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route    
} from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashBoardRoute } from "./DashBoardRoute";

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login" component={LoginScreen} />
                    <Route path="/" component={DashBoardRoute} />
                </Switch>
            </div>
        </Router >
    )
}
