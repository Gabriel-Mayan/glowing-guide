import { FindOptionsWhere, InsertResult } from "typeorm";

import { UserType } from "@modules/user_type/user_type.entity";
import { IDatabaseUserType } from "@/src/modules/user_type/user_type.interface";

import AppDataSource from "@/src/shared/services/typeorm.service";

const repository = AppDataSource.getRepository(UserType);

export const UserTypeRepository = {
    findType(query: FindOptionsWhere<UserType>): Promise<IDatabaseUserType | null> {
        return repository.findOneBy(query);
    },

    createType(name: string): Promise<InsertResult> {
        return repository.insert({ name });
    },
};
