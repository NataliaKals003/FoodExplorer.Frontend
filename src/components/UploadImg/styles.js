import styled from "styled-components";
import { LAYOUT_BREAKPOINTS } from '../../styles/layoutBreakpoints';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};    

    @media (max-width: ${LAYOUT_BREAKPOINTS.MD}) {
        width: 100%;
    }

    > label {
        display: flex;
        align-items: center;
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        margin-top: 1rem;
        padding: 0.75rem 2rem;
        border-radius: 0.5rem;
        width: auto;
        
        > svg {
            font-size: 1.5rem;
            margin-right: 0.5rem;
        }

        p {
            font-family: 'Poppins';
            font-size: 0.8rem;
            font-weight: 500;
        }
    }

    input {
        display: none;
    }
`;
