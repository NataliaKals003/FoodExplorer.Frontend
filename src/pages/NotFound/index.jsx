import { Link } from 'react-router-dom';
import { Container } from './styles';
import { IoChevronBack } from 'react-icons/io5';

export function NotFound() {
    return (
        <Container>
            <h1>Page unavailable</h1>
            <Link to="/">
                <IoChevronBack size={20} />
                Go back to the home page
            </Link>
        </Container>
    );
}
