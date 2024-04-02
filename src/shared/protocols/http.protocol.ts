// eslint-disable-next-line import/no-extraneous-dependencies
import { ParsedQs } from "qs";
import { ZodTypeAny } from "zod";
import { ParamsDictionary } from "express-serve-static-core";
import { Request as Req, Response as Res, NextFunction } from "express";

import { IDatabaseUser } from "@modules/user/user.interface";

import { BaseError } from "../services/error.service";

type IProperty = "query" | "body" | "params" | "user";
interface IRequest<B = undefined, P = undefined, Q = undefined> extends Req {
  body: B;
  query: Q & ParsedQs;
  params: P & ParamsDictionary;
};

interface IRequestUser<B = undefined, P = undefined, Q = undefined> extends Req {
  body: B;
  query: Q & ParsedQs;
  params: P & ParamsDictionary;

  user: IDatabaseUser;
};

interface IRequestDevice<B = undefined, P = undefined, Q = undefined> extends Req {
  body: B;
  query: Q & ParsedQs;
  params: P & ParamsDictionary;

  device: any;
};

export interface Response extends Res { };

export interface Next extends NextFunction { };

export type Request<B = undefined, P = undefined, Q = undefined> = (request: IRequest<B, P, Q>, response: Response) => Promise<Response>;
export type RequestUser<B = undefined, P = undefined, Q = undefined> = (request: IRequestUser<B, P, Q>, response: Response) => Promise<Response>;
export type RequestDevice<B = undefined, P = undefined, Q = undefined> = (request: IRequestDevice<B, P, Q>, response: Response) => Promise<Response>;

export type Middleware = (request: IRequest, response: Response, next: Next) => Promise<Response | undefined>;
export type ErrorMiddleware = (error: BaseError, request: IRequest, response: Response, next: Next) => Response;
export type AuthMiddleware = (request: IRequestUser, response: Response, next: Next) => Promise<Response | undefined>;
export type ValidationMiddleware = (schema: ZodTypeAny, property?: IProperty) => (request: IRequestUser, response: Response, next: Next) => void;
