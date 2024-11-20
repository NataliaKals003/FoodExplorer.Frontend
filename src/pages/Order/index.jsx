import { useNavigate, useParams } from 'react-router-dom';
import { useCallback, useState, useEffect } from 'react';
import { api } from '../../services/api';
import { Container, Content, MyOrderContainer, MyOrder } from './style.js';
import { Header } from '../../components/Header/index.jsx';
import { Payment } from '../../components/Payment/index.jsx';
import { Footer } from '../../components/Footer/index.jsx';
import { ButtonText } from '../../components/ButtonText/index.jsx';

export function Order() {
    const [order, setOrder] = useState(null);
    const [reload, setReload] = useState(false);
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
    }, [id, reload]);

    async function handleRemoveDish(dishToRemove) {
        if (dishToRemove) {
            const confirmRemove = window.confirm(`Do you want to remove ${dishToRemove.name}?`);
            if (confirmRemove) {
                const updatedOrder = {
                    ...order,
                    dishes: order.dishes.filter((_, index) => index !== dishToRemove.index),
                };
                setOrder(updatedOrder);

                try {
                    await api.delete(`/orderDishes/${order.id}/${dishToRemove.dishId}`);
                    setReload(!reload); // Trigger reload to update the total price
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
