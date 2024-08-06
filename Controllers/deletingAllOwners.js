import db from "../db.js"
import express from "express"
import bodyParser from "body-parser";

const app= express()
app.use(bodyParser.json());
app.use(express.json()) 

const deletingAllOwners = (req, res) => {
    const query1 = 'DELETE FROM users';
    const query2 = 'DELETE FROM pokemons';

    console.log("deleteing")

    db.query(query1, (err, result) => {
        if (err) {
            console.log('Error in processing query1');
            return res.status(400).send('Error in processing query1');
        }

        db.query(query2, (err, result) => {
            if (err) {
                console.log('Error in processing query2');
                return res.status(400).send('Error in processing query2');
            }

            res.status(200).send('Success in processing the queries');
            console.log('Success in processing the queries');
        });
    });
};

export default deletingAllOwners