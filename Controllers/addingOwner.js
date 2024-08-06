import db from "../db.js"
import express from "express"
import bodyParser from "body-parser";

const app= express()
app.use(bodyParser.json());
app.use(express.json())

const addingOwner = async (req, res) => {
    console.log("adding")
    console.log("Request Body:", req.body)

    const {
        pokeMonOwnerName,
        pokeMonName,
        pokeMonAbility,
        speed,
        direction,
        initialPositionX,
        initialPositionY,
    } = req.body;

    
    if (!pokeMonOwnerName || !pokeMonName || !pokeMonAbility || !speed || !direction || !initialPositionX || !initialPositionY) {
        return res.status(400).send("Missing required fields");
    }

    const query1 = `INSERT INTO users(pokeMonOwnerName) VALUES(?)`;
    const query2 = `INSERT INTO pokeMons (pokeMonName, userId, pokeMonAbility, speed, direction, initialPositionX, initialPositionY) VALUES (?, ?, ?, ?, ?, ?, ?)`;

    db.query(query1, [pokeMonOwnerName], (err, result) => {
        if (err) {
            return res.status(400).send("Error in pushing the data in query1");
        }

        let userId = result.insertId;
        console.log("userId", userId);

        db.query(
            query2,
            [
                pokeMonName,
                userId,
                pokeMonAbility,
                speed,
                direction,
                initialPositionX,
                initialPositionY,
            ],
            (err, result) => {
                if (err) {
                    return res.status(400).send("Error in pushing the data in query2");
                }
                res.status(200).send("Data entered into database successfully");
            }
        );
    });
};

export default addingOwner