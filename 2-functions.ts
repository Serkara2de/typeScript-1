function returnMyname():string{
    return myName;

}
returnMyname();

function sayHello():void{
    console.log("hello");
}
sayHello();

function multiply(value1:number,value2:number):number{
    return value1*value2;
}
console.log(multiply(2,4));

//function type
let mymultiply:(a:number,b:number)=>number;

mymultiply=multiply;
console.log(mymultiply(50,2));
