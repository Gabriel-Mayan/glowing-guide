import { verify, sign } from "jsonwebtoken";
import { IUserToken } from "@/src/modules/user/user.interface";

const JWT_SECRET = String(process.env.JWT_SECRET);

export const validateToken = (token: string) => verify(token, JWT_SECRET);
export const generateUserToken = (user: IUserToken) => sign(user, JWT_SECRET, { expiresIn: "24h" });
