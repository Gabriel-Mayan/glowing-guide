import { Express } from "express";
import { FileFilterCallback as CallbackFile } from "multer";

export interface File extends Express.Multer.File { error?: string }

export type FileNameCallback = (error: Error | null, filename: string) => void;
export type DestinationCallback = (error: Error | null, destination: string) => void;

export interface FileFilterCallback extends CallbackFile { }
