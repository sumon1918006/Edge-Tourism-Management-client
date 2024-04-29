// Import Swiper React components used
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Banner.css'

// import Required Modules Slider
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import BannerData from './BannerData';

const Banner = () => {
    
    return (
        <div className=' w-[100%] lg:h-[600px]'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className=""
            >

                <SwiperSlide>
                    <div className='relative'>
                    <img className='banner-img' src="https://i.ibb.co/2hQgBBF/andreas-chu-Yod-H2-Wz-N6-YU-unsplash.jpg" alt="" />
                       
                        {
                            <BannerData></BannerData>
                        }

                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='relative'>
                    <img className=' banner-img' src="https://i.ibb.co/MkyvK5S/riashat-rafat-Ph5-VL5-Tilto-unsplash.jpg" alt="" />
                        
                        {
                            <BannerData></BannerData>
                        }

                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='relative'>
                        <img className='banner-img' src="https://i.ibb.co/WpbR8Wn/jessica-favaro-973v-Rak-ll-M-unsplash.jpg" alt="" />
                        {
                            <BannerData></BannerData>
                        }

                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;