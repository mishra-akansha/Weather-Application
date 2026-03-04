import { useState, useEffect } from 'react';
import { fetchPosts, createPost } from '../services/apiService.js';

const usePosts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const data = await fetchPosts();
                setPosts(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        getPosts();
    }, []);

    const addPost = async (postData) => {
        try {
            const newPost = await createPost(postData);
            setPosts((prevPosts) => [...prevPosts, newPost]);
        } catch (err) {
            setError(err);
        }
    };

    return { posts, loading, error, addPost };
};

export default usePosts;