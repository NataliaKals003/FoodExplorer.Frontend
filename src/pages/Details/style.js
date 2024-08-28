import styled from 'styled-components';
import { LAYOUT_BREAKPOINTS } from '../../styles/layoutBreakpoints';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
`;

export const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 2rem 7.6rem 2rem 7.6rem;
    font-family: 'Poppins', sans-serif;

    .backButton {
        font-size: 1.5rem;
        font-weight: 700;
        display: flex;
        align-items: center;
        align-self: flex-start;
        margin-bottom: 2rem;
        svg {
            font-size: 1.5rem;
        }
    }

    .text-content {
        align-self: center;
        margin-left: 2rem;

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
                background: ${({ theme }) => theme.COLORS.PRIMARY};
                font-size: 1rem;
                cursor: pointer;
                width: fit-content;
                text-align: center;

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
    }

    @media (max-width: ${LAYOUT_BREAKPOINTS.LG}) {
        /* margin: 1rem 3.5rem 2rem 3.5rem; */
        .backButton {
            font-weight: 400;
            font-size: 1.4rem;
            align-self: flex-start;
        }

        .text-content {
            margin-left: 2rem;
            align-self: center;

            h1 {
                font-weight: 500;
                font-size: 1.7rem;
            }

            p {
                font-size: 0.9rem;
                font-weight: 400;
                margin: 1.5rem 0;
            }

            .bottom-content {
                justify-content: flex-start;

                .include {
                    font-size: 0.9rem;
                    width: max-content;

                    .text-desktop {
                        display: block;
                    }

                    .text-mobile {
                        display: none;

                        .icon {
                            display: none;
                        }
                    }
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
            align-self: flex-start;
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

                .include {
                    font-size: 0.8rem;

                    .text-desktop {
                        display: none;
                    }

                    .text-mobile {
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;

                        .icon {
                            display: block;
                            margin-right: 0.5rem;
                        }
                    }
                }
            }
        }

        img {
            margin-bottom: 1rem;
            align-self: center;
            width: 200px;
            height: 200px;
        }
    }
`;

export const TagsContainer = styled.div`
    display: block;
`;
