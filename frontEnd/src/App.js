import React from 'react';
import UserProfile from './components/UserProfile.js';
import PostList from './components/PostList.js';

const App = () => {
    return (
        <div>
            <UserProfile />
            <PostList />
        </div>
    );
};

export default App;