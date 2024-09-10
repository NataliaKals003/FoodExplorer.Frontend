import { Container, Logo, Logout, Search, Menu, OrdersIcon } from './styles';
import { Button } from '../Button';
import { ButtonText } from '../ButtonText';
import { SideMenu } from '../SideMenu';
import { LuLogOut } from 'react-icons/lu';
import { PiReceiptBold } from 'react-icons/pi';
import { IoSearchOutline } from 'react-icons/io5';
import { BsList } from 'react-icons/bs';
import polygon from '../../assets/Polygon.svg';
import { useState } from 'react';
import { InputHeader } from '../InputHeader';
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';

export function Header() {
    const { signOut, user } = useAuth();

    const navigate = useNavigate();

    const userAdmin = user.role === 'admin';
    const userCustomer = user.role === 'customer';

    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
    const orderCount = 0;

    const toggleSideMenu = () => {
        setIsSideMenuOpen(!isSideMenuOpen);
    };

    const handleLogout = () => {
        if (window.confirm('Você deseja sair?')) {
            signOut();
        }
    };

    const handleNewDishClick = () => {
        navigate(`/dish`);
        location.reload();
    };

    const handleFavouriteClick = () => {
        navigate(`/favourite`);
        location.reload();
    };

    const handleOrderHistoryClick = () => {
        navigate(`/order-history`);
        location.reload();
    };

    const handleHomeClick = () => {
        navigate(`/`);
    };

    return (
        <Container>
            <Menu>
                <BsList onClick={toggleSideMenu} />
            </Menu>
            <Logo>
                <img src={polygon} alt="Polygon" />
                <div className="title">
                    <span onClick={handleHomeClick}>food explorer</span>
                    {userAdmin && <strong>admin</strong>}
                </div>
            </Logo>
            <Search>
                <InputHeader placeholder="Seach by dishes or ingredients" icon={IoSearchOutline} type="text" />
            </Search>
            {userAdmin && (
                <ButtonText onClick={handleOrderHistoryClick} className="historyOrderButton" title="Order history" />
            )}
            {userCustomer && (
                <ButtonText onClick={handleFavouriteClick} className="favouriteOrderButton" title="My favourites" />
            )}
            <OrdersIcon>
                <PiReceiptBold />
                <span>{orderCount}</span>
            </OrdersIcon>
            <Button
                className="headerButton"
                icon={userCustomer ? PiReceiptBold : undefined}
                onClick={userAdmin ? handleNewDishClick : handleOrderHistoryClick}
                title={userAdmin ? 'New dish' : `Orders (${orderCount})`}
            />
            <Logout onClick={handleLogout}>
                <LuLogOut />
            </Logout>
            {isSideMenuOpen && <SideMenu closeMenu={toggleSideMenu} />}
        </Container>
    );
}
