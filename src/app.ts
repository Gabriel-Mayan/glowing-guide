// import helmet from "helmet";
import express from "express";
import { createServer } from "http";

import router from "@main/routes";
import cors from "@main/config/cors.config";
import logger from "@shared/services/logger.service";
import handleErrors from "./main/middlewares/error.middleware";

const app = express();

app.use(express.json());
// app.use(helmet());
app.use(router);
app.use(handleErrors);
app.use(logger);
app.use(cors);

const server = createServer(app);

export default server;
