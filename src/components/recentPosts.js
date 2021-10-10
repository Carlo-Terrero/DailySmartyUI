import React, { Component } from 'react';

export default class RecentPosts extends Component {
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