import styled from 'styled-components';

export const Container = styled.span`
    display: inline-block;
    margin: 0 0.75rem 1.5rem 0;
    padding: 4px 8px;
    border-radius: 0.3rem;
    font-family: 'Poppins', sans-serif;
    background: ${({ theme }) => theme.COLORS.DARK_1000};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
`;
