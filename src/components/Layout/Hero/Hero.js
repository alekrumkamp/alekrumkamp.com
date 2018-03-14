import React from 'react';

const Hero = (props) => {
    return (
        <div id="Hero">
            Hero
            {/*language=CSS*/}
            <style jsx>{`
                #Hero {
                    background: darkred;
                    height: 18em;
                    width: 100%;
                }
            `}</style>
        </div>
    );
}

export default Hero; 