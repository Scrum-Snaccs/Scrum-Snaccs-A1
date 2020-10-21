var assert = require('chai').assert;
var first = require('./first');

describe('First', function () {
    it('first should return Hello Scrum Snaccs', function (){
        assert.equal(first(), 'Hello Scrum Snaccs');
    });
});