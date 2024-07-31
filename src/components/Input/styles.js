import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex: ${({ flex }) => flex || 'none'};
    flex-direction: column;
    align-items: flex-start;
    color: ${({ theme }) => theme.COLORS.LIGHT_400}; 

    > input {
        width: 100%;
        font-style: normal;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        background: transparent;
        border: 0;
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
        padding: 0.75rem 2rem;
        border-radius: 0.5rem;
        margin-top: 1rem;

        &.dark {
            background-color: ${({ theme }) => theme.COLORS.DARK_900};
        }
    }
`;
