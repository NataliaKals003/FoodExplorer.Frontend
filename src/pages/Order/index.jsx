import { Container, Content, MyOrderContainer, MyOrder } from './style.js';
import { Header } from '../../components/Header/index.jsx';
import { Payment } from '../../components/Payment/index.jsx';
import { Footer } from '../../components/Footer/index.jsx';
import { useNavigate, useParams } from 'react-router-dom';
import { ButtonText } from '../../components/ButtonText/index.jsx';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';

export function Order() {
    const [order, setOrder] = useState();

    const { id } = useParams();

    useEffect(() => {
        if (id) {
            async function fetchOrder() {
                try {
                    const response = await api.get(`/orders/${id}`);
                    setOrder(response.data);
                } catch (error) {
                    console.error('Error fetching order', error);
                }
            }
            fetchOrder();
        } else {
            async function fetchCategories() {
                try {
                    const response = await api.get(`/orders`);
                    setOrder(response.data);
                } catch (error) {
                    console.error('Error fetching order', error);
                }
            }
            fetchCategories();
        }
    }, []);

    // const buildDishDescription = (dish) => {
    //     const dishesDescription = dish.map((dish) => `${dish.quantity} x ${dish.name}`);
    //     return dishesDescription;
    // };

    return (
        <Container>
            <Header />
            <Content>
                <MyOrderContainer>
                    <h1>My order</h1>
                    {order?.dishes?.map((dish, index) => (
                        <MyOrder key={dish.id || index}>
                            <img src={dish.image} alt={dish.name} />
                            <div className="dish-wrap">
                                <div className="dishDetails">
                                    <h2>{`${dish.quantity} x ${dish.name}`}</h2>
                                    <span>$ {dish.price}</span>
                                </div>
                                <ButtonText className="deleteDish" title="Delete" />
                            </div>
                        </MyOrder>
                    ))}
                    <span className="totalPrice">Total: $ {order?.totalPrice}</span>
                </MyOrderContainer>
                <Payment />
            </Content>
            <Footer />
        </Container>
    );
}
