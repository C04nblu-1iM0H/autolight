import about_image from '../../assets/about_image.svg'

export default function AboutComponent(){
    return (
        <section id='about' className="w-full h-auto">
            <h1 className="hidden xl:block font-TTNormsProBold xl:text-[50px] xl:leading-[64px] 2xl:text-[75px] uppercase xl:mt-[150px] 2xl:mt-[225px] xl:ml-[50px] 2xl:ml-[50px]">о нас</h1>
            <div className='flex flex-col xl:flex-row bg-white xl:mt-20'>
                <h1 className="block xl:hidden font-TTNormsProBold text-[26px] sm:text-5xl xl:text-[50px] xl:leading-[64px] 2xl:text-[75px] uppercase mt-[45px] ml-[20px] sm:ml-10 mb-[30px]">о нас</h1>
                <img src={about_image} alt="about_image"  className='hidden xl:block w-full max-w-[922.5px] h-auto object-contain'/>
                <div className='w-full flex justify-center items-center'>
                    <div className='px-5 sm:px-10 xl:w-3/4 2xl:w-3/4 2xl:h-[585px] xl:h-[400px] flex flex-col justify-between overflow-y-auto scrollbar-hide'>
                        <p className='w-full h-fit font-TTNormsProRegular text-[16px] sm:text-2xl leading-[20px] xl:text-[24px] xl:leading-[31px] 2xl:text-[36px] 2xl:leading-[46px]'>
                            <span className='text-[#0110CF]'>Auto Light </span> 
                            предлагает уникальные возможности для тех, кто мечтает о новом авто, 
                            но сталкивается с финансовыми трудностями. </p>
                        <p className='w-full mt-10 h-fit font-TTNormsProRegular text-[16px] sm:text-2xl xl:text-[24px] xl:leading-[31px] 2xl:text-[36px] 2xl:leading-[46px]'>
                            Компания занимается автокредитованием, автострахованием, подбором, выкупом и продажей автомобилей. 
                            У нас установлены партнерские отношения с более 15 банками, 
                            что позволяет предлагать клиентам самые выгодные условия кредитования на рынке.</p>
                        <p className='w-full mt-10 h-fit font-TTNormsProRegular text-[16px] sm:text-2xl xl:text-[24px] xl:leading-[31px] 2xl:text-[36px] 2xl:leading-[46px]'>
                            Наши специалисты помогут выбрать оптимальные условия кредитования и заполнить заявку с максимальными шансами на одобрение. 
                            Компания также предлагает услугу по подбору автомобиля, учитывая ваши индивидуальные требования, и сопровождение процесса приобретения авто.
                        </p>
                        <p className='w-full mt-10 h-fit font-TTNormsProRegular text-[16px] sm:text-2xl xl:text-[24px] xl:leading-[31px] 2xl:text-[36px] 2xl:leading-[46px] mb-11'>
                            Мы работаем по всей России, включая новые регионы. 
                            Доверьте свои автомобильные желания Auto Light, и мы воплотим их в реальность!
                        </p>
                    </div>
                </div>
                <img src={about_image} alt="about_image"  className='block xl:hidden w-full max-w-[922.5px] md:mx-auto h-auto object-contain' />
            </div>
        </section>
    )
}
