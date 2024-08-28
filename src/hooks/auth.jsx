import { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../services/api';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [data, setData] = useState({});

    async function signIn({ email, password }) {
        try {
            const response = await api.post('/sessions', { email, password });
            const { user, token } = response.data;

            localStorage.setItem('@foodexplorer:user', JSON.stringify(user));
            localStorage.setItem('@foodexplorer:token', token);

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setData({ user, token });
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert('Error SignIn');
            }
        }
    }

    function signOut() {
        localStorage.removeItem('@foodexplorer:token');
        localStorage.removeItem('@foodexplorer:user');

        setData({});
    }

    // async function createDish({ dish, imageFile }) {
    //     try {
    //         await api.post(`/dishes/`, dish);
    //         localStorage.setItem("@foodexplorer:dish", JSON.stringify(dish));

    //         setData({ dish, token: data.token });
    //         alert("Dish successfully created")
    //     } catch (error) {
    //         if (error.response) {
    //             console.error('Error response data:', error.response.data);
    //             alert(error.response.data.message || 'Error creating dish');
    //         } else {
    //             console.error('Error message:', error.message);
    //             alert('Error creating dish');
    //         }
    //     }
    // }

    // async function updateDish({ dish, imageFile }) {
    //     try {
    //         await api.put(`/dishes/${dish.id}`, dish);
    //         localStorage.setItem("@foodexplorer:dish", JSON.stringify(dish));

    //         setData({ dish, token: data.token });
    //         alert("Dish successfully updated")

    //     } catch (error) {
    //         if (error.response) {
    //             alert(error.response.data.message);
    //         } else {
    //             alert("Error update dish");
    //         }
    //     }
    // }

    useEffect(() => {
        const token = localStorage.getItem('@foodexplorer:token');
        const user = localStorage.getItem('@foodexplorer:user');

        if (token && user) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setData({
                token,
                user: JSON.parse(user),
            });
        }
    }, []);

    return (
        <AuthContext.Provider
            value={{
                signIn,
                signOut,
                user: data.user,
                // updateDish,
                // createDish,
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
