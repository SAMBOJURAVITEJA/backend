import db from "../db.js"
import express from "express"
import bodyParser from "body-parser";

const app= express()
app.use(bodyParser.json());
app.use(express.json()) 

const deletingParticularOwner = (req, res) => {
    console.log("deletingParticularOwner")
    const{ id}=req.body
    const query1 = 'DELETE FROM users where id=?';
    const query2 = 'DELETE FROM pokemons where userId=?';

    db.query(query1,[id], (err, result) => {
        if (err) {
            console.log('Error in processing query1',err);
            return res.status(400).send('Error in processing query1');
        }

        db.query(query2, [id],(err, result) => {
            if (err) {
                console.log('Error in processing query2');
                return res.status(400).send('Error in processing query2');
            }

            res.status(200).send('Success in processing the queries');
            console.log('Success in processing the queries');
        });
    });
};

export default deletingParticularOwner