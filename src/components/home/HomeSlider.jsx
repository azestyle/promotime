import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { SliderText } from './SliderText';
import { sliderArry } from '../../assets/handle/data';

export default function HomeSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        speed={1200}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
        delay: 3000,          
        disableOnInteraction: false, 
         }}
        modules={[Autoplay,EffectFade, Navigation]}
        className="mySwiperss"
      >
        {sliderArry?.map(el=>(
          <SwiperSlide>
          <img src={el} />
        </SwiperSlide>
        ))}
       
      </Swiper>
    </>
  );
}
