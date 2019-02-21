var assert = require('assert');

describe("Tablet Original Visible", function(done) {
    browser.url('/');
    var verifyDiv = $('#verify-container');
    var verifyFrameDisplay = verifyDiv.getCSSProperty('display');
    assert.equal(verifyFrameDisplay.value, 'none');
    browser.call(done);
});

describe("Tablet Places Visible", function(done) {
    browser.url('/');
    var placesDiv = $('#places-container');
    var placesFrameDisplay = placesDiv.getCSSProperty('display');
    assert.equal(placesFrameDisplay.value, 'none');
    browser.call(done);
});

describe("Tablet Form Visible", function(done) {
    browser.url('/');
    var commentsDiv = $('#comments-container');
    var commentsFrameDisplay = commentsDiv.getCSSProperty('display');
    assert.equal(commentsFrameDisplay.value, 'block');
    browser.call(done);
});