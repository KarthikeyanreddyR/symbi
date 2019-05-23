const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();

/***   Mocha Test 1 : Get Single Object   ***/
describe("Test GET /api/users/:userId", function () {

    let _response;
    before(function (done) {
        chai.request('http://localhost:3000')
            .get('/api/users/_id')
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
