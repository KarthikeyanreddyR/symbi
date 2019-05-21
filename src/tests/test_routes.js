const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();

describe("Test GET /api/users", () => {

    let _response;
    before(done => {
        chai.request('http://localhost:3000')
        .get('/api/users')
        .end((err, res) => {
            expect(err).to.be.null;
            _response = res;
            done();
        });
    });

    it('status must be 200', () => {
        expect(_response).to.have.status(200);
    });
});