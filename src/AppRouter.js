import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./scenes/Home/Home";
import Contact from "./scenes/Contact/Contact";
import About from "./scenes/About/About";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";

function AppRouter(props) {
    return (
        <Router>
            <div>

                <Header/>

                <Route path="/" component={Home} />
                <Route path="/contact" component={Contact} />
                <Route path="/about" component={About} />

                <Footer />
            </div>
        </Router>
    );
}

export default AppRouter;