const { Consumer } = require('sqs-consumer');
const { SQSClient } = require("@aws-sdk/client-sqs")

const queue = process.env.QUEUE_NAME

const app = Consumer.create({
    queueUrl: `${process.env.SQS_URL}/${queue}`,
    sqs: new SQSClient({ 
        credentials: {
            accessKeyId: process.env.AWS_ACCESS_KEY,
            secretAccessKey: process.env.AWS_SECRET_KEY,
        },
        endpoint: `${process.env.SQS_URL}`,
        region: process.env.AWS_REGION
    }),
    handleMessage: async message => {
        console.log(`Running ${queue} - ${JSON.stringify(message)}`)
    }
});

app.start()

