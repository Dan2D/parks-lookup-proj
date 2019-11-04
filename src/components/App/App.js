import React from 'react';

import Nav from "../Nav";
import Home from "../pages/Homepage";
import Search from "../pages/SearchPage";
import "../../styles/main.scss";

function App() {
    return (
        <div>
            <Nav />
            {/* <Home /> */}
            <Search />
        </div>
    )
}

export default App
