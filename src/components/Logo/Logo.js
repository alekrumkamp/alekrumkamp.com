import React from 'react';

const Logo = (props) =>{
    return (
        <div className="Logo">
            Logo
            {/*language=CSS*/}
            <style jsx>{`
                .Logo {
                    background: midnightblue;
                    display: inline-block;
                    width: 14em;
                }
            `}</style>
        </div>
    );
}

export default Logo;