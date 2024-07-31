import styled from "styled-components";

export const Container = styled.button`
    background: none;
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    border: none;
    cursor: pointer;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
`;