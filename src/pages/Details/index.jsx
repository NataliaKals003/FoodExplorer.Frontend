import { Container } from './style.js';
import { Button } from '../../components/Button/index.jsx';

export function Details() {
  return (
    <Container>
      <h1>food explorer</h1>

      <Button title="Include" loading />
      <Button title="Cadastrar" />
      <Button title="Voltar" />
    </Container>
  )
};