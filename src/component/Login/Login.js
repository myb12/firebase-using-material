import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase'

const Login = () => {
    const { signInUsingGoogle } = useFirebase();
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={signInUsingGoogle} style={{ cursor: 'pointer' }}>Sign In with Google</button>
            <br />
            <Link to="/register">New User?</Link>
        </div>
    );
};

export default Login;