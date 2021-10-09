import React from 'react';
import useAuth from '../../hooks/useAuth';

const Profile = () => {
    const { user } = useAuth();
    return (
        <div>
            <br />
            <img src={user.photoURL} alt="" />
            <br />
            <span style={{ fontSize: 20, fontWeight: 700 }}>{user.displayName}</span>
            <br />
            <span>{user.email}</span>
        </div>
    );
};

export default Profile;