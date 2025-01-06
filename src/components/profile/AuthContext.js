// src/context/AuthContext.js

import React, { createContext, useContext, useState } from 'react';

// Create the AuthContext
const AuthContext = createContext();

// Create a custom hook to use the AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
};

// Create the AuthProvider component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // State to hold the current user

    const login = (username) => {
        // Simulate a login by setting the user state
        setUser({ username });
    };

    const logout = () => {
        // Simulate a logout by clearing the user state
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
