import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
`;

export const ButtonPlus = styled.button`
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    margin-left: 0.87rem;
`;

export const ButtonMinus = styled.button`
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    margin-right: 0.87rem;
`;

export const AmountDisplay = styled.span`
    display: flex;
    align-items: center;
    font-size: 1.5rem; 
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.LIGHT_300}; 
`;