import { Header } from '../../components/Header/index.jsx';
import { Footer } from '../../components/Footer';
import { Container, Content } from './style.js';
import { OrderTable } from '../../components/OrderTable/index.jsx';

export function OrderHistory() {
    return (
        <Container>
            <Header />
            <Content>
                <h1>Order history</h1>
                <OrderTable />
            </Content>
            <Footer />
        </Container>
    );
}
