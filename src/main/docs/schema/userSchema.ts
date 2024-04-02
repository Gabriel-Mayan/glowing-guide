import { formatSchema } from "@shared/utils/swagger.util";

export const createUserSchema = formatSchema({
    typeSchema: "object",
    properties: [
        { name: "name", type: "string", required: true },
        { name: "email", type: "string", required: true },
        { name: "password", type: "string", required: true },
    ],
});
