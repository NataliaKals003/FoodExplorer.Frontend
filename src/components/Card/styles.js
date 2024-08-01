import styled from "styled-components";
import { LAYOUT_BREAKPOINTS } from '../../styles/layoutBreakpoints';

export const Container = styled.button`
    background-color: ${({ theme }) => theme.COLORS.DARK_200};
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    max-width: 300px; 
    margin: 0 auto; 
    transition: transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease;
    
    &:hover {
        transform: scale(1.05); 
        filter: brightness(1.2);
    }
    
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .heartFavourite, .heart {
        height: 1.5rem;
        width: 1.5rem;
        align-self: end;
        margin: 1rem 1rem 0 0;

        @media (max-width: ${LAYOUT_BREAKPOINTS.MD}) {

            .heartFavourite, .heart{
                margin: 0.5rem;
                height: 1.2rem;
                width: 1.2rem;
            }
        }
    }

    .heartFavourite {
        color: ${({ theme }) => theme.COLORS.TOMATO_200};
    }

    > img {
        border-radius: 50%;
        margin: -1rem 0rem 1rem; 
        width: 11rem;
        height: 11rem;
    }

    h1 {
        font-family: "Poppins", sans-serif;
        text-align: center; 
        font-size: 1.5rem;
        font-weight: 700;
    }

    p {
        font-weight: 400;
        font-size: 0.7rem;
        margin: 1rem 1.5rem;
        text-align: center;
        word-wrap: break-word;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};;
    }

    .price {
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.CAKE_200};
        margin-bottom: 0.75rem;
        text-align: center; 
        font-size: 2rem;
    }

    @media (max-width: ${LAYOUT_BREAKPOINTS.MD}) {

        img {
            margin: -1rem 3rem 1rem; 
            width: 6rem;
            height: 6rem;
        }

        p {
            display: none;
        }

        h1 {
            font-size: 0.8rem;
            font-weight: 500;
        }

        .price {
            font-size: 1rem;
            margin-top: 0.75rem;
        }
    }
`;

export const Footer = styled.footer`
    display: flex;
    align-items: center;
    margin: 0 3rem 1.5rem;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;

    .cardAmount {
        margin-bottom: 0;

        span {
            font-size: 1rem;
            font-weight: 300;
        }
    }

    .cardButton {
        font-size: 0.8rem;
        font-weight: 400;
        border-radius: 0.3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.75rem 1.5rem;
    }

    @media (max-width: ${LAYOUT_BREAKPOINTS.MD}) {
        flex-direction: column;
        margin: 0 1.5rem 1.5rem;

        .cardButton {
            padding: 0.25rem 2rem;
        }
    }
`;
