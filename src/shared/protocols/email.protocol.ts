import { SendMailOptions } from "nodemailer";

export type SendMail = (options: SendMailOptions) => Promise<boolean>;
