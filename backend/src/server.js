const express = require('express')
const AWS = require('aws-sdk')

const app = express()

app.use(express.json())

const sqs = new AWS.SQS({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: process.env.AWS_REGION
})

// add item
app.post('/add_to_queue/:queue', (request, response) => {
    const queue = request.params.queue
    const payload = request.body

    console.log(`Adding item to queue (${queue}) - Payload: ${JSON.stringify(payload)}`)

    const message = {
        MessageBody: JSON.stringify(payload),
        QueueUrl: `${process.env.SQS_URL}/${queue}`
    }

    sqs.sendMessage(message, (err, data) => {
        if (err) {
            console.log(err)    
        }

        console.log(`Item added [${data.MessageId}]`)
    })

    response.send('Item added to queue ' + queue)
})

app.listen(3000, () => console.log('-- Backend is running --'))
