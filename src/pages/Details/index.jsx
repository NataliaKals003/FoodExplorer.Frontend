import { Container, Content, TagsContainer } from './style.js';
import { Header } from '../../components/Header/index.jsx';
import { ButtonText } from '../../components/ButtonText/index.jsx';
import { Tag } from '../../components/Tag/index.jsx';
import { Amount } from '../../components/Amount/index.jsx';
import { Button } from '../../components/Button/index.jsx';
import { Footer } from '../../components/Footer/index.jsx';
import { IoChevronBack } from 'react-icons/io5';
import { PiReceiptBold } from 'react-icons/pi';
import { useNavigate, useParams } from 'react-router-dom';
import { routes } from '../../routes/routes.js';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth.jsx';

export function Details() {
    const { user } = useAuth();

    // const userAdmin = user?.role === 'admin';
    const userCustomer = user?.role === 'customer';

    const navigate = useNavigate();

    const [quantity, setQuantity] = useState(0);

    const [data, setData] = useState(null);
    const { id } = useParams();

    // console.log('dish', dish);

    useEffect(() => {
        const fetchDish = async () => {
            try {
                const response = await api.get(`/dishes/${id}`);
                console.log('response', response);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching dish:', error);
            }
        };

        fetchDish();
    }, [id]);

    const handleIncludeClick = async () => {
        try {
            await api.post('/orderDishes', {
                dishId: data.id,
                quantity: quantity,
            });

            setQuantity(0);

            // navigate('/order');
        } catch (error) {
            console.error('Erro ao adicionar prato à ordem:', error);
        }
    };

    const handleEditDishClick = () => {
        navigate(`/dish/${id}`);
    };

    return (
        <Container>
            <Header />
            <ButtonText
                onClick={() => navigate(routes.home)}
                className="backButton"
                icon={IoChevronBack}
                title="back"
            />
            {data && (
                <Content>
                    <img src={data.image} alt={data.image} />
                    <div className="text-content">
                        <h1>{data.name}</h1>
                        <p>{data.description}</p>
                        <TagsContainer>
                            {data.ingredients.map((ingredient, index) => {
                                return <Tag key={index} title={ingredient} />;
                            })}
                        </TagsContainer>
                        <div className="bottom-content">
                            {userCustomer && (
                                <Amount
                                    className="amount"
                                    value={quantity}
                                    onChange={(newQuantity) => setQuantity(newQuantity)}
                                />
                            )}
                            <Button className="include">
                                {userCustomer ? (
                                    <span className="text-desktop" onClick={handleIncludeClick}>
                                        Include ∙ $ {data.price}{' '}
                                    </span>
                                ) : (
                                    <span onClick={handleEditDishClick} className="text-desktop">
                                        Edit dish
                                    </span>
                                )}
                                {userCustomer ? (
                                    <span className="text-mobile">
                                        <PiReceiptBold className="icon" size={15} /> order ∙ $ {data.price}
                                    </span>
                                ) : (
                                    <span onClick={handleEditDishClick} className="text-mobile">
                                        Edit dish
                                    </span>
                                )}
                            </Button>
                        </div>
                    </div>
                </Content>
            )}
            <Footer />
        </Container>
    );
}
