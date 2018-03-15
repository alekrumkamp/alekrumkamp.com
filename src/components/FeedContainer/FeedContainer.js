import React, {Component} from 'react';
import fetch from 'isomorphic-fetch';

export default class FeedContainer extends Component{

    componentDidMount(){
        this.fetchFeed();
    }

    async fetchFeed() {
        let req = await fetch('https://umr8fj85l5.execute-api.us-east-1.amazonaws.com/prod/medium-alekrumkamp-feed');
        let json = await req.json();
        let articles = await json.payload.references.Post;
        console.log(articles);

        Object.keys(articles)
            .forEach((key,index) => {
                console.log(key)
                console.log(articles.key.title)
        })
        return articles;
    }

    render() {
        return (
            <div id="FeedContainer">

                {/*language=CSS*/}
                <style jsx>{`
                    #FeedContainer {
                        background: red;
                    }
                `}</style>
            </div>
        );
    }
}