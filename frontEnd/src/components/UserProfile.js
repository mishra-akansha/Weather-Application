import React from 'react';
import useUser from '../hooks/useUser.js';
import '../styles/UserProfile.css';

const UserProfile = () => {
    const { users, loading, error } = useUser();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="user-profile">
            <h1>User Profiles</h1>
            <ul>
                {users.map(user => (
                    <li key={user._id}>{user.name} - {user.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserProfile;