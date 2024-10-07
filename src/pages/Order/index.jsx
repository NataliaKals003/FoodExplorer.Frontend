import { Header } from '../../components/Header/index.jsx';
import { Footer } from '../../components/Footer/index.jsx';
import { Container, Content } from './style.js';

export function Order() {
    return (
        <Container>
            <Header />
            <Content>
                <h1>Order</h1>
            </Content>
            <Footer />
        </Container>
    );
}
