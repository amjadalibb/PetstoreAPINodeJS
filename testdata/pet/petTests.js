const { URLs, endpoints } = require('../../fixtures/petstoreUrls.js');
const { faker } = require('@faker-js/faker');

const formType = {
	image: 'file',
	formData: 'form-data',
};
const imageFilePath = './uploads/pet.jpg';
const httpMethods = Object.freeze({
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  DELETE: 'delete',
});

const valid = {
	petId: {
        available: '9223372036854738000',
        pending: '235',
        sold: '13'
    },
    status: {
        available: 'available',
        pending: 'pending',
        sold: 'sold'
    },
    image: {
        url: 'https://d2zp5xs5cp8zlg.cloudfront.net/image-68121-340.jpg'
    }
}

const getFakePet = () => {
	return {
			id: parseInt(faker.number.int({ min: 10000000000, max: 90000000000 })),
			category: {
				id: parseInt(faker.number.int(5)),
				name: faker.animal.cat
			},
			name: faker.animal.cat(),
			photoUrls: [
				faker.image.url()
			],
			tags: [
				{
					id: parseInt(faker.number.int(10)),
					name: faker.person.firstName()
				}
			],
			status: valid.status.available
		}
}

const addPet = {
	optionsValid: {
		method: httpMethods.POST,
		baseURL: URLs.baseUrl,
		endpoint: endpoints.pet.add,
		body: getFakePet(),
		response: {
			status: 200,
			body: {
				id: 'number',
				category: 'object',
				photoUrls: 'array',
				tags: 'array',
				status: 'string',
				name: 'string',
			},
		}
	},
	optionsServerError: {
		method: httpMethods.POST,
		baseURL: URLs.baseUrl,
		endpoint: endpoints.pet.add,
		body: {
			id: "@#$%^&*()!",
		},
		response: {
			status: 400,
			body: {
				code: 400,
				type: 'unknown',
			}
		}
	},
	optionsMethodNotFound: {
		method: httpMethods.GET,
		baseURL: URLs.baseUrl,
		endpoint: endpoints.pet.add,
		response: {
			status: 405,
			body: {
				code: 405,
				type: 'unknown',
			}
		}
	}
}

const updatePet = {
	optionsValid: {
		method: httpMethods.PUT,
		baseURL: URLs.baseUrl,
		endpoint: endpoints.pet.update,
		body: {
			id: valid.petId.available,
			category: {
				id: parseInt(faker.number.int(5)),
				name: faker.animal.cat
			},
			name: faker.animal.cat(),
			photoUrls: [
				faker.image.url()
			],
			tags: [
				{
					id: parseInt(faker.number.int(10)),
					name: faker.person.firstName()
				}
			],
			status: valid.status.available
		},
		response: {
			status: 200,
			body: {
				id: 'number',
				category: 'object',
				photoUrls: 'array',
				tags: 'array',
				status: 'string',
				name: 'string',
			},
		}
	},
	optionsServerError: {
		method: httpMethods.PUT,
		baseURL: URLs.baseUrl,
		endpoint: endpoints.pet.update,
		body: {
			id: "@#$%^&*()!",
		},
		response: {
			status: 400,
			body: {
				code: 400,
				type: 'unknown',
			}
		}
	},
	optionsMethodNotFound: {
		method: httpMethods.GET,
		baseURL: URLs.baseUrl,
		endpoint: endpoints.pet.update,
		response: {
			status: 405,
			body: {
				code: 405,
				type: 'unknown',
			}
		}
	}
}

const uploadImagePet = {
	optionsValid: {
		method: httpMethods.POST,
		baseURL: URLs.baseUrl,
		endpoint: endpoints.pet.uploadImage.replace('{petId}', valid.petId.available),
		body: {
			formType: formType.image,
			formData: {
				filePath: imageFilePath
			}
		},
		response: {
			status: 200,
		}
	},
	optionsInvalid: {
		method: httpMethods.POST,
		baseURL: URLs.baseUrl,
		endpoint: endpoints.pet.uploadImage.replace('{petId}', 'invalidId'),
		body: {
			formType: formType.image,
			formData: {
				filePath: imageFilePath
			}
		},
		response: {
			status: 400,
			body: {
				code: 400,
				type: 'unknown',
				message: 'java.lang.NumberFormatException: For input string: \"invalidId\"'
			}	
		}
	},
	optionsMethodNotFound: {
		method: httpMethods.GET,
		baseURL: URLs.baseUrl,
		endpoint: endpoints.pet.uploadImage.replace('{petId}', valid.petId.available),
		response: {
			status: 405,
			body: {
				code: 405,
				type: 'unknown',
			}
		}
	}
}

