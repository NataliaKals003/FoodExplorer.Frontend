import { Container } from './styles'
import { Card } from '../Card'
import React, { useRef } from 'react';;
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function Swiper({ products }) {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <Container>
            <SwiperComponent
                modules={[Navigation]}
                slidesPerView={4}
                centeredSlides={true}
                pagination={{ clickable: false }}
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
                loop={true}
                breakpoints={{
                    190: { slidesPerView: 1 },
                    280: { slidesPerView: 1 },
                    320: { slidesPerView: 3, spaceBetween: 90 },
                    375: { slidesPerView: 3, spaceBetween: 50 },
                    425: { slidesPerView: 3, spaceBetween: 10 },
                    550: { slidesPerView: 4, spaceBetween: 50 },
                    650: { slidesPerView: 4, spaceBetween: 10 },
                    760: { slidesPerView: 3, spaceBetween: 10 },
                    1024: { slidesPerView: 3, spaceBetween: 10 },
                    1330: { slidesPerView: 3, spaceBetween: 10 },
                    1280: { slidesPerView: 3, spaceBetween: 80 },
                    1330: { slidesPerView: 4, spaceBetween: 20 },
                    2000: { slidesPerView: 5, spaceBetween: 10 },
                }}
            >
                {products.map((product, index) => (
                    <SwiperSlide key={index}>
                        <Card
                            title={product.title}
                            description={product.description}
                            imageUrl={product.imageUrl}
                            price={product.price}
                        />
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