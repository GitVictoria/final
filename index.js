const express = require('express');
const app = express();
const compression = require('compression');
const bodyParser = require('body-parser');
const csurf = require("csurf");
const bcrypt = require("./bcrypt");
const path = require('path');
const db = require("./db");
const s3 = require("./s3");


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



// ------------ BOILER PLATE TO UPLOAD FILES ---------------------//


var multer = require("multer"); // takes image and puts in in uploads
var uidSafe = require("uid-safe");

var diskStorage = multer.diskStorage({
    destination: function(req, file, callback) {
        // where on my computer this file should be saved
        callback(null, __dirname + "/uploads");
    },
    filename: function(req, file, callback) {
        uidSafe(24).then(function(uid) {
            // will convert name into 24 character string, makes sure every file has unique name
            callback(null, uid + path.extname(file.originalname));
        });
    }
});

var uploader = multer({
    storage: diskStorage,
    limits: {
        fileSize: 2097152 // max size that user can upload
    }
});

// ------------ END OF BOILER PLATE TO UPLOAD FILES ---------------------//


// ------------ UPLOADER ---------------------//



app.post('/upload', uploader.single('file'), s3.upload, function(req, res) {
    if (req.file) {
        const url = 'https://s3.amazonaws.com/victoria-catnip-imageboards/' + req.file.filename;
        db.storeImages(
            req.session.user_id, url
            // req.body.title,
            // req.body.description,

            // req.body.username
        )
            .then(results => {
                res.json({
                    results: results.rows,
                    success: true
                });
            })
            .catch(err => {
                console.log(err);
            });
    } else {
        res.json({
            success: false
        });
    }

    // upload image to uploads directory
    // upload image to Amazon
    // insert image into db
    // send response nack tp uploader
    // will bd DB query UPDATE not insert
});


// ------------ END OF  UPLOADER ---------------------//



app.get('/getIdeas', (req, res) => {
    db.getIdeas().then(results => {
        console.log("results in axios get ideas: ", results);
        res.json(results.rows);
    });
});





app.post('/insertidea', (req, res) => {
    console.log("req.body: ", req.body);
    db.insertidea(req.body.title, req.body.idea, req.body.url, req.body.file)
        .then(function(results) {
            res.json(results);
        }).catch(err => {
            console.log(err);
        });
});


app.get('/getApps', (req, res) => {
    db.getApps().then(results => {
        res.json(results.rows);
    }
    );

});




app.post('/deleteApp', (req, res) => {
    console.log('Req.body in app post delete: ', req.body);
    db.deleteApp(req.body.text).then(results => {
        res.json(results.rows);

    }).catch ( err => {
        console.log(err);
    });
});

app.post('/addApp', (req, res) => {
    db.addApp(req.body.text)
        .then(function(results) {
            res.json(results);
        });
});





app.get('/getHome', (req, res) => {
    db.getHome().then(results => {
        res.json(results.rows);
        console.log("results.rows get HOME", results.rows);
    }
    );

});




app.post('/deleteHome', (req, res) => {
    console.log('Req.body in HOME post delete: LALALALA', req.body);
    db.deleteHome(req.body.text).then(results => {
        res.json(results.rows);
        console.log("results in delete HOME", results);

    }).catch ( err => {
        console.log(err);
    });
});

app.post('/addHome', (req, res) => {
    console.log("req.body is in addHOME : ", req.body);
    db.addHome(req.body.text)
        .then(function(results) {
            res.json(results);
        });
});


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
