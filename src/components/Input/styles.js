import styled from 'styled-components';
import { LAYOUT_BREAKPOINTS } from '../../styles/layoutBreakpoints';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    @media (max-width: ${LAYOUT_BREAKPOINTS.MD}) {
        width: 100%;
    }

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
