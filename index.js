import letterboxd from "letterboxd";
import { S3 } from "@aws-sdk/client-s3";

const s3 = new S3({region: 'us-east-2'});

export const handler = async (event, context) => {
  try {
    console.log('running letterboxd');

    const items = await letterboxd("timciep");
    // const items = {foo: 'bar'};

    console.log('putting to s3');

    const result = await s3.putObject({
      Bucket: 'www.timcieplowski.com',
      Key: 'json/timciep-diary.json',
      ContentType: 'application/json',
      Body: JSON.stringify(items)
    });

    console.log(result);
    console.log('success?');
  } catch (error) {
    console.error(error);
  }

  return context.logStreamName;
};

handler({}, { done: () => {} });