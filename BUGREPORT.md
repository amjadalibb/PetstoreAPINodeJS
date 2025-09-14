# Bug Report

# PET Bugs
## Add Pet
* Title: Newly added pet is not returning in Get
* Steps to reproduce: 
* * Execute the curl command below to add pet (change the id)
```
curl -X 'POST' \
  'https://petstore.swagger.io/v2/pet' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "id": {id},
  "category": {
    "id": 2132131,
    "name": "string"
  },
  "name": "doggie",
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
}'
  ```
* * Execute the curl command below to get pet
```
curl -X 'GET' \
  'https://petstore.swagger.io/v2/pet/{id}' \
  -H 'accept: application/json'
  ```
* Expected: Should return the pet information but returns 404 `Pet not found`

* Title: Returning 500 with incorrect string format isntead of 400
* Steps to reproduce: 
* * Execute the curl command below to add pet (incorrect ID format)
```
curl --location 'https://petstore.swagger.io/v2/pet' \
--header 'accept: application/json' \
--header 'Content-Type: application/json' \
--data-raw '{
  "id": "@#$%^&*()!",
  "category": {
    "id": 2132131,
    "name": "string"
  },
  "name": "doggie",
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
}'
  ```
* Expected: Should return the 400 instead of 500

## Update pet By ID

* Title: Returning 500 with incorrect string format isntead of 400
* Steps to reproduce: 
* * Execute the curl command below to add pet (incorrect ID format)
```
curl -X 'PUT' \
  'https://petstore.swagger.io/v2/pet' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "id": "@#$%^&*()!",
  "category": {
    "id": 0,
    "name": "string"
  },
  "name": "doggie",
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
}'
  ```
* Expected: Should return the 400 instead of 500


## Upload Image to Pet

* Title: UploadImage is returning invalid status code 404 instead of 400 bad request with invalid parameter format
* Steps to reproduce: Execute the curl command below
```
curl -X 'POST' \
  'https://petstore.swagger.io/v2/pet/invalidId/uploadImage' \
  -H 'accept: application/json' \
  -H 'Content-Type: multipart/form-data' \
  -F 'file=@pet.jpg;type=image/jpeg'
  ```
* Expected: Should return 400 Bad request because of invalid input format

## Find pet By ID

* Title: Unable to fetch pet with ID (i.e. 9223372036854738000) randomly
* Steps to reproduce: Execute the curl command below
```
curl -X 'GET' \
  'https://petstore.swagger.io/v2/pet/9223372036854738000' \
  -H 'accept: application/json'
  ```
* Expected: Should return the pet information all times but do not return randomly

* Title: Returning invalid status code 404 instead of 400 bad request
* Steps to reproduce: Execute the curl command below
```
curl --location 'https://petstore.swagger.io/v2/pet/invalidId' \
--header 'accept: application/json'
  ```
* Expected: Should return 400 Bad request because of invalid input format

## Update Pet with Form Data
* Title: Newly added pet is not updating
* Steps to reproduce: Execute the curl command below
```
Create a new Pet with unique id
Update the newly created pet
  ```
* Expected: Should return 200 OK

* Title: Returning invalid status code 404 instead of 400 bad request with invalid parameter format
* Steps to reproduce: Execute the curl command below
```
curl -X 'POST' \
  'https://petstore.swagger.io/v2/pet/invalidId' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'name=Aron&status=pending'
  ```
* Expected: Should return 400 Bad request because of invalid input format
