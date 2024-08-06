import db from "../db.js";
import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
app.use(express.json());

const allOwners = async (req, res) => {
  console.log("all Owners");
  const query = `select min(userId) as userId,min(pokeMonOwnerName)as pokeMonOwnerName
  ,min(pokeMonAbility) as pokeMonAbility,min(pokeMonName) as pokeMonName,count(distinct PokeMonName) as counting from users join pokemons where users.id=pokemons.userId
group by userId

`;

  db.query(query, async (err, result) => {
    if (err) {
      console.log("error in data retrieving", err);
      res.status(400).send("error in while retriving Data");
    } else {
      console.log(result);
      console.log("data is retrived");
      res.status(200).send(result);
    }
  });
};

export default allOwners;
