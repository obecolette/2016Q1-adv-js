describe('Jasmine', function() {

    it('can compare truthy values', function() {

        expect(2).toEqual(2);
        expect(1+1).toEqual(2);
    });

    it('can negate a test', function () {

        // note that toBe properly compares with ===.  Why? because == is an expensive conversion
        expect(false).not.toBe(true);
    });

});
