const User = require("./../model/userModel");
const catchAsync = require("./../utils/catchAsync");

exports.python = catchAsync(async (req, res, next) => {
  if (req.user) {
    const user = await User.findOne({ email: req.user.emails[0].value });
    res.render("sitp-python", {
      participant: user,
      razorpayButtonId: process.env.RAZORPAY_BUTTON_ID,
    });
  } else {
    res.render("sitp-python", { participant: false });
  }
});

exports.android = catchAsync(async (req, res, next) => {
  if (req.user) {
    const user = await User.findOne({ email: req.user.emails[0].value });
    res.render("sitp-android", {
      participant: user,
      razorpayButtonId: process.env.RAZORPAY_BUTTON_ID.toString(),
    });
  } else {
    res.render("sitp-android", { participant: false });
  }
});

exports.fullstack = catchAsync(async (req, res, next) => {
  if (req.user) {
    const user = await User.findOne({ email: req.user.emails[0].value });
    res.render("sitp-fullstack", {
      participant: user,
      razorpayButtonId: process.env.RAZORPAY_BUTTON_ID,
    });
  } else {
    res.render("sitp-fullstack", { participant: false });
  }
});

exports.ml = catchAsync(async (req, res, next) => {
  if (req.user) {
    const user = await User.findOne({ email: req.user.emails[0].value });
    res.render("sitp-ml", {
      participant: user,
      razorpayButtonId: process.env.RAZORPAY_BUTTON_ID,
    });
  } else {
    res.render("sitp-ml", { participant: false });
  }
});

exports.ethicalHacking = catchAsync(async (req, res, next) => {
  if (req.user) {
    const user = await User.findOne({ email: req.user.emails[0].value });
    res.render("sitp-ethical-hacking", {
      participant: user,
      razorpayButtonId: process.env.RAZORPAY_BUTTON_ID,
    });
  } else {
    res.render("sitp-ethical-hacking", { participant: false });
  }
});

exports.automobile = catchAsync(async (req, res, next) => {
  if (req.user) {
    const user = await User.findOne({ email: req.user.emails[0].value });
    res.render("sitp-automobile", {
      participant: user,
      razorpayButtonId: process.env.RAZORPAY_BUTTON_ID,
    });
  } else {
    res.render("sitp-automobile", { participant: false });
  }
});
