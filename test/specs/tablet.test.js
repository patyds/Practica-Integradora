var assert = require('chai').expect;

describe("Tablet Original Visible", () => {
    before(()=>{
        console.log('Tablet Original test...');
    });

    it('Tablet Original Visible Test',() => {
        browser.options({
            browserName: 'chrome', // options: `firefox`, `chrome`, `opera`, `safari`
            browserVersion: '72.0', // browser version
            platformName: 'iPad' // OS platform
        });
        browser.url('/');
        var verifyDiv = $('#verify-container');
        var verifyFrameDisplay = verifyDiv.getCSSProperty('display');
        console.log(verifyFrameDisplay);
        assert(verifyFrameDisplay.value).to.equal('none');

    });

    after(()=>{
        console.log('Tablet Original Invisible test finished...');
    });
});

describe("Tablet Places Visible", () => {
    before(()=>{
        console.log('Tablet Places test...');
    });

    it('Tablet Places Visible Test',() => {
        browser.options({
            browserName: 'chrome', // options: `firefox`, `chrome`, `opera`, `safari`
            browserVersion: '72.0', // browser version
            platformName: 'iPad' // OS platform
        });
        browser.url('/');
        var placesDiv = $('#places-container');
        var placesFrameDisplay = placesDiv.getCSSProperty('display');
        console.log(placesFrameDisplay);
        assert(placesFrameDisplay.value).to.equal('none');
    });

    after(()=>{
        console.log('Tablet Places Invisible finished...');
    });
});

describe("Tablet Form Visible", () => {
    before(()=>{
        console.log('Tablet Form test...');
    });

    it('Tablet Form Visible Test',() => {
        browser.options({
            browserName: 'chrome', // options: `firefox`, `chrome`, `opera`, `safari`
            browserVersion: '72.0', // browser version
            platformName: 'iPad' // OS platform
        });
        browser.url('/');
        var commentsDiv = $('#comments-container');
        var commentsFrameDisplay = commentsDiv.getCSSProperty('display');
        console.log(commentsFrameDisplay);
        assert(commentsFrameDisplay.value).to.equal('block');
    });

    after(()=>{
        console.log('Tablet Form Visible test finished...');
    });
});