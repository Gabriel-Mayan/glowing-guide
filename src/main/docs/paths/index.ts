import { loginPath } from "./loginPaths";
import { createUserPath, updateUserPath } from "./userPaths";

export default {
  "/login": loginPath,
  "/user/create": createUserPath,
  "/user/update": updateUserPath,
};
