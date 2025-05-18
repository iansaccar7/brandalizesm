import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
dotenv.config()

// Configuração do Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.CODE_USER
    },
});

// Rota para enviar e-mail
app.post('/send-email', (req, res) => {
    const { nome, email, assunto, mensagem } = req.body;

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: assunto,
        text: `
      Nome: ${nome}
      E-mail: ${email}
      
      Mensagem:
      ${mensagem}
    `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Erro ao enviar e-mail');
        }
        res.status(200).send('E-mail enviado com sucesso');
    });
});

app.listen(port, () => {
    console.log(`Servidor backend rodando na porta ${port}`);
});
