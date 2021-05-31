import React, {createContext} from 'react';
import { useState } from 'react';

export const AuthContext = createContext({});


function AuthProvider({children}) {
    const [user, setUser] = useState({
        nome:'Felipe'
    });


    return(
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;