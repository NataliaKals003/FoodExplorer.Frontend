import { Container, ButtonPlus, ButtonMinus, AmountDisplay } from './styles';
import { GoPlus } from 'react-icons/go';
import { FiMinus } from 'react-icons/fi';
import { useState } from 'react';

export function Amount({ className, value, onChange }) {
    const increaseAmount = () => {
        // setAmount((prevAmount) => prevAmount + 1);
        const newQuantity = value + 1;
        onChange(newQuantity);
    };

    const decreaseAmount = () => {
        // setAmount((prevAmount) => (prevAmount > 0 ? prevAmount - 1 : 0));
        const newQuantity = value > 0 ? value - 1 : 0;
        onChange(newQuantity);
    };

    const formattedAmount = value === 0 ? '0' : value < 10 ? `0${value}` : value.toString();

    return (
        <Container className={className}>
            <ButtonMinus onClick={decreaseAmount}>
                <FiMinus size={20} />
            </ButtonMinus>
            <AmountDisplay>{formattedAmount}</AmountDisplay>
            <ButtonPlus onClick={increaseAmount}>
                <GoPlus size={20} />
            </ButtonPlus>
        </Container>
    );
}
