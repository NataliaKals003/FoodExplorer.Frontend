import styled from "styled-components";

export const Container = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 6rem; 
    gap: 8px;
    background-color: ${({ theme }) => theme.COLORS.DARK_600};

    div {
        font-family: 'DM Sans', sans-serif;
        font-size: .75rem;
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_700};

    img {
        size: 1.5rem;
        margin-right: 6px;
    }

    span {
        font-size: 1rem;
        font-weight: 700;
        line-height: 1rem;
    }
`;


