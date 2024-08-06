import db from "../db.js"
import express from "express"
import bodyParser from "body-parser";

const app= express()
app.use(bodyParser.json());
app.use(express.json()) 


const dropDownAllOwnersParticularId= async(req,res)=>{
    const {id}=req.body
  
    const query1=`select pokeMonOwnerName from users where id=?`
    db.query(query1,[id],(err,result)=>{
        if(err){
            console.log("err in processing query")
            return res.status(400).send("err in processing query")
        }
        console.log("sucessfully in processing Query")
        console.log(result)
        res.status(200).send(result)
    })
}

export default dropDownAllOwnersParticularId