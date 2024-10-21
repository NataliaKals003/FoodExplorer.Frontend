import styled from 'styled-components';
import { LAYOUT_BREAKPOINTS } from '../../styles/layoutBreakpoints';

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    .backButton {
        font-weight: 500;
        margin: 1.5rem 0 2.6rem 7.6rem;
    }
`;

export const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 2rem 7.6rem;
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
    }

    @media (max-width: ${LAYOUT_BREAKPOINTS.LG}) {
        margin: 2rem 2.6rem 2rem 2.6rem;
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

                .amount {
                    margin-right: 1rem;
                }

                .include {
                    font-size: 0.8rem;
                    width: 100%;

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
