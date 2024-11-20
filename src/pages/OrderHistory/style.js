import styled from 'styled-components';
import { LAYOUT_BREAKPOINTS } from '../../styles/layoutBreakpoints';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const Content = styled.div`
    flex: 1;
    margin: 2rem 7.6rem;

    > h1 {
        font-size: 2rem;
        font-weight: 500;
        font-family: 'Poppins', sans-serif;
        margin-bottom: 2.1rem;
    }

    @media (max-width: ${LAYOUT_BREAKPOINTS.MD}) {
        display: flex;
        flex-direction: column;
        margin: 3.5rem 2rem 7rem 2rem;

        h1 {
            margin-bottom: 1rem;
        }
    }
`;
