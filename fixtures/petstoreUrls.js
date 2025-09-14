const URLs = {
  baseUrl: 'https://petstore.swagger.io/v2'
}

const endpoints = {
	pet: {
        uploadImage: '/pet/{petId}/uploadImage',
        add: '/pet',
        update: '/pet',
        findById: '/pet/{petId}',
        findByStatus: '/pet/findByStatus?status={status}',
        updateWithForm: '/pet/{petId}',
        delete: '/pet/{petId}',        
    },
    user: {
        create: '/user',
        createWithArray: '/user/createWithArray',
        createWithList: '/user/createWithList',
        login: '/user/login',
        logout: '/user/logout',
        findById: '/user/{userName}',
        update: '/user/{userName}',
        delete: '/user/{userName}',
    },
    store: {
        placeOrder: '/store/order',
        getInventory: '/store/inventory',
        findById: '/store/order/{orderId}',
        delete: '/store/order/{orderId}',
    }
}

module.exports = {
	URLs, endpoints
}