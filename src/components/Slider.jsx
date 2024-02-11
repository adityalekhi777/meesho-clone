// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Autoplay} from 'swiper/modules';


import image_1 from '../assets/slide_1.jpg';
import image_2 from '../assets/slide_2.jpg';
import image_3 from '../assets/slide_3.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Slider = () => {
  return (
    <Swiper 
    modules={[ Pagination,Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      // onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}>
      <SwiperSlide>
        <img src={image_1} alt='Slide' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image_2} alt='Slide' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image_3} alt='Slide' />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
