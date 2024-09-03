import styled from 'styled-components';
import { LAYOUT_BREAKPOINTS } from '../../styles/layoutBreakpoints';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 13rem;

    @media (max-width: ${LAYOUT_BREAKPOINTS.MD}) {
        flex-direction: column;
        gap: 4.5rem;
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;

    > img {
        margin-right: 0.62rem;
        width: 3.1rem;
        height: 3rem;
    }

    > h1 {
        font-weight: 700;
        font-size: 2.6rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    @media (max-width: ${LAYOUT_BREAKPOINTS.MD}) {
        background: none;
    }
`;

export const Content = styled.div`
    margin: 0 4rem;
    padding: 4rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    > h2 {
        align-self: center;
        font-family: 'Poppins';
        font-weight: 500;
        font-size: 2rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        margin-bottom: 2rem;
    }

    > span {
        align-self: flex-start;
        margin-bottom: 0.5rem;
        font-size: 1rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    .login {
        width: 100%;
        padding: 0.75rem 1rem;
        border-radius: 0.5rem;
        margin-bottom: 2rem;
        font-size: 1rem;
        margin-top: 0;
    }

    > Button {
        display: block;
    }

    .createAcount {
        font-size: 0.87rem;
        font-weight: 400;
        font-family: 'Poppins';
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        margin-top: 2rem;
    }

    @media (max-width: ${LAYOUT_BREAKPOINTS.MD}) {
        padding: 0;

        > h2 {
            display: none;
        }
    }
`;
