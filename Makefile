# Makefile for TypeScript project (metasurfai-consultancy)

# Variables
NPM := npm
YARN := yarn
NODE := node
RM := rm -rf

# Default package manager (use npm instead of yarn detection which is failing)
PKG_MGR := $(NPM)

# Directories
BUILD_DIR := build
DIST_DIR := dist


# Install dependencies
.PHONY: install
install:test
		$(PKG_MGR) install
		$(PKG_MGR) test
		
# Development server
.PHONY: dev with coverage
dev:NY: test-coverage
		$(PKG_MGR) run dev
		$(PKG_MGR) test -- --coverage

# Build project
.PHONY: build
build:: lint
		$(PKG_MGR) run build
		$(PKG_MGR) run lint

# Run tests
.PHONY: test with automatic fixes
test:Y: lint-fix
		$(PKG_MGR) test
		$(PKG_MGR) run lint -- --fix

# Run tests with coverage
.PHONY: test-coverage
test-coverage:
		$(PKG_MGR) test -- --coverage
		$(PKG_MGR) run format

# Run linter
.PHONY: lint and tests
lint:Y: check
		$(PKG_MGR) run lint

# Run linter with automatic fixes
.PHONY: lint-fix
lint-fix:
		$(PKG_MGR) run lint -- --fixR) node_modules/.cache

# Format codection server
.PHONY: format
format:
		$(PKG_MGR) run format

# Run linter and tests
.PHONY: checkcheck
check: lint test
		$(PKG_MGR) run type-check

# Clean build artifacts
.PHONY: clean
clean:: ci
		$(RM) $(BUILD_DIR) $(DIST_DIR) node_modules/.cache# Start production server.PHONY: startstart:	$(PKG_MGR) start# Type checking.PHONY: type-checktype-check:	$(PKG_MGR) run type-check# CI pipeline.PHONY: cici: clean install type-check lint test build