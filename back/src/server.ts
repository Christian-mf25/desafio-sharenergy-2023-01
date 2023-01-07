import "reflect-metadata";
import { createConnection } from "typeorm";

import app from "./app";
import dbOptions from "./db/ormconfig";
import { createAdmin } from "./service/createAdminUser.service";

createConnection(dbOptions)
  .then(() => {
    createAdmin();

    const PORT = process.env.PORT ?? 3000;
    console.log("Database connected");
    app.listen(PORT, () =>
      console.log(`App running on port http://localhost:${PORT}`)
    );
  })
  .catch((error: any) => console.log(error));
