
const mysql = require("mysql");
// const dbConfig = require("../config/db.config.js");

var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Password!',
    database: 'burgers_db'
});

module.exports = connection;