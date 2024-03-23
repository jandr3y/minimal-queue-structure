require('dotenv').config()
const AWS = require("aws-sdk");
const c = require('sqs-consumer');
const ClientSQS = require("@aws-sdk/client-sqs")
const worker = process.argv[2]
const queue = process.argv[3]

const handlers = require('./handlers')

const app = c.Consumer.create({
    queueUrl: `${process.env.SQS_URL}/${queue}`,
    sqs: new ClientSQS.SQSClient({ 
        credentials: {
            accessKeyId: 'na',
            secretAccessKey: 'na',
        },
        endpoint: `${process.env.SQS_URL}`,
        region: 'REGION'
    }),
    handleMessage: handlers[queue]
});

app.start()

