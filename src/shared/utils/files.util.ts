import fs from "fs";

export const getFileNames = (directoryPath: string): string[] => {
    const files = fs.readdirSync(directoryPath);
    const fileNames = files.map((file) => file.split(".")[0]);
    return fileNames;
};
