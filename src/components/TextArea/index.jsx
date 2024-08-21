import { Container } from "./styles";

export function TextArea({ title, placeholder, name, ...rest }) {
    return (
        <Container>
            <span>{title}</span>
            <textarea
                name={name}
                placeholder={placeholder}
                {...rest}
            />
        </Container>
    )
}