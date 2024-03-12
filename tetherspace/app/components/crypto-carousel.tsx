import React from "react";
import { images } from "../libs/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import Image from "next/image";

const CryptoCarousel = () => {
  return (
    <Swiper
      slidesPerView={8}
      spaceBetween={20}
      modules={[Autoplay]}
      autoplay={{ delay: 1000, disableOnInteraction: true }}
      loop={true}
    >
      {images.map((logo, index) => (
        <SwiperSlide key={index}>
          <Image
            src={`/assets/focus/${logo.src}`}
            alt={logo.alt}
            className="h-12 md:h-16 grayscale hover:grayscale-0 cursor-pointer transition-grayscale duration-200"
            height={64}
            width={256}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CryptoCarousel;
