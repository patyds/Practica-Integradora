var assert = require('assert');

describe("PC Original Visible", function(done) {
    browser.url('/');
    var verifyDiv = $('#verify-container');
    var verifyFrameDisplay = verifyDiv.getCSSProperty('display');
    assert.equal(verifyFrameDisplay.value, 'block');
    browser.call(done);
});

describe("PC Places Visible", function(done) {
    browser.url('/');
    var verifyDiv = $('#verify-container');
    var verifyFrameDisplay = verifyDiv.getCSSProperty('display');
    assert.equal(verifyFrameDisplay.value, 'block');
    browser.call(done);
});

describe("PC Form Visible", function(done) {
    browser.url('/');
    var verifyDiv = $('#verify-container');
    var verifyFrameDisplay = verifyDiv.getCSSProperty('display');
    assert.equal(verifyFrameDisplay.value, 'block');
    browser.call(done);
});