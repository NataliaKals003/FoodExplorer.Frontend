import styled from 'styled-components';

export const Container = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    background-color: ${({ theme, $isnew }) => ($isnew ? 'transparent' : theme.COLORS.LIGHT_600)};
    color: ${({ theme, $isnew }) => ($isnew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100)};
    border: ${({ theme, $isnew }) => ($isnew ? `2px dashed ${theme.COLORS.LIGHT_500}` : 'none')};
    border-radius: 0.5rem;
    margin: 0.5rem;

    > button {
        border: none;
        background: none;
        margin: 0 0.4rem;
        padding: 0;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }

    .button-delete {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    .button-add {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
`;

export const TagInput = styled.input`
    padding: 0.3rem 1rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;
    border: none;
    outline: none;
    min-width: 2rem;
    width: 7rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
`;
