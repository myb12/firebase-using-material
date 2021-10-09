import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Shipping = () => {
    const { user } = useFirebase();
    return (
        <div>
            <h1>This is Shipping</h1>
        </div>
    );
};

export default Shipping;