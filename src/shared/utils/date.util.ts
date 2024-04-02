import { Duration, format, add, isAfter } from "date-fns";

const REMOVE_HOURS_MINUTES = "P";

export const addTime = (date: Date, duration: Duration): Date => add(date, duration);
export const formatDate = (date: Date): string => format(date, REMOVE_HOURS_MINUTES);
export const isAfterDate = (date: Date, expiration: Date): boolean => isAfter(date, expiration);
