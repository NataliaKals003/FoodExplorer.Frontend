import { useState } from 'react';
import { Container, Content, MyOrderContainer, MyOrder, PaymentContainer, Payment } from './style.js';
import { Header } from '../../components/Header/index.jsx';
import { Footer } from '../../components/Footer/index.jsx';
import pizza from '../../assets/Screenshot_19.png';
import { ButtonText } from '../../components/ButtonText/index.jsx';
import { MdPix } from 'react-icons/md';
import { CiCreditCard1 } from 'react-icons/ci';
import { BsQrCode } from 'react-icons/bs';
import { PiReceiptBold } from 'react-icons/pi';

export function Order() {
    const [selectedPayment, setSelectedPayment] = useState(null);
    const [paymentMethod, setPaymentMethod] = useState(null);
    const [showQRCode, setShowQRCode] = useState(false);

    const orders = [
        { id: 1, name: 'Salada Radish', quantity: 1, price: `R$ ${48.9}`, image: pizza },
        { id: 2, name: 'Pizza Margherita', quantity: 2, price: `R$ ${48.9}`, image: pizza },
        { id: 3, name: 'Torta de Limão', quantity: 1, price: `R$ ${12.5}`, image: pizza },
        { id: 4, name: 'Torta de Laranja', quantity: 1, price: `R$ ${12.5}`, image: pizza },
    ];

    function calculateTotal(orders) {
        return orders
            .reduce((total, order) => {
                const priceNumber = parseFloat(order.price.replace('R$', '').trim());
                return total + priceNumber * order.quantity;
            }, 0)
            .toFixed(2);
    }

    const totalPrice = calculateTotal(orders);

    const handlePaymentMethod = (method) => {
        setPaymentMethod(method);
        setShowQRCode(method === 'pix'); // Mostra o ícone se PIX for selecionado
    };

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
                <PaymentContainer>
                    <Payment>
                        <h1>Payment</h1>
                        <div className="payment-wrap">
                            <div className="payment-options">
                                <button
                                    className={`payment-button ${paymentMethod === 'pix' ? 'selected' : ''}`}
                                    onClick={() => handlePaymentMethod('pix')}
                                >
                                    <MdPix className="payment-icon" />
                                    PIX
                                </button>
                                <button
                                    className={`payment-button ${paymentMethod === 'credit' ? 'selected' : ''}`}
                                    onClick={() => handlePaymentMethod('credit')}
                                >
                                    <CiCreditCard1 className="payment-icon" />
                                    Crédito
                                </button>
                            </div>
                            <hr className="divider-horizontal" />
                            {showQRCode && (
                                <div className="qr-code-container">
                                    <BsQrCode className="qr-code" />
                                </div>
                            )}
                            {paymentMethod === 'credit' && (
                                <div className="credit-form">
                                    <div className="input-group">
                                        <label htmlFor="card-number">Card Number</label>
                                        <input id="card-number" placeholder="0000 0000 0000 0000" type="text" />
                                    </div>
                                    <div className="cardDetails">
                                        <div className="input-group">
                                            <label htmlFor="card-expiry">Vality</label>
                                            <input id="card-expiry" placeholder="04/25" type="text" />
                                        </div>

                                        <div className="input-group">
                                            <label htmlFor="card-cvv">CVV</label>
                                            <input id="card-cvv" placeholder="000" type="text" />
                                        </div>
                                    </div>

                                    <button type="button">
                                        {' '}
                                        <PiReceiptBold size={30} />
                                        Complete Payment
                                    </button>
                                </div>
                            )}
                        </div>
                    </Payment>
                </PaymentContainer>
            </Content>
            <Footer />
        </Container>
    );
}
