import user from '../../assets/advatages/user.svg';
import procent from '../../assets/advatages/procent.svg';
import conditions from '../../assets/advatages/conditions.svg';
import deal from '../../assets/advatages/deal.svg';
import quickdeals from '../../assets/advatages/quickdeals.svg';
import planet from '../../assets/advatages/planet.svg';
import SlideAdvantagesComponent from '../SlideAdvantages/SlideAdvantages';

export default function AdvatagesComponent(){
    return (
        <section id="advantages" className="w-full h-[-651px] mb-[45px]">
            <h1 className="font-TTNormsProBold ml-[18px] sm:ml-10 mt-[45px] text-[26px] sm:text-5xl xl:text-[50px] xl:leading-[64px] 2xl:leading-[96px] 2xl:text-[75px] uppercase lg:mt-[100px] xl:mt-[150px] 2xl:mt-[225px] xl:ml-[50px] 2xl:ml-[50px]">
                преимущества
            </h1>
           <div className='hidden lg:flex xl:h-[500px] 2xl:h-[750px] sm:mx-10 lg:mx-[50px] bg-white rounded-3xl flex-wrap justify-center items-center mt-[80px]'>
                <figure className='sm:w-1/2 sm:h-[203px] xl:w-1/3 xl:h-[250px] 2xl:h-[375px] flex flex-col items-center justify-center border-b-[3px] border-[#EDEDED]'>
                    <img src={user} alt="advatages_image" className='xl:w-[30px] xl:h-[30px] 2xl:w-[45px] 2xl:h-[45px]'/>
                    <figcaption className='flex flex-col items-center'>
                        <h3 className='font-TTNormsProMedium lg:text-[22px] 2xl:text-[33px] xl:leading-[28px] 2xl:leading-[42px] mt-4'>Опытные специалисты</h3>
                        <p className='lg:w-[240px] xl:w-[226px] 2xl:w-[339px] font-TTNormsProRegular lg:text-[18px] xl:text-[15px] 2xl:text-[23px] xl:leading-[20px] 2xl:leading-[29px] text-center mt-[10px]'>
                            Наши специалисты помогут 
                            <br/>
                            с приобретением авто 
                            <br/>
                            и оформлением документов</p>
                    </figcaption>
                </figure>
                <figure className='sm:w-1/2 sm:h-[203px]  xl:w-1/3  xl:h-[250px] 2xl:h-[375px] flex flex-col items-center justify-center border-l-[3px] xl:border-x-[3px] border-b-[3px] border-[#EDEDED]'>
                    <img src={procent} alt="procent_image" className='xl:w-14 xl:h-[30px] 2xl:w-28 2xl:h-8'/>
                    <figcaption className='flex flex-col items-center mb-3'>
                        <h3 className='font-TTNormsProMedium lg:text-[22px] 2xl:text-[33px] xl:leading-[28px] 2xl:leading-[42px] mt-4'>Одобрения кредитов</h3>
                        <p className='lg:w-[240px] xl:w-[226px] 2xl:w-[339px] font-TTNormsProRegular lg:text-[18px] xl:text-[15px] 2xl:text-[23px] xl:leading-[20px] 2xl:leading-[29px] text-center mt-[10px]'>Получите одобрение по кредиту от банков за 1 час</p>
                    </figcaption>
                </figure>
                <figure className='sm:w-1/2 sm:h-[203px] xl:w-1/3 xl:h-[250px] 2xl:h-[375px] flex flex-col items-center justify-center border-b-[3px] border-[#EDEDED]'>
                    <img src={conditions} alt="conditions_image" className=' xl:h-[30px] 2xl:w-[45px] 2xl:h-[45px]'/>
                    <figcaption className='flex flex-col items-center'>
                        <h3 className='font-TTNormsProMedium lg:text-[22px] 2xl:text-[33px] xl:leading-[28px] 2xl:leading-[42px]  mt-4'>Выгодные условия</h3>
                        <p className='lg:w-[240px] xl:w-[226px] 2xl:w-[339px] font-TTNormsProRegular lg:text-[18px] xl:text-[15px] 2xl:text-[23px] xl:leading-[20px] 2xl:leading-[29px] text-center mt-[10px]'>Госпрограммы — 20% скидка Первоначальный взнос — 0% Срок кредита — до 10 лет</p>
                    </figcaption>
                </figure>
                <figure className='sm:w-1/2 sm:h-[203px] xl:w-1/3 xl:h-[250px] 2xl:h-[375px] flex flex-col items-center justify-center  sm:border-l-[3px] sm:border-b-[3px] sm:border-[#EDEDED] xl:border-x-0 xl:border-b-0'>
                    <img src={deal} alt="deal_image" className=' xl:h-[30px] 2xl:w-[45px] 2xl:h-[45px]'/>
                    <figcaption className='flex flex-col items-center'>
                        <h3 className='font-TTNormsProMedium lg:text-[22px] 2xl:text-[33px] xl:leading-[28px] 2xl:leading-[42px]  mt-4'>Прозрачность сделок</h3>
                        <p className='lg:w-[240px] xl:w-[226px] 2xl:w-[339px] font-TTNormsProRegular lg:text-[18px] xl:text-[15px] 2xl:text-[23px]  xl:leading-[20px] 2xl:leading-[29px] text-center mt-[10px]'>Мы работаем без страховых продуктов, скрытых комиссий и КАСКО</p>
                    </figcaption>
                </figure>
                <figure className='sm:w-1/2 sm:h-[203px] xl:w-1/3 xl:h-[253px] 2xl:h-[375px] flex flex-col items-center justify-center xl:border-x-[3px] xl:border-b-[3px]  xl:border-[#EDEDED]'>
                    <img src={quickdeals} alt="quickdeals_image" className=' xl:h-[30px] 2xl:w-[45px] 2xl:h-[45px]'/>
                    <figcaption className='flex flex-col items-center'>
                        <h3 className='font-TTNormsProMedium lg:text-[22px] 2xl:text-[33px] xl:leading-[28px] 2xl:leading-[42px] mt-4'>Быстрые сделки</h3>
                        <p className='lg:w-[240px] xl:w-[226px] 2xl:w-[339px] font-TTNormsProRegular lg:text-[18px] xl:text-[15px] 2xl:text-[23px] xl:leading-[20px] 2xl:leading-[29px] text-center mt-[10px]'>Подача заявки по 2-м документам и проведение сделки в день обращения</p>
                    </figcaption>
                </figure>
                <figure className='sm:w-1/2 sm:h-[203px] xl:w-1/3 xl:h-[250px] 2xl:h-[375px] flex flex-col items-center justify-center sm:border-l-[3px] sm:border-[#EDEDED] xl:border-x-0 xl:border-b-0'>
                    <img src={planet} alt="planet_image" className='xl:h-[30px] 2xl:w-[45px] 2xl:h-[45px]'/>
                    <figcaption className='flex flex-col items-center'>
                        <h3 className='font-TTNormsProMedium lg:text-[22px] 2xl:text-[33px] xl:leading-[28px] 2xl:leading-[42px]  mt-4'>Онлайн-оформление</h3>
                        <p className='lg:w-[240px] xl:w-[226px] 2xl:w-[339px]  font-TTNormsProRegular lg:text-[18px] xl:text-[15px] 2xl:text-[23px] xl:leading-[20px] 2xl:leading-[29px] text-center mt-[10px]'>Заявку со всеми документами можно подать онлайн</p>
                    </figcaption> 
                </figure>
           </div>
           <div className='block lg:hidden mt-[30px]'>
                <SlideAdvantagesComponent/>
           </div>
        </section>
    )
}
