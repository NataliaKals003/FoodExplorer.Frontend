import styled from "styled-components";

export const Container = styled.span`
    padding: 0.4rem 0.5rem;
    border-radius: 0.3rem;
    margin-right: 0.37rem;
    background: ${({ theme }) => theme.COLORS.DARK_1000};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: "Poppins", sans-serif;
    font-size: 0.95rem;
`;
