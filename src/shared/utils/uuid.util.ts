import { v4 as uuidv4, validate } from "uuid";

export const generateUuid = (): string => String(uuidv4());
export const validateUuid = (params: string): boolean => validate(params);
