import { Header } from '../../components/Header/index.jsx';
import { Container, Content } from './style.js';

export function Favourite() {
    return (
        <Container>
            <Header />
            <Content>
                <h1>My favourites</h1>
            </Content>
        </Container>
    );
}
