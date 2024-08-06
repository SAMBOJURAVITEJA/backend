import db from "../db.js";
import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
app.use(express.json());

const ownerRelatedToParticularId = async (req, res) => {
  console.log("ownerelated");
  const query = `select 
  pokeMonName,pokeMonAbility,initialPositionX,initialPositionY
   from pokemons  join users on 
    users.id=pokemons.userId where PokeMonOwnerName=?;`;
  const { name } = req.body;

  console.log(name)

  db.query(query, [name], async (err, result) => {
    if (err) {
      console.log("err in processing Data", err);
      return res.status(400).send("err in processing Data");
    }
    console.log("success in processing Data", result);
    res.status(200).send(result);
  });
};

export default ownerRelatedToParticularId;
