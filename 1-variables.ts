
//string
let myName="Mike";
let myName2:string="Mike";
 

//number
let myAge=27;
let myAge2:number=30;

//boolean
let hasHobbies=false;
let hasHobbies2:boolean=true;

//any
let variable:any="Mike";
variable=4;

//array
let myArray:any=[4,5,300];
myArray=[200,"apple"];

//tuples
let address:[string,number]=["Superstreet",90];

//enum
enum color {
    gray, //0
    green, //1
    blue //2
}

let myColor:color=color.gray;
console.log(myColor);

enum color2 {
    gray, //0
    green=100, //1
    blue //2
}

let myColor2:color2=color2.green;
console.log(myColor2);

let myColor3:color2=color2.blue;
console.log(myColor3);

//any
let car:any="honda";
car={model:"honda",year:2018};

//union type
let myRealAge:string|number|boolean;
myRealAge="30";
myRealAge=43;
myRealAge=true;


//how to check types
let finalValue:string="apple";
if(typeof finalValue=="string"){
    console.log("this is a string");
}








