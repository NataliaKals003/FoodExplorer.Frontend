import { Container } from './styles';

export function Button({ className, title, icon: Icon, loading = false, children, ...rest }) {
    return (
        <Container
            className={className}
            type="button"
            disabled={loading}
            {...rest}
        >
            {Icon && <Icon style={{ marginRight: '11px' }} size={23} />}
            {loading ? "Loading..." : children || title}
        </Container>
    );
}