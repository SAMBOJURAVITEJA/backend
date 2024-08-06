import express from "express" 
import deletingParticularOwner from "../Controllers/deletingParticularOwner.js"
const deletingParticularOwnerRouter=express.Router()

deletingParticularOwnerRouter.delete("/particularDelete",deletingParticularOwner )

export default deletingParticularOwnerRouter