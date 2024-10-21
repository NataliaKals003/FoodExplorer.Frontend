import { Header } from '../../components/Header/index.jsx';
import { Container, Content, MyFavouriteContainer, MyFavourite } from './style.js';
import { ButtonText } from '../../components/ButtonText/index.jsx';
import { Footer } from '../../components/Footer/index.jsx';
import pizza from '../../assets/Screenshot_19.png';
import { useState } from 'react';

export function Favourite() {
    const value = [
        { id: 1, image: pizza, name: 'Salada Radish' },
        { id: 2, image: pizza, name: 'Torradas de Parma' },
        { id: 3, image: pizza, name: 'Spaguetti Gambe' },
        { id: 4, image: pizza, name: 'Spaguetti' },
        { id: 5, image: pizza, name: 'Pudim' },
        { id: 6, image: pizza, name: 'Macarons' },
        { id: 7, image: pizza, name: 'Musse de maracuja' },
        { id: 8, image: pizza, name: 'Bolo de damasco' },
        { id: 9, image: pizza, name: 'Pomo bourbon' },
        { id: 10, image: pizza, name: 'Salada Molla' },
    ];

    const [favourites, setFavourites] = useState(value);

    function handleRemoveFavourite(favouriteToRemove) {
        if (favouriteToRemove) {
            const removeFavourite = window.confirm(`Do you want to remove ${favouriteToRemove.name}?`);
            if (removeFavourite) {
                setFavourites((prevState) => prevState.filter((favourite) => favourite.id !== favouriteToRemove.id));
            }
        }
    }
    return (
        <Container>
            <Header />
            <Content>
                <h1>My favourites</h1>
                <MyFavouriteContainer>
                    {favourites.map((favourite) => (
                        <MyFavourite key={favourite.id}>
                            <img src={favourite.image} alt={favourite.name} />
                            <div className="favourite-wrap">
                                <h2>{favourite.name}</h2>
                                <ButtonText
                                    className="removeFavourite"
                                    title="Remove from Favorites"
                                    onClick={() => handleRemoveFavourite(favourite)}
                                />
                            </div>
                        </MyFavourite>
                    ))}
                </MyFavouriteContainer>
            </Content>
            <Footer />
        </Container>
    );
}
