import { Container } from "./styles";

export function InputHeader({ placeholder, mobile, icon: Icon, ...rest }) {
    return (
        <Container className={`${mobile ? 'mobile' : ''}`}>
            {Icon && <Icon size={23} />}
            <input {...rest} placeholder={placeholder} />
        </Container>
    )
}
