const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require('body-parser');
const path = require("path");
const cors = require("cors")
require('dotenv').config();

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(cors());

app.post('/send', async(req, res) => {
  const { name, email, phone, message } = req.body;
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.mail.ru',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass:  process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from:process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: 'Обратная связь с web-сайта AutoLight',
            text: `Имя: ${name}\nEmail: ${email}\nНомер телефона: ${phone}\nСообщение: ${message}`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(500).json({ error:'Ошбика в отправки заявки'});
            }
            res.status(200).json({ message:'Успешная отправка'});
        });
        
    } catch (error) {
        return res.status(500).send({
            status:500,
            message:"Ошибка в запросе"
        });
    }
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
