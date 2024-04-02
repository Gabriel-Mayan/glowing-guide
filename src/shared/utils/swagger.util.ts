import { IBaseSwaggerPath, IFormatSchema } from "@main/types/swagger";

const createBody = (schema: object) => ({
    description: "Request Body",
    content: {
        "application/json": {
            schema,
        },
    },
});

const createSuccess = (schema: object) => ({
    description: "Success response",
    content: {
        "application/json": {
            schema,
        },
    },
});

const createError = (description: string) => ({
    description,
    content: {
        "application/json": {
            schema: { $ref: "#/schemas/errorSchema" },
        },
    },
});

export const baseSwaggerPath = ({
    type,
    tags,
    summary,
    security = undefined,
    bodySchema = undefined,
    parameters = undefined,
    description = undefined,
    successSchema,
}: IBaseSwaggerPath) => ({
    [type]: {
        tags,
        summary,
        description,
        security: security || undefined,
        parameters: parameters || undefined,
        requestBody: bodySchema ? createBody(bodySchema) : undefined,
        responses: {
            200: createSuccess(successSchema),
            400: createError("Invalid Request"),
            401: createError("Access denied"),
            403: createError("Invalid credentials"),
            500: createError("Internal Server Error"),
        },
    },
});

export const formatSchema = ({
    typeSchema,
    properties,
}: IFormatSchema): any => {
    const required: Array<string> = [];
    let props = { };

    properties.forEach((prop) => {
        const { name, type, required: isRequired } = prop;

        if (isRequired) {
            required.push(name);
        }

        props = {
            ...props,
            [name]: { type },
        };
    });

    return {
        type: typeSchema,
        properties: props,
        required,
    };
};
