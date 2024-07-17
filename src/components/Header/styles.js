import styled from "styled-components";
import { LAYOUT_BREAKPOINTS } from "../../styles/layoutBreakpoints";

export const Container = styled.header`
    grid-area: header;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 28px 123px;
    height: 104px;
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.DARK_600};
`;

export const Logo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;

    > img {
        margin-right: 10px;
        width: 30px;
        height: 30px;
    }

    @media (max-width: ${LAYOUT_BREAKPOINTS.XS}) {
    font-size: 1.5rem;
    flex: 1;
    padding: 0 1rem,;
  }
`;

export const Logout = styled.button`
    border: none;
    background: none;
    
    >svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-size: 32px;
        margin-left: 32px;
    }
`;

export const Search = styled.div`
    display: flex;
    flex: 1;
    margin: 0 32px;
`;


