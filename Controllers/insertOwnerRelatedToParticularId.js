import db from "../db.js"
import express from "express"
import bodyParser from "body-parser";

const app= express()
app.use(bodyParser.json());
app.use(express.json())  

const insertOwnerRelatedToParticularId=async(req,res)=>{
    const {userId,pokeMonName,pokeMonAbility} =req.body  
    console.log("insertParticularId")

    const query=`insert into pokemons (userId,pokeMonName,pokeMonAbility)
    values (?,?,?)`

    db.query(query,[userId,pokeMonName,pokeMonAbility],async(err,result)=>{
        if(err){
            console.log("err in inserting the data")
           return res.status(400).send("err in inserting the data")
        }
        console.log("succesfull in inserting the data")
        res.status(200).send("succesfull in inserting the data")
    })

}
export default insertOwnerRelatedToParticularId