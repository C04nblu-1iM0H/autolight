export const validate = (name, email, phone, message) =>{
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\+?[0-9]{10,12}$/;

    if(!name) return 'Введите имя'
    if(name.length < 2) return 'Имя должно содержать минимум 2 символа'
    if(name.length > 25) return 'Слишком длинное имя'
    if(!email)return 'Введите почту';
    if(!emailPattern.test(email)) return 'Введите корректный адрес эл. почты';
    if(!phone) return 'Введите номер телефона';
    if(!phonePattern.test(phone)) return 'Введите корректный номер телефона';
    if(!message) return 'Введите сообщение';
    return null;
}