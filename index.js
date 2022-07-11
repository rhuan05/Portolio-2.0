require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodeMailer = require('nodemailer');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/', (req, res)=>{
    const info = req.body;

    if(!info.name){
        return res.send('Para enviar o email você precisa preencher o campo "seu nome".');
    };
    if(!info.email){
        return res.send('Para enviar o email você precisa preencher o campo "seu email".');
    };
    if(!info.message){
        return res.send('Para enviar o email você precisa preencher o campo "mensagem".');
    };

    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'rhuanhenrique964@gmail.com',
            pass: 'bifvnmeilebfwkfm',
        }
    });

    transporter.sendMail({
        from: `${info.name} <${info.email}>`,
        to: 'rhuanhenrique964@gmail.com',
        subject: 'Vim do seu portfólio.',
        text: info.message,
    }).then(message=>{
        res.send('Mensagem enviada com sucesso. <a href="https://portfolio-rhuan.herokuapp.com/https://portfolio-rhuan.herokuapp.com/">Voltar para o portfólio.</a>')
    }).catch(error=>{
        console.log(error);
    });
});

app.listen(process.env.PORT || 3000, console.log('Server is running!'));
