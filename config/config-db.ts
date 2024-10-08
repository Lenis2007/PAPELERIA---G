import mysql from 'mysql2';
import dotenv from 'dotenv';
import { Connection } from 'mysql2/typings/mysql/lib/Connection';
import { log } from 'console';
dotenv.config();

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    connectionLimit: 10,
    queueLimit: 0
});

db.getConnection((err, Connection) => {
    if (err) {
        console.log("Error connecting", err)
    } else {
        console.log("Conected to database: ");
        Connection.release();
    }
})

export default db.promise()