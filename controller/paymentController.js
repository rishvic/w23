const catchAsync = require('./../utils/catchAsync');
const Razorpay = require('razorpay');
const config = require('./../utils/config');

const User = require('./../model/userModel');

const razorpay_key = config.RAZORPAY_KEY;
const razorpay_secret = config.RAZORPAY_SECRET;

const razorpay_instance = new Razorpay({
    key_id : razorpay_key,
    key_secret: razorpay_secret
});

exports.initiatePayment = catchAsync(async (req,res,next) => {
    //amount in paise
    const user = await User.findOne({email : req.user.emails[0].value});

    let options = {
        amount: req.body.amount,
        currency: "INR",
        receipt: `receipt ${user.email}`,
        notes: {
            email : req.user.emails[0].value,
            phoneNumber : user.phoneNumber
        }
    }

    razorpay_instance.orders.create(options, (err, order) => {
        if(err) {
            throw err;
        }
        console.log(order);
        res.status(200).json({
            order,
            key : razorpay_key,
            user : {
                name : user.name,
                email : user.email,
                phoneNumber : user.phoneNumber
            }
        });
    })
});