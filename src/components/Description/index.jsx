import { Container, TextArea } from "./styles";

export function Description({ title, placeholder }) {
    return (
        <Container>
            <span>{title}</span>
            <TextArea
                placeholder={placeholder}
            />
        </Container>
    )
}