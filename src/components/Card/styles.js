import styled from 'styled-components';
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
    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease,
        filter 0.3s ease;

    &:hover {
        transform: scale(1.05);
        filter: brightness(1.2);
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .heartFavourite,
    .heart,
    .edit {
        cursor: pointer;
        height: 1.5rem;
        width: 1.5rem;
        align-self: end;
        margin: 1rem 1.12rem 0 0;
    }

    .heartFavourite {
        color: ${({ theme }) => theme.COLORS.TOMATO_200};
    }

    > img {
        border-radius: 50%;
        margin: 1.64rem 4rem 1rem 4rem;
        width: 11rem;
        height: 11rem;
        cursor: pointer;
    }

    h1 {
        font-family: 'Poppins', sans-serif;
        text-align: center;
        font-size: 1.5rem;
        font-weight: 700;
        cursor: pointer;
    }

    p {
        font-weight: 400;
        font-size: 0.7rem;
        margin: 0.93rem 1.5rem;
        text-align: center;
        word-wrap: break-word;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    .priceAdmin {
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.CAKE_200};
        margin-bottom: 4.15rem;
        text-align: center;
        font-size: 2rem;
    }

    .priceCustomer {
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.CAKE_200};
        text-align: center;
        font-size: 2rem;
    }

    @media (max-width: ${LAYOUT_BREAKPOINTS.MD}) {
        .heartFavourite,
        .heart,
        .edit {
            margin: 0.5rem;
            height: 1.2rem;
            width: 1.2rem;
        }

        img {
            margin: -1rem 3rem 1rem;
            width: 5.5rem;
            height: 5.5rem;
        }

        p {
            display: none;
        }

        h1 {
            font-size: 0.8rem;
            font-weight: 500;
        }

        .priceCustomer {
            font-size: 1rem;
            margin-top: 0.75rem;
            margin-bottom: 0;
        }

        .priceAdmin {
            font-size: 1rem;
            margin-top: 0.75rem;
        }
    }
`;

export const Footer = styled.footer`
    display: flex;
    align-items: center;
    margin: 1rem 3rem 1.5rem;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;

    .cardAmount {
        margin-bottom: 0;
        margin-top: 0.75rem;

        span {
            font-size: 1.25rem;
            font-weight: 400;
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
