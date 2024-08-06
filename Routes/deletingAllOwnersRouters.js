import express from "express"
import deletingAllOwners from "../Controllers/deletingAllOwners.js"
const deletingAllOwnersRouter =express.Router()

deletingAllOwnersRouter.delete("/allDelete",deletingAllOwners)

export default deletingAllOwnersRouter