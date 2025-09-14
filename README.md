# Petstore API Test Automation Framework

This repository contains an automated API testing framework for the Petstore API.


---

## 💡 Overview

- **Language:** Node.js (Javascript)
- **Test Framework:** Mocha, Chai
- **Reporting:** Mochawesome
- **CI/CD:** Github Actions using Docker
- **Other:** AXIOS, expect-mocha-snapshot, Faker

---

## 🛠️ Prerequisites

Before running locally, ensure you have:
### Install latest NPM and Node.js

* Go to the official Node.js download page and install latest node
  ```
  https://nodejs.org/en/download/current
  ```
* After installation, verify with:
  ```
  node -v
  npm -v 
  ```
* Alternatively, follow the doc below to install npm and node
  ```
  https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
  ```
---

## 📁 Project Structure (Overview)

```
📂 .github/               → Contains Github Actions workflow files
📂 fixtures/              → Contains configuration file (e.g., base URL, endpoints)
📂 node_modules/          → Contains project dependencies
📂 spec/                  → Contain test files
📂 spec/snapshot          → Contain api response snapshots for validation
📂 support/               → Support libraries
📂 testdata/              → Contains test data files
📂 mochawesome-report/    → Output folder for Mochawesome reports
📂 uploads/               → Contains files used for tests (e.g. image file)
```

## ✅ Getting Started

### Clone the Repository

```bash
git clone https://github.com/amjadalibb/PetstoreAPINodeJS.git
cd repository
```
### Install the project
Go to directory and install all dependencies
```bash
npm install
```

### Run the tests
```bash
npm test
```

### View the Test Report
Tests generates html report under `./mochawesome-report/petstore-api-report.html`
Open the generated `.html` file

---

## Github Actions - CI pipeline
Check the workflow
```bash
https://github.com/amjadalibb/PetstoreAPINodeJS/actions/runs/17713952392/job/50336333008
```

Manually trigger workflow
```bash
https://github.com/amjadalibb/PetstoreAPINodeJS/actions/workflows/node.js.yml

```
Download report aretifact from workflow
```bash
https://github.com/amjadalibb/PetstoreAPINodeJS/actions/runs/17713952392/artifacts/4006943099
```

## 🔍 Notes

* This framework is a good starting point for API test automation projects.
* Additional tests and scenarioscan be easily added by following the existing structure.

---
