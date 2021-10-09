import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const allAuth = useFirebase();

    return (
        <div>
            <AuthContext.Provider value={allAuth}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;