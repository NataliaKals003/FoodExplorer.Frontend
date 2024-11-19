import { Container } from './styles';

export function InputHeader({ placeholder, mobile, icon: Icon, value, onChange, ...rest }) {
    return (
        <Container className={`${mobile ? 'mobile' : ''}`}>
            {Icon && <Icon size={23} />}
            <input value={value} onChange={onChange} placeholder={placeholder} {...rest} />
        </Container>
    );
}
