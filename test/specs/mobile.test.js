var assert = require('chai').assert;

describe("Mobile Original Visible", () => {
    before(() => {
        console.log('Mobile Original isVisible starting...');
    });
    it('Display none',() =>{
        browser.options({
            browserName: 'chrome', // options: `firefox`, `chrome`, `opera`, `safari`
            browserVersion: '72.0', // browser version
            platformName: 'iPhone 8 Plus' // OS platform
        });
        browser.url('/');
        var verifyDiv = $('#verify-container');
        var verifyFrameDisplay = verifyDiv.getCSSProperty('display');
        console.log(verifyFrameDisplay);
        assert.equal(verifyFrameDisplay.value, 'none');

    });
    after(() => {
        console.log('Mobile Original Invisible ending...');
    });
});

describe("Mobile Places Visible", () => {
    before(() => {
        console.log('Mobile Places isVisible starting...');
    });
    it('Display block',() =>{
        browser.options({
            browserName: 'chrome', // options: `firefox`, `chrome`, `opera`, `safari`
            browserVersion: '72.0', // browser version
            platformName: 'iPhone 8 Plus' // OS platform
        });
        browser.url('/');
        var placesDiv = $('#places-container');
        var placesFrameDisplay = placesDiv.getCSSProperty('display');
        console.log(placesFrameDisplay);
        assert.equal(placesFrameDisplay.value, 'block');

    });
    after(() => {
        console.log('Mobile Places isVisible ending...');
    });
});

describe("Mobile Form Visible", () => {
    before(() => {
        console.log('Mobile Form isVisible starting...');
    });
    it('Display none',() =>{
        browser.options({
            browserName: 'chrome', // options: `firefox`, `chrome`, `opera`, `safari`
            browserVersion: '72.0', // browser version
            platformName: 'iPhone 8 Plus' // OS platform
        });
        browser.url('/');
        var commentsDiv = $('#comments-container');
        var commentsFrameDisplay = commentsDiv.getCSSProperty('display');
        console.log(commentsFrameDisplay);
        assert.equal(commentsFrameDisplay.value, 'none');

    });
    after(() => {
        console.log('Mobile Form Invisible ending...');
    });
});