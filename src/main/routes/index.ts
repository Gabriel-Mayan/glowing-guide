import "express-async-errors";
import { Router } from "express";
import { serve, setup } from "swagger-ui-express";

import swaggerDocument from "@main/docs";

const router = Router();

router.use("/api-docs", serve, setup(swaggerDocument));
router.get("/", (_, response) => response.status(200).json({ message: "Server is running..." }));

export default router;
