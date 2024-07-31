import styled from "styled-components";
import { LAYOUT_BREAKPOINTS } from '../../styles/layoutBreakpoints';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    .backButton {
        margin: 2.5rem 7.62rem 1.5rem; 
        
        svg {
        font-size: 2rem; 
        }
    }
`;

export const Form = styled.form`
    margin: 0 7.62rem 7.25rem; 
    display: flex;
    flex-direction: column;

    h1 {
        font-family: 'Poppins';
        font-weight: 500;
        font-size: 2rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        margin-bottom: 2rem;
    }
`;

export const DishDetails = styled.fieldset`
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
`;

export const DishAttributes = styled.fieldset`
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    margin: 2rem 0;
`;

export const DishDescription = styled.fieldset`
    border: none;
    display: flex;
    flex-direction: column;

    span {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
`;

export const TextArea = styled.textarea`
   width: 100%;
   height: 150px;
   border-radius: 0.5rem;
   margin-top: 1rem;
   background-color: ${({ theme }) => theme.COLORS.DARK_800};
   color:  ${({ theme }) => theme.COLORS.LIGHT_500};
   border: none;
   padding: 0.87rem;
`;



