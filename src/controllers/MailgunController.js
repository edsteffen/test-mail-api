require('dotenv').config();
const DOMAIN = process.env.DOMAIN;
const KEY = process.env.API_KEY;
const mailgun = require("mailgun-js")({apiKey: KEY, domain: DOMAIN});

module.exports = {
    async send(request, response){
        
        const data = {
            from: 'Excited User <me@samples.mailgun.org>',
            to: 'edineidaniel@gmail.com',
            subject: 'Hello Edinei',
            text: 'Yeah, this is Hard!!!'
        };
        console.log(DOMAIN);
        console.log(KEY);
        console.log(data);
        mailgun.messages().send(data, function (error, body) {
            console.log('Estou tenando enviar');
            console.log(body);
            console.log('Erro');
            console.log(error); 
            return response.json( body ); 
        });
    },
    async domains(request, response){
        const DOMAIN = process.env.DOMAIN;
        const KEY = process.env.API_KEY;
        var mailgun = require('mailgun-js')({ apiKey: KEY, domain: DOMAIN });

        mailgun.get('/domains', function (error, body) {
            console.log(body);
            return response.json( {msg:'testando'} ); 
        });
    }
}