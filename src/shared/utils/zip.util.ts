import JSZip from "jszip";

export const readZipFile = async (file: any): Promise<JSZip> => {
    const newZip = new JSZip();
    return newZip.loadAsync(file);
};
