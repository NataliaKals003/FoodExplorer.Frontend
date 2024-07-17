import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    border-radius: 5px;
    padding: 12px 0;
    padding-left: 99px;
    padding-right: 20px;

    > input {
        font-style: normal;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        background: transparent;
        border: 0;
        width: 100%;

        &:placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
    }
    

    > svg {
        margin-right: 4px;
    }
`;

