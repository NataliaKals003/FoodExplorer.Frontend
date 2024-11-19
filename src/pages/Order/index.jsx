import { Container, Content, MyOrderContainer, MyOrder } from './style.js';
import { Header } from '../../components/Header/index.jsx';
import { Payment } from '../../components/Payment/index.jsx';
import { Footer } from '../../components/Footer/index.jsx';
import { useNavigate, useParams } from 'react-router-dom';
import { ButtonText } from '../../components/ButtonText/index.jsx';
import { useCallback, useState, useEffect } from 'react';
import { api } from '../../services/api';

export function Order() {
    const [order, setOrder] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        async function fetchOrder() {
            try {
                let response;
                if (id) {
                    response = await api.get(`/orders/${id}`);
                    setOrder(response.data);
                } else {
                    response = await api.get('/orders?status=Pending');
                    if (response.data && response.data.length > 0) {
                        setOrder(response.data[0]);
                    }
                }
            } catch (error) {
                console.error('Error fetching order', error);
            }
        }

        fetchOrder();
    }, [id]); // Add `id` to the dependency array

    useEffect(() => {
        console.log('order', order);
    }, [order]);

    async function handleRemoveDish(dishToRemove) {
        if (dishToRemove) {
            console.log('dishToRemove', dishToRemove);
            // console.log(order.id);
            console.log('order', order);

            const confirmRemove = window.confirm(`Do you want to remove ${dishToRemove.name}?`);
            if (confirmRemove) {
                const updatedOrder = {
                    ...order,
                    dishes: order.dishes.filter((item, index) => index !== dishToRemove.index),
                };
                setOrder(updatedOrder);

                try {
                    await api.delete(`/orderDishes/${order.id}/${dishToRemove.dishId}`);
                } catch (error) {
                    console.error('Failed to remove dish:', error);
                }
            }
        }
    }

    return (
        <Container>
            <Header />
            <Content hasDishes={order?.dishes?.length > 0}>
                <MyOrderContainer>
                    <h1>My Order</h1>
                    {order?.dishes?.length > 0 ? (
                        order.dishes.map((dish, index) => (
                            <MyOrder key={`${dish.id}-${index}`}>
                                <img src={dish.image} alt={dish.name} />
                                <div className="dish-wrap">
                                    <div className="dishDetails">
                                        <h2>{`${dish.quantity} x ${dish.name}`}</h2>
                                        <span>$ {dish.price}</span>
                                    </div>
                                    <ButtonText
                                        className="deleteDish"
                                        title="Delete"
                                        onClick={() => handleRemoveDish({ ...dish, index })}
                                    />
                                </div>
                            </MyOrder>
                        ))
                    ) : (
                        <p>No dishes have been added to your order yet.</p>
                    )}
                    {order?.totalPrice ? <span className="totalPrice">Total: $ {order.totalPrice}</span> : null}
                </MyOrderContainer>
                {order?.dishes?.length > 0 && <Payment />}
            </Content>

            <Footer />
        </Container>
    );
}