const findByStatus = {
	optionsValidAvailable: {
		method: httpMethods.GET,
		baseURL: URLs.baseUrl,
		endpoint: endpoints.pet.findByStatus.replace('{status}', valid.status.available),
		response: {
			status: 200,
			body: 'array'
		}
	},
	optionsValidPending: {
		method: httpMethods.GET,
		baseURL: URLs.baseUrl,
		endpoint: endpoints.pet.findByStatus.replace('{status}', valid.status.pending),
		response: {
			status: 200,
			body: 'array'
		}
	},
	optionsValidSold: {
		method: httpMethods.GET,
		baseURL: URLs.baseUrl,
		endpoint: endpoints.pet.findByStatus.replace('{status}', valid.status.sold),
		response: {
			status: 200,
			body: 'array'
		}
	},
	optionsInvalid: {
		method: httpMethods.GET,
		baseURL: URLs.baseUrl,
		endpoint: endpoints.pet.findByStatus.replace('{status}', 'invalidStatus'),
		response: {
			status: 400,
			body: 'array'
		}
	},
	optionsMethodNotFound: {
		method: httpMethods.POST,
		baseURL: URLs.baseUrl,
		endpoint: endpoints.pet.findByStatus.replace('{status}', valid.status.available),
		response: {
			status: 405,
			body: {
				code: 405,
				type: 'unknown',
			}
		}
	}
}

const findById = {
	optionsValid: {
		method: httpMethods.GET,
		baseURL: URLs.baseUrl,
		endpoint: endpoints.pet.findById.replace('{petId}', valid.petId.available),
		response: {
			status: 200,
			body: {
				id: 'number',
				category: 'object',
				photoUrls: 'array',
				tags: 'array',
				status: 'string',
				name: 'string',
			}
		}
	},
	optionsInvalid: {
		method: httpMethods.GET,
		baseURL: URLs.baseUrl,
		endpoint: endpoints.pet.findById.replace('{petId}', 'invalidId'),
		response: {
			status: 400,
			body: {
				code: 400,
				type: 'unknown',
				message: 'java.lang.NumberFormatException: For input string: \"invalidId\"'
			}
		}
	},
	optionsMethodNotFound: {
		method: httpMethods.PUT,
		baseURL: URLs.baseUrl,
		endpoint: endpoints.pet.findById.replace('{petId}', valid.petId.available),
		response: {
			status: 405,
			body: {
				code: 405,
				type: 'unknown',
			}
		}
	}
}

const UpdatePetWithForm = {
	optionsValid: {
		method: httpMethods.POST,
		baseURL: URLs.baseUrl,
		endpoint: endpoints.pet.updateWithForm,
		body: {
			formType: formType.formData,
			formData: {
				"name": faker.person.firstName(),
				"status": valid.status.pending
			}
		},
		response: {
			status: 200,
			body: {
				code: 200,
				type: 'unknown',
			}
		}
	},
	optionsInvalid: {
		method: httpMethods.POST,
		baseURL: URLs.baseUrl,
		endpoint: endpoints.pet.updateWithForm.replace('{petId}', 'invalidId'),
		body: {
			formType: formType.formData,
			formData: {
				"name": faker.person.firstName(),
				"status": valid.status.pending
			}
		},
		response: {
			status: 400,
			body: {
				code: 400,
				type: 'unknown',
				message: 'java.lang.NumberFormatException: For input string: \"invalidId\"'
			}
		}
	},
	optionsMethodNotFound: {
		method: httpMethods.PUT,
		baseURL: URLs.baseUrl,
		endpoint: endpoints.pet.updateWithForm.replace('{petId}', valid.petId.available),
		body: {
			formType: formType.formData,
			formData: {
				"name": faker.person.firstName(),
				"status": valid.status.pending
			}
		},
		response: {
			status: 405,
			body: {
				code: 405,
				type: 'unknown',
			}
		}
	}
}

const deletePet = {
	optionsValid: {
		method: httpMethods.DELETE,
		baseURL: URLs.baseUrl,
		endpoint: endpoints.pet.delete,
		headers: {
			api_key	: faker.internet.password(8)
		},
		response: {
			status: 200,
			body: {
				code: 200,
				type: 'unknown',
			}
		}
	},
	optionsInvalid: {
		method: httpMethods.DELETE,
		baseURL: URLs.baseUrl,
		endpoint: endpoints.pet.delete.replace('{petId}', 'invalidId'),
		headers: {
			api_key	: faker.internet.password(8)
		},
		response: {
			status: 400,
			body: {
				code: 400,
				type: 'unknown',
				message: 'java.lang.NumberFormatException: For input string: \"invalidId\"'
			}
		}
	},
	optionsMethodNotFound: {
		method: httpMethods.PUT,
		baseURL: URLs.baseUrl,
		endpoint: endpoints.pet.delete.replace('{petId}', valid.petId.pending),
		headers: {
			api_key	: faker.internet.password(8)
		},
		response: {
			status: 405,
			body: {
				code: 405,
				type: 'unknown',
			}
		}
	}
}
module.exports = { ADDPET: addPet, UPDATEPET: updatePet, UPLOADIMAGEPET: uploadImagePet, FINDBYSTATUS: findByStatus, FINDBYID: findById, UPDATEWITHFORM: UpdatePetWithForm, DELETEPET: deletePet };
