import styled from "styled-components";
import { LAYOUT_BREAKPOINTS } from "../../styles/layoutBreakpoints";

export const Container = styled.aside`
    display: none;

    @media(max-width: ${LAYOUT_BREAKPOINTS.MD}) {
         
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%; 
    height: 100vh;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    transition: transform 0.3s ease;
    transform: translateX(0);
    }
`;

export const MenuHader = styled.header`
    display: flex;
    align-items: center;
    padding: 1rem;
`;

export const Title = styled.div`
    font-size: 1.31rem;
    font-weight: 400;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  cursor: pointer;
  font-size: 24px;
`;

export const Nav = styled.div`

`;

export const Search = styled.div`

`;

export const Logout = styled.button`

`;

