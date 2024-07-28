import styled from "styled-components";
import { LAYOUT_BREAKPOINTS } from '../../styles/layoutBreakpoints';

export const Container = styled.div`
position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin-bottom: 3rem;

    &:before {
    content: '';
    position: absolute;
    width: 10%;
    height: 100%;
    left: -1.46px;
    top: 0.06px;
    background: ${({ theme }) => theme.COLORS.GRADIANTS_100};
    mask-composite: exclude;
    box-shadow: -15px 0 20px -10px rgba(0, 0, 0, 0.7);
    transform: matrix(-1, 0, 0, 1, 0, 0);
    z-index: 2;

    @media (max-width: ${LAYOUT_BREAKPOINTS.MD}) {
       box-shadow: none;
       background: none;
    }

    @media (max-width: ${LAYOUT_BREAKPOINTS.LG}) {
        width: 30%;
    }
  } 

  &:after {
    content: '';
    position: absolute;
    width: 224px;
    height: 100%;
    right: 0px;
    top: 0px;
    background: ${({ theme }) => theme.COLORS.GRADIANTS_100};
    mask-composite: exclude;
    box-shadow: 15px 0 20px -10px rgba(0, 0, 0, 0.7);
    z-index: 2;

    @media (max-width: ${LAYOUT_BREAKPOINTS.MD}) {
       box-shadow: none;
       background: none;
    }

    @media (max-width: ${LAYOUT_BREAKPOINTS.LG}) {
        width: 10%;
    }
  }

    .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 10px;
        transition: opacity 0.3s ease, transform 0.3s ease;
    }

    .swiper-button-next, .swiper-button-prev {
        display: none;
    }

    .custom-swiper-button-next, .custom-swiper-button-prev {
        width: 2rem; 
        height: 2rem; 
        color: ${({ theme }) => theme.COLORS.LIGHT_100}; 
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 10;
        cursor: pointer;
    }

    .custom-swiper-button-next {
        right: 1.8rem; 
    }

    .custom-swiper-button-prev {
        left: 1.8rem;
    }

    @media (max-width: ${LAYOUT_BREAKPOINTS.MD}) {
        .custom-swiper-button-next, .custom-swiper-button-prev {
            display: none;
        }
    }
`;
