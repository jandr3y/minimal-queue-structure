const express = require('express')
const log = require('./log')
require('dotenv').config()

const AWS = require('aws-sdk')
const app = express()

const AWS_CONFIG = {
    endpoint: new AWS.Endpoint('http://localhost:9324'),
    accessKeyId: 'na',
    secretAccessKey: 'na',
    region: 'REGION'
}

app.use(express.json())

const sqs = new AWS.SQS(AWS_CONFIG)

const handleSqsMessageSend = (err, data) => {
    if (err) throw err
    log(`Item added [${data.MessageId}]`)
}

// add item
app.post('/add_to_queue/:queue', (request, response) => {
    const queue = request.params.queue
    const payload = request.body

    log(`Adding item to queue (${queue}) - Payload: ${JSON.stringify(payload)}`)

    sqs.sendMessage({ 
        MessageBody: JSON.stringify(payload),
        QueueUrl: `${process.env.SQS_URL}/${queue}`
    }, handleSqsMessageSend)

    response.send('Item added to queue ' + queue)
})

app.listen(3000, () => {
    console.log('-- Backend is running --')
})
