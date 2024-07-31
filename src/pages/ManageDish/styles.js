import styled from "styled-components";
import { LAYOUT_BREAKPOINTS } from '../../styles/layoutBreakpoints';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    .backButton {
        margin: 2.5rem 7.62rem 1.5rem; 
        
        svg {
        font-size: 2rem; 

        @media (max-width: ${LAYOUT_BREAKPOINTS.MD}) {
            font-size: 1.4rem;
            align-self: center;
        }
        }

        @media (max-width: ${LAYOUT_BREAKPOINTS.LG}) {
            font-size: 1.2rem;
        }   

        @media (max-width: ${LAYOUT_BREAKPOINTS.MD}) {
            margin: 0.6rem 2rem 0.5rem;
            font-weight: 500;
            font-size: 1rem;
        }  
    }

    main {
        overflow-y: auto;
    }
`;

export const Form = styled.form`
    margin: 0 7.62rem 6.90rem; 
    display: flex;
    flex-direction: column;

    h1 {
        font-family: 'Poppins';
        font-weight: 500;
        font-size: 2rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        margin-bottom: 2rem;
    }

        @media (max-width: ${LAYOUT_BREAKPOINTS.LG}) {
            h1 {
                font-size: 1.5rem;
            }
        }

    @media (max-width: ${LAYOUT_BREAKPOINTS.MD}) {
        margin: 0 2rem 3.31rem;
    }

    .SaveDish {
        width: fit-content;
        align-self: flex-end;
        justify-content: center;
        margin-top: 2rem;
        
    @media (max-width: ${LAYOUT_BREAKPOINTS.MD}) {
        width: 100%;
    }
        
    }

`;

export const DishDetails = styled.fieldset`
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    @media (max-width: ${LAYOUT_BREAKPOINTS.MD}) {
        flex-direction: column;
        gap: 1.5rem;
    }
`;

export const DishAttributes = styled.fieldset`
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    margin: 2rem 0;

    @media (max-width: ${LAYOUT_BREAKPOINTS.MD}) {
        flex-direction: column;
    }
`;






