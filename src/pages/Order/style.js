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
    display: flex;
    justify-content: space-around;
    align-items: flex-start;

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
`;

export const PaymentContainer = styled.div`
    width: 35%;
    margin-left: 20px;

    @media (max-width: ${LAYOUT_BREAKPOINTS.MD}) {
        width: 100%;
        margin-left: 0;
    }
`;

export const Payment = styled.div`
    h1 {
        font-size: 2rem;
        font-weight: 500;
        font-family: 'Poppins', sans-serif;
        margin-bottom: 2.1rem;
    }

    .payment-wrap {
        border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
        border-radius: 8px;
        width: 530px;

        .payment-options {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            position: relative;

            .divider-vertical {
                padding: 0;
                width: 1px;
                height: 100%;
                background-color: ${({ theme }) => theme.COLORS.LIGHT_600};
            }
        }

        .payment-button {
            display: flex;
            flex: 1;
            align-items: center;
            justify-content: center;
            width: 100%;
            padding: 1.5rem;
            background-color: ${({ theme }) => theme.COLORS.DARK_400};
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition:
                background-color 0.3s,
                box-shadow 0.3s;

            &.selected {
                background-color: ${({ theme }) => theme.COLORS.DARK_800};
            }

            &:first-child {
                border-right: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
                border-radius: 8px 0 0 0;
            }

            .payment-icon {
                width: 24px;
                height: 24px;
                margin-right: 4px;
            }
        }

        .divider-horizontal {
            padding: 0;
            border: 0;
            height: 1px;
            background: ${({ theme }) => theme.COLORS.LIGHT_600};
        }

        .qr-code-container {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 3rem;
            margin-bottom: 3rem;
        }

        .qr-code {
            width: 250px;
            height: 250px;
        }

        .credit-form {
            display: flex;
            flex-direction: column;
            gap: 16px;
            margin: 55px 40px;
        }

        .cardDetails {
            display: flex;
            gap: 1rem;
        }

        .input-group {
            display: flex;
            flex-direction: column;
            margin-bottom: 12px;
        }

        .input-group label {
            font-size: 1rem;
            margin-bottom: 8px;
            font-weight: 400;
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }

        .input-group input {
            padding: 12px 14px;
            font-size: 16px;
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
            border-radius: 5px;
            background-color: transparent;
            transition: border-color 0.3s ease;
        }

        .input-group input:focus {
            border-color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }

        button[type='button'] {
            font-family: 'Poppins', sans-serif;
            font-size: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 11px;
            padding: 12px 32px;
            background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
        }

        button[type='button']:hover {
            background-color: ${({ theme }) => theme.COLORS.TTOMATO_3400};
        }
    }
`;
