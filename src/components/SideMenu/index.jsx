import { Container, MenuHader, Title, CloseButton, Search, Logout } from "./styles";
import { Footer } from '../Footer';
import { InputHeader } from "../InputHeader";
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
                <InputHeader
                    placeholder="Seach by dishes or ingredients"
                    icon={IoSearchOutline}
                    type="text"
                    mobile={true} />
            </Search>
            <Logout>Sair</Logout>
            <div style={{ marginTop: 'auto' }}></div>
            <Footer />
        </Container>
    )
}