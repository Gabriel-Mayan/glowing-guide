import { UserRepository } from "@modules/user/user.repository";

import { validateToken } from "@shared/utils/token.util";
import { AuthMiddleware } from "@shared/protocols/http.protocol";

export const authentication: AuthMiddleware = async (request, response, next) => {
    const { authorization } = request.headers;

    if (!authorization) {
        return response.status(401).send({ message: "Not authorization" });
    }

    const token = authorization.replace("Bearer", "").trim();
    const tokenInfo = validateToken(token);

    if (typeof tokenInfo === "string") {
        return response.status(401).send({ message: "Not authorization" });
    }

    const user = await UserRepository.findUser({ email: tokenInfo.email });

    if (!user) {
        return response.status(401).send({ message: "Invalid Token" });
    }

    request.user = user;

    next();
};
