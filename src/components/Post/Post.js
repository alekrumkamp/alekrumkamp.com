import React from 'react';

const Post = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <img src={props.img} width="50%" />
            {props.subtitle}
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

export default Post;