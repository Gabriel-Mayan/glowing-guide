import { parse } from "csv-parse";

export const convertFileToArray = (fileContent: string, headers: Array<string>): Promise<any[]> => new Promise((resolve, reject) => {
    parse(fileContent, { delimiter: ";", columns: headers }, (error: any, result: any[]) => {
        if (error) {
            reject(error);
        }

        resolve(result);
    });
});
