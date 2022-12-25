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

exports.iiot= catchAsync(async(req,res,next) => {
    if(req.user) {
        const user = await User.findOne({email : req.user.emails[0].value});
        res.render("workshops/IIot", {participant : user});
    } else {
        res.render("workshops/IIot", {participant : false});
    }
});

exports.crypto = catchAsync(async(req,res,next) => {
    if(req.user) {
        const user = await User.findOne({email : req.user.emails[0].value});
        res.render("workshops/crypto", {participant : user});
    } else {
        res.render("workshops/crypto", {participant : false});
    }
});

exports.automobile = catchAsync(async(req,res,next) => {
    if(req.user) {
        const user = await User.findOne({email : req.user.emails[0].value});
        res.render("workshops/automobile", {participant : user});
    } else {
        res.render("workshops/automobile", {participant : false});
    }
});

exports.dl = catchAsync(async(req,res,next) => {
    if(req.user) {
        const user = await User.findOne({email : req.user.emails[0].value});
        res.render("workshops/deep-learning", {participant : user});
    } else {
        res.render("workshops/deep-learning", {participant : false});
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