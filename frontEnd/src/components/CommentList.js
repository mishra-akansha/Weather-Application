import React from 'react';
import useComments from '../hooks/useComments.js';
import '../styles/CommentList.css';

const CommentList = () => {
    const { comments, loading, error } = useComments();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="comment-list">
            <h1>Comments</h1>
            <ul>
                {comments.map(comment => (
                    <li key={comment._id}>{comment.content}</li>
                ))}
            </ul>
        </div>
    );
};

export default CommentList;