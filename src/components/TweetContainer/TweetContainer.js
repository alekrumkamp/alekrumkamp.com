import React from 'react';

const TweetContainer = (props) => {
    return (
        <div id="TweetContainer">
            tweet
            {/*language=CSS*/}
            <style jsx>{`
                #TweetContainer{
                    background: cornflowerblue;
                    width: 60%;
                }
        `}</style>
        </div>
    );
}

export default TweetContainer;