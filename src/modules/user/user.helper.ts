import { ICreateUser, IDatabaseUser, IFrontUser } from "./user.interface";

export const formatDatabaseUser = (databaseUser: IDatabaseUser | ICreateUser): IFrontUser => {
    const { name, email, userType } = databaseUser;

    const user = {
        name,
        email,
        userType: userType.name,
    };

    return user;
};
