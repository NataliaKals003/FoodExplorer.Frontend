import { Container, MenuHader, Title, CloseButton, Search, TextMenu } from './styles';
import { Footer } from '../Footer';
import { InputHeader } from '../InputHeader';
import { AiOutlineClose } from 'react-icons/ai';
import { IoSearchOutline } from 'react-icons/io5';
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../routes/routes';

export function SideMenu({ closeMenu }) {
    const { signOut, user } = useAuth();

    const userAdmin = user.role === 'admin';
    const userCustomer = user.role === 'customer';

    const navigate = useNavigate();

    const handleLogout = async () => {
        if (window.confirm('Do you want to log out?')) {
            await signOut();
            navigate(routes.signIn);
            location.reload();
        }
    };

    const handleNewDishClick = () => {
        navigate(`/dish`);
        location.reload();
    };

    const handleFavouriteClick = () => {
        navigate(`/favourite`);
    };

    const handleOrderHistoryClick = () => {
        navigate(`/order-history`);
        location.reload();
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
            {userAdmin && <TextMenu onClick={handleNewDishClick}>New dish</TextMenu>}
            {userCustomer && <TextMenu onClick={handleFavouriteClick}>My favourites</TextMenu>}
            {userCustomer && <TextMenu onClick={handleOrderHistoryClick}>Order history</TextMenu>}
            <TextMenu onClick={handleLogout}>Exit</TextMenu>
            <div style={{ marginTop: 'auto' }} />
            <Footer />
        </Container>
    );
}
