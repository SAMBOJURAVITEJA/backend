import express from "express"
import ownerRelatedToParticularId from "../Controllers/OwnerRelatedToParticularId.js"
const ownerRelatedToParticularIdRouter=express.Router() 
ownerRelatedToParticularIdRouter.post("/ownerRelatedToParticularId",ownerRelatedToParticularId)

export default ownerRelatedToParticularIdRouter