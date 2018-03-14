import React from 'react';

function Menu(props) {
    return (
        <div id="Menu">
            MENU
            {/*language=CSS*/}
            <style jsx>{`
                #Menu {
                    background: red;
                    display: inline-block;
                    float: right;
                }
            `}</style>
        </div>
    );
}

export default Menu; 