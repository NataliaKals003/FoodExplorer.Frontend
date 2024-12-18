import styled from 'styled-components';
import { LAYOUT_BREAKPOINTS } from '../../styles/layoutBreakpoints';

export const Container = styled.header`
    grid-area: header;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1.75rem 6rem;
    height: 6.5rem;
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.DARK_600};

    .headerButton {
        width: 20%;
        justify-content: center;
    }

    @media (max-width: ${LAYOUT_BREAKPOINTS.LG}) {
        padding: 3.5rem 1.75rem 1.5rem 1.75rem;

        .headerButton {
            width: 23%;
            justify-content: center;
        }
    }

    @media (max-width: 768px) {
        padding: 3.5rem 1.75rem 1.5rem 1.75rem;

        .headerButton {
            display: none;
        }

        .headerTextButton {
            display: none;
        }

        .favouriteOrderButton {
            display: none;
        }
    }

    @media (max-width: ${LAYOUT_BREAKPOINTS.SM}) {
        padding: 3.5rem 1.75rem 1.5rem 1.75rem;

        .headerTextButton {
            display: none;
        }
    }

    .headerTextButton {
        /* display: none; */
        font-weight: 400;
        font-size: 1rem;
        margin-right: 1.5rem;
    }

    .favouriteOrderButton {
        font-weight: 400;
        font-size: 1rem;
        margin-right: 1.5rem;
    }
`;

export const Logo = styled.div`
    display: flex;
    flex-direction: row;
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;

    > img {
        margin-right: 0.62rem;
        width: 1.87rem;
        height: 1.87rem;
    }

    .title {
        display: flex;
        flex-direction: column;
        cursor: pointer;
    }

    strong {
        font-size: 0.75rem;
        align-self: flex-end;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.CAKE_200};
    }

    @media (max-width: 768px) {
        .title {
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }
        span {
            font-size: 1.5rem;
        }
        strong {
            align-self: center;
            margin-left: 8px;
        }
    }

    @media (max-width: ${LAYOUT_BREAKPOINTS.XS}) {
        font-size: 1.5rem;
        flex: 1;
        padding: 0 1rem;
    }
`;

export const Logout = styled.button`
    border: none;
    background: none;

    > svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-size: 2rem;
        margin-left: 2rem;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

export const Search = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    margin: 0 2rem;
    /* height: 100px; */

    .header {
        display: flex;
        align-items: center;
        padding: 0.75rem 6rem;

        > svg {
            margin-right: 0.5rem;
        }
    }

    .search-results {
        max-height: 300px;
        overflow-y: auto;
        background-color: rgba(0, 0, 0, 0.7); /* Semi-transparent black background */
        position: absolute;
        top: 100%; /* Place the results container directly below the input */
        left: 0;
        width: 100%;
        z-index: 10;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow */
        border-radius: 5px; /* Rounded corners */
        margin-top: 2px;
        margin-bottom: 3rem;
        padding: 1rem;
    }

    .result-item {
        padding: 10px;
        color: #fff; /* White text for contrast */
        cursor: pointer;
        transition: background-color 0.2s;
    }

    .result-item:hover {
        background-color: rgba(255, 255, 255, 0.2); /* Light highlight on hover */
    }
    @media (max-width: 768px) {
        display: none;
    }
`;

export const Menu = styled.button`
    background-color: transparent;
    border: none;
    display: none;

    > svg {
        margin-right: 0.5rem;
        font-size: 2rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    @media (max-width: 768px) {
        display: block;
    }
`;

export const OrdersIcon = styled.div`
    position: relative;
    display: none;
    align-items: center;

    > svg {
        font-size: 2rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    > span {
        background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
        position: absolute;
        top: -10px;
        right: -10px;
        background-color: ${({ theme }) => theme.COLORS.RED};
        color: white;
        border-radius: 50%;
        padding: 0.2rem 0.5rem;
        font-size: 0.75rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 768px) {
        display: flex;
    }

    @media (max-width: ${LAYOUT_BREAKPOINTS.SM}) {
        > span {
            top: -5px;
            right: -5px;
            font-size: 0.6rem;
        }
    }
`;
