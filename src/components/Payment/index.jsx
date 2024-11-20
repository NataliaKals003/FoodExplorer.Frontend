import { Container, Content } from './styles.js';
import { useState } from 'react';
import { Button } from '../../components/Button';
import { MdPix } from 'react-icons/md';
import { CiCreditCard1 } from 'react-icons/ci';
import { BsQrCode } from 'react-icons/bs';
import { PiReceiptBold } from 'react-icons/pi';

export function Payment() {
    const [paymentMethod, setPaymentMethod] = useState('pix');

    const handlePaymentMethod = (method) => {
        setPaymentMethod(method);
    };

    return (
        <Container>
            <Content>
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
                    {paymentMethod === 'pix' && (
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
                            <Button className="cardPayment-button" icon={PiReceiptBold} title={'Complete Payment'} />
                        </div>
                    )}
                </div>
            </Content>
        </Container>
    );
}
