const catchAsync = require("./../utils/catchAsync");
const User = require('./../model/userModel');

const findUser = async (email) => {
    const user = await User.findOne({email : email});
    return user;
}

exports.artelligence = catchAsync (async (req,res,next) => {
    if(req.user) {
        const user = await findUser(req.user.emails[0].value);
        let isIITBBS; 
        if(user.email.endsWith("@iitbbs.ac.in")) {
            isIITBBS = "yes";
        } else {
            isIITBBS = "no";
        }

        res.render("artelligence", {participant:user, isIITBBS : isIITBBS});
      } else {
        res.render("artelligence", {participant:false, isIITBBS:null});
    }
});

exports.riddlegenix = catchAsync (async (req,res,next) => {
    if(req.user) {
        const user = await findUser(req.user.emails[0].value);
        let isIITBBS; 
        if(user.email.endsWith("@iitbbs.ac.in")) {
            isIITBBS = "yes";
        } else {
            isIITBBS = "no";
        }

        res.render("riddlegenix", {participant:user, isIITBBS : isIITBBS});
    } else {
        res.render("riddlegenix", {participant:false, isIITBBS:null});
    }
});

exports.counterCypher = catchAsync (async (req,res,next) => {
    if(req.user) {
        const user = await findUser(req.user.emails[0].value);
        let isIITBBS; 
        if(user.email.endsWith("@iitbbs.ac.in")) {
            isIITBBS = "yes";
        } else {
            isIITBBS = "no";
        }

        res.render("counter-cypher", {participant:user, isIITBBS : isIITBBS});
    } else {
        res.render("counter-cypher", {participant:false, isIITBBS:null});
    }
});

exports.colloquiaCS = catchAsync (async (req,res,next) => {
    if(req.user) {
        const user = await findUser(req.user.emails[0].value);
        let isIITBBS; 
        if(user.email.endsWith("@iitbbs.ac.in")) {
            isIITBBS = "yes";
        } else {
            isIITBBS = "no";
        }

        res.render("colloquia-cs", {participant:user, isIITBBS : isIITBBS});
    } else {
        res.render("colloquia-cs", {participant:false, isIITBBS : null});
    }
});

exports.colloquiaMechanical = catchAsync (async (req,res,next) => {
    if(req.user) {
        const user = await findUser(req.user.emails[0].value);
        let isIITBBS; 
        if(user.email.endsWith("@iitbbs.ac.in")) {
            isIITBBS = "yes";
        } else {
            isIITBBS = "no";
        }

        res.render("colloquia-mech", {participant:user, isIITBBS : isIITBBS});
    } else {
        res.render("colloquia-mech", {participant:false, isIITBBS:null});
    }
});



exports.colloquiaCivil = catchAsync (async (req,res,next) => {
    if(req.user) {
        const user = await findUser(req.user.emails[0].value);
        let isIITBBS; 
        if(user.email.endsWith("@iitbbs.ac.in")) {
            isIITBBS = "yes";
        } else {
            isIITBBS = "no";
        }

        res.render("colloquia-civil", {participant:user, isIITBBS : isIITBBS});
    } else {
        res.render("colloquia-civil", {participant:false, isIITBBS : null});
    }
});

exports.colloquiaElectrical = catchAsync (async (req,res,next) => {
    if(req.user) {
        const user = await findUser(req.user.emails[0].value);
        let isIITBBS; 
        if(user.email.endsWith("@iitbbs.ac.in")) {
            isIITBBS = "yes";
        } else {
            isIITBBS = "no";
        }

        res.render("colloquia-electrical", {participant:user, isIITBBS : isIITBBS});
    } else {
        res.render("colloquia-electrical", {participant:false, isIITBBS : null});
    }
});

exports.analogCircuitDesign = catchAsync (async (req,res,next) => {
    if(req.user) {
        const user = await findUser(req.user.emails[0].value);
        let isIITBBS; 
        if(user.email.endsWith("@iitbbs.ac.in")) {
            isIITBBS = "yes";
        } else {
            isIITBBS = "no";
        }

        res.render("analog-circuit-design", {participant:user, isIITBBS : isIITBBS});
    } else {
        res.render("analog-circuit-design", {participant:false, isIITBBS : null});
    }
});

