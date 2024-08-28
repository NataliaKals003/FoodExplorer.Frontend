import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    padding: 0.75rem 2rem;
    width: 100%;
    border-radius: 0.31rem;

    svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        margin-right: 0.7rem;
    }

    > input {
        flex: 1;
        background: transparent;
        border: none;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        min-width: 0;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
            width: 100%;
        }
    }

    &.mobile {
        margin: 1.75rem 2rem;
    }
`;
