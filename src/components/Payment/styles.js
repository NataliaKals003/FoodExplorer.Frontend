import styled from 'styled-components';
import { LAYOUT_BREAKPOINTS } from '../../styles/layoutBreakpoints';

export const Container = styled.div`
    /* width: 35%;
    margin-left: 20px; */

    @media (max-width: ${LAYOUT_BREAKPOINTS.MD}) {
        /* margin-left: 0; */
        /* align-self: center; */
    }
`;

export const Content = styled.div`
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
            font-size: 1rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
            border-radius: 5px;
            background-color: transparent;
            transition: border-color 0.3s ease;
        }

        .input-group input:focus {
            border-color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }

        .cardPayment-button {
            font-family: 'Poppins', sans-serif;
            font-size: 14px;
            font-weight: 500;
            display: flex;
            align-items: center;
            justify-content: center;

            > svg {
                size: 30;
            }

            :hover {
                background-color: ${({ theme }) => theme.COLORS.TTOMATO_3400};
            }
        }
    }

    @media (max-width: ${LAYOUT_BREAKPOINTS.MD}) {
        width: 100%;
        align-self: center;

        h1 {
            font-size: 1.7rem;
            margin-bottom: 0.5rem;
            margin-top: 1.5rem;
            margin-left: 0;
        }

        .payment-wrap {
            width: 100%;

            .qr-code {
                margin: 2rem 3.3rem;
            }

            .input-group label {
                font-size: 1.2rem;
            }

            .credit-form {
                margin: 40px 28px;
            }

            .qr-code {
                width: 180px;
                height: 180px;
            }

            .input-group input {
                padding: 10px 6px;
                font-size: 1rem;
                width: 100%;
            }

            .cardPayment-button {
                font-size: 1rem;
            }
        }
    }
`;
