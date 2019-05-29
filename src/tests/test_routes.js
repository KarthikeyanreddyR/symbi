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
    let _id = '5ce3581d5fba742e68b35971'
    before(function (done) {
        chai.request('http://localhost:3000')
            .get(`/api/users/${_id}`)
            .end(function (err, res) {
                expect(err).to.be.null;
                _httpResponse = res;
                _response = res.body;
                done();
            });
    });

    /***   Check for single object for required parameters   ***/
    it('status must be 200', function () {
        expect(_httpResponse).to.have.status(200);
    });

    it('response must have success property with value true', function () {
        expect(_response).to.have.property('success', true);
    });

    it('response should be a json', function () {
        expect(_httpResponse).to.be.json;
    });

    it('response must have data property of type object', function () {
        expect(_response).to.have.property('data').that.is.a('object');
    });

    it('should have an email attribute that is a string', function () {
        expect(_response.data).to.have.property('email').that.is.a('String');
    });

    it('password should be a string', function () {
        expect(_response.data).to.have.property('password').that.is.a('String');
    });

    it('the item must contain an ID', function () {
        expect(_response.data).to.have.property('_id', _id);
    });

    it('response must not have msg property', function() {
        expect(_response).to.not.have.property('msg');
    });
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


    /***   Check List Object for Required Parameters   ***/
    it('status must be 200', function () {
        expect(_httpResponse).to.have.status(200);
    });

    it('response must have success property with value true', function () {
        expect(_response).to.have.property('success', true);
    });

    it('response must not have msg property', function() {
        expect(_response).to.not.have.property('msg');
    });

    it('the response must be an array', function () {
        expect(_response.data).to.be.instanceOf.propertyIsEnumerable(0);
    });

    it('user list length is greater than 0', function () {
        expect(_response.data).to.have.length.greaterThan(0);
    });
    
    it('the list items must have an attribute named email', function () {
        expect(_response.data).to.contain.hasOwnProperty('email');
    });

    it('the user firstName must be of type string', function () {
        expect(_response.data[0].firstName).to.be.a('string');
    });

    it('each list item must have an ID', function () {
        expect(_response.data[0]).to.contain.hasOwnProperty('_id');
    });
});
