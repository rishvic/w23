const User = require('../model/userModel');
const catchAsync = require('../utils/catchAsync');

exports.staad = catchAsync(async(req,res,next) => {
    if(req.user) {
        const user = await User.findOne({email : req.user.emails[0].value});
        res.render("workshops/staad", {participant : user});
    } else {
        res.render("workshops/staad", {participant : false});
    }
});

exports.android = catchAsync(async(req,res,next) => {
    if(req.user) {
        const user = await User.findOne({email : req.user.emails[0].value});
        res.render("workshops/android-dev", {participant : user});
    } else {
        res.render("workshops/android-dev", {participant : false});
    }
});

exports.fullstack = catchAsync(async(req,res,next) => {
    if(req.user) {
        const user = await User.findOne({email : req.user.emails[0].value});
        res.render("workshops/web-dev", {participant : user});
    } else {
        res.render("workshops/web-dev", {participant : false});
    }
});

exports.ml = catchAsync(async(req,res,next) => {
    if(req.user) {
        const user = await User.findOne({email : req.user.emails[0].value});
        res.render("workshops/ai-ml", {participant : user});
    } else {
        res.render("workshops/ai-ml", {participant : false});
    }
});

exports.ethicalHacking = catchAsync(async(req,res,next) => {
    if(req.user) {
        const user = await User.findOne({email : req.user.emails[0].value});
        res.render("workshops/ethical-hacking", {participant : user});
    } else {
        res.render("workshops/ethical-hacking", {participant : false});
    }
});

exports.python = catchAsync(async(req,res,next) => {
    if(req.user) {
        const user = await User.findOne({email : req.user.emails[0].value});
        res.render("workshops/python", {participant : user});
    } else {
        res.render("workshops/python", {participant : false});
    }
});