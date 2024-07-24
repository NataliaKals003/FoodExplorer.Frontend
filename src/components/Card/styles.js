import styled from "styled-components";
import { LAYOUT_BREAKPOINTS } from '../../styles/layoutBreakpoints';

export const Container = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.DARK_200};
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;

    > svg {
        margin: 1rem;
        align-self: end;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > svg {
        align-self: end;
        margin: 1rem 1rem 0 0;
    }

    > img {
        margin: -1rem 3.8rem 0.75rem 3.8rem;
        width: 5.5rem;
        height: 5.5rem;
        border-radius: 50%;
    }

    h1 {
        font-family: "Poppins", sans-serif;
        font-size: 0.8rem;
        font-weight: 500;
        margin-bottom: 0.75rem;
    }

    p {
        display: none;
    }

    .price {
        font-size: 1rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.CAKE_200};
        margin-bottom: 0.75rem;
    }

    @media (min-width: ${LAYOUT_BREAKPOINTS.MD}) {
        img {
            margin: -0.5rem 4rem 1rem;
            width: 6rem;
            height: 6rem;
        }

        p {
            display: block;
            width: 50%;
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
    }

    @media (min-width: ${LAYOUT_BREAKPOINTS.LG}) {
        img {
            margin: -0.5rem 4rem 1rem;
            width: 11rem;
            height: 11rem;
        }

        p {
            display: block;
            width: 60%;
            font-weight: 400;
            font-size: 1rem;
            margin: 1rem 1.5rem;
            text-align: center; 
            word-wrap: break-word;
        } 

       h1 {
            font-size: 2rem;
            font-weight: 700;
        }
    }
`;

export const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 1.5rem 1.5rem;

    .cardAmount {
        margin: 0 3.43rem;

        span {
            font-size: 1rem;
            font-weight: 400
        }
    }

    .cardButton {
        width: 100%;
        font-size: 0.8rem;
        border-radius: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem 3.5rem;
        height: 0;
    }

    @media (min-width: ${LAYOUT_BREAKPOINTS.LG}) {
        align-items: center;
        flex-direction: row;
    }
`;
