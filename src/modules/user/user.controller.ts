import { UserTypeRepository } from "@modules/user_type/user_type.repository";

import { generateUserToken } from "@shared/utils/token.util";
import { Request, RequestUser } from "@shared/protocols/http.protocol";
import { NotFoundError, RequestFieldError } from "@shared/services/error.service";
import { encryptPassword, comparePassword } from "@shared/utils/encryptation.util";

import { formatDatabaseUser } from "./user.helper";
import { UserRepository } from "./user.repository";
import { ICreateUser, IUpdatedUser } from "./user.interface";

export const login: Request<{ email: string, password: string }> = async (request, response) => {
    const { email, password } = request.body;

    const databaseUser = await UserRepository.findUser({ email });

    if (!databaseUser) {
        return response.status(401).send({ message: "Username or password is invalid" });
    }

    const verifiedPassword = await comparePassword(password, databaseUser.password);

    if (!verifiedPassword) {
        return response.status(401).send({ message: "Username or password is invalid" });
    }

    const { id, userType } = databaseUser;

    const token = generateUserToken({ id, email, userType: userType.name });
    const user = formatDatabaseUser(databaseUser);

    return response.status(200).send({ user, token });
};

export const getUsers: Request = async (request, response) => {
    const users = await UserRepository.getUsers();

    return response.status(users.length ? 200 : 204).send({ users });
};

export const getUserById: Request<undefined, { id: string }> = async (request, response) => {
    const { id } = request.params;

    const user = await UserRepository.findUser({ id });

    if (!user) {
        return response.status(204);
    }

    const { password, ...userData } = user;

    return response.status(200).send(userData);
};

export const createUser: Request<{ name: string, email: string, password: string }> = async (request, response) => {
    const { name, email, password } = request.body;

    const userType = await UserTypeRepository.findType({ name: "Regular" });

    if (!userType) {
        throw new RequestFieldError("Usuário não autorizado");
    }

    const newUser: ICreateUser = {
        name,
        email,
        password: await encryptPassword(password),
        userType,
    };

    const insertedUser = await UserRepository.createUser(newUser);

    if (!insertedUser.raw.affectedRows) {
        throw new RequestFieldError("Falha ao inserir usuario no banco de dados");
    }

    const user = formatDatabaseUser(newUser);

    return response.status(200).send({ message: "Cliente cadastrado com sucesso!", user });
};

export const updateUser: RequestUser<{ name: string, email: string, password: string }> = async (request, response) => {
    const { user } = request;
    const { name, email, password } = request.body;

    if (!user) {
        throw new NotFoundError("Usuário não autorizado");
    }

    const updatedData: IUpdatedUser = {
        name: name !== user.name ? name : undefined,
        email: email !== user.email ? email : undefined,
        password: password ? await encryptPassword(password) : undefined,
    };

    const updatedUser = await UserRepository.updateUser(user.id, updatedData);

    if (!updatedUser.affected) {
        throw new RequestFieldError("Não foi possível atualizar o status do usuário.");
    }

    return response.status(200).send({ message: "Usuario atualizado com sucesso!" });
};

export const deleteUser: Request<undefined, { id: string }> = async (request, response) => {
    const { id } = request.params;

    const user = await UserRepository.findUser({ id });

    if (!user || !!user.deletedAt) {
        throw new RequestFieldError("Usuário não encontrado");
    }

    const deletedUser = await UserRepository.deleteUser(user.id);

    if (!deletedUser) {
        throw new RequestFieldError("Não foi possível apagar o usuário");
    }

    return response.status(200).send({ message: "Usuário apagado com sucesso!" });
};

export const toggleUserStatus: RequestUser<undefined, { id: string }> = async (request, response) => {
    const { user } = request;
    const { id } = request.params;

    if (!user || id === user.id) {
        throw new RequestFieldError("Usuario não pode trocar o próprio status");
    }

    const databaseUser = await UserRepository.findUser({ id });

    if (!databaseUser) {
        throw new RequestFieldError("Usuario não encontrado");
    }

    const updatedStatus = await UserRepository.updateUser(id, { isActive: !databaseUser.isActive });

    if (!updatedStatus.affected) {
        throw new RequestFieldError("Não foi possível atualizar o status do usuário.");
    }

    return response.status(200).send({ message: "Status do usuário atualizado com sucesso." });
};
