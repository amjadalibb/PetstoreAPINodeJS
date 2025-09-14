const { axios, urlJoin} = require('../support');
const fs = require('fs');

const requestAPIWithFormData = (options) =>
  new Promise(async resolve => {
    let headers = {"accept": "application/json"};
    let data = null;
    if(options.body.formType === 'file') {
    // TO INVESTIGATE IF FILE UPLOADS SUCCESSFULLY
        let formData = new FormData();
        formData.append('file', fs.createReadStream(options.body.formData.filePath));
        formData.append('description', 'This is a test file upload.');
        headers["Content-Type"] = 'multipart/form-data; boundary=' + formData._boundary;
        data = formData;
    } else if (options.body.formType === 'form-data') {
        Object.keys(options.body.formData).forEach(key => {
            if(data === null) data = '';
            else data += '&';
            data += key + '=' + encodeURIComponent(options.body.formData[key]);
        });
        headers['Content-Type'] = 'application/x-www-form-urlencoded';
    } else {
        return resolve({ 
            status: 500,
            message: 'Invalid form type'
        });
    }
    axios({
      method: options.method,
      url: urlJoin(options.baseURL, options.endpoint),
      auth: options.auth,
      data: data,
      headers: headers,
      timeout: 120000,
    }).then(
      async function(response) {
        return resolve(response);
      },
      err => resolve(err.response)
    );
  });

const requestAPI = (options) =>
  new Promise(async resolve => {
    axios({
      method: options.method,
      url: urlJoin(options.baseURL, options.endpoint),
      auth: options.auth,
      data: options.body,
      headers: options.headers,
      params: options.params
    }).then(
      async function(response) {
        return resolve(response);
      },
      err => resolve(err.response)
    );
  });

module.exports = {
  requestAPI,
  requestAPIWithFormData,
};
