const addContext = require('mochawesome/addContext');
const expect = require('expect');
const toMatchSnapshot = require('expect-mocha-snapshot');
const httpStatus = require('http-status');
const urlJoin = require('url-join');
const axios = require('axios');

function report(test, heading, body) {
  addContext(test, {
    title: heading,
    value: body
  });
}

expect.extend({
  toMatchSnapshot
});

module.exports = {
	axios,
    expectSnapshot: expect,
    httpStatus,
    urlJoin,
    report,
};
