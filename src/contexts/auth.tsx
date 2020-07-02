import React, { createContext, useState, useEffect, useContext } from 'react';
import * as service from '../services/auth';
// import { api } from '../services/api';

interface AuthContextData {
    signed: boolean;
    user: object | null;
    singIn(name: string, password: string): Promise<number>;
    singOut(): number;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function useAuth(){
    return useContext(AuthContext);
}

export const AuthProvider: React.FC = ({ children }) => {
    const [ user, setUser ] = useState<object | null>(null);

    useEffect(() => {
        // const storageUser = localStorage.getItem('@NAME_STORAGE:user');
        // const storageToken = localStorage.getItem('@NAME_STORAGE:token');
        
        // if (storageUser && storageToken) {
        //     setUser(JSON.parse(storageUser));
        //     api.defaults.headers['Authorization'] = `Bearer ${storageToken}`;
        // }
    }, []);

    async function singIn(name: string, password: string) {
        
        try {
            const response = await service.signIn(name, password);
            console.log(response.data);
            // if (response) {
            //     setUser(response.data.user);
        
            //     api.defaults.headers['Authorization'] = `Bearer ${response.data.access}`;
            //     localStorage.setItem('@NAME_STORAGE:user', JSON.stringify(response.data.user));
            //     localStorage.setItem('@NAME_STORAGE:token', response.data.access);
                
            //     return response.status;
            // }

            return 401;
        } catch (error) {
            console.log(error);
        }
        
        return 401;
    }

    function singOut() {
        setUser(null);
        localStorage.clear();

        return 200;
    }

    return (
        <AuthContext.Provider value={{ 
            signed: Boolean(user),
            user,
            singIn,
            singOut,
        }}>
            { children }
        </AuthContext.Provider>
    );
}