import React from  'react';
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/less';
import 'swiper/less/navigation';
import 'swiper/less/pagination';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import DoctorCard from '../components/doctorCard'

//import images
import img1 from '../images/zahra-etemadi.png'
import img2 from '../images/ali-hemati.png'
import img3 from '../images/elham-mohammadi.png'
import img4 from '../images/maryam-amini.png'
import img5 from '../images/maryam-montazeri.png'
import img6 from '../images/sara-payam-shad.png'
function DoctorSlider()
{
    return(
        <div>
        
        <div className='container py-4 px-4 justify-content-center rounded slider'>
            <p className='p-drslider' dir='rtl'>محبوب‌ترین‌ها</p>
            <br />
            <Swiper 
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            freeMode={true}
            grabCursor={true}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className='mySwiper'
            slidesPerView={5}
            spaceBetween={30}
           >
    
                <SwiperSlide>
                <DoctorCard data={{imgSrc:img1  , nameDoctor: 'زهرا اعتمادی' , title:'مشاوره ازدواج'}}/>
                </SwiperSlide>
                <SwiperSlide>
                <DoctorCard data={{imgSrc:img2  , nameDoctor: 'علی همتی' , title:'مشاوره تحصیلی'}}/>
                </SwiperSlide>
                <SwiperSlide>
                <DoctorCard data={{imgSrc:img3  , nameDoctor: ' الهام محمدی' , title:'مشاوره فردی-خانواده'}}/>
                </SwiperSlide>
                <SwiperSlide>
                <DoctorCard data={{imgSrc:img4  , nameDoctor: 'مریم امینی' , title:'مشاوره خانواده'}}/>
                </SwiperSlide>
                <SwiperSlide>
                <DoctorCard data={{imgSrc:img5  , nameDoctor: 'مریم منتظری' , title:'مشاوره فردی'}}/>
                </SwiperSlide>
                <SwiperSlide>
                <DoctorCard data={{imgSrc:img6  , nameDoctor: 'سارا پیام' , title:'مشاوره تحصیلی'}}/>
                </SwiperSlide>
                <SwiperSlide>
                <DoctorCard data={{imgSrc:img6  , nameDoctor: 'سارا پیام' , title:'مشاوره اجتماعی'}}/>
                </SwiperSlide>
                <SwiperSlide>
                <DoctorCard data={{imgSrc:img6  , nameDoctor: 'سارا پیام' , title:'مشاوره تحصیلی'}}/>
                </SwiperSlide>
                <SwiperSlide>
                <DoctorCard data={{imgSrc:img6  , nameDoctor: 'سارا پیام' , title:'مشاوره خانواده'}}/>
                </SwiperSlide>
                <SwiperSlide>
                <DoctorCard data={{imgSrc:img6  , nameDoctor: 'سارا پیام' , title:'مشاوره ازدواج-خانواده'}}/>
                </SwiperSlide>
                <SwiperSlide>
                <DoctorCard data={{imgSrc:img6  , nameDoctor: 'سارا پیام' , title:'مشاوره فردی'}}/>
                </SwiperSlide>
                <br />
            </Swiper>   
        </div>
        </div>
    )
}
export default DoctorSlider;