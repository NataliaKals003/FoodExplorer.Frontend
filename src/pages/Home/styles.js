import styled from 'styled-components';
import { LAYOUT_BREAKPOINTS } from '../../styles/layoutBreakpoints';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
`;

export const Banner = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-family: 'Poppins', sans-serif;
    background: ${({ theme }) => theme.COLORS.GRADIANTS_200};
    height: 16.25rem;
    margin: 10rem 10rem 0rem 10rem;
    border-radius: 8px;
    position: relative;
    overflow: visible;
    margin-bottom: 3.8rem;

    @media (max-width: ${LAYOUT_BREAKPOINTS.XL}) {
        height: 11.25rem;
        margin: 8rem 5rem;
    }
    @media (max-width: ${LAYOUT_BREAKPOINTS.LG}) {
        height: 11rem;
        margin: 6rem 4rem;
        display: flex;
    }
    @media (max-width: ${LAYOUT_BREAKPOINTS.MD}) {
        height: 8.5rem;
        margin: 2.5rem 2rem;
        display: flex;
    }
    @media (max-width: ${LAYOUT_BREAKPOINTS.SM}) {
        height: 7.5rem;
        margin: 2.5rem 2rem;
        display: flex;
    }
    @media (max-width: ${LAYOUT_BREAKPOINTS.XS}) {
        height: 5.5rem;
        display: flex;
    }
`;

export const ImageContainer = styled.div`
    flex: 0 0 auto;
    left: 0;
    bottom: 0;
    transform: translate(-15%, 17%);
    z-index: 2;

    img {
        width: 34vh;
        height: auto;
        clip-path: inset(0 0 40% 0);
        transition: all 0.1s ease;
    }

    @media (min-width: 1490px) {
        transform: translate(-15%, 14%);
        img {
            width: 34vw;
            clip-path: inset(0 0 46% 0);
        }
    }

    @media (max-width: 1440px) {
        transform: translate(-15%, 14%);
        img {
            width: 34vw;
            clip-path: inset(0 0 44% 0);
        }
    }

    @media (max-width: ${LAYOUT_BREAKPOINTS.LG}) {
        transform: translate(-15%, 14%);
        img {
            width: 34vw;
            clip-path: inset(0 0 45% 0);
        }
    }

    @media (max-width: 768px) {
        transform: translate(-15%, 0%);
        img {
            width: 34vw;
            clip-path: inset(0 0 24% 0);
        }
    }

    @media (max-width: ${LAYOUT_BREAKPOINTS.MD}) {
        transform: translate(-10%, 5%);
        img {
            width: 30vw;
            clip-path: inset(0 0 24% 0);
        }
    }

    @media (max-width: ${LAYOUT_BREAKPOINTS.SM}) {
        transform: translate(-16%, 7%);
        img {
            width: 40vw;
            clip-path: inset(0 0 31% 0);
        }
    }
`;

export const TextBanner = styled.div`
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    padding: 1rem;
    display: flex;
    flex-direction: column;
    z-index: 1;

    h1 {
        font-weight: 500;
        font-size: 2rem;
        margin-bottom: 6px;
    }

    p {
        font-family: 'Roboto';
        font-size: 1rem;
        font-weight: 300;
        line-height: 100%;
    }

    @media (max-width: ${LAYOUT_BREAKPOINTS.XL}) {
        h1 {
            font-size: 1.8rem;
        }

        p {
            font-size: 0.9rem;
        }
    }

    @media (max-width: ${LAYOUT_BREAKPOINTS.LG}) {
        h1 {
            font-size: 1.6rem;
        }

        p {
            font-size: 0.85rem;
        }
    }

    @media (max-width: ${LAYOUT_BREAKPOINTS.MD}) {
        h1 {
            font-size: 1.4rem;
        }

        p {
            font-size: 0.8rem;
        }
    }

    @media (max-width: ${LAYOUT_BREAKPOINTS.SM}) {
        padding: 0;
        h1 {
            font-size: 1.2rem;
        }

        p {
            font-size: 0.75rem;
        }
    }
`;

export const Content = styled.div`
    flex-grow: 1;
    margin: 0rem 10rem 0rem 10rem;

    h3 {
        display: none;
    }

    h2 {
        font-size: 2rem;
        font-family: 'Poppins';
        font-weight: 500;
        margin-bottom: 1.5rem;
    }

    @media (max-width: ${LAYOUT_BREAKPOINTS.XL}) {
        margin: 0rem 5rem;
    }
    @media (max-width: ${LAYOUT_BREAKPOINTS.LG}) {
        margin: 0rem 4rem;
    }
    @media (max-width: ${LAYOUT_BREAKPOINTS.MD}) {
        margin: 0rem 2rem;

        h2 {
            display: none;
        }

        h3 {
            display: block;
            font-family: 'Poppins';
            font-size: 1.5rem;
            font-weight: 500;
            margin-bottom: 1.5rem;
        }
    }
    @media (max-width: ${LAYOUT_BREAKPOINTS.SM}) {
        margin: 0 0 0 1.5rem;

        h2 {
            display: none;
        }

        h3 {
            display: block;
            font-family: 'Poppins';
            font-size: 1rem;
            font-weight: 500;
            margin-bottom: 1.5rem;
        }
    }
`;
