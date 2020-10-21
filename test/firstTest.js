const expect = require('chai').expect;
const nock = require('nock');
const BlogPost = require('../models/blogPost');
const request = require("request");
// import * as app from "./app"
const axios = require('axios');
// const {getBlogPost} = require('../client/src/Submitter')
const chai = require('chai')
  , chaiHttp = require('chai-http');
 
chai.use(chaiHttp);
chai.should();
const response = require('./response');
//const app = require("../server").app;
// const getUser = require('./index').getUser;

let app;
let mongoose;
let blog = axios.get('getBlogPost');
// Set up a json object properly based on what you are expecting.


before(() => {
    app = require("../server").app;
    mongoose = require("../server").mongoose;
    // blog = require("../client/src/Submitter").getBlogPost();
  });

  describe('Status and content', function() {
    describe ('Main page', function() {

  it('Main page content', function() {
    axios.get('http://localhost:8080' , function(error, response, body) {
        expect(body).to.equal('Title');
        
    });
});
    }) })

// it('Main page status', function(done) {
//     request('http://localhost:8080' , function(error, response, body) {
//         expect(response.statusCode).to.equal(200);
//         done();
//     });
// });

// it('About page content', function(done) {
//     request('http://localhost:8080/about' , function(error, response, body) {
//         expect(response.statusCode).to.equal(404);
//         done();
//     });
// });


// before(() => {
//     app = require("../server").app;
//     mongoose = require("../server").mongoose;

//   });


//   it('Main page content', function(done) {
//     request('http://localhost:8080' , function(error, response, body) {
//         expect(body).to.equal('Hello World');
//         done();
//     });
// });

// it('Main page status', function(done) {
//     request('http://localhost:8080' , function(error, response, body) {
//         expect(response.statusCode).to.equal(200);
//         done();
//     });
// });

// it('About page content', function(done) {
//     request('http://localhost:8080/about' , function(error, response, body) {
//         expect(response.statusCode).to.equal(404);
//         done();
//     });
// });


const mockBlogpost = {
    blogId: 1,
    title: 'Software Engineering',
    author: 'South',
    type: 'Book',
    pages: '10',
    volume: '67',
    method: 'Yellow',
    participants: 'hdha',
    year: '2020',
    
};


describe('Get Blogspot tests', () => {
    it("Should add a new article called test Article", (done) => {

        




        chai
        .request('http://localhost:8080')
        //.request(mongoose)
        .post("/BlogPost")
        .send(mockBlogpost)
        .end((err, response) => {
          response.should.have.status(200);
          assert.equal(response.body, "Entry added!");
          done();
        });
    }).timeout(5000);

    it("Should return a article called test article", (done) => {
        chai
          .request('http://localhost:8080')
          //.request(mongoose)
          .get('/router/api')
          .end((err, response) => {
            response.should.have.status(200);
            response.body.should.be.a.property("id");
            response.body.should.be.a.property("title");
            response.body.id.should.equal(blogId);
            done();
          });
      }).timeout(5000);

    })
