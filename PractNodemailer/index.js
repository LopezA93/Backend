require('dotenv').config()
const EMAIL = process.env.EMAIL
const PASSWORD = process.env.PASSWORD 

const argv = process.argv.slice(2);
const to = argv[0] || 'buspopulma@gufum.com';
const subject = argv[1] || 'saludo'
const html = argv[2] || 'Hola que tal';
//hslymbbqdqwydwzn

const nodemailer = require('nodemailer')

// const transporter = nodemailer.createTransport({
//     service: 'smtp.ethereal.email',
//     port: 587,
//     auth: {
//         user: 'samanta.zieme96@ethereal.email',
//         pass: '5x5qW3kHvXffvBDxje'
//     }
// });
const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: EMAIL,
        pass: PASSWORD
    }
});
const recipient = 'cilona2909@dmtubes.com'

const mailOptions ={
    to,
    from: 'samanta.zieme96@ethereal.email',
    subject,
    html
}

const send = async () =>{
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log(info);

    } catch (error) {
        console.log(error)
    }
}
send()