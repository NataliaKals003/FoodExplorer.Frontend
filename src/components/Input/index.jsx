import { Container } from "./styles";

export function Input({ icon: Icon, title, dark, flex, ...rest }) {
    return (
        <Container className={`${dark ? 'dark' : ''}`} flex={flex}>
            <span>{title}</span>
            {Icon && <Icon size={23} />}
            <input {...rest} />
        </Container>
    )
}