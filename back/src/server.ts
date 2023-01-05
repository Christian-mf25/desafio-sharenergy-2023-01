import "reflect-metadata";
import { createConnection } from "typeorm";

import app from "./app";

createConnection()
  .then(() => {
    const PORT = process.env.PORT ?? 3000;
    console.log("Database connected");
    app.listen(PORT, () =>
      console.log(`App running on port http://localhost:${PORT}`)
    );
  })
  .catch((error: any) => console.log(error));
