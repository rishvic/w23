const mysql = require('mysql');

const conn = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : 'Navaneeth1@',
    database : 'wissenaire_22'
});

exports.updateProfile = (req,res) => {
    const sql = 
    `UPDATE user SET 
    phoneNumber = '${req.body.phoneNumber}', 
    institute = '${req.body.institute}', 
    year = '${req.body.year}', 
    city = '${req.body.city}',
    caref = '${req.body.caref}',
    branch = '${req.body.branch}'
    WHERE email = '${req.user.emails[0].value}'`;

    conn.query(sql, (err, rows) => {
        if(err) throw err;
        res.json({
            message : "success"
        })
    });
}
exports.postContact = async(req,res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    let sql = `INSERT into contact (name, email, message) VALUES("${name}", "${email}", "${message}");`;
    conn.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.sendStatus(200);
    })
}