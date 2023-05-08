"use strict";
let stringArr = ['one', 'jishu', 'verma'];
let guitars = ['strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
stringArr[0] = 'John';
stringArr.push('hey');
guitars[0] = 1984;
guitars.unshift('jishu');
let test = [];
let bands = [];
bands.push('verma');
// Tuple - Defining the structure of the array
let myTuple = ['jishu', 25, true];
let mixed = ['verma', 20, false];
myTuple[0] = 'jigyashu';
// Objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exObj = {
    prop1: 'jishu',
    prop2: true,
};
exObj.prop1 = 'jigyashu';
let evh = {
    name: 'jigyashu',
    active: true,
    albums: [1997, 'hello world'],
};
let love = {
    name: 'jishu',
    active: false,
    albums: [1997, 'hello world'],
};
console.log(evh);
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    return 'Hello!';
};
console.log(greetGuitarist(evh));
//Enums
// Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to language and runtime.
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 4] = "U";
    Grade[Grade["D"] = 5] = "D";
    Grade[Grade["C"] = 6] = "C";
    Grade[Grade["B"] = 7] = "B";
    Grade[Grade["A"] = 8] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
