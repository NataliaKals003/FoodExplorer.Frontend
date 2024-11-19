import styled from 'styled-components';
import { LAYOUT_BREAKPOINTS } from '../../styles/layoutBreakpoints';

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    .backButton {
        font-size: 1.5rem;
        font-weight: 700;
        display: flex;
        align-items: center;
        /* margin-bottom: 2rem; */
        margin: 1.5rem 0 2.6rem 7.6rem;
        svg {
            font-size: 1.5rem;
        }
    }
`;

export const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center; /* Ensures vertical alignment */
    margin: 2rem 7.6rem;
    font-family: 'Poppins', sans-serif;
    gap: 2rem; /* Adds space between the image and text */

    .text-content {
        align-self: center;
        margin-left: 2rem;
        max-width: 60%; /* Prevents text from being too wide */

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
            display: flex;
            align-items: center;

            .amount {
                margin-right: 2rem;
            }

            .include {
                background: ${({ theme }) => theme.COLORS.PRIMARY};
                font-size: 1rem;
                cursor: pointer;
                text-align: center;
                width: auto;
                justify-content: center;

                .icon {
                    display: none;
                }

                .text-desktop {
                    display: inline;
                }

                .text-mobile {
                    display: none;
                }
            }
        }
    }

    img {
        align-self: center;
        width: 390px;
        height: 390px;
        border-radius: 50%;
        object-fit: cover; /* Ensures the image is properly cropped in a circle */
    }

    @media (max-width: ${LAYOUT_BREAKPOINTS.LG}) {
        margin: 2rem 2.6rem 2rem 2.6rem;
        .backButton {
            font-weight: 400;
            font-size: 1.4rem;
        }

        .text-content {
            margin-left: 2rem;

            h1 {
                font-weight: 500;
                font-size: 1.7rem;
            }

            p {
                font-size: 0.9rem;
            }

            .bottom-content {
                justify-content: flex-start;

                .include {
                    font-size: 0.9rem;
                }
            }
        }

        img {
            width: 290px;
            height: 290px;
        }
    }

    @media (max-width: ${LAYOUT_BREAKPOINTS.MD}) {
        display: flex;
        flex-direction: column;
        text-align: center;
        margin: 1rem 3.5rem 2rem 3.5rem;
        justify-content: space-evenly;

        .backButton {
            font-weight: 400;
            font-size: 1.5rem;
        }

        .text-content {
            margin-left: 0;
            justify-content: center;

            h1 {
                font-size: 1.68rem;
            }

            p {
                font-size: 1rem;
            }

            .bottom-content {
                justify-content: center;

                .amount {
                    margin-right: 1rem;
                }

                .include {
                    font-size: 0.8rem;
                    width: 100%;
                }
            }
        }

        img {
            margin-bottom: 1rem;
            width: 200px;
            height: 200px;
        }
    }
`;

export const TagsContainer = styled.div`
    display: block;
`;
