import { useState, useRef  } from "react";
import axios from "axios";
import toast, {Toaster} from "react-hot-toast";
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { validate } from "../../utils/validate";

export default function FormComponents(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [captchaToken, setCaptchaToken] = useState(null);
    const captchaRef = useRef(null);

    const handleName = (e) => setName(e.target.value); 
    const handleEmail = (e) => setEmail(e.target.value); 
    const handlePhone = (e) => setPhone(e.target.value);
    const handleMessage = (e) => setMessage(e.target.value);

    const handleVerificationSuccess = (token) => {
        setCaptchaToken(token);
    };

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const validation = validate(name, email, phone, message);
        if(validation){
            toast.error(validation);
            return;
        }
        if (!captchaToken) {
            toast.error('Пожалуйста, пройдите проверку hCAPTCHA.');
            return;
        }
        const formData = { name, email, phone, message };
        try {
            const response = await axios.post('http://62.113.97.17:8080/send', formData);
            if(response.status === 200 ){
                toast.success('Успешно отправлено');
                setName('');
                setEmail('');
                setPhone('');
                setMessage('');
                setCaptchaToken(null);
                captchaRef.current.resetCaptcha();
            }
        } catch (error) {
            toast.error('Произошла ошибка')
        };
    };
    return(
        <section id="form" className="w-full lg:mt-[100px] xl:mt-[163px]">
            <Toaster
                position="top-center"
                reverseOrder={false}
                containerClassName="toaster-container"
            />
            <h1 className="ml-[18px] sm:ml-10 text-[26px] sm:text-6xl text-black font-TTNormsProBold xl:text-[50px] 2xl:text-[75px] lg:text-[#0110CF] uppercase xl:leading-[64px] 2xl:leading-[96px]">
                напишите нам
            </h1>
            <form
                onSubmit={handleSubmit} 
                className="mt-[27px] sm:mt-12 ml-[18px] sm:ml-10 xl:mt-12 2xl:mt-[59px] pb-[119px] xl:pb-[219px] 2xl:pb-[330px] xl:ml-[50px] 2xl:ml-[50px]">
                <div className="mb-[10px] sm:mb-5 xl:mb-4 2xl:mb-6 xl:w-3/4">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={handleName}
                        className="w-3/4 lg:w-3/5 rounded-[8px] xl:w-[663px] py-2 px-2 sm:py-3 sm:px-4 bg-[#EBEBEB] text-[#7B7B7B] border border-transparent xl:rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0110CF] focus:border-transparent placeholder:text-[14px] sm:placeholder:text-xl xl:placeholder:text-2xl"
                        placeholder="Имя"
                    />
                </div>
                <div className="mb-[10px] sm:mb-5 xl:mb-4 2xl:mb-6">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleEmail}
                        className="w-[95%] lg:w-3/4 rounded-[8px] xl:w-[763px] py-2 px-2 sm:py-3 sm:px-4 bg-[#EBEBEB] text-[#7B7B7B] border border-transparent xl:rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0110CF] focus:border-transparent placeholder:text-[14px] sm:placeholder:text-xl xl:placeholder:text-2xl"
                        placeholder="Эл. почта"
                    />
                </div>
                <div className="mb-[10px] sm:mb-5 xl:mb-4 2xl:mb-6 xl:w-3/4">
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={phone}
                        onChange={handlePhone}
                        className="w-3/4 lg:w-3/5 rounded-[8px] xl:w-[463px]  py-2 px-2 sm:py-3 sm:px-4 bg-[#EBEBEB] text-[#7B7B7B] border border-transparent xl:rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0110CF] focus:border-transparent placeholder:text-[14px] sm:placeholder:text-xl xl:placeholder:text-2xl"
                        placeholder="Телефон"
                    />
                </div>
                <div className="mb-5 sm:mb-5 xl:mb-8 2xl:mb-3">
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={message}
                        onChange={handleMessage}
                        className="w-[95%] lg:w-3/4 rounded-[8px] xl:w-[763px]  py-2 px-2 sm:py-3 sm:px-4 bg-[#EBEBEB] text-[#7B7B7B] resize-none border border-transparent xl:rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0110CF] focus:border-transparent placeholder:text-[14px] sm:placeholder:text-xl xl:placeholder:text-2xl"
                        placeholder="Сообщение"
                    ></textarea>
                </div>
                <div className="mb-3">
                    <HCaptcha
                        sitekey="b594d9f2-aef4-49a8-ba1c-605e9ec8cd84"
                        onVerify={handleVerificationSuccess}
                        ref={captchaRef}
                    />
                </div>
                <div className="flex flex-col xl:flex-row mt-5">
                    <button
                        type="submit"
                        className="px-4 pt-[6px] pb-[10px] sm:py-3 lg:pt-[6px] lg:pb-[10px] rounded-lg w-[170px] sm:w-[220px] sm:text-2xl lg:text-xl 2xl:text-2xl lg:w-[170px] lg:h-[50px] xl:mr-6 2xl:mr-9 bg-[#0110CF] hover:bg-black text-white xl:rounded-[12px] focus:outline-none"
                    >
                        Отправить
                    </button>
                    <p className="text-xs lg:text-[14px] leading-[13px] sm:leading-[20px] w-[190px] sm:w-[280px] mt-[10px] font-TTNormsProRegular sm:text-[18px] xl:text-[12px] 2xl:text-[19px] text-[#7B7B7B] xl:leading-[16px] 2xl:leading-[24.32px]  2xl:w-[358.5px]">
                        Нажимая на кнопку, вы соглашаетесь с политикой обработки персональных данных
                    </p>
                </div>
            </form>
        </section>
    );
}