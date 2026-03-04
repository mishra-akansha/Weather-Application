import React from 'react';
import usePosts from '../hooks/usePosts.js';
import '../styles/PostItem.css';

const PostItem = ({ postId }) => {
    const { posts } = usePosts();
    const post = posts.find(p => p._id === postId);

    if (!post) return <div>Post not found.</div>;

    return (
        <div className="post-item">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>Author: {post.author.name}</p>
        </div>
    );
};

export default PostItem;