const mysql = require('mysql2');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: "root",
    password: "root",
    database: "vaii_semestralka",
});

module.exports = pool;