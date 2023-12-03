const express = require('express');
const bodyParser = require('body-parser');
const routesHandler = require('./routes/handler.js');
const pool = require('./config/db.js');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/',routesHandler);

pool.getConnection((err, connection) => {
    if (err) throw err;
    //const admin = ['admin', 'admin','Y','admin123@gmail.com'];
    const query = `INSERT INTO users (login, password, isAdmin, email) VALUES (?, ?, ?, ?)`;
    connection.query(query, ['test2', 'test2','N','test223@gmail.com'] , (err, result) => {
        connection.release();
        if (err) throw err;
        console.log(result);
    });
});


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});