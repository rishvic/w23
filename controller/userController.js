const User = require('./../model/userModel');
const Competition = require('./../model/competitionModel');
const Contact = require('./../model/contactModel');
const catchAsync = require('./../utils/catchAsync');

exports.updateProfile = catchAsync(async (req,res, next) => {
    const user = await User.findOne({email : req.user.emails[0].value});
    var wissid;
    if (user.id < 10) wissid = 'W22R1000' + user.id;
    else if (user.id < 100) wissid = 'W22R100' + user.id;
    else if(user.id < 1000) wissid = 'W22R10' + user.id;
    else wissid = 'W22R1' + user.id;

    const updates = {
        phoneNumber : req.body.phoneNumber,
        institute : req.body.institute,
        year : req.body.year,
        city : req.body.city,
        caref : req.body.caref,
        branch : req.body.branch,
        wissId : wissid
    }

    const updatedUser = await User.updateOne({email : req.user.emails[0].value}, updates);
    
    res.status(200).json(
        {
            status : 'success',
            user : updatedUser
        }
    )
}
);

exports.postContact = catchAsync(async(req,res, next) => {
    
    const contactinfo = {
        name : req.body.name,
        email : req.body.email,
        message : req.body.message
    }
    const contact = await Contact.create(contactinfo);
    console.log(req.body);
    res.status(200).json({
        status : 'success',
        message : 'contact created successfully',
        contact : contact
    })
}
);

exports.registerCompetition = catchAsync(async(req,res,next) => {
    const user = await User.findOne({email : req.user.emails[0].value});
    const registration = {
        name : user.name,
        email : user.email,
        phoneNumber : user.phoneNumber,
        institute : user.institute,
        competition : req.body.competition,
        wissId : user.wissId
    }

    let registeredCompetition = await Competition.create(registration);

    res.status(201).json({
        status : "success"
    })
})