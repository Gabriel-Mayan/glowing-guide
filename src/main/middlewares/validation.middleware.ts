import { ValidationMiddleware } from "@/src/shared/protocols/http.protocol";

export const validateRequest: ValidationMiddleware = (schema, property) => (request, response, next) => {
    const data = property ? request[property] : request;
    schema.parse(data);

    next();
};

export default validateRequest;
