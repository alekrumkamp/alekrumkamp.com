import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./scenes/Home/Home";
import Contact from "./scenes/Contact/Contact";
import About from "./scenes/About/About";

function AppRouter(props) {
    return (
        <Router>
            <div>

            <Route path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />

            </div>
        </Router>
    );
}

export default AppRouter;