import classes from './overview.module.scss';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

const Overview = () => {
  return (
    <section id='screenShots' className={classes.overview}>
      <div className="container">
       <div className={classes.wrapper}>
         <div className={classes.block1}>
           <h2 className={classes.title}>Overview</h2>
            <div className={classes.subBlock1}>
            <h3 className={classes.subTitle}>Just describe your puzzle to get the 3D solution:</h3>
            <div className={classes.br}></div>
              <div className={classes.descr}>
                  <div>- Pocket Cube and Mirror Cube 2x2 : this app can solve the cube in 14 moves or less !</div>
                  <div>- Rubik's Cube : solves the classic 3x3 cube with an average of 27 moves.- Skewb : solved in 11 moves maximum.</div>
                  <div>- Skewb Diamond : solved in 10 moves maximum.</div>
                  <div>- Pyraminx : solved in 11 moves disregarding the trivial rotation of the tips.</div>
                  <div className={classes.cube}>- Ivy Cube : solved in 8 moves maximum.</div>
                  <div className={classes.br}></div>
                  Practice solving your puzzle as fast as possible with random shuffling and a timer with full statistics (SpeedCubing).
                  Learn to solve the classic 3x3 step by step with the Fridrich method.
                  Create patterns on your 3x3 cube.
                  <div className={classes.br}></div>
                  This application needs internet access to get the solution.
                </div>
            </div>
             <a className={classes.linkMore} href="#">
              Learn More 
              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                <circle cx="11.5" cy="11.5" r="11" stroke="#F35D5D"/>
                <path d="M6.96967 9.40918L11.5 13.9395L16.0303 9.40918" stroke="#F35D5D"/>
              </svg>
             </a>
         </div>

         <div className={classes.block2}>
          <Swiper className='swiper-container2 swiper2'
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
                  spaceBetween: 30,
                  slidesPerView: 1.5, 
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
       </div>
      </div>
    </section>
  )
}

export default Overview;