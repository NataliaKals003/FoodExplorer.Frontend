import { Link } from 'react-router-dom';
import { Container } from './styles';
import { IoChevronBack } from 'react-icons/io5';

export function NotFound() {
    return (
        <Container>
            <h1>Página indisponível</h1>
            <Link to="/">
                <IoChevronBack size={20} />
                voltar para o início
            </Link>
        </Container>
    );
}
