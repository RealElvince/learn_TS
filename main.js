function log(message) {
    console.log(message);
}
var message = "Hello World,I am learning TS";
log(message);
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally', +i);
}
doSomething();
// type anotation
var a;
var b;
var c;
var d;
var e;
// type enum
var ColorRed = 0;
var ColorBlue = 1;
var ColorGreen = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
var backgroundColor = Color.Blue;
// type assertion
var message1;
message1 = "abc";
var endWithC = message1.endsWith('c');
var alternativeWay = message1.endsWith('c');
console.log(endWithC);
// arrow function
var helloWorld = function (message2) {
    console.log(message2);
};
var message2 = "Hello,I am an arrow function";
helloWorld(message2);
var drawPoint = function (point) {
};
drawPoint({
    x: 1,
    y: 2
});
// Class groups variables(properties) and functions (methods) in one unit
var MyPoint = /** @class */ (function () {
    function MyPoint() {
    }
    MyPoint.prototype.draw = function () {
        console.log("X:" + this.num1, "Y:" + this.num2);
    };
    return MyPoint;
}());
// object and instance of a class
var mypoint = new MyPoint();
mypoint.num1 = 10;
mypoint.num2 = 98;
mypoint.draw();
// constructor
// A method that is called when an instance of a class is created.
var MyClass = /** @class */ (function () {
    function MyClass(num3, num4) {
        this.num3 = num3;
        this.num4 = num4;
    }
    MyClass.prototype.myDrawFunc = function () {
        console.log("Num3:" + this.num3, "Num4:" + this.num4);
    };
    return MyClass;
}());
var mypoint2 = new MyClass(34, 78);
mypoint2.myDrawFunc();
