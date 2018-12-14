CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    first VARCHAR(200) NOT NULL,
    last VARCHAR(200) NOT NULL,
    age VARCHAR(3) NOT NULL,
    email VARCHAR(200) NOT NULL UNIQUE CHECK (email <> ''),
    dob VARCHAR(30) NOT NULL,
    city VARCHAR(200) NOT NULL,
    country VARCHAR(200) NOT NULL,
    password VARCHAR(200) NOT NULL
);

INSERT INTO users (first, last, age, email, dob, city, country, password)
VALUES ('Victoria', 'Almazova', 26, 'almazovaite@gmail.com', 09-11-1992, 'Berlin', 'Germany', 'catodoggo');
