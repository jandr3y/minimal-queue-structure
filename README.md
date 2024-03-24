# Minimal Queue Structure

Uma estrutura **bem básica** de processamento de filas "SQS" local

### Docker

Para rodar com docker primeiro copie o arquivo de configuração de exemplo
```
    cp .env.example .env
```

Então levante os serviços, nesse comando é replicado 3x o serviço de worker
```
    docker-compose up --scale worker=3
```