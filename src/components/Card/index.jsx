import { Container, Content, Footer } from './styles';
import { IoIosHeartEmpty } from 'react-icons/io';
import { IoIosHeart } from 'react-icons/io';
import { SlPencil } from 'react-icons/sl';
import { Amount } from '../Amount';
import { Button } from '../Button';
import { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

export function Card({ dish, onClick, isCurrentlyFavourite }) {
    const { user } = useAuth();

    const userAdmin = user.role === 'admin';
    const userCustomer = user.role === 'customer';

    const navigate = useNavigate();

    const [quantity, setQuantity] = useState(0);

    const handleIncludeClick = async () => {
        try {
            await api.post('/orderDishes', {
                dishId: dish.id,
                quantity: quantity,
            });

            setQuantity(0);

            // navigate('/order');
        } catch (error) {
            console.error('Erro ao adicionar prato à ordem:', error);
        }
    };

    const handleEditDishClick = (id) => {
        navigate(`/dish/${id}`);
    };

    const [isFavourite, setIsFavourite] = useState(isCurrentlyFavourite);

    const handleFavouriteClick = async (e) => {
        e.stopPropagation();
        const newValue = !isFavourite;
        setIsFavourite(newValue);

        if (newValue) {
            console.log('eh favorito');
            try {
                const requestBody = {
                    dishId: dish.id,
                };

                await api.post('/favourites', requestBody);
            } catch (error) {
                console.error('Failed to add to favourites', error);
            }
        } else if (!newValue) {
            try {
                await api.delete(`/favourites/${dish.id}`);
            } catch (error) {
                console.error('Failed to remove from favourites', error);
            }
        }
    };

    return (
        <Container>
            <Content>
                {userCustomer &&
                    (isFavourite ? (
                        <IoIosHeart className="heartFavourite" onClick={handleFavouriteClick} />
                    ) : (
                        <IoIosHeartEmpty className="heart" onClick={handleFavouriteClick} />
                    ))}

                {userAdmin && <SlPencil className="edit" onClick={() => handleEditDishClick(dish.id)} />}
                <img src={dish.image} alt={dish.image} onClick={onClick} />
                <h1 onClick={onClick}>{`${dish.name} >`}</h1>
                <p>{dish.description}</p>
                {userAdmin && <span className="priceAdmin">$ {dish.price}</span>}
                {userCustomer && <span className="priceCustomer">$ {dish.price}</span>}
            </Content>
            {userCustomer && (
                <Footer>
                    <Amount
                        className="cardAmount"
                        value={quantity}
                        onChange={(newQuantity) => setQuantity(newQuantity)}
                    />
                    <Button className="cardButton" onClick={handleIncludeClick}>
                        include
                    </Button>
                </Footer>
            )}
        </Container>
    );
}
