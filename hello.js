var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Travis!\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');

const supertest = require("supertest");

var server = supertest.agent("http://localhost:5000");

describe("Sample unit test", ()=> {
    it("should return home page", (done) => {
        server
        .get ("/")
        .expect("Content-type", /text/)
        .expect(200)
        .end(function (err, res) {
            done();
        });
    });
});