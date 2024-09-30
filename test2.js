// test2.js
const { romanToInt } = require("./program2");
const assert = require("assert");

describe("test cases for romanToInt function", function () {
    it("should return the correct integer for valid Roman numerals", function () {
        assert.equal(romanToInt("III"), 3);
        assert.equal(romanToInt("LVIII"), 58);
        assert.equal(romanToInt("MCMXCIV"), 1994);
        assert.equal(romanToInt("IV"), 4);
        assert.equal(romanToInt("IX"), 9);
        assert.equal(romanToInt("MMMCMXCIX"), 3999);
    });

    it("should return 0 for an empty string", function () {
        assert.equal(romanToInt(""), 0);
    });
});
