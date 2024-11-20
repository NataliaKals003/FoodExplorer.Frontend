import { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../services/api';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [user, setUser] = useState(undefined);

    // Initialize auth
    useEffect(() => {
        const token = localStorage.getItem('@foodexplorer:token');
        const user = localStorage.getItem('@foodexplorer:user');

        // If there is auth details on local storage, use it.
        if (token && user) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setUser(JSON.parse(user));
            return;
        }

        setUser(null);
    }, []);

    async function signIn({ email, password }) {
        try {
            const response = await api.post('/sessions', { email, password });
            const { user, token } = response.data;

            localStorage.setItem('@foodexplorer:user', JSON.stringify(user));
            localStorage.setItem('@foodexplorer:token', token);

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setUser(user);
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert('Error SignIn');
            }
        }
    }

    async function signOut() {
        localStorage.removeItem('@foodexplorer:token');
        localStorage.removeItem('@foodexplorer:user');

        setUser(null);
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                signIn,
                signOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };
