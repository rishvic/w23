const nodemailer = require('nodemailer');
const config = require('./config');

const sendEmail = async (options) => {
    //create transport function
    console.log(config.EMAIL, config.EMAIL_PASSWORD);
    let transporter = nodemailer.createTransport({
        service : 'gmail',
        auth : {
            user : config.EMAIL,
            pass : config.EMAIL_PASSWORD
        }
    });

    const mailOptions = {
        from : `WISSENAIRE'22 <wissenaire2022@gmail.com>`,
        to : options.email,
        subject : options.subject,
        text : options.text
    }

    await transporter.sendMail(mailOptions);

}

module.exports = sendEmail;

// require('dotenv').config();
// const sgMail = require('@sendgrid/mail')
// console.log(process.env.SENDGRID_API_KEY)
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)
// const msg = {
//   to: 'test@example.com', // Change to your recipient
//   from: 'test@example.com', // Change to your verified sender
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// }
// sgMail
//   .send(msg)
//   .then(() => {
//     console.log('Email sent')
//   })
//   .catch((error) => {
//     console.error(error)
//   })