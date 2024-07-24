import { Container, ButtonPlus, ButtonMinus, AmountDisplay } from "./styles";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { useState } from "react";

export function Amount({ className }) {
    const [amount, setAmount] = useState(0);

    const increaseAmount = () => {
        setAmount(prevAmount => prevAmount + 1);
    };

    const decreaseAmount = () => {
        setAmount(prevAmount => (prevAmount > 0 ? prevAmount - 1 : 0));
    };

    const formattedAmount = amount === 0 ? '0' : amount < 10 ? `0${amount}` : amount.toString();

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
