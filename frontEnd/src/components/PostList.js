import React from 'react';
import usePosts from '../hooks/usePosts.js';
import PostItem from './PostItem.js';
import '../styles/PostList.css';

const PostList = () => {
    const { posts, loading, error } = usePosts();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="post-list">
            <h1>Blog Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post._id}><PostItem postId={post._id} /></li>
                ))}
            </ul>
        </div>
    );
};

export default PostList;