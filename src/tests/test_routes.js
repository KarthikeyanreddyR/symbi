const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();

/***   Mocha Test 1 : Get Single Object   ***/
describe("Test GET /api/users/:userId", function () {

    let _response;
    let _httpResponse;
    before(function (done) {
        chai.request('http://localhost:3000')
            .get('/api/users/5cd386aa1a05652e9c7eeaf3')
            .end(function (err, res) {
                expect(err).to.be.null;
                _httpResponse = res;
                _response = res.body;
                done();
            });
    });

    /***   Check for correct status code and json object   ***/
    it('status must be 200', function () {
        expect(_httpResponse).to.have.status(200);
        expect(_httpResponse).to.be.json;
    });

    /***   Check for required properties in the user json object   ***/
    it('validate email, password properties', function () {
        expect(_response).to.have.property('success');
        expect(_response).to.have.property('data');
        expect(_response.data).to.have.property('email').that.is.a('String');
        expect(_response.data).to.have.property('password').that.is.a('String');
    })
});

/***   Mocha Test 2 : Get List Objects   ***/
describe("Test GET /api/users", function () {

    let _response;
    before(function (done) {
        chai.request('http://localhost:3000')
            .get('/api/users')
            .end(function (err, res) {
                expect(err).to.be.null;
                _response = res;
                done();
            });
    });

    it('status must be 200', function () {
        expect(_response).to.have.status(200);
    });
});
