var assert = require('chai').assert;

describe("Mobile Original Visible", () => {
    before(() => {
        console.log('Mobile Original isVisible starting...');
    });
    it('Display none',() =>{
        browser.url('/');
        if(typeof (browser.config.capabilities['goog:chromeOptions']) != "undefined" && (browser.config.capabilities['goog:chromeOptions']['mobileEmulation']['deviceName']) === 'iPhone 8 Plus') {
            var verifyDiv = $('#verify-container');
            var verifyFrameDisplay = verifyDiv.getCSSProperty('display');
            console.log('Busco none'+verifyFrameDisplay.value);
            assert.equal(verifyFrameDisplay.value, 'none', 'No es visible');
        }else{
            console.log('No es el dispositivo');
            assert.equal(true, true, 'No es el dispositivo');
        }
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
        browser.url('/');
        if(typeof (browser.config.capabilities['goog:chromeOptions']) != "undefined" && (browser.config.capabilities['goog:chromeOptions']['mobileEmulation']['deviceName']) === 'iPhone 8 Plus') {
            var placesDiv = $('#places-container');
            var placesFrameDisplay = placesDiv.getCSSProperty('display');
            console.log('Busco block'+placesFrameDisplay.value);
            assert.equal(placesFrameDisplay.value, 'block', 'Es visible');
        }else{
            console.log('No es el dispositivo');
            assert.equal(true, true, 'No es el dispositivo');
        }


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
        browser.url('/');
        if(typeof (browser.config.capabilities['goog:chromeOptions']) != "undefined" && (browser.config.capabilities['goog:chromeOptions']['mobileEmulation']['deviceName']) === 'iPhone 8 Plus') {
            var commentsDiv = $('#comments-container');
            var commentsFrameDisplay = commentsDiv.getCSSProperty('display');
            console.log('Busco none'+commentsFrameDisplay.value);
            assert.equal(commentsFrameDisplay.value, 'none', 'No es visible');
        }else{
            console.log('No es el dispositivo');
            assert.equal(true, true, 'No es el dispositivo');
        }
    });
    after(() => {
        console.log('Mobile Form Invisible ending...');
    });
});