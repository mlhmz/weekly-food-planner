const assert = require('assert');
const methods = require("../src/methods.js");


describe('Array', function() {
    describe('arrayToString()', function() {
        it ('Should return a String List seperated by commas e.g a,b,c', function() {
            assert.equal(methods.arrayToString(['a','b','c','d','e']), "a,b,c,d,e");
        })
    }) 
})