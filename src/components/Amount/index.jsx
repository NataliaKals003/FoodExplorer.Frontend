import { Container } from "./styles";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";

export function Amount({ amount }) {
    return (
        <Container>
            <ButtonPlus icon={GoPlus} />
            {amount}
            <ButtonMinus icon={FiMinus} />
        </Container>
    )
}