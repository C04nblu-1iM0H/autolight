import logo from '../../assets/logo.svg'
import { FaWhatsapp } from "react-icons/fa";

export default function FooterComponents(){
    return(
        <footer className="flex flex-col justify-between relative mt-[-75px] bg-[#0110CF] w-full xl:h-[380px] 2xl:h-[445px]">
            <nav className='hidden xl:flex justify-between mx-[50px] pt-[145px]'>
                <a href='#header'>
                    <img src={logo} alt="Auto Light Logo" className="xl:w-[103px] xl:h-[67px] 2xl:h-40 2xl:w-40 mt-[-20px]" />
                </a>
                <ul id="footer" className="xl:w-[610px] xl:h-[67px] 2xl:w-[1052px] 2xl:h-[38px] flex justify-end mt-[-21px]">
                    <li className="cursor-pointer"><a href="#about" className=" font-TTNormsProMedium  uppercase text-white xl:text-xl 2xl:text-3xl xl:leading-[26px] 2x:leading-[38.4px] hover:underline">о нас</a></li>
                    <li className="cursor-pointer"><a href="#advantages" className="font-TTNormsProMedium uppercase text-white xl:ml-[57px] 2xl:ml-[86px] xl:text-xl 2xl:text-3xl xl:leading-[26px] 2x:leading-[38.4px] hover:underline">приемущества</a></li>
                    <li className="cursor-pointer"><a href="#services" className="font-TTNormsProMedium text-3xl uppercase text-white xl:ml-[57px] 2xl:ml-[86px] xl:text-xl 2xl:text-3xl xl:leading-[26px] 2x:leading-[38.4px] hover:underline">услуги</a></li>
                    <li className="cursor-pointer"><a href="#contacts" className="font-TTNormsProMedium text-3xl uppercase text-white xl:ml-[57px] 2xl:ml-[86px] xl:text-xl 2xl:text-3xl xl:leading-[26px] 2x:leading-[38.4px] hover:underline">контакты</a></li>
                </ul>
            </nav>
            <nav className='hidden xl:flex justify-between ml-[50px] mr-[52px] items-end mb-10'>
                <div className='flex'>
                    <p className='font-TTNormsProRegular text-white xl:text-[16px] 2xl:text-[24px] xl:leading-[20px] 2xl:leading-[38.4px]'>©2024 Auto Light</p>
                    <p className='font-TTNormsProRegular text-white xl:text-[16px] 2xl:text-[24px] xl:leading-[20px] 2xl:leading-[38.4px] xl:ml-[75px] 2xl:ml-28'>Все права защищены</p>
                </div>
                <div className='flex items-center'>
                    <a href="tel:+79896143575" className='hover:bg-white hover:text-[#0110CF] cursor-pointer font-TTNormsProRegular text-white xl:px-[19px] xl:py-[9px] 2xl:px-[29px] 2xl:py-[14px] rounded-[150px] border-[1px] 2xl:border-[2px] xl:text-[18px] 2xl:text-[27px]'>8 989 614 35 75</a>
                    <div className='hover:bg-white hover:text-[#0110CF] cursor-pointer font-TTNormsProRegular text-white flex items-center xl:px-[19px] xl:py-[9px] 2xl:px-[29px] 2xl:py-[14px] xl:ml-[20px] 2xl:ml-[30px] rounded-[150px] border-[1px] 2xl:border-[2px]'>
                        <a className='flex items-center' href="https://wa.me/message/A576UT2YWW74J1?src=qr">
                            <FaWhatsapp  className='xl:w-5 xl:h-5 2xl:w-8 2xl:h-8 mr-[15px]'/>
                            <span className='xl:text-[18px] 2xl:text-[27px]'>WhatsApp</span>
                        </a>
                    </div>
                </div>
            </nav> 

            {/* mobile nav menu */}
            <nav className='flex xl:hidden flex-col pt-[76px] ml-[18px] sm:ml-10'>
                <ul id="footermob" className="flex flex-col">
                    <li className="cursor-pointer py-[30px] sm:py-10"><a href="#about" className="text-[18px] sm:text-2xl leading-[23px] font-TTNormsProMedium uppercase text-white hover:underline">о нас</a></li>
                    <li className="cursor-pointer pb-[30px] sm:pb-10"><a href="#advantages" className="text-[18px] sm:text-2xl leading-[23px] font-TTNormsProMedium uppercase text-white hover:underline">приемущества</a></li>
                    <li className="cursor-pointer pb-[30px] sm:pb-10"><a href="#services" className="text-[18px] sm:text-2xl leading-[23px] font-TTNormsProMedium uppercase text-white hover:underline">услуги</a></li>
                    <li className="cursor-pointer pb-[30px] sm:pb-10"><a href="#contacts" className="text-[18px] sm:text-2xl leading-[23px] font-TTNormsProMedium uppercase text-white hover:underline">контакты</a></li>
                </ul>
                <a href="tel:+79896143575" className='hover:bg-white hover:text-[#0110CF] w-[150px] sm:w-[220px] cursor-pointer px-4 py-2 sm:px-5 sm:py-3 font-TTNormsProRegular text-white text-[16px] sm:text-2xl leading-[20px] rounded-[89px] border-[1px]'>8 989 614 35 75</a>
                <div className='w-[150px] sm:w-[220px] cursor-pointer px-4 py-2 sm:px-5 sm:py-3 mt-[14px] sm:mt-5 font-TTNormsProRegular text-white hover:bg-white hover:text-[#0110CF] flex items-center rounded-[89px] border-[1px]'>
                    <a className='flex items-center' href="https://wa.me/message/A576UT2YWW74J1?src=qr">
                        <FaWhatsapp  className='w-[19px] h-[19px] sm:w-9 sm:h-9 mr-3'/>
                        <span className='text-[16px] sm:text-2xl leading-[20px]'>WhatsApp</span>
                    </a>
                </div>
            </nav>
            <div className='flex justify-between xl:hidden px-5 sm:px-10 mt-[115px] sm:mt-[55px] mb-[30px]'>
                <a href='#header'>
                    <img src={logo} alt="Auto Light Logo" className="cursor-pointer w-[67px] h-11 sm:w-32 sm:h-20"/>
                </a>
                <div className='flex flex-col items-center'>
                    <p className='font-TTNormsProRegular text-white  text-xs sm:text-xl leading-[15px]'>©2024 Auto Light</p>
                    <p className='font-TTNormsProRegular text-white hover:bg-white hover:text-[#0110CF] text-xs sm:text-xl leading-[15px]'>Все права защищены</p>
                </div>
            </div>
        </footer>
    );
}