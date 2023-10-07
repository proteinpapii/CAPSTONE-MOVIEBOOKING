import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'



export const Carousel = () => {
    return (
        <Swiper
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            pagination={{
                dynamicBullets: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img src="https://movienew.cybersoft.edu.vn/hinhanh/ban-tay-diet-quy.png" alt="slide-1" style={{ width: '100%', height: '60%' }} />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h.png" alt="slide-2" style={{ width: '100%', height: '60%' }} />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://movienew.cybersoft.edu.vn/hinhanh/cuoc-chien-sinh-tu.png" alt="slide-3" style={{ width: '100%', height: '60%' }} />
            </SwiperSlide>
        </Swiper>
    )
}




