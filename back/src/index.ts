import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";

createConnection()
  .then(async (connection) => {
    console.log("connected");
  })
  .catch((error) => console.log(error));
