import React from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';

import Nav from "../Nav";
import Home from "../pages/Homepage";
import Search from "../pages/SearchPage";
import ParkPage from "../pages/ParkPage";
import "../../styles/main.scss";

function App() {
    return (
        <Router>
            <header className="app-header">
                <Nav />
            </header>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/state=:stateId" component={Search} />
                <Route path="/parks=:parkId" component={ParkPage} />
            </Switch>
        </Router>


    )
}

export default App
