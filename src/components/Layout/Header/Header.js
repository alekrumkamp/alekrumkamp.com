import React from 'react';
import Logo from "../../Logo/Logo";
import Menu from "../Menu/Menu";
import Hero from "../Hero/Hero";

function Header(props) {
    return (
        <div>
            <Logo/>
            <Menu/>
            <Hero/>
        </div>
    );
}

export default Header; 