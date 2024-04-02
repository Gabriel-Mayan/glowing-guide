import { baseSwaggerPath } from "@shared/utils/swagger.util";

export const loginPath = baseSwaggerPath({
    type: "post",
    tags: ["Login"],
    summary: "Api To Auth User",
    bodySchema: { $ref: "#/schemas/loginSchema" },
    successSchema: { $ref: "#/schemas/loginResponseSchema" },
});
