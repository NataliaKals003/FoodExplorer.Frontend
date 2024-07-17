import { Container } from './style.js';
import { Header } from '../../components/Header/index.jsx';
import { Button } from '../../components/Button/index.jsx';

export function Details() {
  return (
    <Container>
      <Header />
      <h1>food explorer</h1>

      <Button title="Include" />
    </Container>
  )
};