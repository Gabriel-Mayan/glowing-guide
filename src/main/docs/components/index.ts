import { badRequest } from "./Responses/badRequestResponse";
import { forbidden } from "./Responses/forbiddenResponse";
import { serverError } from "./Responses/serverErrorResponse";
import { unauthorized } from "./Responses/unauthorizedResponse";
import { apiKeyAuthSchema } from "../schema/apiKeyAuthSchema";

export default {
  forbidden,
  badRequest,
  serverError,
  unauthorized,
  securitySchemes: { apiKeyAuth: apiKeyAuthSchema },
};
