//private constructor&singleton
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne("The Only One");
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
//let wrong=new OnlyOne("The Only One");
var right = OnlyOne.getInstance();
////Example
var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Singleton.getInstance = function () {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
            Singleton.instance._temperature = 0;
        }
        return Singleton.instance;
    };
    Object.defineProperty(Singleton.prototype, "temperature", {
        get: function () {
            return this._temperature;
        },
        set: function (score) {
            this._temperature = score;
        },
        enumerable: false,
        configurable: true
    });
    Singleton.prototype.increaseTemperature = function () {
        return this._temperature += 1;
    };
    Singleton.prototype.decreaseTemperature = function () {
        return this._temperature -= 1;
    };
    return Singleton;
}());
var myInstance = Singleton.getInstance();
console.log(myInstance.temperature); // 0
console.log(myInstance.temperature = 25); // 25
console.log(myInstance.increaseTemperature()); // 26
console.log(myInstance.increaseTemperature()); // 27
console.log(myInstance.decreaseTemperature()); // 26
/*
Think about this for a moment. If at this point we'd be able to create a new instance of our class,
we would be able to overwrite the temperature readings.
*/
var myInstance2 = Singleton.getInstance();
console.log(myInstance2.temperature); // 26
