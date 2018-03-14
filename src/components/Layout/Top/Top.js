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

                }
        `}</style>
        </div>
    );
}

export default Top;