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

export function Card({ product, onClick }) {
    const { user } = useAuth();

    const userAdmin = user.role === 'admin';
    const userCustomer = user.role === 'customer';

    const navigate = useNavigate();

    const handleEditDishClick = (id) => {
        navigate(`/dish/${id}`);
    };

    const [isFavourite, setIsFavourite] = useState(false);

    const toggleFavourite = async (e) => {
        e.stopPropagation();
        setIsFavourite((prev) => !prev);

        if (!isFavourite) {
            try {
                await api.post('/favourites', {
                    dish_id: dishId,
                    user_id: userCustomer.id,
                });
            } catch (error) {
                console.error('Failed to add to favourites', error);
            }
        }
    };

    return (
        <Container>
            <Content>
                {userCustomer &&
                    (isFavourite ? (
                        <IoIosHeart className="heartFavourite" onClick={toggleFavourite} />
                    ) : (
                        <IoIosHeartEmpty className="heart" onClick={toggleFavourite} />
                    ))}

                {userAdmin && <SlPencil className="edit" onClick={() => handleEditDishClick(product.id)} />}
                <img src={product.image} alt={product.image} onClick={onClick} />
                <h1 onClick={onClick}>{`${product.name} >`}</h1>
                <p>{product.description}</p>
                {userAdmin && <span className="priceAdmin">R$ {product.price}</span>}
                {userCustomer && <span className="priceCustomer">R$ {product.price}</span>}
            </Content>
            {userCustomer && (
                <Footer>
                    <Amount className="cardAmount" value />
                    <Button className="cardButton">include</Button>
                </Footer>
            )}
        </Container>
    );
}
