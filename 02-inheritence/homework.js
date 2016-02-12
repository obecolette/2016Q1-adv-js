'use strict';

const DEFAULT_VIEW_INT = 0;

(function (message, startingViews) {

    'use strict';

    // we use Capital letters to denote (ES5) 'Classes' by convention
    const Billboard = function (message) {

        // the lines below define instance properties;
        // these will be set when a new Animal is created

        this.message = message ? message : 'insert message here';  // name is reserved for functions, which `this` is pointing to one such
        this.views = startingViews;

        this.makeImpression = function () {

            this.views ++;
        };
    };

    const AnimatedBillboard = function (message) {

        Billboard.call(this, message);

        this.flashAd = function () {

            this.views += 5; // because its a flashier billboard ad
        };
    };

    AnimatedBillboard.prototype = Billboard;

    // is Jupe Chris's dog???


    class Audience {

        constructor (name, saturation) {
            this.name = name;
            this.saturation = saturation ? saturation : 0;
        }

        viewAd (ad) {

            this.saturation = this.saturation + ad.saturation;
            return this.saturation;
        }
    }

    // Define a Dog that can bark, and has the same methods and properties of Animal

    class TargetAudience extends Audience {

        viewAd (ad) {
            // change function from that of parent // doing less than parent function
            return this.saturation;
        }
    }

    // const SingleMothers = new Audience();




    const Walmart = new AnimatedBillboard('Save money. Live better.');

    Walmart.flashAd();
    Walmart.makeImpression();

    // define / declare exports (for testing etc)

    exports.Billboard = Billboard;
    exports.AnimatedBillboard = AnimatedBillboard;
    exports.Audience = Audience;
    exports.TargetAudience = TargetAudience;


})(null, DEFAULT_VIEW_INT);



