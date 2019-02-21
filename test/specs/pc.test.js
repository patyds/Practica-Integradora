var assert = require('chai').assert;

describe("PC Original Visible", () => {
    before(()=>{
        console.log('PC Original Visible test...');
    });

    it('PC Original Visible Test',() => {
        browser.url('/');
        if(typeof (browser.config.capabilities['goog:chromeOptions']) === "undefined") {
            var verifyDiv = $('#verify-container');
            var verifyFrameDisplay = verifyDiv.getCSSProperty('display');
            console.log('Busco block'+verifyFrameDisplay.value);
            assert.equal(verifyFrameDisplay.value, 'block', "Es Visible");
        }else{
            console.log('No es el dispositivo');
            assert.equal(true, true, 'No es el dispositivo');
        }
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
        if(typeof (browser.config.capabilities['goog:chromeOptions']) === "undefined") {
            var placesDiv = $('#places-container');
            var placesFrameDisplay = placesDiv.getCSSProperty('display');
            console.log('Busco block'+placesFrameDisplay.value);
            assert.equal(placesFrameDisplay.value, 'block', 'Es visible');
        }else{
            console.log('No es el dispositivo');
            assert.equal(true, true, 'No es el dispositivo');
        }
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
        if(typeof (browser.config.capabilities['goog:chromeOptions']) === "undefined") {
            var commentsDiv = $('#comments-container');
            var commentsFrameDisplay = commentsDiv.getCSSProperty('display');
            console.log('Busco block'+commentsFrameDisplay.value);
            assert.equal(commentsFrameDisplay.value, 'block', 'Es visible');
        }else{
            console.log('No es el dispositivo');
            assert.equal(true, true, 'No es el dispositivo');
        }


    });

    after(()=>{
        console.log('PC Form Visible test finished...');
    });
});