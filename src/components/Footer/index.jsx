import polygonFooter from '../../assets/Polygon Footer.svg';
import { Container, Logo } from './styles';

export function Footer() {
    return (
        <Container>
            <Logo>
                <img src={polygonFooter} size={24} alt="Polygon" />
                <h2>food explorer</h2>
            </Logo>
            <span className="textLogo">© 2024 - All rights reserved.</span>
        </Container>
    );
}
