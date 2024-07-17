import styled from "styled-components";

export const Container = styled.button`
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    height: 48px;
    border: 0;
    border-radius: 5px;
    padding: 12px 24px;
    font-family: "Poppins";
    font-weight: 500;
    font-style: normal;
    font-size: 14px;
    display: flex;
    flex-direction: row;
    align-items: center;

    &:disabled {
        opacity: 0.5;
    }

    > Icon {
        margin-left: 20px;
    }
`;

