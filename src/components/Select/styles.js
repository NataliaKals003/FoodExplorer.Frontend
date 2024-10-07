import styled from 'styled-components';
import { LAYOUT_BREAKPOINTS } from '../../styles/layoutBreakpoints';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex: 1;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    span {
        margin-bottom: 1rem;
    }

    @media (max-width: ${LAYOUT_BREAKPOINTS.MD}) {
        width: 100%;
    }
`;

export const SelectWrapper = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    .selected {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 0.75rem 2rem;
        border-radius: 0.5rem;
        border: none;
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;

        > svg {
            margin-left: 0.5rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_400};
            font-size: 1.6rem;
        }
    }
`;

export const Dropdown = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    border-radius: 0.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    z-index: 1;
    margin-top: 0.5rem;
`;

export const Option = styled.div`
    display: flex;
    align-items: center;
    padding: 0.75rem 1rem;
    cursor: pointer;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    &:hover {
        background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    }

    .icon {
        margin-right: 0.5rem;
    }
`;
