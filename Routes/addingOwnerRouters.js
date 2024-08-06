import express from "express";
import addingOwner from "../Controllers/addingOwner.js";

const addingOwnerRouter = express.Router();
addingOwnerRouter.post("/adding", addingOwner);
export default addingOwnerRouter;
