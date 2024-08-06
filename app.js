import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import db from "./db.js";
import distributeTables from "./Models/creationTables.js";
import addingOwnerRouter from "./Routes/addingOwnerRouters.js";
import allOwnersRouter from "./Routes/allOwnersRouters.js";
import dropDownAllOwnersParticularIdRouter from "./Routes/dropDownAllOwnersParticularIdRouters.js";
import deletingAllOwnersRouter from "./Routes/deletingAllOwnersRouters.js";
import ownerRelatedToParticularIdRouter from "./Routes/ownerRelatedToParticularIdRouters.js";
import deletingParticularOwnerRouter from "./Routes/deletingParticularOwnerRouters.js";
import dropDownAllOwnersRouter from "./Routes/dropDownAllOwnersRouters.js";
import insertOwnerRelatedToParticularIdRouter from "./Routes/insertOwnerRelatedToParticularIdRouters.js";

const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.use(cors());

app.listen(3000, () => {
  console.log("server is running on Port 3000");
});

db.connect((err) => {
  if (err) {
    console.log("error in connecting table");
    console.log(err);
  } else {
    console.log("database is connected properly");
    distributeTables();
  }
});

app.use(
  "/",
  addingOwnerRouter,
  allOwnersRouter,
  deletingAllOwnersRouter,
  ownerRelatedToParticularIdRouter,
  deletingParticularOwnerRouter,
  dropDownAllOwnersRouter,
  insertOwnerRelatedToParticularIdRouter,
  dropDownAllOwnersParticularIdRouter 
);
