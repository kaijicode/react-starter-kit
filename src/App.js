import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Homepage} from "./pages/Homepage";
import {Users} from "./pages/Users/Users";
import {Navigation} from "./components/Navigation";
import CssBaseline from "@material-ui/core/CssBaseline";
import {Login} from "./pages/Auth/Login";


export const App = () => {
    return (
        <React.Fragment>
            <CssBaseline />

            <Router>
                <Navigation/>

                <Switch>
                    <Route path="/" exact={true}>
                        <Homepage/>
                    </Route>

                    <Route path="/users">
                        <Users/>
                    </Route>

                    <Route path="/login">
                        <Login/>
                    </Route>
                </Switch>
            </Router>
        </React.Fragment>
    )
}
