import { Container } from "./styles";

export function InputHeader({ placeholder, icon: Icon, ...rest }) {
    return (
        <Container>
            {Icon && <Icon size={23} />}
            <input {...rest} placeholder={placeholder} />
        </Container>
    )
}
