docker network create portx --label=portx
docker-compose -f docker-compose.infrastructure.yml up -d
exit $LASTEXITCODE