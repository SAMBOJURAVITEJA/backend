import express from "express";
import mysql from "mysql"
import dotenv from "dotenv"
import bodyParser from "body-parser";

const app = express();
app.use(express.json());
app.use(bodyParser.json())
dotenv.config()


const db = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});


export default db