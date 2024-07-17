import user from '../../assets/advatages/user.svg';
import procent from '../../assets/advatages/procent.svg';
import conditions from '../../assets/advatages/conditions.svg';
import deal from '../../assets/advatages/deal.svg';
import quickdeals from '../../assets/advatages/quickdeals.svg';
import planet from '../../assets/advatages/planet.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';

export default function SlideAdvantagesComponent(){
    return(
        <Swiper
            slidesPerView={1}
            pagination={true}
            loop={true}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide className='sm:px-11'>
                <figure className='bg-white rounded-2xl flex flex-col items-center justify-center h-[220px] sm:h-[340px]'>
                    <img src={user} alt="advatages_image" className='w-[27px] h-[27px] sm:w-16 sm:h-16'/>
                    <figcaption className='flex flex-col items-center mt-[10px]'>
                        <h3 className='font-TTNormsProBold text-xl sm:text-4xl mb-[10px]'>Опытные специалисты</h3>
                        <p className='w-[220px] font-TTNormsProRegular text-center text-[14px] sm:text-2xl sm:px-0 sm:w-96 '>Наши специалисты помогут с приобретением авто и оформлением документов</p>
                    </figcaption>
                </figure>
            </SwiperSlide>
            <SwiperSlide className='px-[20px] sm:px-11'>
            <figure className='bg-white rounded-2xl flex flex-col items-center justify-center h-[220px] sm:h-[340px] '>
                <img src={procent} alt="procent_image" className='w-[64px] h-[27px] sm:w-32 sm:h-16'/>
                    <figcaption className='flex flex-col items-center mt-[10px]'>
                        <h3 className='font-TTNormsProBold text-xl sm:text-4xl mb-[10px]'>Одобрения кредитов</h3>
                        <p className='w-[220px] font-TTNormsProRegular text-center text-[14px] sm:text-2xl sm:px-0 sm:w-96'>Получите одобрение по кредиту от банков за 1 час</p>
                    </figcaption>
                </figure>
            </SwiperSlide>
            <SwiperSlide className='px-[20px] sm:px-11'>
                <figure className='bg-white rounded-2xl flex flex-col items-center justify-center h-[220px] sm:h-[340px]'>
                <img src={conditions} alt="conditions_image" className=' h-[27px] w-[27px] sm:w-16 sm:h-16'/>
                    <figcaption className='flex flex-col items-center mt-[10px]'>
                        <h3 className='font-TTNormsProBold text-xl sm:text-4xl mb-[10px]'>Выгодные условия</h3>
                        <p className='w-[220px] font-TTNormsProRegular text-center text-[14px] sm:text-2xl sm:px-0 sm:w-96'>Госпрограммы — 20% скидка Первоначальный взнос — 0% Срок кредита — до 10 лет</p>
                    </figcaption>
                </figure>
            </SwiperSlide>
            <SwiperSlide className='px-[20px] sm:px-11'>
                <figure className='bg-white rounded-2xl flex flex-col items-center justify-center h-[220px] sm:h-[340px]'>
                    <img src={deal} alt="deal_image" className='w-[27px] h-[27px] sm:w-16 sm:h-16'/>
                    <figcaption className='flex flex-col items-center mt-[10px]'>
                        <h3 className='font-TTNormsProBold text-xl sm:text-4xl mb-[10px]'>Прозрачность сделок</h3>
                        <p className='w-[220px] font-TTNormsProRegular text-center text-[14px] sm:text-2xl sm:px-0 sm:w-96'>Мы работаем без страховых продуктов, скрытых комиссий и КАСКО</p>
                    </figcaption>
                </figure>
            </SwiperSlide>
            <SwiperSlide className='px-[20px] sm:px-11'>
                <figure className='bg-white rounded-2xl flex flex-col items-center justify-center h-[220px] sm:h-[340px]'>
                    <img src={quickdeals} alt="quickdeals_image" className='w-[27px] h-[27px] sm:w-16 sm:h-16'/>
                    <figcaption className='flex flex-col items-center mt-[10px]'>
                        <h3 className='font-TTNormsProBold text-xl sm:text-4xl mb-[10px]'>Быстрые сделки</h3>
                        <p className='w-[220px] font-TTNormsProRegular text-center text-[14px] sm:text-2xl sm:px-0 sm:w-96'>Подача заявки по 2-м документам и проведение сделки в день обращения</p>
                    </figcaption>
                </figure>
            </SwiperSlide>
            <SwiperSlide className='px-[20px] sm:px-11'>
                <figure className='bg-white rounded-2xl flex flex-col items-center justify-center h-[220px] sm:h-[340px]'>
                    <img src={planet} alt="planet_image" className='w-[27px] h-[27px] sm:w-16 sm:h-16'/>
                    <figcaption className='flex flex-col items-center mt-[10px]'>
                        <h3 className='font-TTNormsProBold text-xl sm:text-4xl mb-[10px]'>Онлайн-оформление</h3>
                        <p className='w-[220px] font-TTNormsProRegular text-center text-[14px] sm:text-2xl sm:px-0 sm:w-96'>Заявку со всеми документами можно подать онлайн</p>
                    </figcaption> 
                </figure>
            </SwiperSlide>
        </Swiper>
    )
}