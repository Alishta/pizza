import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
    const [userName, setUserName] = useState('');
    return (
        <AuthContext.Provider value={{ userName, setUserName }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
