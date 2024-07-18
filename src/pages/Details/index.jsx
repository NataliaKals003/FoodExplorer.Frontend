import { Container, Content } from './style.js';
import { Header } from '../../components/Header/index.jsx';
import { Tag } from '../../components/Tag/index.jsx';
import { Footer } from '../../components/Footer/index.jsx';

export function Details() {
  return (
    <Container>
      <Header />
      <Content>
        <Tag title="alface" />
        <Tag title="cebola" />
        <Tag title="pepino" />
      </Content>
      <Footer />
    </Container>
  )
};