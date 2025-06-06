import express from 'express'
import cors from 'cors'
import mysql from 'mysql'
import { DB_HOST_NAME, DB_PORT, DB_USER, DB_USER_PASSWORD, DB_NAME} from './secret.js'

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: DB_HOST_NAME,
    port: DB_PORT,
    user: DB_USER,
    password: DB_USER_PASSWORD,
    database: DB_NAME
});

db.connect((err) => {
    if(err) {
        console.log('Databalse connection failed: ', err.stack);
        return;
    }
    console.log('Connected to database.');
})

app.listen(8081, () => {
    console.log('Listening...');
});