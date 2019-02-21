var assert = require('chai').assert;

describe("PC Original Visible", () => {
    before(()=>{
        console.log('PC Original Visible test...');
    });

    it('PC Original Visible Test',() => {
        browser.url('/');
        var verifyDiv = $('#verify-container');
        var verifyFrameDisplay = verifyDiv.getCSSProperty('display');
        console.log(verifyFrameDisplay);
        assert.equal(verifyFrameDisplay.value, 'block');

    });

    after(()=>{
        console.log('PC Original Visible test finished...');
    });
});

describe("PC Places Visible", () => {
    before(()=>{
        console.log('PC Places test...');
    });

    it('PC Places Visible Test',() => {
        browser.url('/');
        var placesDiv = $('#places-container');
        var placesFrameDisplay = placesDiv.getCSSProperty('display');
        console.log(placesFrameDisplay);
        assert.equal(placesFrameDisplay.value, 'block');

    });

    after(()=>{
        console.log('PC Places Visible test finished...');
    });
});

describe("PC Form Visible", () => {
    before(()=>{
        console.log('PC Form test...');
    });

    it('PC Form Visible Test',() => {
        browser.url('/');
        var commentsDiv = $('#comments-container');
        var commentsFrameDisplay = commentsDiv.getCSSProperty('display');
        console.log(commentsFrameDisplay);
        assert.equal(commentsFrameDisplay.value, 'block');

    });

    after(()=>{
        console.log('PC Form Visible test finished...');
    });
});