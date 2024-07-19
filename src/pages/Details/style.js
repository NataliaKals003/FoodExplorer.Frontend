import styled from 'styled-components';
import { LAYOUT_BREAKPOINTS } from '../../styles/layoutBreakpoints';

export const Container = styled.div`
color: ${({ theme }) => theme.COLORS.LIGHT_300};

  .backButton {
    background: none;
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    border: none;
    cursor: pointer;
    margin: 1.5rem 0 2.62rem 7.62rem;

    svg {
      font-size: 2rem; 
    }
  }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center; 
    padding: 1rem;
    margin: 1.5rem 7.62rem 9.68rem 7.62rem; 
    font-family: "Poppins", sans-serif;

  .text-content {
    margin-left: 3rem;

    h1 {
        font-weight: 500;
        font-size: 2.5rem;
        margin-bottom: 1.5rem;
    }

    p {
        font-size: 1.5rem;
        font-weight: 400;
        margin-bottom: 1.5rem;
    }

    .bottom-content {
      display: flex;
      align-items: center;

      button {
        margin-left: 1rem;
      }
    }
  }

  @media (max-width: ${LAYOUT_BREAKPOINTS.MD}) {
    margin: 1rem 3.5rem 2rem;
    flex-direction: column;
    align-items: center;

    img {
      margin-left: 0;
      margin-bottom: 1rem;
    }

    .text-content {
      align-items: center;

      .bottom-content {
        flex-direction: column;
        align-items: center;

        button {
          margin-left: 0;
          margin-top: 1rem;
        }
      }
    }
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

