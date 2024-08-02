import React, { createContext, useState, useEffect, Children }from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        isAuthenticated: false,
        user: null,
    });
 
    // const navigate = useNavigate();


    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setAuthState({ isAuthenticated: true, user: JSON.parse(storedUser) });
        }
    }, []);

    const login = (userData) => {
        setAuthState({ isAuthenticated: true, user: userData });
        localStorage.setItem('user', JSON.stringify(userData));
        // navigate('/');
    };

    const logout = () => {
        setAuthState({ isAuthenticated: false, user: null});
        localStorage.removeItem('user');
        // navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ authState, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
