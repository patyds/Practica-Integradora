var assert = require('chai').assert;

describe("Tablet Original Visible", () => {
    before(()=>{
        console.log('Tablet Original test...');
    });

    it('Tablet Original Visible Test',() => {
        browser.url('/');
        if(typeof (browser.config.capabilities['goog:chromeOptions']) != "undefined" && (browser.config.capabilities['goog:chromeOptions']['mobileEmulation']['deviceName']) === 'iPad'){
            var verifyDiv = $('#verify-container');
            var verifyFrameDisplay = verifyDiv.getCSSProperty('display');
            console.log('Busco none'+verifyFrameDisplay.value);
            assert.equal(verifyFrameDisplay.value, 'none', 'No es visible');
        }else{
            console.log('No es el dispositivo');
            assert.equal(true, true, 'No es el dispositivo');
        }
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
        browser.url('/');
        if(typeof (browser.config.capabilities['goog:chromeOptions']) != "undefined" && (browser.config.capabilities['goog:chromeOptions']['mobileEmulation']['deviceName']) === 'iPad') {
            var placesDiv = $('#places-container');
            var placesFrameDisplay = placesDiv.getCSSProperty('display');
            console.log('Busco none'+placesFrameDisplay.value);
            assert.equal(placesFrameDisplay.value, 'none', 'No es visible');
        }else{
            console.log('No es el dispositivo');
            assert.equal(true, true, 'No es el dispositivo');
        }
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
        browser.url('/');
        if(typeof (browser.config.capabilities['goog:chromeOptions']) != "undefined" && (browser.config.capabilities['goog:chromeOptions']['mobileEmulation']['deviceName']) === 'iPad') {
            var commentsDiv = $('#comments-container');
            var commentsFrameDisplay = commentsDiv.getCSSProperty('display');
            console.log('Busco block'+commentsFrameDisplay.value);
            assert.equal(commentsFrameDisplay.value, 'block', 'Es Visible');
        }else{
            console.log('No es el dispositivo');
            assert.equal(true, true, 'No es el dispositivo');
        }
    });

    after(()=>{
        console.log('Tablet Form Visible test finished...');
    });
});