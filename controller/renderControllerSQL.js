const mysql = require('mysql');

const conn = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : 'Navaneeth1@',
    database : 'wissenaire_22'
});

exports.renderAbout = (req, res) => {
  //render About
  if(req.user) {
    const qr = ("SELECT * from user where email ='" + req.user.emails[0].value + "';");
    conn.query(qr, (err, rows) => {
      if(err) throw err;
      res.render('about', {participant : rows[0]});
    })
  } else {
    res.render("about", {participant:false});
  }
};

exports.renderCompetitions = (req, res) => {
  //render Competitions
  if(req.user) {
    const qr = ("SELECT * from user where email ='" + req.user.emails[0].value + "';");
    conn.query(qr, (err, rows) => {
      if(err) throw err;
      res.render('competitions', {participant : rows[0]});
    })
  } else {
    res.render("competitions", {participant:false});
  }
};

exports.renderWorkshops = (req, res) => {
  //render Workshops
  if(req.user) {
    const qr = ("SELECT * from user where email ='" + req.user.emails[0].value + "';");
    conn.query(qr, (err, rows) => {
      if(err) throw err;
      res.render('workshops', {participant : rows[0]});
    })
  } else {
    res.render("workshops", {participant:false});
  }
};

exports.renderGuestLectures = (req, res) => {
  //render Guest Lectures
  if(req.user) {
    const qr = ("SELECT * from user where email ='" + req.user.emails[0].value + "';");
    conn.query(qr, (err, rows) => {
      if(err) throw err;
      res.render('guestlectures', {participant : rows[0]});
    })
  } else {
    res.render("guestlectures", {participant:false});
  }
};

exports.renderExhibits = (req, res) => {
  //render Exhibits
  if(req.user) {
    const qr = ("SELECT * from user where email ='" + req.user.emails[0].value + "';");
    conn.query(qr, (err, rows) => {
      if(err) throw err;
      res.render('comingsoon', {participant : rows[0]});
      // res.render('exhibits', {participant : rows[0]});
    })
  } else {
    res.render("comingsoon", {participant:false});
  }
};

exports.renderInitiatives = (req, res) => {
  //render Initiatives
  if(req.user) {
    const qr = ("SELECT * from user where email ='" + req.user.emails[0].value + "';");
    conn.query(qr, (err, rows) => {
      if(err) throw err;
      res.render('initiatives', {participant : rows[0]});
    })
  } else {
    res.render("initiatives", {participant:false});
  }
};

exports.renderHighlights = (req, res) => {
  //render Highlights
  if(req.user) {
    const qr = ("SELECT * from user where email ='" + req.user.emails[0].value + "';");
    conn.query(qr, (err, rows) => {
      if(err) throw err;
      res.render('highlights', {participant : rows[0]});
    })
  } else {
    res.render("highlights", {participant:false});
  }
};

exports.renderTeam = (req, res) => {
  //render Team
  if(req.user) {
    const qr = ("SELECT * from user where email ='" + req.user.emails[0].value + "';");
    conn.query(qr, (err, rows) => {
      if(err) throw err;
      res.render('team', {participant : rows[0]});
    })
  } else {
    res.render("team", {participant:false});
  }
};

exports.renderSponsors = (req, res) => {
  //render Sponsors
  if(req.user) {
    const qr = ("SELECT * from user where email ='" + req.user.emails[0].value + "';");
    conn.query(qr, (err, rows) => {
      if(err) throw err;
      res.render('sponsors', {participant : rows[0]});
    })
  } else {
    res.render("sponsors", {participant:false});
  }
};

exports.renderContact = (req, res) => {
  //render Contact
  if(req.user) {
    const qr = ("SELECT * from user where email ='" + req.user.emails[0].value + "';");
    conn.query(qr, (err, rows) => {
      if(err) throw err;
      res.render('contact', {participant : rows[0]});
    })
  } else {
    res.render("contact", {participant:false});
  }
};

exports.renderProfile = async (req, res) => {
    if(req.user) {
      let sql = `SELECT * from user WHERE email = '${req.user.emails[0].value}';`;
      
      // const rows = await conn.query(sql);
      conn.query(sql, (err, rows) => {
          if(err) throw err;
          res.render('profile', {participant : rows[0]});
      });
      
    } else {
        res.redirect('/auth/google');
    }
};

exports.renderHome = (req,res) => {
  if(req.user) {
    const qr = ("SELECT * from user where email ='" + req.user.emails[0].value + "';");
    conn.query(qr, (err, rows) => {
      if(err) throw err;
      res.render('index', {participant : rows[0]});
    })
  } else {
    res.render("index", {participant:false});
  } 
}
