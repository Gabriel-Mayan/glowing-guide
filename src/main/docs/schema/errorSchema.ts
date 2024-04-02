import { formatSchema } from "@shared/utils/swagger.util";

export const errorSchema = formatSchema({
    typeSchema: "object",
    properties: [
        { name: "error", type: "string", required: false },
    ],
});
