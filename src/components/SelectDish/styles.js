import styled from "styled-components";
import { LAYOUT_BREAKPOINTS } from "../../styles/layoutBreakpoints";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex: 1;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    span {
        margin-bottom: 1rem;
    }
`;

export const SelectWrapper = styled.div`
display: flex;
    align-items: center;
    position: relative;

    select {
        flex: 1;
        padding: 0.75rem 2rem;
        border-radius: 0.5rem;
        border: none;
        font-size: 1rem;
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
    }

    .icon {
        margin-left: -2.5rem; /* Adjust this value as needed */
        font-size: 1.6rem;
        pointer-events: none;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
`;
