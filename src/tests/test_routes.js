const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const expect = chai.expect;

/***   Mocha Test 1 : Get List Objects   ***/
describe("Test GET /api/test/users", function () {
    this.timeout(0);
    let _response;
    let _httpResponse;

    before(function (done) {
        chai.request('https://symbii-dev.azurewebsites.net')
            .get('/api/test/users')
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

    it('response must not have msg property', function () {
        expect(_response).to.not.have.property('msg');
    });

    it('return value is an array list', function () {
        expect(_response.data).to.be.instanceOf.propertyIsEnumerable(0);
    });

    it('user list length must be greater than 0', function () {
        expect(_response.data).to.have.length.greaterThan(0);
    });

    it('the list must have an attribute named email', function () {
        expect(_response.data).to.contain.hasOwnProperty('email');
    });

    it('the user firstName must be a string', function () {
        expect(_response.data[0].firstName).to.be.a('string');
    });

    it('each list item must have an ID', function () {
        expect(_response.data[0]).to.contain.hasOwnProperty('_id');
    });
});

/***   Mocha Test 2 : Register new user   ***/
describe("Test POST /api/register - Register new user", function () {
    this.timeout(0);
    let _response;
    let _httpResponse;
    let _user = {
        name: 'Mocha Testing',
        email: 'mochatesting@random.com',
        password: 'mochatesting'
    }

    before(function (done) {
        chai.request('https://symbii-dev.azurewebsites.net')
            .post('/api/register')
            .send(_user)
            .end(function (err, res) {
                expect(err).to.be.null;
                _httpResponse = res;
                _response = res.body;
                done();
            });
    });

    it('Response status must be 200', function () {
        expect(_httpResponse).to.have.status(200);
    });
    it('Response must have success and data properties', function () {
        expect(_response).to.have.property('success', true);
        expect(_response).to.have.property('data');
    });
    it('Response must have data property with new user data', function () {
        expect(_response.data).to.have.property('_id');
        expect(_response.data).to.have.property('email', _user.email);
        expect(_response.data).to.have.property('password');
        expect(_response.data).to.have.property('firstName', _user.name);
        expect(_response.data).to.have.property('address');
        expect(_response.data).to.have.property('profiles');
    });

    after(function (done) {
        chai.request('https://symbii-dev.azurewebsites.net')
            .delete(`/api/users/${_user.email}`)
            .end(function (err, res) {
                done();
            });
    });
});
