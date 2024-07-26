import styled from "styled-components";
import { LAYOUT_BREAKPOINTS } from '../../styles/layoutBreakpoints';

export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.DARK_200};
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    max-width: 300px; 
    margin: 0 auto; 
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .heartFavourite, .heart {
        height: 1.5rem;
        width: 1.5rem;
        align-self: end;
        margin: 1rem;

        @media (max-width: ${LAYOUT_BREAKPOINTS.MD}) {
            margin: 0.5rem;
            height: 1.2rem;
            width: 1.2rem;
        }
    }

    .heartFavourite {
        color: ${({ theme }) => theme.COLORS.TOMATO_200};
    }

    > img {
        margin: 0rem 2rem 0.75rem 2rem; 
        width: 5.5rem;
        height: 5.5rem;
        border-radius: 50%;
    }

    h1 {
        font-family: "Poppins", sans-serif;
        font-size: 0.8rem;
        font-weight: 500;
        margin-bottom: 0.75rem;
        text-align: center; 
    }

    p {
        display: none;
    }

    .price {
        font-size: 1rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.CAKE_200};
        margin-bottom: 0.75rem;
        text-align: center; 
    }

    @media (min-width: ${LAYOUT_BREAKPOINTS.MD}) {

        svg{
            size: 18px;
        }

        img {
            margin: 0rem 3rem 1rem; 
            width: 6rem;
            height: 6rem;
        }

        p {
            display: block;
            width: 90%; 
            font-weight: 400;
            font-size: 0.7rem;
            margin: 1rem 1.5rem;
            text-align: center;
            word-wrap: break-word;
        }

        h1 {
            font-size: 1rem;
            font-weight: 700;
        }

        .price {
            font-size: 1.5rem;
        }
    }

    @media (min-width: ${LAYOUT_BREAKPOINTS.LG}) {
        img {
            margin: 0rem 3rem 1rem; 
            width: 11rem;
            height: 11rem;
        }

        p {
            display: block;
            width: 90%; 
            font-weight: 400;
            font-size: 1rem;
            margin: 1rem 1.5rem;
            text-align: center;
            word-wrap: break-word;
        }

        h1 {
            font-size: 1.5rem;
            font-weight: 700;
        }

        .price {
            font-size: 2rem;
        }
    }
`;

export const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 1.5rem 1.5rem;

    .cardAmount {
        margin-bottom: 1.2rem;
        span {
            font-size: 1rem;
            font-weight: 300;
        }
    }

    .cardButton {
        font-size: 0.8rem;
        font-weight: 400;
        border-radius: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.25rem 2rem; /* Ajusta o padding para caber no card */
    }

    @media (min-width: ${LAYOUT_BREAKPOINTS.MD}) {
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: center;
        gap: 1rem;
        margin: 1rem 0 1.5rem;

        .cardAmount {
            margin-bottom: 0;

            span {
                font-size: 1.3rem;
            }
        }

        .cardButton {
            font-size: 0.8rem;
            padding: 0.75rem 1.5rem;
            border-radius: 0.3rem;
        }
    }

    @media (min-width: ${LAYOUT_BREAKPOINTS.LG}) {
        align-items: center;
        flex-direction: row;

        .cardAmount {
            margin-bottom: 0;

            span {
                font-size: 1.5rem;
            }
        }

        .cardButton {
            font-size: 0.8rem;
            padding: 0.8rem 1.5rem;
            font-weight: 500;
            border-radius: 0.3rem;
        }
    }
`;
