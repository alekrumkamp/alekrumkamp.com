import React from 'react';
import Menu from "./Menu/Menu";
import Logo from "../../Logo/Logo";

const Top = (props) => {
    return (
        <div id="Top">
            <Logo/>
            <Menu/>
            {/*language=CSS*/}
            <style jsx>{`
                #Top {
                    padding-left: 5%;
                    padding-right: 5%;
                }
        `}</style>
        </div>
    );
}

export default Top;