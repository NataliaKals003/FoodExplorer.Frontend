import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    border: 0;
    border-radius: 0.31rem;
    padding: 0.75rem 1.5rem;
    font-family: 'Poppins';
    font-weight: 500;
    font-style: normal;
    font-size: 0.87rem;
    display: flex;
    flex-direction: row;
    align-items: center;

    &:disabled {
        opacity: 0.5;
    }

    > Icon {
        margin-left: 1.25rem;
    }
`;
