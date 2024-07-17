import { Container, Logo, Logout, Search, Menu, OrdersIcon } from "./styles";
import { Button } from '../Button';
import { Input } from "../Input";
import { LuLogOut } from "react-icons/lu";
import { PiReceiptBold } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";
import { BsList } from "react-icons/bs";
import polygon from '../../assets/Polygon.svg';

export function Header() {
    const orderCount = 0;

    return (
        <Container >
            <Menu>
                <BsList />
            </Menu>

            <Logo>
                <img src={polygon} alt="Polygon" />
                <div>
                    <span>food explorer</span>
                </div>
            </Logo>
            <Search>
                <Input placeholder="Seach by dishes or ingredients" icon={IoSearchOutline} />
            </Search>
            <OrdersIcon>
                <PiReceiptBold />
                <span>{orderCount}</span>
            </OrdersIcon>
            <Button className="headerButton" icon={PiReceiptBold} title={`Pedidos (${orderCount})`} />
            <Logout><LuLogOut /></Logout>

        </Container >
    );
}