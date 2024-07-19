import styled from "styled-components";
import { LAYOUT_BREAKPOINTS } from "../../styles/layoutBreakpoints";
export const Container = styled.div`
    display: flex;
    flex-direction: column;
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
export const Content = styled.div`
`;