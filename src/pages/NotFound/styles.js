import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    > a {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        margin-top: 24px;
        font-size: 1.3rem;
        font-weight: bold;
        display: flex;
        align-items: center;

        > svg {
            margin-right: 0.5rem;
        }
    }
`;
