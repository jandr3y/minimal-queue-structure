# Minimal Queue Structure

A **very basic** local queue processing structure using "SQS"

### Docker

To run with Docker, first copy the example configuration file:
```
    cp .env.example .env
```

Then bring up the services; in this command, the worker service is replicated 3 times:
```
    docker-compose up --scale worker=3
```