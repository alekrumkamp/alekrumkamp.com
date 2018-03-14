import React from 'react';
import Layout from '../src/components/Layout/Layout';
import TweetContainer from "../src/components/TweetContainer/TweetContainer";
import FeedContainer from "../src/components/FeedContainer/FeedContainer";
import Profile from "../src/components/Profile/Profile";

export default (props) => {
    return (
        <Layout>
            <Profile/>
            <TweetContainer/>
            <FeedContainer/>
        </Layout>
    );
}