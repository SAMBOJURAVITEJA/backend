import express from "express" 
import dropDownAllOwnersParticularId from "../Controllers/dropDownAllOwnersParticularId.js"
const dropDownAllOwnersParticularIdRouter=express.Router()
dropDownAllOwnersParticularIdRouter.post("/dropDownId",dropDownAllOwnersParticularId)
export default dropDownAllOwnersParticularIdRouter