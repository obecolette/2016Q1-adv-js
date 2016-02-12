'use strict';

const Main = require('../homework.js');
const Billboard = Main.Billboard;
const AnimatedBillboard = Main.AnimatedBillboard;
const Audience = Main.Audience;
const TargetAudience = Main.TargetAudience;

describe('Billboard', function () {

    beforeEach(function () {
        this.cokeBillboard = new Billboard('Drink Coke');
    });

    it ('has a message; a billboardMessage property', function () {

        expect(this.cokeBillboard.message).toContain('Coke');
    });

    it ('should have views', function () {

        expect(this.cokeBillboard.views).toBe(0);
    });

    it('can make an impression and gain a view', function () {

        this.cokeBillboard.makeImpression();
        expect(this.cokeBillboard.views).toBeGreaterThan(0);
    });

});


describe('AnimatedBillboard', function () {

    beforeEach(function () {
        this.walmartBillboard = new AnimatedBillboard('Save money. Live better.');
    });

    it ('has a flashing message; gaining 5 views', function () {

        this.walmartBillboard.flashAd();
        expect(this.walmartBillboard.views).toBe(5);
    });

});

describe('Audience', function () {

    beforeEach(function () {
        this.Audience = new Audience('SingleMothers');
    });

    it ('audinece has a name', function () {

        expect(this.Audience.name).toContain('Single');
    });

    it ('audience has saturation level', function () {

        expect(this.Audience.saturation).toBe(0);
    });

    it ('audience gains saturation from ads', function () {

        this.Audience.viewAd({ saturation: 7});
        expect(this.Audience.saturation).toBe(7);
    });

});

describe('TargetAudience', function () {

    beforeEach(function () {
        this.TargetAudience = new TargetAudience('SingleMen');
    });

    it ('does not gain saturation from viewing ads', function () {

        this.TargetAudience.viewAd();
        expect(this.TargetAudience.saturation).toBe(0);
    });

});

