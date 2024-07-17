import lending from '../../assets/services/lending.svg';
import insurance from '../../assets/services/insurance.svg';
import selection from '../../assets/services/selection.svg';
import sale from '../../assets/services/sale.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ServiceMobComponent from '../ServiceMob/ServiceMob';

export default function ServicesComponent() {

    return (
        <section id="services" className="w-full h-fit">
            <div className="flex items-center xl:mb-[54px] 2xl:mb-[80px]  xl:ml-[50px] 2xl:ml-[50px] lg:mt-[100px] xl:mt-[150px] 2xl:mt-[225px]">
                <h1 className="ml-[18px] sm:ml-11 xl:ml-0 text-[26px] sm:text-5xl xl:mr-[48px] 2xl:mr-[73px] font-TTNormsProBold xl:text-[50px] 2xl:text-[75px] uppercase">
                    Услуги
                </h1>
                <p className="hidden xl:block xl:w-[973px] xl:text-[22px] 2xl:text-[33px] font-TTNormsProRegular">
                    Auto Light занимается автокредитованием, автострахованием,
                    <br/>
                    подбором, выкупом и продажей автомобилей
                </p>
                <p className="hidden lg:block xl:hidden ml-12 lg:w-[330px]font-TTNormsProRegular">
                    Auto Light занимается автокредитованием, 
                    <br/>
                    автострахованием, подбором, выкупом 
                    <br/>
                    и продажей автомобилей
                </p>
            </div>
            <div className="hidden lg:flex max-w-[95%] h-fit lg:mt-5 xl:mt-[53px] mx-auto">
                <Swiper
                    slidesPerView={2.5}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                    clickable: true,
                    }}
                >
                    <SwiperSlide>
                        <div className="aspect-w-16 aspect-h-9">
                            <div className="xl:w-full xl:h-[333px] 2xl:h-[499.5px] rounded-[22.5px] relative overflow-hidden">
                                <img
                                    src={lending}
                                    alt="lending_image"
                                    className="w-full h-full object-cover rounded-[22.5px] transition-transform hover:scale-125"
                                />
                                <p className="absolute lg:left-[33px] xl:left-[33px] 2xl:left-[50px] lg:bottom-10 xl:top-[247px] 2xl:top-[368.5px] z-20 lg:text-[32px] xl:text-[42px] 2xl:text-[63px] mid-range:text-[50px] font-TTNormsProBold text-white uppercase">
                                    кредитование
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="aspect-w-16 aspect-h-9 xl:ml-[25px]">
                            <div className="xl:w-full  xl:h-[333px] 2xl:h-[499.5px] rounded-[22.5px] relative overflow-hidden">
                                <img
                                    src={insurance}
                                    alt="insurance_image"
                                    className="w-full h-full object-cover rounded-[22.5px] transition-transform hover:scale-125"
                                />
                                <p className="absolute lg:left-[33px] xl:left-[33px] 2xl:left-[50px] lg:bottom-10 xl:top-[247px] 2xl:top-[368.5px] z-20 lg:text-[32px] xl:text-[42px] 2xl:text-[63px] mid-range:text-[50px] font-TTNormsProBold text-white uppercase">
                                    страхование
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="aspect-w-16 aspect-h-9 xl:ml-[25px]">
                            <div className="xl:w-full xl:h-[333px] 2xl:h-[499.5px]  rounded-[22.5px] relative overflow-hidden">
                                <img
                                    src={selection}
                                    alt="selection_image"
                                    className="w-full h-full object-cover rounded-[22.5px] transition-transform hover:scale-125"
                                />
                                <p className="absolute lg:left-[33px] xl:left-[33px] 2xl:left-[50px] lg:bottom-10 xl:top-[247px] 2xl:top-[368.5px] z-20 lg:text-[32px] xl:text-[42px] 2xl:text-[63px] mid-range:text-[50px] font-TTNormsProBold text-white uppercase">
                                    Подбор/выкуп
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="aspect-w-16 aspect-h-9 xl:ml-[25px] xl:mr-[25px]">
                            <div className="xl:w-full  xl:h-[333px] 2xl:h-[499.5px] rounded-[22.5px] relative overflow-hidden">
                                <img
                                    src={sale}
                                    alt="sale_image"
                                    className="w-full h-full object-cover rounded-[22.5px] transition-transform hover:scale-125"
                                />
                                <p className="absolute lg:left-[33px] xl:left-[33px] 2xl:left-[50px] lg:bottom-10 xl:top-[247px] 2xl:top-[368.5px] z-20 lg:text-[32px] xl:text-[42px] 2xl:text-[63px] mid-range:text-[50px] font-TTNormsProBold text-white uppercase">
                                    продажа
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="flex flex-col lg:hidden px-5 sm:px-11">
                <ServiceMobComponent />
            </div>
        </section>
    );
}
