import React from 'react';
import Logo from "../../Logo/Logo";
import Menu from "../Top/Menu/Menu";
import Hero from "../Hero/Hero";

const Header =(props) => {
    return (
        <div>
            <Logo/>
            <Menu/>
            <Hero/>
        </div>
    );
}

export default Header; 