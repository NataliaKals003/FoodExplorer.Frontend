import { Container, MenuHader, Title, CloseButton, Search, Logout } from "./styles";
import { Footer } from '../Footer';
import { Input } from "../Input";
import { AiOutlineClose } from 'react-icons/ai';
import { IoSearchOutline } from "react-icons/io5";

export function SideMenu({ closeMenu }) {
    return (
        <Container >
            <MenuHader>
                <CloseButton onClick={closeMenu}>
                    <AiOutlineClose size={18} />
                </CloseButton>
                <Title>Menu</Title>
            </MenuHader>
            <Search>
                <Input
                    className="headerInput"
                    placeholder="Seach by dishes or ingredients" icon={IoSearchOutline} />
            </Search>
            <Logout>Sair</Logout>
            <div style={{ marginTop: 'auto' }}></div>
            <Footer />
        </Container>
    )
}