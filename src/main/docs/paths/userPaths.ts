import { baseSwaggerPath } from "@shared/utils/swagger.util";

export const getUsersPath = baseSwaggerPath({
    type: "get",
    tags: ["User"],
    summary: "Get All Actives Users Endpoint",
    bodySchema: { $ref: "#/schemas/createUserSchema" },
    successSchema: { $ref: "#/schemas/loginResponseSchema" },
});

export const getUserByIdPath = baseSwaggerPath({
    type: "get",
    tags: ["User"],
    summary: "Get Active User by Id Endpoint",
    bodySchema: { $ref: "#/schemas/loginSchema" },
    successSchema: { $ref: "#/schemas/loginResponseSchema" },
});

export const createUserPath = baseSwaggerPath({
    type: "post",
    tags: ["User"],
    summary: "Create User Endpoint",
    bodySchema: { $ref: "#/schemas/createUserSchema" },
    successSchema: { $ref: "#/schemas/createUserSchema" },
});

export const updateUserPath = baseSwaggerPath({
    type: "patch",
    tags: ["User"],
    summary: "Update User Endpoint",
    bodySchema: { $ref: "#/schemas/loginSchema" },
    successSchema: { $ref: "#/schemas/loginResponseSchema" },
});

export const deleteUserPath = baseSwaggerPath({
    type: "delete",
    tags: ["User"],
    summary: "Delete User Endpoint",
    bodySchema: { $ref: "#/schemas/loginSchema" },
    successSchema: { $ref: "#/schemas/loginResponseSchema" },
});

export const toggleUserStatusPath = baseSwaggerPath({
    type: "put",
    tags: ["User"],
    summary: "Toggle User Status Endpoint",
    bodySchema: { $ref: "#/schemas/loginSchema" },
    successSchema: { $ref: "#/schemas/loginResponseSchema" },
});

export const recoveryUserPasswordPath = baseSwaggerPath({
    type: "patch",
    tags: ["User"],
    summary: "Send recovery email Endpoint",
    bodySchema: { $ref: "#/schemas/loginSchema" },
    successSchema: { $ref: "#/schemas/loginResponseSchema" },
});

export const updateUserPasswordPath = baseSwaggerPath({
    type: "patch",
    tags: ["User"],
    summary: "Update User Password Endpoint",
    bodySchema: { $ref: "#/schemas/loginSchema" },
    successSchema: { $ref: "#/schemas/loginResponseSchema" },
});
