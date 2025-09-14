# TESTPLAN.md

## Project: PetStore API Automation  
**Scope:** Validate operations for Pets in the PetStore API.  
**Tools & Frameworks:**  
- Mocha / Chai for testing and assertions
- Snapshot testing for response validation
- Test reporting with `mochawesome` reporter showing request and response

---

## 1. Test Suite: **Add Pets**

### Objective  
Verify that new pets can be added with valid data, and validate handling of errors and unsupported methods.  

| Test Case ID | Test Case Description | Input / Action | Expected Result | Status Code |
|--------------|-----------------------|----------------|-----------------|--------------|
| ADD-01 | Add a new pet with valid data | POST `/pet` with valid payload | Pet created successfully, response contains `id`, `category`, `photoUrls`, `tags`, `status`, `name` | 200 |
| ADD-02 | Add a new pet with invalid id string | POST `/pet` with invalid ID `@#$%^&*()!` | Response returns error object with `code`, `type`, `message` | 400 |
| ADD-03 | Add a new pet with method not found | Unsupported HTTP method | Response returns error object with `code`, `type` | 405 |

---

## 2. Test Suite: **Update Pets**

### Objective  
Verify updating existing pets with valid data, invalid requests, and unsupported methods.  

| Test Case ID | Test Case Description | Input / Action | Expected Result | Status Code |
|--------------|-----------------------|----------------|-----------------|--------------|
| UPD-01 | Update an existing pet with valid data | PUT `/pet` with valid payload | Response contains updated `id`, `category`, `photoUrls`, `tags`, `status`, `name` | 200 |
| UPD-02 | Update an existing pet with invalid ID string format | PUT `/pet` with invalid ID `@#$%^&*()!` | Response returns error object with `code`, `type`, `message` | 400 |
| UPD-03 | Update an existing pet with method not found | Unsupported HTTP method | Response returns error object with `code`, `type` | 405 |

---

## 3. Test Suite: **Upload Image to Pet**

### Objective  
Validate uploading images to an existing pet, error handling, and unsupported methods.  

| Test Case ID | Test Case Description | Input / Action | Expected Result | Status Code |
|--------------|-----------------------|----------------|-----------------|--------------|
| IMG-01 | Upload an image with valid data | POST `/pet/{petId}/uploadImage` with multipart form data | Response is successful | 200 |
| IMG-02 | Upload an image with invalid data | POST `/pet/{petId}/uploadImage` with invalid petID `invalidId` | Error response with `code`, `type`, `message` | 400 |
| IMG-03 | Upload an image with method not found | Unsupported HTTP method | Error response with `code`, `type` | 405 |

---

## 4. Test Suite: **Find Pets by Status**

### Objective  
Verify filtering pets by their status values.  

| Test Case ID | Test Case Description | Input / Action | Expected Result | Status Code |
|--------------|-----------------------|----------------|-----------------|--------------|
| FIND-STAT-01 | Find pets with status `available` | GET `/pet/findByStatus?status=available` | Response list of pets with `status=available` | 200 |
| FIND-STAT-02 | Find pets with status `pending` | GET `/pet/findByStatus?status=pending` | Response list of pets with `status=pending` | 200 |
| FIND-STAT-03 | Find pets with status `sold` | GET `/pet/findByStatus?status=sold` | Response list of pets with `status=sold` | 200 |
| FIND-STAT-04 | Find pets with invalid status `invalidStatus` | GET `/pet/findByStatus?status=invalidStatus` | Error response with `code`, `type` | 400 |
| FIND-STAT-05 | Find pets with with method not found | Unsupported HTTP method | Error response with `code`, `type` | 405 |
---

## 5. Test Suite: **Find Pet by ID**

### Objective  
Verify retrieval of pets by ID with valid and invalid inputs.  

| Test Case ID | Test Case Description | Input / Action | Expected Result | Status Code |
|--------------|-----------------------|----------------|-----------------|--------------|
| FIND-ID-01 | Find pet by valid ID | GET `/pet/{id}` | Response contains pet details (`id`, `category`, `photoUrls`, `tags`, `status`, `name`) | 200 |
| FIND-ID-02 | Find pet by invalid ID | GET `/pet/{invalidId}` | Error response with `code`, `type`, `message` | 400 |
| FIND-ID-03 | Find pet by ID with method not found | Unsupported HTTP method | Error response with `code`, `type` | 405 |

---

## 6. Test Suite: **Update Pet with Form Data**

### Objective  
Validate updating existing pets using form data with both valid and invalid inputs.  

| Test Case ID | Test Case Description | Input / Action | Expected Result | Status Code |
|--------------|-----------------------|----------------|-----------------|--------------|
| UPD-FORM-01 | Update pet with valid form data | POST `/pet/{petId}` with form data | Response contains `code`, `type`, and `message` with pet ID | 200 |
| UPD-FORM-02 | Update pet with invalid form data | POST `/pet/{petId}` with invalid data | Error response with `code`, `type`, `message` | 400 |
| UPD-FORM-03 | Update pet with method not found | Unsupported HTTP method | Error response with `code`, `type` | 405 |

---

## 7. Test Suite: **Delete Pet**

### Objective  
Validate deletion of pets by ID with valid and invalid cases.  

| Test Case ID | Test Case Description | Input / Action | Expected Result | Status Code |
|--------------|-----------------------|----------------|-----------------|--------------|
| DEL-01 | Delete an existing pet (valid) | DELETE `/pet/{id}` after adding pet | Response contains `code`, `type`, `message` with deleted pet ID | 200 |
| DEL-02 | Delete a pet with invalid ID | DELETE `/pet/{invalidId}` | Error response with `code`, `type`, `message` | 400 |
| DEL-03 | Delete pet with method not found | Unsupported HTTP method | Error response with `code`, `type` | 405 |

---

## Exit Criteria  
- All positive test cases must pass (status 200).  
- Negative test cases must return expected error responses (status 400/404/405/500).
- All snapshot comparisons must match saved baselines.  
