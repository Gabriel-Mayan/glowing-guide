export interface IDatabaseUser {
  id: string;
  name: string;
  email: string;
  password: string;
  isActive?: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  userType: any;
}

export interface IUpdatedUser {
  name?: string;
  email?: string;
  password?: string;
  isActive?: boolean;
}

export type ICreateUser = Omit<
  IDatabaseUser,
  "id" |
  "createdAt" |
  "updatedAt" |
  "deletedAt"
>;

export type IFrontUser = Omit<
  IDatabaseUser,
  "id" |
  "password" |
  "isActive" |
  "createdAt" |
  "updatedAt" |
  "deletedAt"
>;

export type IUserToken = Omit<
  IDatabaseUser,
  "name" |
  "password" |
  "isActive" |
  "createdAt" |
  "updatedAt" |
  "deletedAt"
>;
