import express from "express";
import insertOwnerRelatedToParticularId from "../Controllers/insertOwnerRelatedToParticularId.js";
const insertOwnerRelatedToParticularIdRouter = express.Router();
insertOwnerRelatedToParticularIdRouter.post(
  "/insertParticularId",
  insertOwnerRelatedToParticularId
);
export default insertOwnerRelatedToParticularIdRouter;
