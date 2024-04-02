import { ErrorMiddleware } from "@shared/protocols/http.protocol";

const handleError: ErrorMiddleware = (error, request, response, next) => {
    error.getMethodInstance(response);

    error.logError();

    return error.httpResponse(response);
};

export default handleError;
