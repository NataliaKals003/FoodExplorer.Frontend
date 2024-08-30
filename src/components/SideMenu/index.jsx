import { Container, MenuHader, Title, CloseButton, Search, TextMenu } from './styles';
import { Footer } from '../Footer';
import { InputHeader } from '../InputHeader';
import { AiOutlineClose } from 'react-icons/ai';
import { IoSearchOutline } from 'react-icons/io5';
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';

export function SideMenu({ closeMenu }) {
    const { signOut, user } = useAuth();

    const userAdmin = user.role === 'admin';

    const navigate = useNavigate();

    const handleLogout = () => {
        if (window.confirm('Você deseja sair?')) {
            signOut();
        }
    };

    const handleNewDishClick = () => {
        navigate(`/dish`);
    };
    return (
        <Container>
            <MenuHader>
                <CloseButton onClick={closeMenu}>
                    <AiOutlineClose size={18} />
                </CloseButton>
                <Title>Menu</Title>
            </MenuHader>
            <Search>
                <InputHeader
                    placeholder="Seach by dishes or ingredients"
                    icon={IoSearchOutline}
                    type="text"
                    mobile={true}
                />
            </Search>
            {userAdmin && <TextMenu onClick={handleNewDishClick}>Novo prato</TextMenu>}
            <TextMenu onClick={handleLogout}>Sair</TextMenu>
            <div style={{ marginTop: 'auto' }} />
            <Footer />
        </Container>
    );
}
