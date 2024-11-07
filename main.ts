function log(message){
    console.log(message);
}


var message = "Hello World,I am learning TS";

log(message);



function doSomething(){
    for( var i=0; i<5 ;i++){
        console.log(i);
    }
    console.log('Finally',+i);
}

doSomething();



// type anotation
let a:number;
let b:boolean;
let c:string;
let d:any;
let e:number[];

// type enum

const ColorRed = 0;
const ColorBlue = 1;
const ColorGreen =2;

enum Color{
    Red=0,
    Blue=1,
    Green=2
}

let backgroundColor =Color.Blue;


// type assertion

let message1;
message1 = "abc";

let endWithC = (<string>message1).endsWith('c');
let alternativeWay = (message1 as string).endsWith('c')
console.log(endWithC);

// arrow function
let helloWorld = (message2) =>{
    console.log(message2);
}

let message2 = "Hello,I am an arrow function"

helloWorld(message2);


// interface in TS
interface Point{
    x:number,
    y:number
}

let drawPoint = (point:Point) => {

}

drawPoint({
    x:1,
    y:2
});


// Class groups variables(properties) and functions (methods) in one unit

class MyPoint{
    num1:number;
    num2:number;
    

    draw(){
        console.log("X:" +this.num1,"Y:" +this.num2);
    }
}


// object and instance of a class

let mypoint = new MyPoint();
mypoint.num1 = 10;
mypoint.num2 = 98;
mypoint.draw()


// constructor
// A method that is called when an instance of a class is created.

class MyClass{
    num3:number;
    num4:number;

    myDrawFunc(){
        console.log("Num3:"+this.num3,"Num4:"+this.num4);
    }

    constructor(num3:number,num4:number){
        this.num3 = num3;
        this.num4 = num4;
    }
}

let mypoint2 = new MyClass(34,78);
mypoint2.myDrawFunc();