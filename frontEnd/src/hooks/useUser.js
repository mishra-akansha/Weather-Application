import { useState, useEffect } from 'react';
import { fetchUsers, createUser } from '../services/apiService.js';

const useUser = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const data = await fetchUsers();
                setUsers(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        getUsers();
    }, []);

    const addUser = async (userData) => {
        try {
            const newUser = await createUser(userData);
            setUsers((prevUsers) => [...prevUsers, newUser]);
        } catch (err) {
            setError(err);
        }
    };

    return { users, loading, error, addUser };
};

export default useUser;