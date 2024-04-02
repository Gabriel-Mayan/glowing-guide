import * as AWS from "aws-sdk";

import { IBucketFile } from "@main/types/aws";

export const mailConfig = new AWS.SES({
    apiVersion: "2010-12-01",
    region: process.env.AWS_EMAIL_REGION,
});

export const getBucketArchive = async (data: IBucketFile) => {
    const { bucket, folder, fileName } = data;
    const { REGION, ACESS_KEY_ID_AWS, SECRET_ACESS_KEY } = process.env;

    const s3 = new AWS.S3({
        region: REGION,
        accessKeyId: ACESS_KEY_ID_AWS,
        secretAccessKey: SECRET_ACESS_KEY,
    });

    const params = {
        Bucket: bucket,
        Key: `${folder}/${fileName}`,
    };

    return s3.getObject(params).promise();
};
