import axios from 'axios';

const api = axios.create({
    baseURL: 'https://69a6b335de2ff6f250d4e55b-api-capstone.myanatomy.in',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const fetchUsers = async () => {
    const response = await api.get('/api/users');
    return response.data;
};

export const createUser = async (userData) => {
    const response = await api.post('/api/users', userData);
    return response.data;
};

export const fetchPosts = async () => {
    const response = await api.get('/api/posts');
    return response.data;
};

export const createPost = async (postData) => {
    const response = await api.post('/api/posts', postData);
    return response.data;
};