import { Container, Logo, Logout, Search, Menu, OrdersIcon } from "./styles";
import { Button } from '../Button';
import { SideMenu } from "../SideMenu";
import { LuLogOut } from "react-icons/lu";
import { PiReceiptBold } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";
import { BsList } from "react-icons/bs";
import polygon from '../../assets/Polygon.svg';
import { useState } from 'react';
import { InputHeader } from "../InputHeader";

export function Header() {
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
    const orderCount = 0;

    const toggleSideMenu = () => {
        setIsSideMenuOpen(!isSideMenuOpen);
    };

    return (
        <Container >
            <Menu>
                <BsList onClick={toggleSideMenu} />
            </Menu>
            <Logo>
                <img src={polygon} alt="Polygon" />
                <div>
                    <span>food explorer</span>
                </div>
            </Logo>
            <Search>
                <InputHeader
                    placeholder="Seach by dishes or ingredients"
                    icon={IoSearchOutline}
                    type="text" />
            </Search>
            <OrdersIcon>
                <PiReceiptBold />
                <span>{orderCount}</span>
            </OrdersIcon>
            <Button
                className="headerButton"
                icon={PiReceiptBold}
                title={`Pedidos (${orderCount})`} />
            <Logout><LuLogOut /></Logout>
            {isSideMenuOpen && <SideMenu closeMenu={toggleSideMenu} />}
        </Container >
    );
}