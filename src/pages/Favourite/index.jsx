import { Header } from '../../components/Header/index.jsx';
import { Container, Content, MyFavouriteContainer, MyFavourite } from './style.js';
import { ButtonText } from '../../components/ButtonText/index.jsx';
import { Footer } from '../../components/Footer/index.jsx';
import { useAuth } from '../../hooks/auth';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';

export function Favourite() {
    const { user } = useAuth();
    // const userCustomer = user.role === 'customer';

    const [favourites, setFavourites] = useState([]);

    async function fetchFavourites() {
        try {
            const response = await api.get('/favourites');
            setFavourites(response.data);
        } catch (error) {
            console.error('Error fetching favourites', error);
        }
    }

    useEffect(() => {
        fetchFavourites();
    }, []);

    async function handleRemoveFavourite(favouriteToRemove) {
        if (favouriteToRemove) {
            const confirmRemove = window.confirm(`Do you want to remove ${favouriteToRemove.name}?`);
            if (confirmRemove) {
                setFavourites((prevState) => prevState.filter((favourite) => favourite.id !== favouriteToRemove.id));

                try {
                    await api.delete(`/favourites/${favouriteToRemove.id}`);
                } catch (error) {
                    console.error('Failed to remove favourite:', error);
                }
            }
        }
    }

    return (
        <Container>
            <Header />
            <Content>
                <h1>My Favourites</h1>
                <MyFavouriteContainer>
                    {favourites.length > 0 ? (
                        favourites.map((dish, index) => (
                            <MyFavourite key={dish.dishId || index}>
                                <img src={dish.image} alt={dish.name} />
                                <div className="favourite-wrap">
                                    <h2>{dish.name}</h2>
                                    <ButtonText
                                        className="removeFavourite"
                                        title="Remove from Favorites"
                                        onClick={() => handleRemoveFavourite(dish)}
                                    />
                                </div>
                            </MyFavourite>
                        ))
                    ) : (
                        <p>No favourites added yet.</p>
                    )}
                </MyFavouriteContainer>
            </Content>
            <Footer />
        </Container>
    );
}
