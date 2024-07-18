import { Container, MenuHader, Title, CloseButton, Nav, Search, Logout } from "./styles";
import { Footer } from '../Footer';
import { Input } from "../Input";
import { AiOutlineClose } from 'react-icons/ai';
import { IoSearchOutline } from "react-icons/io5";

export function SideMenu({ closeMenu }) {
    return (
        <Container>
            <MenuHader>
                <CloseButton onClick={closeMenu}>
                    <AiOutlineClose size={24} />
                </CloseButton>
                <Title>Menu</Title>
            </MenuHader>
            <Nav>
                <Search>
                    <Input placeholder="Seach by dishes or ingredients" icon={IoSearchOutline} />
                </Search>
                <Logout>Sair</Logout>
            </Nav>
            <Footer />
        </Container>
    )
}