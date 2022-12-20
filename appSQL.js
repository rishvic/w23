const express = require('express');
const path = require('path');
const mysql = require('mysql');
const passport = require('passport');
const session = require('cookie-session');
const bodyParser = require('body-parser');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const indexRouter = require('./routes/index.js');

const conn = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : 'Navaneeth1@',
    database : 'wissenaire_22'
});


const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
// app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(session({
  secret : "Our little Secret Here",
  resave : true,
  saveUninitialized : false,
}));
// //routes
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

passport.use(new GoogleStrategy({
    clientID : '933857543160-t1095dkq9adhgh4idis72ma9b7u7l2ee.apps.googleusercontent.com',
    clientSecret : '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',
    callbackURL : 'http://localhost:3000/auth/google/callback/',
    userProfileURL  : 'https://www.googleapis.com/oauth2/v3/userinfo'
}, function(accessToken, refreshToken, profile, done) {
  process.nextTick(() => {
    const sql = `SELECT * from user where email ='${profile.emails[0].value}';`;
    conn.query(sql, (err, rows) => {
      if(err) throw err;
      if(rows && rows.length == 0) {
        //no user so far. Create user
        console.log('no user in db');
        console.log(profile);
        const newSql = ("INSERT into user (googleid,photo,accesstoken,name,email) VALUES('" + profile.id + "','"+profile.photos[0].value+"', '" + accessToken + "','" + profile.displayName + "','" + profile.emails[0].value + "');");
        conn.query(newSql, (err, result) => {
          if(err) throw err;
          console.log('created new user', result);
          return done(null, profile);
        });
      } else {
        console.log('user already exists');
        return done(null, profile);
      }
    })
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
module.exports = app;