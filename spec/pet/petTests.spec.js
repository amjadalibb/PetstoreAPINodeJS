const { requestAPI, requestAPIWithFormData } = require('../../support/api.js');
const { expect } = require('chai');
const { expectSnapshot, httpStatus, report } = require('../../support/index.js');
const { ADDPET, UPDATEPET, UPLOADIMAGEPET, FINDBYSTATUS, FINDBYID, UPDATEWITHFORM, DELETEPET } = require('../../tests/pet/petTests.js')

describe('PetStore - API Tests for Pets', function() {
    describe('Add Pets', function() {
        it('Add a new pet with valid data', async function() {
            this.timeout(10000);
            report(this, 'API Options BaseURL', ADDPET.optionsValid.baseURL);
            report(this, 'API Options Endpoint', ADDPET.optionsValid.endpoint);
            const response = await requestAPI(ADDPET.optionsValid);
            report(this, 'API response', response.data);
            expect(response.status).to.equal(httpStatus.OK);
            expect(response.data).to.have.property('id').that.is.a(ADDPET.optionsValid.response.body.id);
            expect(response.data).to.have.property('category').that.is.a(ADDPET.optionsValid.response.body.category);
            expect(response.data).to.have.property('photoUrls').that.is.a(ADDPET.optionsValid.response.body.photoUrls);
            expect(response.data).to.have.property('tags').that.is.a(ADDPET.optionsValid.response.body.tags);
            expect(response.data).to.have.property('status').that.is.a(ADDPET.optionsValid.response.body.status);
            expect(response.data).to.have.property('name').that.is.a(ADDPET.optionsValid.response.body.name);
        });
        it.skip('Add a new pet with invalid id string', async function() {
            this.timeout(10000);
            report(this, 'API Options BaseURL', ADDPET.optionsServerError.baseURL);
            report(this, 'API Options Endpoint', ADDPET.optionsServerError.endpoint);
            const response = await requestAPI(ADDPET.optionsServerError);
            report(this, 'API response', response.data);
            expect(response.status).to.equal(ADDPET.optionsServerError.response.status);
            expect(response.data).to.have.property('code').that.equals(ADDPET.optionsServerError.response.body.code);
            expect(response.data).to.have.property('type').that.equals(ADDPET.optionsServerError.response.body.type);
        });
        it('Add a new pet with method not found', async function() {
            this.timeout(10000);
            report(this, 'API Options BaseURL', ADDPET.optionsMethodNotFound.baseURL);
            report(this, 'API Options Endpoint', ADDPET.optionsMethodNotFound.endpoint);
            const response = await requestAPI(ADDPET.optionsMethodNotFound);
            report(this, 'API response', response.data);
            expect(response.status).to.equal(ADDPET.optionsMethodNotFound.response.status);
            expect(response.data).to.have.property('code').that.equals(ADDPET.optionsMethodNotFound.response.body.code);
            expect(response.data).to.have.property('type').that.equals(ADDPET.optionsMethodNotFound.response.body.type);
            expectSnapshot(response.data).toMatchSnapshot(this);
        });
    });

    describe('Update Pets', function() {
        it('Update an existing pet with valid data', async function() {
            this.timeout(10000);
            report(this, 'API Options BaseURL', UPDATEPET.optionsValid.baseURL);
            report(this, 'API Options Endpoint', UPDATEPET.optionsValid.endpoint);
            const response = await requestAPI(UPDATEPET.optionsValid);
            report(this, 'API response', response.data);
            expect(response.status).to.equal(httpStatus.OK);
            expect(response.data).to.have.property('id').that.is.a(UPDATEPET.optionsValid.response.body.id);
            expect(response.data).to.have.property('category').that.is.a(UPDATEPET.optionsValid.response.body.category);
            expect(response.data).to.have.property('photoUrls').that.is.a(UPDATEPET.optionsValid.response.body.photoUrls);
            expect(response.data).to.have.property('tags').that.is.a(UPDATEPET.optionsValid.response.body.tags);
            expect(response.data).to.have.property('status').that.is.a(UPDATEPET.optionsValid.response.body.status);
            expect(response.data).to.have.property('name').that.is.a(UPDATEPET.optionsValid.response.body.name);
        });
        it.skip('Update an existing pet with invalid ID string format', async function() {
            this.timeout(10000);
            report(this, 'API Options BaseURL', UPDATEPET.optionsServerError.baseURL);
            report(this, 'API Options Endpoint', UPDATEPET.optionsServerError.endpoint);
            const response = await requestAPI(UPDATEPET.optionsServerError);
            report(this, 'API response', response.data);
            expect(response.status).to.equal(UPDATEPET.optionsServerError.response.status);
            expect(response.data).to.have.property('code').that.equals(UPDATEPET.optionsServerError.response.body.code);
            expect(response.data).to.have.property('type').that.equals(UPDATEPET.optionsServerError.response.body.type);
        });
        it('Update an existing pet with method not found', async function() {
            this.timeout(10000);
            report(this, 'API Options BaseURL', UPDATEPET.optionsMethodNotFound.baseURL);
            report(this, 'API Options Endpoint', UPDATEPET.optionsMethodNotFound.endpoint);
            const response = await requestAPI(UPDATEPET.optionsMethodNotFound);
            report(this, 'API response', response.data);
            expect(response.status).to.equal(UPDATEPET.optionsMethodNotFound.response.status);
            expect(response.data).to.have.property('code').that.equals(UPDATEPET.optionsMethodNotFound.response.body.code);
            expect(response.data).to.have.property('type').that.equals(UPDATEPET.optionsMethodNotFound.response.body.type);
            expectSnapshot(response.data).toMatchSnapshot(this);
        });
    });
    describe('Upload Image to Pet', function() {
        it('Upload an image to an existing pet with valid data', async function() {
            this.timeout(10000);
            report(this, 'API Options BaseURL', UPLOADIMAGEPET.optionsValid.baseURL);
            report(this, 'API Options Endpoint', UPLOADIMAGEPET.optionsValid.endpoint);
            const response = await requestAPIWithFormData(UPLOADIMAGEPET.optionsValid);
            report(this, 'API response Status Code', response.status);
            expect(response.status).to.equal(httpStatus.OK);
        });
        it.skip('Upload an image to an existing pet with invalid data', async function() {
            this.timeout(10000);
            report(this, 'API Options BaseURL', UPLOADIMAGEPET.optionsInvalid.baseURL);
            report(this, 'API Options Endpoint', UPLOADIMAGEPET.optionsInvalid.endpoint);
            const response = await requestAPIWithFormData(UPLOADIMAGEPET.optionsInvalid);
            report(this, 'API response', response.data);
            expect(response.status).to.equal(UPLOADIMAGEPET.optionsInvalid.response.status);
            expect(response.data).to.have.property('code').that.equals(UPLOADIMAGEPET.optionsInvalid.response.body.code);
            expect(response.data).to.have.property('type').that.equals(UPLOADIMAGEPET.optionsInvalid.response.body.type);
            expectSnapshot(response.data).toMatchSnapshot(this);
        });
        it('Upload an image to an existing pet with method not found', async function() {
            this.timeout(10000);  
            report(this, 'API Options BaseURL', UPLOADIMAGEPET.optionsMethodNotFound.baseURL);
            report(this, 'API Options Endpoint', UPLOADIMAGEPET.optionsMethodNotFound.endpoint);
            const response = await requestAPI(UPLOADIMAGEPET.optionsMethodNotFound);
            report(this, 'API response', response.data);
            expect(response.status).to.equal(UPLOADIMAGEPET.optionsMethodNotFound.response.status);
            expect(response.data).to.have.property('code').that.equals(UPLOADIMAGEPET.optionsMethodNotFound.response.body.code);
            expect(response.data).to.have.property('type').that.equals(UPLOADIMAGEPET.optionsMethodNotFound.response.body.type);
            expectSnapshot(response.data).toMatchSnapshot(this);
        });
    });
    describe('Find By Status Pet', function() {
        it('Find pets by status - available', async function() {
            this.timeout(10000);
            report(this, 'API Options BaseURL', FINDBYSTATUS.optionsValidAvailable.baseURL);
            report(this, 'API Options Endpoint', FINDBYSTATUS.optionsValidAvailable.endpoint);
            const response = await requestAPI(FINDBYSTATUS.optionsValidAvailable);
            report(this, 'API response', response.data);
            expect(response.status).to.equal(FINDBYSTATUS.optionsValidAvailable.response.status);
            expect(response.data).that.is.a(FINDBYSTATUS.optionsValidAvailable.response.body);
        });
        it('Find pets by status - pending', async function() {
            this.timeout(10000);
            report(this, 'API Options BaseURL', FINDBYSTATUS.optionsValidPending.baseURL);
            report(this, 'API Options Endpoint', FINDBYSTATUS.optionsValidPending.endpoint);
            const response = await requestAPI(FINDBYSTATUS.optionsValidPending);
            report(this, 'API response', response.data);
            expect(response.status).to.equal(FINDBYSTATUS.optionsValidPending.response.status);
            expect(response.data).that.is.a(FINDBYSTATUS.optionsValidPending.response.body);
        });
        it('Find pets by status - sold', async function() {
            this.timeout(10000);
            report(this, 'API Options BaseURL', FINDBYSTATUS.optionsValidSold.baseURL);
            report(this, 'API Options Endpoint', FINDBYSTATUS.optionsValidSold.endpoint);
            const response = await requestAPI(FINDBYSTATUS.optionsValidSold);
            report(this, 'API response', response.data);
            expect(response.status).to.equal(FINDBYSTATUS.optionsValidSold.response.status);
            expect(response.data).that.is.a(FINDBYSTATUS.optionsValidSold.response.body);
        });
        it.skip('Find pets by status - invalid status', async function() {
            this.timeout(10000);
            report(this, 'API Options BaseURL', FINDBYSTATUS.optionsInvalid.baseURL);
            report(this, 'API Options Endpoint', FINDBYSTATUS.optionsInvalid.endpoint);
            const response = await requestAPI(FINDBYSTATUS.optionsInvalid);
            report(this, 'API response', response.data);
            expect(response.status).to.equal(FINDBYSTATUS.optionsInvalid.response.status);
            expect(response.data).that.is.a(FINDBYSTATUS.optionsInvalid.response.body);
        });
        it('Find pets by status - method not found', async function() {
            this.timeout(10000);
            report(this, 'API Options BaseURL', FINDBYSTATUS.optionsMethodNotFound.baseURL);
            report(this, 'API Options Endpoint', FINDBYSTATUS.optionsMethodNotFound.endpoint);
            const response = await requestAPI(FINDBYSTATUS.optionsMethodNotFound);
            report(this, 'API response', response.data);
            expect(response.status).to.equal(FINDBYSTATUS.optionsMethodNotFound.response.status);
            expect(response.data).to.have.property('code').that.equals(FINDBYSTATUS.optionsMethodNotFound.response.body.code);
            expect(response.data).to.have.property('type').that.equals(FINDBYSTATUS.optionsMethodNotFound.response.body.type);
            expectSnapshot(response.data).toMatchSnapshot(this);
        });
    });
    describe('Find By ID Pet', function() {
        it('Find pet by ID - valid', async function() {
            this.timeout(10000);
            report(this, 'API Options BaseURL', FINDBYID.optionsValid.baseURL);
            report(this, 'API Options Endpoint', FINDBYID.optionsValid.endpoint);
            const response = await requestAPI(FINDBYID.optionsValid);
            report(this, 'API response', response.data);
            expect(response.status).to.equal(FINDBYID.optionsValid.response.status);
            expect(response.data).to.have.property('id').that.is.a(FINDBYID.optionsValid.response.body.id);
            expect(response.data).to.have.property('category').that.is.a(FINDBYID.optionsValid.response.body.category);
            expect(response.data).to.have.property('photoUrls').that.is.a(FINDBYID.optionsValid.response.body.photoUrls);
            expect(response.data).to.have.property('tags').that.is.a(FINDBYID.optionsValid.response.body.tags);
            expect(response.data).to.have.property('status').that.is.a(FINDBYID.optionsValid.response.body.status);
            expect(response.data).to.have.property('name').that.is.a(FINDBYID.optionsValid.response.body.name);
        });
        it.skip('Find pet by ID - invalid', async function() {
            this.timeout(10000);
            report(this, 'API Options BaseURL', FINDBYID.optionsInvalid.baseURL);
            report(this, 'API Options Endpoint', FINDBYID.optionsInvalid.endpoint);
            const response = await requestAPI(FINDBYID.optionsInvalid);
            report(this, 'API response', response.data);
            expect(response.status).to.equal(FINDBYID.optionsInvalid.response.status);
            expect(response.data).to.have.property('code').that.equals(FINDBYID.optionsInvalid.response.body.code);
            expect(response.data).to.have.property('type').that.equals(FINDBYID.optionsInvalid.response.body.type);
            expect(response.data).to.have.property('message').that.equals(FINDBYID.optionsInvalid.response.body.message);
            expectSnapshot(response.data).toMatchSnapshot(this);
        });
        it('Find pet by ID - method not found', async function() {
            this.timeout(10000);
            report(this, 'API Options BaseURL', FINDBYID.optionsMethodNotFound.baseURL);
            report(this, 'API Options Endpoint', FINDBYID.optionsMethodNotFound.endpoint);
            const response = await requestAPI(FINDBYID.optionsMethodNotFound);
            report(this, 'API response', response.data);
            expect(response.status).to.equal(FINDBYID.optionsMethodNotFound.response.status);
            expect(response.data).to.have.property('code').that.equals(FINDBYID.optionsMethodNotFound.response.body.code);
            expect(response.data).to.have.property('type').that.equals(FINDBYID.optionsMethodNotFound.response.body.type);
            expectSnapshot(response.data).toMatchSnapshot(this);
        });
    });
    describe('Update With Form Pet', function() {
        it.skip('Update an existing pet with form data - valid', async function() {
            this.timeout(10000);
            report(this, 'API Options BaseURL', UPDATEWITHFORM.optionsValid.baseURL);
            report(this, 'API Options Endpoint', UPDATEWITHFORM.optionsValid.endpoint);
            const addPet = await requestAPI(ADDPET.optionsValid);
            expect(addPet.status).to.equal(httpStatus.OK);
            report(this, 'Pet Added', (addPet.data));
            expect(addPet.status).to.not.equal(UPDATEWITHFORM.optionsValid.response.bodystatus);
            UPDATEWITHFORM.optionsValid.endpoint = UPDATEWITHFORM.optionsValid.endpoint.replace('{petId}', addPet.data.id);
            report(this, 'API Endpoint for update pet', UPDATEWITHFORM.optionsValid.endpoint);
            report(this, 'API Update Pet Payload', (UPDATEWITHFORM.optionsValid.body.formData));
            const response = await requestAPIWithFormData(UPDATEWITHFORM.optionsValid);
            report(this, 'API response', response.data);
            expect(response.status).to.equal(UPDATEWITHFORM.optionsValid.response.status);
            expect(response.data).to.have.property('code').that.equals(UPDATEWITHFORM.optionsValid.response.body.code);
            expect(response.data).to.have.property('type').that.equals(UPDATEWITHFORM.optionsValid.response.body.type);
            expect(response.data).to.have.property('message').that.equals(addPet.data.id.toString());
        });
        it.skip('Update an existing pet with form data - invalid', async function() {
            this.timeout(10000);
            report(this, 'API Options BaseURL', UPDATEWITHFORM.optionsInvalid.baseURL);
            report(this, 'API Options Endpoint', UPDATEWITHFORM.optionsInvalid.endpoint);
            const response = await requestAPIWithFormData(UPDATEWITHFORM.optionsInvalid);
            report(this, 'API response', response.data);
            expect(response.status).to.equal(UPDATEWITHFORM.optionsInvalid.response.status);
            expect(response.data).to.have.property('code').that.equals(UPDATEWITHFORM.optionsInvalid.response.body.code);
            expect(response.data).to.have.property('type').that.equals(UPDATEWITHFORM.optionsInvalid.response.body.type);
            expect(response.data).to.have.property('message').that.equals(UPDATEWITHFORM.optionsInvalid.response.body.message);
            expectSnapshot(response.data).toMatchSnapshot(this);
        });
        it('Update an existing pet with form data - method not found', async function() {
            this.timeout(10000);
            report(this, 'API Options BaseURL', UPDATEWITHFORM.optionsMethodNotFound.baseURL);
            report(this, 'API Options Endpoint', UPDATEWITHFORM.optionsMethodNotFound.endpoint);
            const response = await requestAPIWithFormData(UPDATEWITHFORM.optionsMethodNotFound);
            report(this, 'API response', response.data);
            expect(response.status).to.equal(UPDATEWITHFORM.optionsMethodNotFound.response.status);
            expect(response.data).to.have.property('code').that.equals(UPDATEWITHFORM.optionsMethodNotFound.response.body.code);
            expect(response.data).to.have.property('type').that.equals(UPDATEWITHFORM.optionsMethodNotFound.response.body.type);
            expectSnapshot(response.data).toMatchSnapshot(this);
        });
    });
    describe('Delete Pet', function() {
        it('Delete an existing pet - valid', async function() {
            this.timeout(10000);
            report(this, 'API Options BaseURL', DELETEPET.optionsValid.baseURL);
            report(this, 'API Options Endpoint', DELETEPET.optionsValid.endpoint);
            const addPet = await requestAPI(ADDPET.optionsValid);
            expect(addPet.status).to.equal(httpStatus.OK);
            report(this, 'Pet Added', (addPet.data));
            DELETEPET.optionsValid.endpoint = DELETEPET.optionsValid.endpoint.replace('{petId}', addPet.data.id);
            report(this, 'API Endpoint for delete pet', DELETEPET.optionsValid.endpoint);
            const response = await requestAPI(DELETEPET.optionsValid);
            report(this, 'API response', response.data);
            expect(response.status).to.equal(DELETEPET.optionsValid.response.status);
            expect(response.data).to.have.property('code').that.equals(DELETEPET.optionsValid.response.body.code);
            expect(response.data).to.have.property('type').that.equals(DELETEPET.optionsValid.response.body.type);
            expect(response.data).to.have.property('message').that.equals(addPet.data.id.toString());
        });
        it.skip('Delete an existing pet - invalid', async function() {
            this.timeout(10000);
            report(this, 'API Options BaseURL', DELETEPET.optionsInvalid.baseURL);
            report(this, 'API Options Endpoint', DELETEPET.optionsInvalid.endpoint);
            const response = await requestAPI(DELETEPET.optionsInvalid);
            report(this, 'API response', response.data);
            expect(response.status).to.equal(DELETEPET.optionsInvalid.response.status);
            expect(response.data).to.have.property('code').that.equals(DELETEPET.optionsInvalid.response.body.code);
            expect(response.data).to.have.property('type').that.equals(DELETEPET.optionsInvalid.response.body.type);
            expect(response.data).to.have.property('message').that.equals(DELETEPET.optionsInvalid.response.body.message);
            expectSnapshot(response.data).toMatchSnapshot(this);
        });
        it('Delete an existing pet - method not found', async function() {
            this.timeout(10000);
            report(this, 'API Options BaseURL', DELETEPET.optionsMethodNotFound.baseURL);
            report(this, 'API Options Endpoint', DELETEPET.optionsMethodNotFound.endpoint);
            const response = await requestAPI(DELETEPET.optionsMethodNotFound);
            report(this, 'API response', response.data);
            expect(response.status).to.equal(DELETEPET.optionsMethodNotFound.response.status);
            expect(response.data).to.have.property('code').that.equals(DELETEPET.optionsMethodNotFound.response.body.code);
            expect(response.data).to.have.property('type').that.equals(DELETEPET.optionsMethodNotFound.response.body.type);
            expectSnapshot(response.data).toMatchSnapshot(this);
        });
    });
});

