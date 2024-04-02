import { createTransport } from "nodemailer";
import handlebar from "nodemailer-express-handlebars";

import { mailConfig } from "../services/aws.service";
import { SendMail } from "../protocols/email.protocol";

const transporter = createTransport({ SES: mailConfig });

transporter.use("compile", handlebar({
    extName: ".html",
    viewPath: "../utils/email/template",
    viewEngine: { extname: ".html", partialsDir: "../utils/email/template" },
}));

export const sendMail: SendMail = async (options) => new Promise((resolve, reject) => {
    transporter.sendMail(options, (error: Error | null) => {
        if (error) {
            reject(error);
        }

        resolve(true);
    });
});
