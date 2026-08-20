import { Swiper, SwiperSlide  } from 'swiper/react';
import { useTranslation } from 'react-i18next';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../../assets/sytle/serviceslider.scss';
import { serviceSlides } from '../../assets/handle/data';

import { Autoplay,EffectCoverflow  } from 'swiper/modules';

export default function ServiceSlider() {

const{t}=useTranslation()


  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        speed={1200}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
         autoplay={{
        delay: 3000,          
        disableOnInteraction: false, 
         }}
        pagination={true}
        modules={[Autoplay,EffectCoverflow]}
        className="mySwipers"
      >
        {serviceSlides?.map((el)=>(
          <SwiperSlide  className='special-slide'>
          <img className='services' src={el.image} />
          <div className='slide-content'>
                 <h3>{t(el.titleKey)}</h3>
                 <p>{t(el.textKey)}</p>
                 </div>
        </SwiperSlide >
        ))}
        
      </Swiper>
    </>
  );
}
