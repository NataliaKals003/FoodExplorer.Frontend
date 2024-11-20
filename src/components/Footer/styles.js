import styled from 'styled-components';
import { LAYOUT_BREAKPOINTS } from '../../styles/layoutBreakpoints';

export const Container = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 6rem;
    gap: 8px;
    background-color: ${({ theme }) => theme.COLORS.DARK_600};

    .textLogo {
        font-family: 'DM Sans', sans-serif;
        font-size: 0.75rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.LIGHT_200};
    }

    @media (max-width: ${LAYOUT_BREAKPOINTS.SM}) {
        padding: 1.8rem 1.6rem;
        /* font-size: 0.75rem; */
    }

    @media (max-width: ${LAYOUT_BREAKPOINTS.MD}) {
        padding: 1.8rem 1.6rem;
        font-size: 0.75rem;
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_700};

    img {
        margin-right: 6px;
        width: 30px;
        height: 30px;
    }

    h2 {
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 1rem;
    }

    @media (max-width: ${LAYOUT_BREAKPOINTS.LG}) {
        h2 {
            font-size: 1rem;
        }

        img {
            width: 20px;
            height: 27px;
        }
    }
`;
