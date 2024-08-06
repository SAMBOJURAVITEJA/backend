import express from "express";
import allOwners from "../Controllers/allOwners.js";


const allOwnersRouter = express.Router();
allOwnersRouter.get("/allOwners", allOwners);
export default allOwnersRouter;