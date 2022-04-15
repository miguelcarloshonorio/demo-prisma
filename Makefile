# Export environment variables to commands
export

.PHONY: help

help: ## Show help
	@fgrep -h "##" $(MAKEFILE_LIST) | sort | fgrep -v fgrep | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

# Variables
TARGET?=develop

init: postgres-up
	./bin/wait-for-it
	@ npx prisma migrate dev

dev: postgres-up ## Run the project
	./bin/wait-for-it
	@ yarn start:dev


unit-tests: ## Run project unit tests
	@ yarn test

tests: ## Run project tests
	make postgres-restart
	./bin/wait-for-it
	make unit-tests
	make postgres-down

postgres-up: ## Startup the Postgres database
	@ docker-compose -f docker-compose.yaml up -d --force-recreate

postgres-down: ## Teardown the Postgres database
	@ docker-compose -f docker-compose.yaml down -v --remove-orphans

postgres-logs: ## See the Postgres database logs
	@ docker-compose -f docker-compose.yaml logs -f

postgres-restart: postgres-down postgres-up  ## Restart the Postgres database
