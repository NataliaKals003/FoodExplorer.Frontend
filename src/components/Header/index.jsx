import { useRef, useEffect, useState } from 'react';
import { Container, Logo, Logout, Search, Menu, OrdersIcon } from './styles';
import { Button } from '../Button';
import { ButtonText } from '../ButtonText';
import { SideMenu } from '../SideMenu';
import { LuLogOut } from 'react-icons/lu';
import { PiReceiptBold } from 'react-icons/pi';
import { IoSearchOutline } from 'react-icons/io5';
import { BsList } from 'react-icons/bs';
import polygon from '../../assets/Polygon.svg';
import { InputHeader } from '../InputHeader';
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import { routes } from '../../routes/routes';

export function Header() {
    const { signOut, user } = useAuth();
    const navigate = useNavigate();
    const userAdmin = user.role === 'admin';
    const userCustomer = user.role === 'customer';

    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
    const orderCount = 0;
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const searchRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setSearchTerm('');
                setSearchResults([]);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSearchChange = async (event) => {
        const value = event.target.value;
        setSearchTerm(value);

        if (value) {
            try {
                const response = await api.get(`/dishes/search?q=${value}`);
                setSearchResults(response.data);
            } catch (error) {
                console.error('Error fetching search results', error);
            }
        } else {
            setSearchResults([]);
        }
    };

    const toggleSideMenu = () => {
        setIsSideMenuOpen(!isSideMenuOpen);
    };

    const handleLogout = () => {
        if (window.confirm('Do you want to log out?')) {
            signOut();
        }
    };

    const handleNewDishClick = () => {
        navigate(`/dishes`);
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

    const handleOrderDishClick = () => {
        navigate(routes.orderDetails.replace(':id', ''));
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
            <Search ref={searchRef} style={{ position: 'relative' }}>
                <InputHeader
                    placeholder="Search by dishes or ingredients"
                    icon={IoSearchOutline}
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                {searchTerm && searchResults.length === 0 && (
                    <div className="search-results">
                        <div className="no-results">No results found for your search</div>
                    </div>
                )}
                {searchResults.length > 0 && (
                    <div className="search-results">
                        {searchResults.map((dish) => (
                            <div
                                key={dish.id}
                                className="result-item"
                                onClick={() => navigate(`/dish/details/${dish.id}`)} // Direct navigation on click
                                style={{ cursor: 'pointer' }}
                            >
                                {dish.name}
                            </div>
                        ))}
                    </div>
                )}
            </Search>
            {userCustomer && (
                <ButtonText onClick={handleFavouriteClick} className="favouriteOrderButton" title="My favourites" />
            )}
            <ButtonText onClick={handleOrderHistoryClick} className="headerTextButton" title="Order history" />
            {userAdmin && <ButtonText onClick={handleNewDishClick} className="headerTextButton" title="New dish" />}
            {userCustomer && (
                <OrdersIcon>
                    <PiReceiptBold onClick={handleOrderDishClick} />
                    <span>{orderCount}</span>
                </OrdersIcon>
            )}
            {userCustomer && (
                <Button
                    className="headerButton"
                    icon={PiReceiptBold}
                    onClick={handleOrderDishClick}
                    title={`Orders (${orderCount})`}
                />
            )}
            <Logout onClick={handleLogout}>
                <LuLogOut />
            </Logout>
            {isSideMenuOpen && <SideMenu closeMenu={toggleSideMenu} />}
        </Container>
    );
}
