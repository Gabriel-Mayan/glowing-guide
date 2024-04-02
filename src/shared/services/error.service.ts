/* eslint-disable no-console */
import { Response } from "../protocols/http.protocol";

import {
    HTTP_CONFLICT,
    HTTP_NOT_FOUND,
    HTTP_BAD_REQUEST,
    HTTP_UNAUTHORIZED,
    HTTP_NOT_IMPLEMENTED,
    HTTP_INTERNAL_SERVER_ERROR,
} from "../utils/error.util";

export class BaseError extends Error {
    public title: string;
    public status: number;
    public details: string;
    public extras: object;
    public method?: string;
    public instance?: string;

    constructor(title: string, status: number, { message = "", details = "about:blank", extras = {} }) {
        super();

        this.title = title;
        this.status = status;
        this.message = message;
        this.details = details;
        this.extras = extras;
    }

    logError() {
        console.error(this.constructor.name);
        console.error(this);
    }

    getMethodInstance(response: Response) {
        this.method = response.req.method;
        this.instance = response.req.path;
    }

    httpResponse(response: Response) {
        return response.status(this.status).contentType("application/problem+json").send({
            title: this.title,
            message: this.message,
            details: this.details,
            status: this.status,
            instance: this.instance,
            ...this.extras,
        });
    };
}

export class InternalError extends BaseError {
    constructor(message = "", { details = "", extras = {} } = {}) {
        super("Internal Error", HTTP_INTERNAL_SERVER_ERROR, { message, details, extras });
    }
};

export class RequestFieldError extends BaseError {
    constructor(message = "", { details = "", extras = {}, invalidData = [] } = {}) {
        super("Request Fields", HTTP_BAD_REQUEST, { message, details, extras: { ...extras, ...invalidData } });
    }
}

export class ConflictError extends BaseError {
    constructor(message = "", { details = "", extras = {} } = {}) {
        super("Conflict", HTTP_CONFLICT, { message, details, extras });
    }
}

export class AuthorizationError extends BaseError {
    constructor(message = "", { details = "", extras = {} } = {}) {
        super("Authorization Error", HTTP_UNAUTHORIZED, { message, details, extras });
    }
}

export class NotFoundError extends BaseError {
    constructor(message = "", { details = "", extras = {} } = {}) {
        super("Not Found", HTTP_NOT_FOUND, { message, details, extras });
    }
}

export class NoContentError extends BaseError {
    constructor(message = "", { details = "", extras = {} } = {}) {
        super("No Content", HTTP_NOT_FOUND, { message, details, extras });
    }
}

export class NotImplementedError extends BaseError {
    constructor(message = "", { details = "", extras = {} } = {}) {
        super("Not Implemented", HTTP_NOT_IMPLEMENTED, { message, details, extras });
    }
}
