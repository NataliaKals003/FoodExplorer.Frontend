import styled from "styled-components";
import { LAYOUT_BREAKPOINTS } from "../../styles/layoutBreakpoints";

export const Container = styled.div`
    width: 100;
    height: 100vh;

    display: grid;
    grid-template-rows: auto 1fr 77px;
    grid-template-areas: 
    "header"
    "content"
    "footer"
    ;

    @media (max-width: ${LAYOUT_BREAKPOINTS.MD}) {
       
    }
`;

