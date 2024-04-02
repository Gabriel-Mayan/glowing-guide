/* eslint-disable no-console */
import "reflect-metadata";
import AppDataSource from "@shared/services/typeorm.service";
import InitializeSentry from "@shared/services/sentry.service";

import app from "./app";

const port = process.env.PORT as string || "8080";

if (process.env.SENTRY_URL) {
    InitializeSentry(process.env.SENTRY_URL);
}

AppDataSource.initialize().then(async () => {
    console.log("Connection initialized with database...");
    app.listen(port, () => console.log(`Running on http://localhost:${port}`));
}).catch((error: Error) => console.log(error));
