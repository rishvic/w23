require('dotenv').config();
let HOST = process.env.HOST;
let MONGODB_URI = process.env.MONGODB_URI_TEST;
if(process.env.NODE_ENV === 'production') {
    HOST = "https://www.wissenaire.org";
    MONGODB_URI = process.env.MONGODB_URI_PROD;
}
module.exports = {
    MONGODB_URI : MONGODB_URI,
    PORT : process.env.PORT,
    NODE_ENV : process.env.NODE_ENV,
    HOST : HOST,
    EMAIL_PASSWORD : process.env.EMAIL_PASSWORD,
    EMAIL : process.env.EMAIL,
    SENDGRID_API_KEY : process.env.SENDGRID_API_KEY,
    RAZORPAY_KEY : process.env.RAZORPAY_KEY,
    RAZORPAY_SECRET : process.env.RAZORPAY_SECRET,
    OAUTH_CLIENT_ID : process.env.OAUTH_CLIENT_ID,
    OAUTH_CLIENT_SECRET : process.env.OAUTH_CLIENT_SECRET
}