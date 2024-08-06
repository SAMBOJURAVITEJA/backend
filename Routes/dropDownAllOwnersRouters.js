import express from "express" 
import dropDownAllOwners from "../Controllers/dropDownAllOwners.js"
const dropDownAllOwnersRouter=express.Router()
dropDownAllOwnersRouter.get("/dropDown",dropDownAllOwners)
export default dropDownAllOwnersRouter