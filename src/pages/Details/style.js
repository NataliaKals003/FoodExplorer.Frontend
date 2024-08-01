import styled from 'styled-components';
import { LAYOUT_BREAKPOINTS } from '../../styles/layoutBreakpoints';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

  .backButton {
    margin: 2rem 0 2.62rem 7.62rem;
    svg {
      font-size: 2rem; 
    }

    @media (max-width: ${LAYOUT_BREAKPOINTS.MD}) {
      font-weight: 400;
      font-size: 2rem;
    }
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 1.5rem 7.62rem 9.68rem 7.62rem;
  font-family: "Poppins", sans-serif;

  img {
    flex: none;
    width: 30%;  
    height: auto; 
    margin-right: 2rem;
  }

  .text-content {
    align-self: center;
    
    h1 {
      font-weight: 500;
      font-size: 2.5rem;
    }

    p {
      font-size: 1.5rem;
      font-weight: 400;
      margin: 1.5rem 0;
    }

    .bottom-content {
      font-family: 'Roboto';
      font-weight: 500;
      margin-top: 3rem;
      display: flex;
      align-items: center;

      .include {
        margin-left: 1rem;
        display: flex;
        align-items: center;
        background: ${({ theme }) => theme.COLORS.PRIMARY};
        border: none;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        padding: 0.5rem 1rem;
        font-size: 1rem;
        cursor: pointer;
        width: auto;
        
        .text-desktop {
          display: inline;
        }

        .text-mobile {
          display: none;
          margin-right: 2rem;
        }

        .icon {
          display: none;
          margin-left: 2rem;
        }

        @media (max-width: ${LAYOUT_BREAKPOINTS.MD}) {
          font-size: 0.875rem;
          padding: 0.5rem;
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          
          .text-desktop {
            display: none;
          }
          
          .text-mobile {
            display: inline;
          }
          
          .icon {
            display: block;
            margin-right: 0.5rem;
          }
        }
      }
    }
  }
  
  @media (max-width: ${LAYOUT_BREAKPOINTS.LG}) {
    img {
      width: 50%;
    }
  }
  
  @media (max-width: ${LAYOUT_BREAKPOINTS.MD}) {
    flex-direction: column;
    align-items: center;

    h1 {
      margin-top: 1rem;
      font-size: 2.5rem;
    }

    p {
      margin: 1.5rem 0;
      font-size: 1.5rem;
    }

    img {
      margin-right: 0;
      flex: none;
      width: auto;
    }

    .text-content {
      display: flex;
      flex-direction: column;
      text-align: center;
    }
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  gap: 0.75rem;

  @media (max-width: ${LAYOUT_BREAKPOINTS.MD}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    padding: 0 1.75rem;
  }
`;


