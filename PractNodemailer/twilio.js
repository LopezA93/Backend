require('dotenv').config()
const sid = 'AC9a704bbdddc2bb42d62511dddd5060c1';
const psw = 'de4ddd56ce28f7a0e780369de78a5a2d'
const MYPHONE = process.env.TELEFONO
const twilio = require('twilio')
const cliente = twilio(sid, psw)

const smsOptions = {
    from: "whatsapp:+14155238886",
    to: `whatsapp:${MYPHONE}`,
    body: 'Prueba de envio whatsapp en vivo desde Node Js 4',
    mediaUrl:["https://yellow.com.uy/wp-content/uploads/2016/10/Yellow-foto-cat-sitting-web.jpg"],
    


}

const send = async () => {
    try {
        const info = await cliente.messages.create(smsOptions)

    } catch (error) {
        console.log(error)
    }
}
send()