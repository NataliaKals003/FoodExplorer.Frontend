import { Container, Logo, Logout, Search } from "./styles";
import { Button } from '../Button';
import { Input } from "../Input";
import { LuLogOut } from "react-icons/lu";
import { PiReceiptBold } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";
import polygon from '../../assets/Polygon.svg';

export function Header() {
    return (
        <Container >
            <Logo>
                <img src={polygon} alt="Polygon" />
                <div>
                    <span>food explorer</span>
                </div>
            </Logo>
            <Search>
                <Input placeholder="Seach by dishes or ingredients" icon={IoSearchOutline} />
            </Search>
            <Button icon={PiReceiptBold} title="Pedidos (0)" />
            <Logout><LuLogOut /></Logout>

        </Container >
    );
}