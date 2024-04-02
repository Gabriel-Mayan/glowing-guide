import { FindOptionsWhere, InsertResult, UpdateResult } from "typeorm";

import { User } from "@modules/user/user.entity";
import { IDatabaseUser, ICreateUser, IUpdatedUser } from "@modules/user/user.interface";

import AppDataSource from "@/src/shared/services/typeorm.service";

const repository = AppDataSource.getRepository(User);

export const UserRepository = {
    getUsers(): Promise<IDatabaseUser[]> {
        return repository.findBy({ deletedAt: undefined });
    },

    findUser(query: FindOptionsWhere<User>): Promise<IDatabaseUser | null> {
        return repository.findOneBy({ deletedAt: undefined, ...query });
    },

    createUser(user: ICreateUser): Promise<InsertResult> {
        return repository.insert(user);
    },

    updateUser(id: string, updatedData: IUpdatedUser): Promise<UpdateResult> {
        return repository.update({ id }, updatedData);
    },

    deleteUser(id: string): Promise<UpdateResult> {
        return repository.update({ id }, { deletedAt: new Date() });
    },
};
