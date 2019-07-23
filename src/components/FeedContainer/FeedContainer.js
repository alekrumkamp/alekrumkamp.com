import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import Post from '../Post/Post'

export default class FeedContainer extends Component {
    constructor() {
        super()
        this.state = {
            articles: []
        }
    }

    componentDidMount() {
        const articles = [];
        this.fetchFeed()
            .then(feed => {
                feed.forEach(article => {
                    articles.push(<Post key="w" title={article.title} img={article.imageUrl} subtitle={article.shortDescription} />)
                })
                this.setState({ articles: articles })
            })
    }

    fetchFeed() {
        return fetch('https://medium-feed-full.alekrumkamp.workers.dev')
            .then(res => res.json())
            .then(res => res.data.posts)
    }

    render() {
        return (
            <div id="FeedContainer">
                {this.state.articles}
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