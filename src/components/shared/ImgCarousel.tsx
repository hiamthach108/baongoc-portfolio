'use client';

import Image from 'next/image';

import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

import clsx from 'clsx';

interface Props {
  images: string[];
}

const ImgCarousel = ({ images }: Props) => {
  const [current, setCurrent] = useState(0);

  const swiperRef = useRef<SwiperRef>(null);

  const handleNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="w-full relative">
      <Swiper
        ref={swiperRef}
        slidesPerView={2}
        spaceBetween={6}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        tabIndex={current}
        onSlideChange={({ realIndex }) => setCurrent(realIndex)}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="relative w-full h-auto aspect-square">
            <Image
              src={image}
              alt=""
              className="w-full h-[60vh] object-cover object-center"
              fill={true}
            />
            <div
              className={clsx(
                'absolute inset-0 bg-white duration-300 ease-linear flex items-center justify-center',
                current !== index ? 'bg-opacity-50' : 'bg-opacity-0',
              )}
            ></div>
          </SwiperSlide>
        ))}

        <div
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-70 aspect-square px-1 py-2 flex items-center justify-center cursor-pointer"
          onClick={handlePrevSlide}
        >
          <IconChevronLeft size={24} color="white" className="text-white" />
        </div>
        <div
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-70 aspect-square px-1 py-2 flex items-center justify-center cursor-pointer"
          onClick={handleNextSlide}
        >
          <IconChevronRight size={24} color="white" className="text-white" />
        </div>
      </Swiper>
    </div>
  );
};

export default ImgCarousel;
