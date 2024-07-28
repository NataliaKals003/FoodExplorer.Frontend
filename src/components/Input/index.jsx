import { Container } from "./styles";

export function Input({ className, icon: Icon, ...rest }) {
    return (
        <Container className={className}>
            {Icon && <Icon size={23} />}
            <input {...rest} />
        </Container>
    )
}