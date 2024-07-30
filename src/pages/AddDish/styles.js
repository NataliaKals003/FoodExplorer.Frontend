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

export const UploadDishContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};

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
            font-weight: 400;
        }
    }

    input {
        display: none;
    }
`;

export const DishNameContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex: 1;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    .dishNameInput {
        padding: 0.75rem 2rem;
        border-radius: 0.5rem;
        margin-top: 1rem;
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
`;

export const DishCategoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex: 1;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    select {
        margin-top: 1rem;
        padding: 0.75rem 2rem;
        border-radius: 0.5rem;
        border: none;
        margin-right: 1rem;
        font-size: 1rem;
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
    }

    .icon {
        position: absolute;
        right: 9.75rem;
        top: 50%;
        transform: translateY(-65%);
        font-size: 1.6rem;
        pointer-events: none; 
        font-size: 1.6rem;

        @media (max-width: ${LAYOUT_BREAKPOINTS.XL}) {
            right: 9.75rem;
            top: 57%;
            transform: translateY(-50%);
        }

        @media (max-width: ${LAYOUT_BREAKPOINTS.LG}) {
            right: 9.75rem;
            top: 57%;
            transform: translateY(-50%);
        }
    }
`;

export const DishAttributes = styled.fieldset`
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    margin: 2rem 0;
`;

export const DishIngredientsContainer = styled.div`
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    flex: 1;

    section {
        display: flex;
        flex-wrap: wrap;
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
        margin-top: 1rem;
        border-radius: 0.5rem;
    }
`;

export const DishPriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    .dishPriceInput {
        padding: 0.75rem 2rem;
        border-radius: 0.5rem;
        margin-top: 1rem;
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
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



