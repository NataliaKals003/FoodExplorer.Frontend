import { Container, Content } from './style.js';
import { Header } from '../../components/Header/index.jsx';
import { Tag } from '../../components/Tag/index.jsx';
import { Amount } from '../../components/Amount/index.jsx';
import { Footer } from '../../components/Footer/index.jsx';

export function Details() {
  return (
    <Container>
      <Header />
      <Content>
        <Tag title="alface" />
        <Tag title="cebola" />
        <Tag title="pepino" />
        <Amount amount="2" />
      </Content>
      <Footer />
    </Container>
  )
};