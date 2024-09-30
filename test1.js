// test1.js
const { isValid } = require("./program1");
const assert = require("assert");

describe("test cases for isValid function", function () {
    it("should return true for valid parentheses", function () {
        assert.equal(isValid("()"), true);
        assert.equal(isValid("()[]{}"), true);
        assert.equal(isValid("{[()]}"), true);
    });

    it("should return false for invalid parentheses", function () {
        assert.equal(isValid("(]"), false);
        assert.equal(isValid("([)]"), false);
    });

    it("should return true for an empty string", function () {
        assert.equal(isValid(""), true);
    });

    it("should return false for unmatched parentheses", function () {
        assert.equal(isValid("(){"), false);
    });
});
