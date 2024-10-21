import { Container, Content, MyOrderContainer, MyOrder } from './style.js';
import { Header } from '../../components/Header/index.jsx';
import { Payment } from '../../components/Payment/index.jsx';
import { Footer } from '../../components/Footer/index.jsx';
import pizza from '../../assets/Screenshot_19.png';
import { ButtonText } from '../../components/ButtonText/index.jsx';

export function Order() {
    const orders = [
        { id: 1, name: 'Salada Radish', quantity: 1, price: `$ ${48.9}`, image: pizza },
        { id: 2, name: 'Pizza Margherita', quantity: 2, price: `$ ${48.9}`, image: pizza },
        { id: 3, name: 'Torta de Limão', quantity: 1, price: `$ ${12.5}`, image: pizza },
        { id: 4, name: 'Torta de Laranja', quantity: 1, price: `$ ${12.5}`, image: pizza },
    ];

    function calculateTotal(orders) {
        return orders
            .reduce((total, order) => {
                const priceNumber = parseFloat(order.price.replace('$', '').trim());
                return total + priceNumber * order.quantity;
            }, 0)
            .toFixed(2);
    }

    const totalPrice = calculateTotal(orders);

    return (
        <Container>
            <Header />
            <Content>
                <MyOrderContainer>
                    <h1>My order</h1>
                    {orders.map((order) => (
                        <MyOrder key={order.id}>
                            <img src={order.image} alt={order.name} />
                            <div className="dish-wrap">
                                <div className="dishDetails">
                                    <h2>
                                        {order.quantity} x {order.name}
                                    </h2>
                                    <span>{order.price}</span>
                                </div>
                                <ButtonText className="deleteDish" title="Delete" />
                            </div>
                        </MyOrder>
                    ))}
                    <span className="totalPrice">Total: R$ {totalPrice}</span>
                </MyOrderContainer>
                <Payment />
            </Content>
            <Footer />
        </Container>
    );
}
