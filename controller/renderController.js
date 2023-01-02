const catchAsync = require('../utils/catchAsync');
const User = require('./../model/userModel');
const NODE_ENV = require('./../utils/config').NODE_ENV;
const path = require('path')
const findUser = async (email) => {
  const user = await User.findOne({ email: email });
  return user;
}

exports.renderAbout = async (req, res) => {
  //render About
  if (req.user) {
    const user = await findUser(req.user.emails[0].value);
    res.render("about", { participant: user });
  } else {
    res.render("about", { participant: false });
  }
};

exports.renderCompetitions = async (req, res) => {
  //render Competitions
  if (req.user) {
    const user = await findUser(req.user.emails[0].value);
    res.render("competition/index", { participant: user });
  } else {
    res.render("competition/index", { participant: false });
  }
};

exports.renderWorkshops = async (req, res) => {
  //render Workshops
  if (req.user) {
    const user = await findUser(req.user.emails[0].value);
    res.render("workshops/index", { participant: user });
  } else {
    res.render("workshops/index", { participant: false });
  }
};

exports.renderSitpCourses = async (req, res) => {
  //render Workshops
  if (req.user) {
    const user = await findUser(req.user.emails[0].value);
    res.render("sitp", { participant: user });
  } else {
    res.render("sitp", { participant: false });
  }
};

exports.renderGuestLectures = async (req, res) => {
  //render Guest Lectures
  if (req.user) {
    const user = await findUser(req.user.emails[0].value);
    res.render("guestlectures", { participant: user });
  } else {
    res.render("guestlectures", { participant: false });
  }
};

exports.renderExhibits = async (req, res) => {
  //render Exhibits
  if (req.user) {
    const user = await findUser(req.user.emails[0].value);
    res.render("exhibits/index", { participant: user });
  } else {
    res.render("exhibits/index", { participant: false });
  }
};

exports.renderInitiatives = async (req, res) => {
  //render Initiatives
  if (req.user) {
    const user = await findUser(req.user.emails[0].value);
    res.render("initiatives", { participant: user });
  } else {
    res.render("initiatives", { participant: false });
  }
};

exports.renderHighlights = async (req, res) => {
  //render Highlights
  if (req.user) {
    const user = await findUser(req.user.emails[0].value);
    if (NODE_ENV === 'development') {
      res.render("comingsoon", { participant: user });
    } else {
      res.render("comingsoon", { participant: user });
    }
  } else {
    if (NODE_ENV === 'development') {
      res.render("highlights", { participant: false });
    } else {
      res.render("comingsoon", { participant: false });
    }
  }
};

exports.renderTeam = async (req, res) => {
  //render Team
  if (req.user) {
    const user = await findUser(req.user.emails[0].value);
    res.render("team", { participant: user });
  } else {
    res.render("team", { participant: false });
  }
};

exports.renderSponsors = async (req, res) => {
  //render Sponsors
  if (req.user) {
    const user = await findUser(req.user.emails[0].value);
    res.render("sponsors", { participant: user });
  } else {
    res.render("sponsors", { participant: false });
  }
};

exports.renderContact = async (req, res) => {
  //render Contact
  if (req.user) {
    const user = await findUser(req.user.emails[0].value);
    res.render("contact", { participant: user });
  } else {
    res.render("contact", { participant: false });
  }
};

exports.renderProfile = async (req, res) => {
  if (req.user) {
    const user = await findUser(req.user.emails[0].value);
    res.render("userProfile/index", { participant: user });
    // res.render("userProfile/index", {participant:user}); 
  } else {
    res.redirect('/auth/google');
  }
};

exports.renderHome = async (req, res) => {
  if (req.user) {
    const user = await findUser(req.user.emails[0].value);
    res.render(req.useragent.isMobile ? "indexMobile" : "index", { participant: user });
  } else {
    res.render(req.useragent.isMobile ? "indexMobile" : "index", { participant: false });
  }
}
exports.renderPreloader = async (req, res) => {
  const mobileOrNot = req.useragent.isMobile;
  if (!mobileOrNot)
    res.sendFile(path.join(__dirname, '../views/intro/intro.html'))
  else {
    res.sendFile(path.join(__dirname, '../views/intro/introMobile.html'))
  }
}
exports.renderComingSoon = async (req, res) => {
  res.render("comingsoon", { participant: false });
}