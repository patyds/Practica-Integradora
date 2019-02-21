var assert = require('assert');

describe("PC Original Visible", () => {
    before(()=>{
        console.log('PC Original Visible test...');
    });

    it('PC Original Visible Test',function(done) {
        browser.url('/');
        var verifyDiv = $('#verify-container');
        var verifyFrameDisplay = verifyDiv.getCSSProperty('display');
        assert.equal(verifyFrameDisplay.value, 'block');
        browser.call(done);
    });

    after(()=>{
        console.log('PC Original Visible test finished...');
    });
});

describe("PC Places Visible", () => {
    before(()=>{
        console.log('PC Places test...');
    });

    it('PC Places Visible Test',function(done) {
        browser.url('/');
        var verifyDiv = $('#verify-container');
        var verifyFrameDisplay = verifyDiv.getCSSProperty('display');
        assert.equal(verifyFrameDisplay.value, 'block');
        browser.call(done);
    });

    after(()=>{
        console.log('PC Places Visible test finished...');
    });
});

describe("PC Form Visible", () => {
    before(()=>{
        console.log('PC Form test...');
    });

    it('PC Form Visible Test',function(done) {
        browser.url('/');
        var verifyDiv = $('#verify-container');
        var verifyFrameDisplay = verifyDiv.getCSSProperty('display');
        assert.equal(verifyFrameDisplay.value, 'block');
        browser.call(done);
    });

    after(()=>{
        console.log('PC Form Visible test finished...');
    });
});