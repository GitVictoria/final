var spicedPg = require("spiced-pg");

var db = spicedPg(
    `postgres:postgres:postgres@localhost:5432/final`
);

exports.getIdeas = () => {
    return db.query(
        `SELECT * FROM ideas`
    );
};


exports.insertidea = (title, idea, url, pic)  => {
    return db.query(
        `INSERT INTO ideas (title, idea, url, pic)
        VALUES ($1, $2, $3, $4)
        RETURNING *`,
        [title, idea, url, pic]
    );
};



exports.storeImages = (id, pic) => {
    return db.query(
        `UPDATE ideas
          SET pic = $2
          WHERE id = $1`,
        [id, pic]
    );
};




exports.addApp = task => {
    return db.query(
        `INSERT INTO apps (task)
            VALUES ($1)
            RETURNING *`,
        [task]
    );
};

exports.getApps = () => {
    return db.query(
        `SELECT * FROM apps
        `

    );

};

exports.deleteApp = task => {
    return db.query(
        `DELETE FROM apps
        WHERE task = $1`,
        [task]
    );
};

exports.addHome = task => {
    return db.query(
        `INSERT INTO home (task)
            VALUES ($1)
            RETURNING *`,
        [task]
    );
};

exports.getHome = () => {
    return db.query(
        `SELECT * FROM home
        `

    );

};

exports.deleteHome = task => {
    console.log("task: ", task);
    return db.query(
        `DELETE FROM home
        WHERE task = $1`,
        [task]
    );
};



exports.checkUser = first => {
    return db.query(
        `SELECT id, password FROM users
        WHERE first = $1`,
        [first]
    );
};

exports.createUser = (first, last, age, email, dob, city, country, password) => {
    return db.query(
        `INSERT INTO users (first, last, age, email, dob, city, country, password)
                        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
                        RETURNING *`,
        [first, last, age, email, dob, city, country, password]
    );
};
