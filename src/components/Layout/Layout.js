import React from 'react';
import Top from "./Top/Top";
import Hero from "./Hero/Hero";
import Footer from "./Footer/Footer";

const Layout = (props) => {
    return (
        <div id="Layout">
            <Top/>
            <Hero/>
            {props.children}
            <Footer/>

            {/*language=CSS*/}
            <style jsx>{`
                #Layout {
                    font-family: 'sans-serif','tahoma';
                }
            `}</style>
        </div>
    );
}

export default Layout;