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
            .get('/api/users/5ce3581d5fba742e68b35971')
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
    let _httpResponse;

    before(function (done) {
        chai.request('http://localhost:3000')
            .get('/api/users')
            .end(function (err, res) {
                expect(err).to.be.null;
                _httpResponse = res;
                _response = res.body;
                done();
            });
    });

    it('status must be 200', function () {
        expect(_httpResponse).to.have.status(200);
    });

    it('user list length is greater than 0', function () {
        expect(_response.data).to.have.length > 0;
    });
});
