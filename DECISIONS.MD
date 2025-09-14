# Decisions Made

## Tech Stack: Reasons of selection
* Node.js: Chosen for faster setup, rich NPM ecosystem, and seamless CI/CD integration.
* Mocha: A flexible and widely adopted test runner for automation test frameworks.
* Mochawesome: Provides clean, interactive, and CI-friendly test reports.
* expect-mocha-snapshot: Ensures API response consistency.
* AXIOS: Lightweight with clean syntax.
* Chai: Powerful, human-readable assertions that enhance test clarity.
* Github Actions: Native GitHub integration with simple, scalable CI/CD workflows.
* Docker: Guarantees environment consistency.
* Faker: Generates dynamic, realistic test data to improve coverage

## Test Plan for only PET
### 1. Only selected /PET endpoints for testing
Given the time constraints, I prioritized automating tests for the `/pet` endpoints and deferred `/store` and `/user` for later. 

I prioritized work as under:

* Setup the API test automation framework
* Write tests for `/pet`
* Include at least three different HTTP response codes in your tests
* Create the CI/CD pipeline using Docker
* Report Bugs
* Add html test report
* Upload artifact to Github Actions workflow
* Improve documentation for `README.MD` `TESTPLAN.MD` `BUGREPORT.MD` `DECISION.MD`

Below are for future work tasks:
* Some tests were skipped because they were failing due to invalid status codes - requires follow up
* Add tests for remaining apis `/store` and `/user`
* Add tests for other status codes
* Add scenario based tests for end to end journey