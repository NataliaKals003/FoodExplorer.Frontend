import styled from 'styled-components';
import { LAYOUT_BREAKPOINTS } from '../../styles/layoutBreakpoints';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

export const Content = styled.div`
    margin: 2rem 7.6rem;
    flex: 1;

    > h1 {
        font-size: 2rem;
        font-weight: 500;
        font-family: 'Poppins', sans-serif;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    @media (max-width: ${LAYOUT_BREAKPOINTS.MD}) {
        margin: 3.5rem 9rem 6.25rem 2rem;

        > h1 {
            font-weight: 500;
        }
    }
`;

export const MyFavouriteContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    margin-top: 2rem;
`;

export const MyFavourite = styled.div`
    display: flex;
    align-items: center;
    flex: 0 1 20%;
    width: max-content;
    /* max-width: 21%; */
    /* box-sizing: border-box; */
    /* padding: 10px; */

    img {
        margin-right: 13px;
        border-radius: 50%;
        width: 72px;
        height: 72px;
    }

    .favourite-wrap {
        display: flex;
        flex-direction: column;
        justify-content: center;

        h2 {
            font-family: 'Poppins', sans-serif;
            font-size: 1.25rem;
            font-weight: 400;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
            margin: 0;
        }

        .removeFavourite {
            font-size: 0.75rem;
            font-weight: 400;
            color: ${({ theme }) => theme.COLORS.TOMATO_400};
        }
    }

    @media (max-width: ${LAYOUT_BREAKPOINTS.LG}) {
        flex: 0 1 45%;
    }
    @media (max-width: ${LAYOUT_BREAKPOINTS.MD}) {
        flex: none;
        align-items: center;
    }
`;
