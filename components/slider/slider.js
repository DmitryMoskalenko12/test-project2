import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import Image from 'next/image';
import classes from './slider.module.scss';

const Slider = () => {
  return (
    <div className={classes.slider}>
     <Swiper className='swiper-container swiper'
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      scrollbar={{ draggable: true }}
      pagination={{ clickable: true }}
      slidesPerView={1}
      grabCursor = {true}
      spaceBetween={0}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        320: {
          spaceBetween: 25,
          slidesPerView: 1,
        },
        768: {
        slidesPerView: 'auto', 
        centeredSlides: true, 
        spaceBetween: 26, 
        loop: true,
        },
        992: {
          slidesPerView: 'auto', 
          centeredSlides: true, 
          spaceBetween: 26, 
          loop: true,
        },
        1440: {
          spaceBetween: 38,
          slidesPerView: 'auto', 
          centeredSlides: true, 
          loop: true,
        },
      }}
    >
      <SwiperSlide className="slide"><Image src={'/images/picture2.webp'} width={322} height={322}/></SwiperSlide>
      <SwiperSlide className="slide"><Image src={'/images/picture2.webp'} width={322} height={322}/></SwiperSlide>
      <SwiperSlide className="slide"><Image src={'/images/picture2.webp'} width={322} height={322}/></SwiperSlide>
      <SwiperSlide className="slide"><Image src={'/images/picture2.webp'} width={322} height={322}/></SwiperSlide>
      <SwiperSlide className="slide"><Image src={'/images/picture2.webp'} width={322} height={322}/></SwiperSlide>
      <SwiperSlide className="slide"><Image src={'/images/picture2.webp'} width={322} height={322}/></SwiperSlide>
      <SwiperSlide className="slide"><Image src={'/images/picture2.webp'} width={322} height={322}/></SwiperSlide>
    </Swiper>
    </div>
  )
}

export default Slider;