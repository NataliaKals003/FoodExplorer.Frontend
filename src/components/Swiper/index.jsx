import { Container } from './styles';
import { Card } from '../Card';
import React, { useRef, useEffect } from 'react';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';

export function Swiper({ products }) {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);
    const navigate = useNavigate();

    const handleCardClick = (id) => {
        navigate(`/dish/details/${id}`);
    };

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.navigation.update();
        }
    }, []);

    return (
        <Container>
            <SwiperComponent
                modules={[Navigation, Pagination]}
                slidesPerView={5}
                spaceBetween={6}
                pagination={{ clickable: true }}
                loop={true}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                breakpoints={{
                    190: { slidesPerView: 1 },
                    280: { slidesPerView: 1 },
                    320: { slidesPerView: 2, spaceBetween: 20 },
                    375: { slidesPerView: 2, spaceBetween: 10 },
                    425: { slidesPerView: 3, spaceBetween: 10 },
                    550: { slidesPerView: 4, spaceBetween: 10 },
                    650: { slidesPerView: 4, spaceBetween: 10 },
                    760: { slidesPerView: 2, spaceBetween: 10 },
                    830: { slidesPerView: 3, spaceBetween: 10 },
                    940: { slidesPerView: 3, spaceBetween: 10 },
                    1024: { slidesPerView: 3, spaceBetween: 5 },
                    1280: { slidesPerView: 3, spaceBetween: 5 },
                    1330: { slidesPerView: 4, spaceBetween: 5 },
                    1420: { slidesPerView: 4, spaceBetween: 5 },
                    2000: { slidesPerView: 4, spaceBetween: 5 },
                }}
            >
                {products.map((product, index) => (
                    <SwiperSlide key={index}>
                        <Card product={product} onClick={() => handleCardClick(product.id)} />
                    </SwiperSlide>
                ))}
            </SwiperComponent>
            <div className="custom-swiper-button-next" ref={nextRef}>
                <FaChevronRight size={24} />
            </div>
            <div className="custom-swiper-button-prev" ref={prevRef}>
                <FaChevronLeft size={24} />
            </div>
        </Container>
    );
}
