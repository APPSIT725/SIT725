const expect = require("chai").expect;
const request = require("request");

const baseUrl = "http://localhost:3000";

describe("Even/Odd Checker API", function () {

  it("should identify an even number", function (done) {
    request.get(`${baseUrl}/evenodd?x=2`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      const data = JSON.parse(body);
      expect(data).to.deep.equal({ number: 2, type: "even" });
      done();
    });
  });

  it("should identify an odd number", function (done) {
    request.get(`${baseUrl}/evenodd?x=7`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      const data = JSON.parse(body);
      expect(data).to.deep.equal({ number: 7, type: "odd" });
      done();
    });
  });

  it("should handle zero as even", function (done) {
    request.get(`${baseUrl}/evenodd?x=0`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      const data = JSON.parse(body);
      expect(data).to.deep.equal({ number: 0, type: "even" });
      done();
    });
  });

  it("should return error for non-numeric input", function (done) {
    request.get(`${baseUrl}/evenodd?x=hello`, (err, res, body) => {
      expect(res.statusCode).to.equal(400);
      const data = JSON.parse(body);
      expect(data.error).to.match(/Invalid number/);
      done();
    });
  });

});
