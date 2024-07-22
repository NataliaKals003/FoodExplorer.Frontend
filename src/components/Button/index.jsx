import { Container } from './styles';

export function Button({ title, icon: Icon, loading = false, children, ...rest }) {
    return (
        <Container
            type="button"
            disabled={loading}
            {...rest}
        >
            {Icon && <Icon style={{ marginRight: '11px' }} size={23} />}
            {loading ? "Loading..." : children || title}
        </Container>
    );
}