import styled from "styled-components";

export const Container = styled.div`
    border: none;
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    span {
        border-bottom: 1rem;
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