exports.mathsOlympiad = catchAsync (async (req,res,next) => {
    if(req.user) {
        const user = await findUser(req.user.emails[0].value);
        let isIITBBS; 
        if(user.email.endsWith("@iitbbs.ac.in")) {
            isIITBBS = "yes";
        } else {
            isIITBBS = "no";
        }

        res.render("maths-olympiad", {participant:user, isIITBBS : isIITBBS});
    } else {
        res.render("maths-olympiad", {participant:false, isIITBBS : null});
    }
});

exports.scripticWissen = catchAsync (async (req,res,next) => {
    if(req.user) {
        const user = await findUser(req.user.emails[0].value);
        let isIITBBS; 
        if(user.email.endsWith("@iitbbs.ac.in")) {
            isIITBBS = "yes";
        } else {
            isIITBBS = "no";
        }

        res.render("scriptic-wissen", {participant:user, isIITBBS : isIITBBS});
    } else {
        res.render("scriptic-wissen", {participant:false, isIITBBS : null});
    }
});

exports.humanity = catchAsync (async (req,res,next) => {
    if(req.user) {
        const user = await findUser(req.user.emails[0].value);
        let isIITBBS; 
        if(user.email.endsWith("@iitbbs.ac.in")) {
            isIITBBS = "yes";
        } else {
            isIITBBS = "no";
        }

        res.render("humanity", {participant:user, isIITBBS : isIITBBS});
    } else {
        res.render("humanity", {participant:false, isIITBBS : null});
    }
});

exports.goldbergChallenge = catchAsync (async (req,res,next) => {
    if(req.user) {
        const user = await findUser(req.user.emails[0].value);
        let isIITBBS; 
        if(user.email.endsWith("@iitbbs.ac.in")) {
            isIITBBS = "yes";
        } else {
            isIITBBS = "no";
        }

        res.render("goldberg-challenge", {participant:user, isIITBBS : isIITBBS});
    } else {
        res.render("goldberg-challenge", {participant:false, isIITBBS : null});
    }
});

exports.quizzaire = catchAsync (async (req,res,next) => {
    if(req.user) {
        const user = await findUser(req.user.emails[0].value);
        let isIITBBS; 
        if(user.email.endsWith("@iitbbs.ac.in")) {
            isIITBBS = "yes";
        } else {
            isIITBBS = "no";
        }

        res.render("quizzaire", {participant:user, isIITBBS : isIITBBS});
    } else {
        res.render("quizzaire", {participant:false, isIITBBS : null});
    }
});

exports.bgmi = catchAsync (async (req,res,next) => {
    if(req.user) {
        const user = await findUser(req.user.emails[0].value);
        let isIITBBS; 
        if(user.email.endsWith("@iitbbs.ac.in")) {
            isIITBBS = "yes";
        } else {
            isIITBBS = "no";
        }

        res.render("bgmi", {participant:user, isIITBBS : isIITBBS});
    } else {
        res.render("bgmi", {participant:false, isIITBBS : null});
    }
});

exports.valorant = catchAsync (async (req,res,next) => {
    if(req.user) {
        const user = await findUser(req.user.emails[0].value);
        let isIITBBS; 
        if(user.email.endsWith("@iitbbs.ac.in")) {
            isIITBBS = "yes";
        } else {
            isIITBBS = "no";
        }

        res.render("valorant", {participant:user, isIITBBS : isIITBBS});
    } else {
        res.render("valorant", {participant:false, isIITBBS : null});
    }
});

exports.schoolChamp = catchAsync (async (req,res,next) => {
    if(req.user) {
        const user = await findUser(req.user.emails[0].value);
        let isIITBBS; 
        if(user.email.endsWith("@iitbbs.ac.in")) {
            isIITBBS = "yes";
        } else {
            isIITBBS = "no";
        }

        res.render("school-champ", {participant:user, isIITBBS : isIITBBS});
    } else {
        res.render("school-champ", {participant:false, isIITBBS : null});
    }
});

