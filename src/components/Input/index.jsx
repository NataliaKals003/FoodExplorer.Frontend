import { Container } from "./styles";

export function Input({ icon: Icon, title, dark, ...rest }) {
    return (
        <Container className={`${dark ? 'dark' : ''}`}>
            <span>{title}</span>
            {Icon && <Icon size={23} />}
            <input {...rest} />
        </Container>
    )
}