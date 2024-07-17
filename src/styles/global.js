import { createGlobalStyle } from "styled-components";
import { LAYOUT_BREAKPOINTS } from "./layoutBreakpoints";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 16px;
        @media (max-width: ${LAYOUT_BREAKPOINTS.MD}) {
            font-size: 12px;
        }
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.DARK_400};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
        font-family: "Roboto", sans-serif;
        font-size: 1rem;
        outline: none;
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }
`;
