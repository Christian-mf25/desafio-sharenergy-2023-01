import { ConnectionOptions } from "typeorm";
import path from "path";

export default {
  type: "mongodb",
  url: process.env.DB_URL,
  synchronize: true,
  logging: false,
  entities: [path.join(__dirname, "../entities/**/*.*")],
  cli: {
    entitiesDir: path.join(__dirname, "../entities/**/*.*"),
  },
} as ConnectionOptions;
