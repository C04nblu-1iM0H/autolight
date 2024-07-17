import { useState } from "react";

import MapComponents from "../map/map";
import FormComponents from "../form/from";

import { FaTelegram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import inst from '../../assets/contacts/ints.svg';
import instOrigin from '../../assets/contacts/instorg.svg';
import vk from '../../assets/contacts/vk.svg';
import vkOrigin from '../../assets/contacts/vkorg.svg';
import telegramClick from '../../assets/contacts/telegramclikc.svg';
import instClick from '../../assets/contacts/instclick.svg';
import vkClick from '../../assets/contacts/vkclick.svg';
import telegram from '../../assets/contacts/telegram.svg'
import whtasApp from '../../assets/contacts/whatsapp.svg'
import whatsAppClick from '../../assets/contacts/whatsappclick.svg'
import toast,{ Toaster } from "react-hot-toast";

export default function ContactComponent(){
    const [telegramActive, setTelegramActive] = useState(false);
    const [instActive, setInstActive] = useState(false);
    const [vkActive, setVkActive] = useState(false);
    const [whatsAppActive, setWhatsAppActive] = useState(false);
    const [, setCopied] = useState(false);
    
    const handleIconClick = (iconSetter) => {
        iconSetter(true);
        setTimeout(() => {
          iconSetter(false);
        }, 200);
    };

    const copyTextToClipboard = async (text) => {
        if ('clipboard' in navigator) {
          return await navigator.clipboard.writeText(text);
        } else {
          return document.execCommand('copy', true, text);
        }
    };

    const handleCopyClick = () => {
        copyTextToClipboard('autolitecredit@gmail.com')
          .then(() => {
            setCopied(true);
            toast.success('Скопировано');
            setTimeout(() => {
              setCopied(false);
            }, 2000);
        })
        .catch((err) => {
            console.log('Something went wrong', err);
        });
    };
    return(
        <section id="contacts" className="w-full bg-white mt-[45px] xl:mt-[150px] 2xl:mt-[224px] relative z-20 rounded-b-[22px] xl:rounded-b-[75px]">
            <Toaster/>
            <h1 className="font-TTNormsProBold uppercase pt-[45px] ml-[18px] sm:ml-10 text-[26px] sm:text-6xl xl:text-[50px] xl:leading-[64px] 2xl:text-[75px] 2xl:leading-[96px] xl:pt-[67px] 2xl:pt-[100px] xl:ml-[50px] 2xl:ml-[50px]">
                Контакты
            </h1>
            <div className="flex flex-col lg:flex-row lg:flex-wrap lg:w-full 2xl:w-full lg:mt-12 2xl:mt-20">
                <div className="flex flex-wrap 2xl:justify-between items-start w-full">
                    <div className="ml-5 sm:ml-10 xl:ml-[50px] 2xl:ml-[50px] lg:mr-[202px] xl:mr-[300px] 2xl:mr-0">
                        <p className="text-[16px] sm:text-2xl lg:text-[22px] leading-[20px] lg:leading-[29px] text-[#7B7B7B] font-TTNormsProRegular mt-[30px] sm:mt-14 lg:mt-0 mb-[10px] lg:mb-[18px]">Телефоны</p>
                        <a href="tel:+79896143575" className="cursor-pointer hidden lg:block text-xl sm:text-3xl lg:text-[29px] 2xl:text-[38.88px] 2xl:leading-[50px] font-TTNormsProMedium leading-[26px] sm:leading-[37px] lg:leading-[43px] mb-[7px]">8 989 614 35 75</a>
                        <a href="tel:+79882507117" className="cursor-pointer hidden lg:block text-xl sm:text-3xl lg:text-[29px] 2xl:text-[38.88px] 2xl:leading-[50px] font-TTNormsProMedium leading-[26px] sm:leading-[37px] lg:leading-[43px]">8 988 250 71 17</a>
                        <button className="block md:hidden w-[150px] ml-[-6px] mb-[7px] rounded-md h-[24px] select-none transition-all active:bg-[#D7D7D7] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                            <a href="tel:+79896143575" className="text-xl sm:text-3xl lg:text-[29px] 2xl:text-[38.88px] 2xl:leading-[50px] font-TTNormsProMedium leading-[26px] sm:leading-[37px] lg:leading-[43px]">8 989 614 35 75</a>
                        </button>
                        <button className="block md:hidden ml-[-6px] w-[150px] rounded-md h-[24px] select-none transition-all active:bg-[#D7D7D7] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mb-[25px] md:mb-10">
                            <a href="tel:+79882507117" className="text-xl sm:text-3xl lg:text-[29px] 2xl:text-[38.88px] 2xl:leading-[50px] font-TTNormsProMedium leading-[26px] sm:leading-[37px] lg:leading-[43px]">8 988 250 71 17</a>
                        </button>
                        <a href="https://wa.me/message/A576UT2YWW74J1?src=qr" className="hidden lg:block"><IoLogoWhatsapp className="my-[25px] sm:my-9 w-[42px] h-[42px] sm:w-16 sm:h-16 xl:w-[58px] xl:h-[58px] xl:hover:text-[#4BED68]" /></a>
                        <a
                            href="https://wa.me/message/A576UT2YWW74J1?src=qr"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => handleIconClick(setWhatsAppActive)}
                            className="cursor-pointer lg:hidden"
                        >
                            <img
                            src={whatsAppActive ? whatsAppClick : whtasApp}
                            alt="Telegram icon"
                            className="w-[52px] h-[52px] sm:w-16 sm:h-16 my-[25px]"
                            />
                        </a>
                    </div>
                    <div className="hidden lg:block lg:w-[495px] 2xl:w-[654.75px]">
                        <p className="lg:text-[22px] leading-[43px] text-[#7B7B7B] font-TTNormsProRegular mb-[18px]">Реквизиты</p>
                        <p className="lg:text-[29px] 2xl:text-[38.88px] font-TTNormsProMedium leading-[37px] 2xl:leading-[51px]">
                            ИНН: 616483380087
                        </p>
                        <p className="lg:text-[29px] 2xl:text-[38.88px] font-TTNormsProMedium leading-[37px] 2xl:leading-[51px]">
                            Индивидуальный предприниматель Карапетьян Карэн Геннадьевич
                        </p>
                    </div>
                    <div className="hidden 2xl:block mr-[50px]">
                        <p className="xl:text-[22px] leading-[43px] text-[#7B7B7B] font-TTNormsProRegular mb-[18px] ">Соц. сети</p>
                        <div className="flex gap-x-6 mt-6">
                            <a href="https://t.me/autolight_russ" target="_blank" rel="noopener noreferrer" className="w-[80px] h-[80px] text-[#0110CF] hover:text-blue-500">
                                <FaTelegram className="w-[80px] h-[80px]" />
                            </a>
                            <a href="https://www.instagram.com/autolight.rus?igsh=ZjJteGN4b21yeWVz&utm_source=qr" target="_blank" className="relative" rel="noopener noreferrer">
                                <img src={inst} alt="Instagram" className="w-[80px] h-[80px] relative top-0 left-0 transition-opacity duration-300" />
                                <img src={instOrigin} alt="Instagram" className="w-[80px] h-[80px] absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                            </a>
                            <a href="https://vk.com/autolight61" target="_blank" className="relative" rel="noopener noreferrer">
                                <img src={vk} alt="Vk" className="w-[80px] h-[80px] relative top-0 left-0 transition-opacity duration-300" />
                                <img src={vkOrigin} alt="Vk" className="w-[80px] h-[80px] absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex items-center w-full">
                    <div className="ml-[18px] sm:ml-10 mb-[30px] sm:mb-16 lg:mb-0 xl:ml-[50px] 2xl:ml-[50px] xl:mt-5 lg:mr-[100px] xl:mr-[190px] 2xl:mr-[150px]">
                        <p className="text-[16px] sm:text-2xl lg:text-[22px] leading-[20px] xl:leading-[43px] text-[#7B7B7B] font-TTNormsProRegular mb-[18px]">Эл. почта</p>
                        <p onClick={handleCopyClick} className="cursor-pointer text-xl sm:text-3xl lg:text-[29px] 2xl:text-[38.88px] 2xl:leading-[50px] font-TTNormsProMedium leading-[26px] xl:leading-[37px]">AutoLiteCredit@mail.ru</p>
                    </div>
                    <div className="hidden lg:block lg:w-[447px] 2xl:w-[529px]">
                        <p className="lg:text-[22px] lg:leading-[29px] 2xl:leading-[43px] text-[#7B7B7B] font-TTNormsProRegular mb-[18px]">Юридический и почтовый адрес</p>
                        <p className="lg:text-[29px] font-TTNormsProMedium leading-[37px] 2xl:text-[38.88px] 2xl:leading-[50px]">
                            344082, г. Ростов-на-Дону, Большая Садовая 15/40, кв 9
                        </p>
                    </div>
                </div>
                <div className="hidden lg:block 2xl:hidden lg:ml-10 xl:ml-[50px] 2xl:ml-[50px] mt-[53px]">
                    <p className="text-[16px] sm:text-2xl lg:text-[22px] leading-[20px] xl:leading-[43px] text-[#7B7B7B] font-TTNormsProRegular mb-[18px]">Соц. сети</p>
                    <div className="flex gap-x-6 mt-6">
                        <a href="https://t.me/autolight_russ" target="_blank" rel="noopener noreferrer" className="w-[80px] h-[80px] text-[#0110CF] hover:text-blue-500">
                            <FaTelegram className="w-[80px] h-[80px]" />
                        </a>
                        <a href="https://www.instagram.com/autolight.rus?igsh=ZjJteGN4b21yeWVz&utm_source=qr" target="_blank" className="relative" rel="noopener noreferrer">
                            <img src={inst} alt="Instagram" className="w-[80px] h-[80px] relative top-0 left-0 transition-opacity duration-300" />
                            <img src={instOrigin} alt="Instagram" className="w-[80px] h-[80px] absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                        </a>
                        <a href="https://vk.com/autolight61" target="_blank" className="relative" rel="noopener noreferrer">
                            <img src={vk} alt="Vk" className="w-[80px] h-[80px] relative top-0 left-0 transition-opacity duration-300" />
                            <img src={vkOrigin} alt="Vk" className="w-[80px] h-[80px] absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                        </a>
                    </div>
                </div>
            </div>
            <section>
                <MapComponents />
            </section>
            <div className="ml-5 sm:ml-10 mb-[75px] block lg:hidden">
                <p className="text-[#7B7B7B] font-TTNormsProRegular text-[16px] sm:text-2xl leading-[20px]">Соц. сети</p>
                <div className="flex gap-x-6 mt-[10px]">
                <a
                    href="https://t.me/autolight_russ"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleIconClick(setTelegramActive)}
                    className="cursor-pointer"
                >
                    <img
                    src={telegramActive ? telegramClick : telegram}
                    alt="Telegram icon"
                    className="w-[52px] h-[52px] sm:w-16 sm:h-16"
                    />
                </a>
                <a
                    href="https://www.instagram.com/autolight.rus?igsh=ZjJteGN4b21yeWVz&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleIconClick(setInstActive)}
                    className="cursor-pointer"
                >
                    <img
                    src={instActive ? instClick : inst}
                    alt="Instagram icon"
                    className="w-[52px] h-[52px] sm:w-16 sm:h-16"
                    />
                </a>
                <a
                    href="https://vk.com/autolight61"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleIconClick(setVkActive)}
                    className="cursor-pointer"
                >
                    <img
                    src={vkActive ? vkClick : vk}
                    alt="VK icon"
                    className="w-[52px] h-[52px] sm:w-16 sm:h-16"
                    />
                </a>
                </div>
            </div>
            <FormComponents />
        </section>
    )
}