exports.scienceToons = catchAsync (async (req,res,next) => {
    if(req.user) {
        const user = await findUser(req.user.emails[0].value);
        let isIITBBS; 
        if(user.email.endsWith("@iitbbs.ac.in")) {
            isIITBBS = "yes";
        } else {
            isIITBBS = "no";
        }

        res.render("science-toons", {participant:user, isIITBBS : isIITBBS});
    } else {
        res.render("science-toons", {participant:false, isIITBBS : null});
    }
});

exports.sherlock = catchAsync (async (req,res,next) => {
    if(req.user) {
        const user = await findUser(req.user.emails[0].value);
        let isIITBBS; 
        if(user.email.endsWith("@iitbbs.ac.in")) {
            isIITBBS = "yes";
        } else {
            isIITBBS = "no";
        }

        res.render("sherlock", {participant:user, isIITBBS : isIITBBS});
    } else {
        res.render("sherlock", {participant:false, isIITBBS : null});
    }
});

exports.shutter = catchAsync (async (req,res,next) => {
    if(req.user) {
        const user = await findUser(req.user.emails[0].value);
        let isIITBBS; 
        if(user.email.endsWith("@iitbbs.ac.in")) {
            isIITBBS = "yes";
        } else {
            isIITBBS = "no";
        }

        res.render("shutter", {participant:user, isIITBBS : isIITBBS});
    } else {
        res.render("shutter", {participant:false, isIITBBS : null});
    }
});

exports.arduinoHackathon = catchAsync (async (req,res,next) => {
    if(req.user) {
        const user = await findUser(req.user.emails[0].value);
        let isIITBBS; 
        if(user.email.endsWith("@iitbbs.ac.in")) {
            isIITBBS = "yes";
        } else {
            isIITBBS = "no";
        }

        res.render("comingsoon", {participant:user, isIITBBS : isIITBBS});
    } else {
        res.render("comingsoon", {participant:false, isIITBBS : null});
    }
});

exports.roboCAD = catchAsync (async (req,res,next) => {
    if(req.user) {
        const user = await findUser(req.user.emails[0].value);
        let isIITBBS; 
        if(user.email.endsWith("@iitbbs.ac.in")) {
            isIITBBS = "yes";
        } else {
            isIITBBS = "no";
        }

        res.render("robo-cad", {participant:user, isIITBBS : isIITBBS});
    } else {
        res.render("robo-cad", {participant:false, isIITBBS : null});
    }
});

exports.innoWise = catchAsync (async (req,res,next) => {
    if(req.user) {
        const user = await findUser(req.user.emails[0].value);
        let isIITBBS; 
        if(user.email.endsWith("@iitbbs.ac.in")) {
            isIITBBS = "yes";
        } else {
            isIITBBS = "no";
        }

        res.render("innowise", {participant:user, isIITBBS : isIITBBS});
    } else {
        res.render("innowise", {participant:false, isIITBBS : null});
    }
});

exports.auctionWar = catchAsync (async (req,res,next) => {
    if(req.user) {
        const user = await findUser(req.user.emails[0].value);
        let isIITBBS; 
        if(user.email.endsWith("@iitbbs.ac.in")) {
            isIITBBS = "yes";
        } else {
            isIITBBS = "no";
        }

        res.render("auction-war", {participant:user, isIITBBS : isIITBBS});
    } else {
        res.render("auction-war", {participant:false, isIITBBS : null});
    }
});

exports.pioneersPlan = catchAsync (async (req,res,next) => {
    if(req.user) {
        const user = await findUser(req.user.emails[0].value);
        let isIITBBS; 
        if(user.email.endsWith("@iitbbs.ac.in")) {
            isIITBBS = "yes";
        } else {
            isIITBBS = "no";
        }

        res.render("pioneers-plan", {participant:user, isIITBBS : isIITBBS});
    } else {
        res.render("pioneers-plan", {participant:false, isIITBBS : null});
    }
});

exports.investar = catchAsync (async (req,res,next) => {
    if(req.user) {
        const user = await findUser(req.user.emails[0].value);
        let isIITBBS; 
        if(user.email.endsWith("@iitbbs.ac.in")) {
            isIITBBS = "yes";
        } else {
            isIITBBS = "no";
        }

        res.render("comingsoon", {participant:user, isIITBBS : isIITBBS});
    } else {
        res.render("comingsoon", {participant:false, isIITBBS : null});
    }
});