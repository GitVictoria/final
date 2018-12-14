var spicedPg = require("spiced-pg");

var db = spicedPg(
    `postgres:postgres:postgres@localhost:5432/final`
);



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
