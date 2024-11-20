import styled from 'styled-components';
import { LAYOUT_BREAKPOINTS } from '../../styles/layoutBreakpoints';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const TableHeader = styled.div`
    display: flex;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-weight: bold;
    border-top: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
    border-radius: 8px 8px 0 0;

    @media (max-width: ${LAYOUT_BREAKPOINTS.MD}) {
        display: none;
    }
`;

export const TableRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    border-top: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
    text-align: center;

    &:last-child {
        border-bottom: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
    }

    @media (max-width: ${LAYOUT_BREAKPOINTS.MD}) {
        /* Estilos específicos para telas menores */
        border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
        border-radius: 8px;
        padding: 1rem 1.25rem;
        margin-bottom: 1rem;
    }
`;

export const TableCell = styled.div`
    display: flex;
    align-items: center;
    text-align: left;
    font-size: ${({ header }) => (header ? '1rem' : '0.8rem')};
    padding: 1rem 1.5rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    line-height: 1.3rem;
    border-right: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
    flex: 1;

    &:nth-child(3) {
        flex: 2;
    }
    &:nth-child(1) {
        flex: 0.7;
    }

    &:nth-child(2),
    &:nth-child(4) {
        flex: 0.4;
    }

    &:first-child {
        border-left: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
    }

    @media (max-width: ${LAYOUT_BREAKPOINTS.LG}) {
        &:nth-child(3) {
            flex: 2;
        }
        &:nth-child(1) {
            flex: 1.6;
        }

        &:nth-child(2),
        &:nth-child(4) {
            flex: 0.5;
        }
    }

    @media (max-width: 768px) {
        &:nth-child(1) {
            flex: 6.6;
        }
    }

    @media (max-width: ${LAYOUT_BREAKPOINTS.MD}) {
        border-right: none;
        padding: 0.5rem 1rem;

        &:first-child {
            border-left: none;
            margin-bottom: 1rem;
        }

        &:nth-child(3) {
            flex: 0 0 100%;
            order: 2;
            align-self: flex-start;
        }
        &:nth-child(1) {
            order: 3;
        }
    }
`;
