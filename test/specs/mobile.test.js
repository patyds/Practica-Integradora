var assert = require('assert');

describe("Mobile Original Visible", () => {
    before(() => {
        console.log('Mobile Original isVisible starting...');
    });
    it('Display none',function(done){
        browser.options({
            browserName: 'chrome', // options: `firefox`, `chrome`, `opera`, `safari`
            browserVersion: '27.0', // browser version
            platformName: 'Windows 10' // OS platform
        });
        browser.url('/');
        var containerV= $('#verify-container');
        var displayP = containerV.getCSSProperty('display');
        assert.equal(displayP.value, 'none');
        browser.call(done);
    });
    after(() => {
        console.log('Mobile Original isVisible ending...');
    });
});

describe("Mobile Places Visible", () => {
    before(() => {
        console.log('Mobile Places isVisible starting...');
    });
    it('Display block',function(done){
        browser.options({
            browserName: 'chrome', // options: `firefox`, `chrome`, `opera`, `safari`
            browserVersion: '27.0', // browser version
            platformName: 'iPhone 8' // OS platform
        });
        browser.url('/');
        var containerV= $('#verify-container');
        var displayP = containerV.getCSSProperty('display');
        assert.equal(displayP.value, 'block');
        browser.call(done);
    });
    after(() => {
        console.log('Mobile Places isVisible ending...');
    });
});

describe("Mobile Form Visible", () => {
    before(() => {
        console.log('Mobile Form isVisible starting...');
    });
    it('Display none',function(done){
        browser.options({
            browserName: 'chrome', // options: `firefox`, `chrome`, `opera`, `safari`
            browserVersion: '27.0', // browser version
            platformName: 'iPad' // OS platform
        });
        browser.url('/');
        var containerV= $('#verify-container');
        var displayP = containerV.getCSSProperty('display');
        assert.equal(displayP.value, 'none');
        browser.call(done);
    });
    after(() => {
        console.log('Mobile Form isVisible ending...');
    });
});