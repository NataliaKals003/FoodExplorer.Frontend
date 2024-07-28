import styled from "styled-components";
import { LAYOUT_BREAKPOINTS } from "../../styles/layoutBreakpoints";

export const Container = styled.aside`
    display: none;

    @media(max-width: ${LAYOUT_BREAKPOINTS.MD}) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 3;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    transition: transform 0.3s ease;
    transform: translateX(0);
    }
`;

export const MenuHader = styled.header`
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 3.5rem 1.75rem 1.5rem;
    height: 6.5rem;
`;

export const Title = styled.div`
    font-size: 1.4rem;
    font-weight: 400;
    margin-left: 1rem;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  cursor: pointer;
`;


export const Search = styled.div`
    margin: 0; 
    align-items: center;
    justify-content: center;
    display: flex;
    z-index: 1000; 
    

    .headerInput {
        padding: 0.75rem 0.81rem; 
        margin: 1.75rem 2rem;
    }
    
`;

export const Logout = styled.button`
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 1.5rem;
    font-family: "Poppins", sans-serif;
    display: flex;
    margin: 0 1.75rem;
    border-bottom: solid 3px ${({ theme }) => theme.COLORS.DARK_1000};  
    padding-bottom: 0.5rem;
    padding-left: 1rem;
`;



