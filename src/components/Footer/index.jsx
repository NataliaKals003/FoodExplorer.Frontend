import polygonFooter from '../../assets/Polygon Footer.svg'
import { Container, Logo } from './styles';

export function Footer() {
    return (
        <Container>
            <Logo>
                <img src={polygonFooter} size={24} alt="Polygon" />
                <span>food explorer</span>
            </Logo>
            <div>
                <span>© 2023 - Todos os direitos reservados.</span>
            </div>
        </Container>
    );
}