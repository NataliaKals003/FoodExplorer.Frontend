import styled from 'styled-components';
import { LAYOUT_BREAKPOINTS } from '../../styles/layoutBreakpoints';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const Content = styled.div`
    margin: 2rem 7.6rem;
    display: ${({ hasDishes }) => (hasDishes ? 'flex' : 'block')};
    justify-content: ${({ hasDishes }) => (hasDishes ? 'space-around' : 'none')};
    align-items: ${({ hasDishes }) => (hasDishes ? 'flex-start' : 'none')};
    flex: ${({ hasDishes }) => (hasDishes ? 'none' : '1')};

    @media (max-width: ${LAYOUT_BREAKPOINTS.MD}) {
        flex-direction: column;
        margin: 3.5rem 2rem 7rem 2rem;

        h1 {
            margin-bottom: 1rem;
        }
    }
`;

export const MyOrderContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 3rem;

    > h1 {
        font-size: 2rem;
        font-weight: 500;
        font-family: 'Poppins', sans-serif;
        margin-bottom: 2.1rem;
    }

    .totalPrice {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        margin-top: 1rem;
    }

    @media (max-width: ${LAYOUT_BREAKPOINTS.MD}) {
        width: 100%;

        .totalPrice {
            font-size: 1.5rem;
        }
    }
`;

export const MyOrder = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 1rem;

    img {
        margin-right: 13px;
        border-radius: 50%;
        width: 72px;
        height: 72px;
    }

    .dish-wrap {
        display: flex;
        flex-direction: column;
        align-items: self-start;
        width: 100%;
    }

    .dishDetails {
        display: flex;
        align-items: center;

        h2 {
            font-family: 'Poppins', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            margin-right: 10px;
        }

        span {
            font-size: 12px;
            color: ${({ theme }) => theme.COLORS.LIGHT_400};
        }
    }

    .deleteDish {
        color: ${({ theme }) => theme.COLORS.TOMATO_300};
        font-size: 12px;
        font-weight: 500;
        cursor: pointer;
        line-height: 160%;
    }

    @media (max-width: ${LAYOUT_BREAKPOINTS.MD}) {
        .dishDetails {
            h2 {
                font-size: 1.2rem;
            }
        }

        .deleteDish {
            font-size: 10 px;
        }
    }
`;
