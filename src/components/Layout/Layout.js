import React from 'react';
import Top from "./Top/Top";
import Hero from "./Hero/Hero";
import Footer from "./Footer/Footer";
import Content from "./Content/Content";

const Layout = (props) => {
    return (
        <div id="Layout">
            <Top/>
            <Hero/>
            <Content>
                {props.children}
            </Content>
            <Footer/>

            {/*language=CSS*/}
            <style jsx>{`
                :global(body) {
                    margin:0px;
                }

                #Layout {
                    font-family: 'sans-serif','tahoma';
                }
            `}</style>
        </div>
    );
}

export default Layout;