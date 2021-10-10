import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from '../actions';
//import SearchBar from './searchBar';

class RecentPosts extends Component {

    componentDidMount() {
        this.props.fetchRecentPosts();
    }

    render() {
        return (
            <div className="recent-posts">
                <div className="recent-posts_wrapper">
                    <div className="recent-posts_heading">
                        <ul className="recent-posts_posts">
                            <li>recent posrt 0</li>
                            <li>recent posrt 1</li>
                            <li>recent posrt 2</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, actions) (RecentPosts);