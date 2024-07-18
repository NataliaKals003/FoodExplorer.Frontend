import { Container } from './style.js';
import { Header } from '../../components/Header/index.jsx';
import { Button } from '../../components/Button/index.jsx';
import { Footer } from '../../components/Footer/index.jsx';

export function Details() {
  return (
    <Container>
      <Header />

      <Button title="Include" />
      <Footer />
    </Container>
  )
};