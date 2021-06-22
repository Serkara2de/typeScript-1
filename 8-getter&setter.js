//Getters & Setters
var Plant = /** @class */ (function () {
    function Plant() {
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "Default";
            }
        },
        enumerable: false,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
plant.species = "AB";
console.log(plant.species);
//Static Properties & Methods 
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcArea = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calcArea);
