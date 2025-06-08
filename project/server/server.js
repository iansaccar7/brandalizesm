/* eslint-disable no-undef */
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Configuração do dotenv
// dotenv.config({ path: path.resolve(__dirname, '..', '.env') }); // se o .env está na raiz
dotenv.config(); // se o .env está na mesma pasta do script

console.log("Email User:", process.env.EMAIL_USER);
console.log("Code:", process.env.CODE_USER);

// Configuração do Nodemailer
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,  // Para usar SSL
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.CODE_USER,
  },
  debug: true,  // Para logar detalhes do processo de envio
  logger: true,
});

// Rota para enviar e-mail
app.post('/send-email', (req, res) => {
  const { nome, email, assunto, mensagem } = req.body;

  const mailOptions = {
    from: `"${nome}" <${email}>`,  // Corrigido: Inclui o nome da pessoa que enviou
    to: process.env.EMAIL_USER,    // Seu e-mail para receber a mensagem
    replyTo: `"${nome}" <${email}>`,  // Quando alguém responder, a resposta vai para o e-mail da pessoa
    subject: assunto,
    html: `
    <p>Você recebeu uma nova mensagem do formulário de contato:</p>
    <p><strong>Nome:</strong> ${nome}</p>
    <p><strong>E-mail:</strong> <a href="mailto:${email}">${email}</a></p>
    <br>
    <p><strong>Mensagem:</strong></p>
    <p>${mensagem.replace(/\n/g, '<br>')}</p>
    <br>
    <p>Este e-mail foi enviado através do seu site.</p>
  `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Erro ao enviar email:', error);
      return res.status(500).json({ message: 'Erro ao enviar e-mail', error: error.toString() });
    }
    console.log('Email enviado:', info.response);
    res.status(200).json({ message: 'E-mail enviado com sucesso' });
  });
});

app.listen(port, () => {
  console.log(`Servidor backend rodando na porta ${port}`);
});