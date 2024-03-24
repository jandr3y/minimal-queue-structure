# Minimal Queue Structure

A **very basic** local queue processing structure using "SQS"

### How to Run

To run using Docker, you must first copy the configuration file to the root of the project:
```
cp .env.example .env
```

To start the services, use the following command:
```
docker-compose up --scale worker=3
```
**Note:** In this command, the worker service is replicated three times (for demonstration purposes only).

Execute the CURL command to test:
```
curl -XPOST -H "Content-type: application/json" -d '{"any": "data"}' 'localhost:8080/add_to_queue/queue01'
```