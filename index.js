const express = require('express');
const app = express();
const compression = require('compression');
const bodyParser = require('body-parser');
const csurf = require("csurf");
const bcrypt = require("./bcrypt");
const path = require('path');
const db = require("./db");

app.use(compression());

// ------------- APP.USE ---------------//
// body parser is how I get my req.body
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


app.use(express.static('./public'));

// ------------- END OF APP.USE ---------------//


// ------------ COOKIE SESSION ---------------------//


var cookieSession = require("cookie-session");
app.use(
    cookieSession({
        secret: process.env.SESSION_SECRET || `I'm always angry.`, // require("./passwords").sessionSecrets
        maxAge: 1000 * 60 * 60 * 24 * 14
    })
);

// ------------ END OF COOKIE SESSION ---------------------//

// ------------ CSURF ---------------------//

app.use(csurf());

app.use(function(req, res, next){
    res.cookie('mytoken', req.csrfToken());
    next();
});

// ------------ END OF CSURF ---------------------//



app.post('/login', (req, res) => {
    if(!req.body.first) {
        res.json({showErr: true});
    }
    else {
        db.checkUser(req.body.first).then(function(results) {
            console.log("results in checkuser DB :", results);
            if (!results.rows[0]) {
                throw new Error;
            }
            return bcrypt

                .compare(req.body.password, results.rows[0].password)
                .then(match => {
                    console.log("MATCH", match);
                    if (match) {
                        req.session.user_id = results.rows[0].id;
                        res.redirect('/profile');
                    }
                });
        }).catch(err =>{
            console.log(err);
            res.json({showErr: true});


        });
    }
});

app.post('/register', (req, res) => {
    bcrypt.hash(req.body.password).then(hash => {
        db.createUser(req.body.first, req.body.last, req.body.age, req.body.email, req.body.dob, req.body.city, req.body.country, hash)
            .then(function(results) {
                req.session.user_id = results.rows[0].id;
                res.json(results);
            })
            .catch(err => {
                console.log("error in registration", err);
                res.json({showErr: true});
            });
    });
});


// ------------ DON'T TOUCH BELLOW ---------------------//

if (process.env.NODE_ENV != 'production') {
    app.use(
        '/bundle.js',
        require('http-proxy-middleware')({
            target: 'http://localhost:8081/'
        })
    );
} else {
    app.use('/bundle.js', (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(8080, function() {
    console.log("I'm listening.");
});
