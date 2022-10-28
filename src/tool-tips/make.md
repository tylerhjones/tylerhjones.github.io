# Gnu Make cheat sheet
https://www.gnu.org/software/make/manual

### variables
```make
TAG = 1.0.3
TF_LOG ?= DEBUG # if not set, set to DEBUG
THING := $(shell echo "hello world") # run a command and set the variable to the output
```

### print help
```make
.DEFAULT_GOAL := help

help: ## Shows this help menu
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

init: ## Initialize stuff
    @echo "Initializing stuff"
```

### suppress output of the command run
```make
thing:
    @echo "hello world" # at-symbol suppresses printing "echo 'hello world'" to the terminal
```
