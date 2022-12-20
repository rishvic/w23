const express = require('express');
const path = require('path');
const User = require('./model/userModel');
const Counter = require('./model/counterModel');

const passport = require('passport');
const session = require('cookie-session');
const bodyParser = require('body-parser');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');

const indexRouter = require('./routes/index.js');

require('dotenv').config();
const config = require('./utils/config');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
// app.use(express.static(path.join(__dirname, 'public')));

app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(session({
  secret : "Our little Secret Here",
  resave : true,
  saveUninitialized : false,
}));
//routes
// app.use('/api/v1/auth', authRouter);

//oAuth
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user,done){
    done(null, user);
});
  
passport.deserializeUser(async function(user, done) {
    await done(null, user);
});

const getIdValue = async () => {
    let counter = await Counter.findOne({name : "user count"});
    if(!counter) {
        counter = await Counter.create({});
    }
    let updatedCounter = await Counter.findOneAndUpdate({name : "user count"}, {$inc : {
        number : 1
    }}, {new : true});
    console.log(updatedCounter);
    return updatedCounter.number;
}

passport.use(new GoogleStrategy({
    clientID : config.OAUTH_CLIENT_ID,
    clientSecret : config.OAUTH_CLIENT_SECRET,
    callbackURL : `${config.HOST}/auth/google/callback/`,
    userProfileURL  : 'https://www.googleapis.com/oauth2/v3/userinfo'
}, function(accessToken, refreshToken, profile, done) {
  process.nextTick(async () => {
    const user = await User.findOne({email : profile.emails[0].value});
    if(!user) {
        console.log('no user in db');
        console.log(profile);
        const newId = await getIdValue();
        const userDetails = {
            googleid : profile.id,
            photo : profile.photos[0].value,
            accesstoken : accessToken,
            name : profile.displayName,
            email : profile.emails[0].value,
            id : newId
        }
        const newUser = await User.create(userDetails);
        console.log('created new user', newUser);
        return done(null, profile);
    } else {
        console.log('user already exists');
        return done(null, profile);
    }
  })
})
);

app.use('/', indexRouter);

app.get('/auth/google', passport.authenticate('google', {prompt : 'consent', scope : ['profile', 'email'] }));
app.get('/auth/google/callback', passport.authenticate('google', { successRedirect: '/profile', failureRedirect: '/'}),
  function(req, res) {
    req.session.save(); 
    console.log(req);
    res.redirect('/profile')   
  }
);
app.get('/logout', (req, res) => {
  req.logout()
  // req.session.destroy();
  res.redirect('/')
})


app.all('*', (req,res,next) => {
  res.redirect('/');
});

module.exports = app;