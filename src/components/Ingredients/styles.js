import styled from 'styled-components';
import { LAYOUT_BREAKPOINTS } from '../../styles/layoutBreakpoints';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    flex: auto;

    @media (max-width: ${LAYOUT_BREAKPOINTS.MD}) {
        width: 100%;
    }

    span {
        margin-bottom: 1rem;
    }

    section {
        display: flex;
        flex-wrap: wrap;
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
        border-radius: 0.5rem;
    }
`;
