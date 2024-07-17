import React, {useState, useEffect} from "react";
import logo from '../../assets/logo.svg'
import logomob from '../../assets/logomob.svg'
import { IoLogoWhatsapp } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";

export default function HeaderComponent(){
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [isOpen]);

    const closeMenu = () => {
        setOpen(false);
    };

    useEffect(() => {
        const button = document.getElementById('fixed-button');
        const footer = document.getElementById('footer');
        const footerMob = document.getElementById('footermob');
    
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              if (entry.target === footer && entry.isIntersecting) {
                button.classList.add('bg-button-white', 'text-black', 'bottom-[140px]', 'right-[50px]');
                button.classList.remove('bg-button-blue', 'hover:bg-button-black', 'text-white', 'bottom-[53px]');
              } else if (entry.target === footerMob && entry.isIntersecting) {
                button.classList.add('bg-button-white', 'text-black', 'bottom-[125px]','right-[15px]');
                button.classList.remove('bg-button-blue', 'hover:bg-button-black', 'text-white', 'bottom-[53px]', 'right-[50px]');
              } else {
                button.classList.remove('bg-button-white', 'text-black', 'bottom-[125px]', 'bottom-[140px]', 'right-[50px]', 'right-[15px]');
                button.classList.add('bg-button-blue', 'hover:bg-button-black', 'text-white', 'bottom-[53px]');
              }
            });
          },
          { threshold: 0.1 }
        );
    
        observer.observe(footer);
        observer.observe(footerMob);
    
        return () => {
          observer.unobserve(footer);
          observer.unobserve(footerMob);
        };
      }, []);

    return(
        <header id="header" className=" lg:bg-cover bg-mobileHeader-fon sm:bg-mdheader-fon md:bg-mdheader-fon lg:bg-mdheader-fon xl:bg-header-fon 2xl:bg-header-fon sm:bg-center lg:bg-top  bg-no-repeat w-full min-h-[640px] md:min-h-[768px] 2xl:min-h-[1080px] flex flex-col xl:pb-[105px] 2xl:pb-[160px] relative overflow-hidden">
            <nav className="hidden w-full h-24 lg:px-[70px] xl:px-[50px] lg:flex justify-between items-center mt-6">
                <img src={logo} alt="Auto Light Logo" className="h-24 w-24" />
                <ul className="fixed z-20 left-[36%] w-[564px] h-[62px] py-4 flex  justify-around bg-white rounded-2xl border-[1.66px] border-solid border-[#EBEBEB] ">
                    <li className="cursor-pointer"><a href="#about" className="font-TTNormsProMedium text-xl uppercase text-[#0110CF] hover:text-black">о нас</a></li>
                    <li className="cursor-pointer"><a href="#advantages" className="font-TTNormsProMedium text-xl uppercase text-[#0110CF] hover:text-black">приемущества</a></li>
                    <li className="cursor-pointer"><a href="#services" className="font-TTNormsProMedium text-xl uppercase text-[#0110CF] hover:text-black">услуги</a></li>
                    <li className="cursor-pointer"><a href="#contacts" className="font-TTNormsProMedium text-xl uppercase text-[#0110CF] hover:text-black">контакты</a></li>
                </ul>
                <ul className="w-52 hidden xl:flex flex-col items-baseline ">
                    <li className="cursor-pointer d flex items-center">
                        <a href="tel:+79882507117" className="font-TTNormsPro text-xl text-white hover:text-[#0110CF]">8 988 250 71 17</a>
                        <a href="https://wa.me/message/A576UT2YWW74J1?src=qr"><FaWhatsapp className="w-10 h-10 ml-[15px] text-white"/></a>
                    </li>
                    <li className="cursor-pointer"><a href="#form" className="font-TTNormsPro text-xl text-white hover:text-[#0110CF]">Обратная связь</a></li>
                </ul>
            </nav>
            
            {/* mobile menu */}
            <div className={`w-full pb-[2px] px-5 sm:px-[50px] pt-[30px] flex flex-col lg:hidden ${isOpen ? 'absolute bg-white z-50 overflow-hidden px-5' : ''}`}>
                <div className="flex justify-between items-center">
                    <img src={logo} alt="Auto Light Logo" className="w-[67px] h-11 sm:w-32 sm:h-20"/>
                    <div 
                        className={`fixed left-[80%] z-50 hamburger md:py-[26px] md:px-[23px] border-2 border-[#E0E0E0] ${isOpen ? 'is-active' : ''}`} 
                        id="hamburger"
                        onClick={() => setOpen(!isOpen)}
                    >
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>
                </div>
                {isOpen && (
                <nav className='fixed left-0 top-0 pt-[30px] pl-5 sm:pl-[50px] w-full flex flex-col bg-white h-screen'>
                    <img src={logomob} alt="Auto Light Logo" className="w-[67px] h-11 sm:w-32 sm:h-20"/>
                    <ul className="flex flex-col">
                        <li onClick={closeMenu} className="pt-[40px] pb-[30px] md:pt-32 md:pb-10"><a href="#about" className="text-[26.36px] md:text-[32px] leading-[33.74px] font-TTNormsProMedium uppercase text-black hover:underline">о нас</a></li>
                        <li onClick={closeMenu} className="pb-[30px] md:pb-10"><a href="#advantages" className="text-[26.36px] md:text-[32px] leading-[33.74px] font-TTNormsProMedium uppercase text-black hover:underline">приемущества</a></li>
                        <li onClick={closeMenu} className="pb-[30px] md:pb-10"><a href="#services" className="text-[26.36px] md:text-[32px] leading-[33.74px] font-TTNormsProMedium uppercase text-black hover:underline">услуги</a></li>
                        <li onClick={closeMenu} className="pb-[30px] md:pb-10"><a href="#contacts" className="text-[26.36px] md:text-[32px] leading-[33.74px] font-TTNormsProMedium uppercase text-black hover:underline">контакты</a></li>
                    </ul>
                    <a onClick={closeMenu} href="#form" className="w-[170px] h-[36.33px] md:w-[260px] md:h-16 py-[5px] px-[19px] md:py-[13px] md:px-[36px] bg-[#0110CF] text-white text-[16px] md:text-2xl leading-[23.04px] rounded-[6px] mb-[75px] md:mb-24">
                        Обратная связь
                    </a>
                    <button className="w-[150px] rounded-md h-[24px] mb-[7px] md:mb-4 select-none transition-all active:bg-[#D7D7D7] active:text-white disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                        <a href="tel:+79896143575" className="font-TTNormsProMedium text-xl md:text-3xl leading-[26px] md:leading-[32px]">8 989 614 35 75</a>
                    </button>
                    <button className="ml-[-3px] w-[150px] rounded-md h-[24px] select-none transition-all active:bg-[#D7D7D7] active:text-white disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mb-[25px] md:mb-10">
                        <a href="tel:+79882507117" className="font-TTNormsProMedium text-xl md:text-3xl leading-[26px] md:leading-[32px]">8 988 250 71 17</a>
                    </button>
                    <a href="https://wa.me/message/A576UT2YWW74J1?src=qr"><IoLogoWhatsapp className="mb-[58px] w-[42px] h-[42px] md:w-16 md:h-16 active:border-2 active:border-solid active:border-zinc-500 active:p-[1px]"/></a>
                </nav>
                )}
            </div>
            <section className="mt-[350px] sm:mt-[250px] md:mt-[340px] lg:mt-[350px] lg:mb-[200px] xl:mb-0 xl:mt-[208px] 2xl:mt-[383px] z-10 ml-[50px] sm:ml-[50px]">
                <div className="flex flex-col">
                    <h1 className="font-TTNormsProBold text-[#0110CF] uppercase text-[39px] sm:text-7xl md:text-[80px] leading-[49px] lg:text-8xl 2xl:text-9xl lg:leading-[124px] lg:mb-5">Auto Light</h1>
                    <p className="w-[229px] sm:w-[340px] lg:w-[572.67px] 2xl:w-[816px] 2xl:h-[225px] xl:mt-[6px] 2xl:mt-11 font-TTNormsProMedium text-[#0110CF] text-[16px] sm:text-2xl md:text-3xl leading-[21px]  lg:text-[41px]  2xl:text-[58.96px] lg:leading-[53px] 2xl:leading-[75.46px]">
                        Ваш надежный партнер 
                        <br />
                        в сфере автомобилей 
                        <br />
                        и финансов
                    </p>
                </div>
            </section>
            <div className="absolute hidden sm:block sm:top-[280px] sm:w-[568px] sm:h-[228px] md:h-[258px] md:top-[342px] lg:top-[448px] xl:top-[264px] 2xl:top-[396px] sm:left-[57px] md:left-[-75px] xl:left-[57px] 2xl:left-[85px] md:w-[889.33px] xl:h-[347.33px] xl:w-[689.33px] 2xl:w-[911px] 2xl:h-[419px] bg-epsilonblurmob blur-[40px] z-[2] rounded-full"></div>
            <div className="absolute top-[307px] md:top-[442px] xl:top-[329px] 2xl:top-[493.43px] left-[-244px] sm:left-[-28px] md:left-[-72.45px] 2xl:left-[-108.68px] w-[496px] h-[228px] md:w-[630px] md:h-[280px]   xl:h-[279.33px] 2xl:w-[911px] xl:w-[607.33px] 2xl:h-[419px] rotate-[7.713deg] bg-epsilonblurmob blur-[40px] z-[2] rounded-full"></div>
            <div className="absolute top-[410px] md:top-[624px] xl:top-[397px] 2xl:top-[596px] left-[37px] sm:left-[-55px] xl:left-[66px] 2x:left-[99.46px] w-[277px] h-[149px] sm:w-[496px] sm:h-[228px]  xl:w-[707px] xl:h-[279px] 2xl:w-[911px] xl:w-[607px.33px 2xl:h-[419px] rotate-[7.713deg] bg-epsilonblurmob blur-[40px] z-[2] rounded-full"></div>
            <div className="absolute top-[417px] sm:top-[438px] md:top-[558px] xl:top-[600px] 2xl:top-[839.96px] left-[-35px] md:left-[120px] xl:left-[163.4px] 2xl:left-[245.09px] w-[496px] h-[227px] xl:w-[707.33px] xl:h-[279.33px] 2xl:w-[911px] xl:w-[607px.33px 2xl:h-[419px] rotate-[8.57deg] md:rotate-[-13.758deg] bg-epsilonblurmob blur-[40px] z-[2] rounded-full"></div>
            <div id="fixed-button" className="w-[180px] md:w-[220px] xl:w-[272px] h-10 xl:h-[62px] fixed right-[45px] z-40 bg-[#0110CF] text-white hover:bg-black hover:text-white rounded-[100px] flex items-center justify-center transition-all">
                <a
                    href="https://docs.google.com/forms/d/1NipVlQ5PWD-OwRRVHRtw9puKhDJAgaWx9nJCNT33j4Q/edit"
                    className="text-[16px] md:text-xl xl:text-[27px] leading-[20px] xl:leading-[34.56px] font-TTNormsProRegular"
                >
                    Получить кредит
                </a>
            </div>
        </header>
    )
}