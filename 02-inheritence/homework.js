'use strict';

const DEFAULT_VIEW_INT = 0;

(function (message, startingViews) {

    'use strict';

    const Billboard = function (message) {

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

    class TargetAudience extends Audience {

        viewAd (ad) {
            // change function from that of parent // doing less than parent function
            return this.saturation;
        }
    }

    // const SingleMothers = new Audience();




    const Walmart = new AnimatedBillboard('Save money. Live better.');

    // Walmart.flashAd();
    // Walmart.makeImpression();

    exports.Billboard = Billboard;
    exports.AnimatedBillboard = AnimatedBillboard;
    exports.Audience = Audience;
    exports.TargetAudience = TargetAudience;


})(null, DEFAULT_VIEW_INT);



