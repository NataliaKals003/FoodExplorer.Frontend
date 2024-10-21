import styled from 'styled-components';
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
        left: 0px;
        top: 0px;
        background: linear-gradient(90deg, rgba(0, 10, 15, 1) 0%, rgba(0, 10, 15, 0) 100%);
        mask-composite: exclude;
        box-shadow: -15px 0 20px -10px rgba(0, 0, 0, 0.7);
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
        width: 10%;
        height: 100%;
        right: 0px;
        top: 0px;
        background: linear-gradient(90deg, rgba(0, 10, 15, 0) 0%, rgba(0, 10, 15, 1) 100%);
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
        align-items: center;
        padding: 0 10px;
        transition:
            opacity 0.3s ease,
            transform 0.3s ease;
    }

    .custom-swiper-button-next {
        right: 10px;
    }
    .custom-swiper-button-prev {
        left: 10px;
    }

    .custom-swiper-button-next,
    .custom-swiper-button-prev {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 4;
        cursor: pointer;
    }

    .custom-swiper-button-next {
        right: 1.8rem;
    }

    .custom-swiper-button-prev {
        left: 1.8rem;
    }

    @media (max-width: ${LAYOUT_BREAKPOINTS.MD}) {
        .custom-swiper-button-next,
        .custom-swiper-button-prev {
            display: none;
        }
    }
`;
