import { useState, useEffect } from 'react';
import { fetchComments, createComment } from '../services/apiService.js';

const useComments = () => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getComments = async () => {
            try {
                const data = await fetchComments();
                setComments(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        getComments();
    }, []);

    const addComment = async (commentData) => {
        try {
            const newComment = await createComment(commentData);
            setComments((prevComments) => [...prevComments, newComment]);
        } catch (err) {
            setError(err);
        }
    };

    return { comments, loading, error, addComment };
};

export default useComments;