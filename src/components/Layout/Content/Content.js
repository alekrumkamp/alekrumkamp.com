import React from 'react';

const Content = (props) => {
    return (
        <div>
            {props.children}
            {/*language=CSS*/}
            <style jsx>{`
                #Content {
                    padding-left: 5%;
                    padding-right: 5%;
                }
        `}</style>
        </div>
    );
}

export default Content;