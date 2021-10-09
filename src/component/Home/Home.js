import React from 'react';
import useAuth from '../../hooks/useAuth';

const Home = () => {

    const { user } = useAuth();
    return (
        <div>
            <h1>This is home</h1>
            <h3>Welcome back {user.displayName}</h3>
        </div>
    );
};

export default Home;