const util = require('./util');
const assert = require('assert');

assert.strictEqual(util.convertNum("124"), "OneTwoFour");
assert.strictEqual(util.convertNum("925"), "NineTwoFive");
assert.strictEqual(util.convertNum("515908"), "FiveOneFiveNineZeroEight");

assert.strictEqual(util.convertNums(["123"]), "OneTwoThree");
assert.strictEqual(util.convertNums(["2", "34"]), "Two,ThreeFour");
assert.strictEqual(util.convertNums(["515ab#9008"]), "FiveOneFiveNineZeroZeroEight");