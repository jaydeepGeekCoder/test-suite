var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should()
var foo = 'bar',
    beverages = { tea: ['chai', 'macha', 'oolong'] };

describe('foo', function() {
    it('`foo` should be string', function() {
        assert.typeOf(foo, 'string');
        expect(foo).to.be.a('string');
        foo.should.be.a('string');
    });
    it('foo should be equal to bar', function() {
        assert.equal(foo, 'bar', 'foo equal `bar`');
        expect(foo).to.equal('bar');
        foo.should.equal('bar');
    });
    it('length of `foo` should be 3', function() {
        assert.lengthOf(foo, 3, 'foo`s value has a length of 3');
        expect(foo).to.have.lengthOf(3);
        foo.should.have.lengthOf(3);
    });
});

describe('foo', function() {
    it('beverages should have 3 types of tea', function() {
        assert.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea');
        expect(beverages).to.have.property('tea').with.lengthOf(3);
        beverages.should.have.property('tea').with.lengthOf(3);
    });
});

