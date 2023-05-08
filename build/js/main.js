"use strict";
// Literal Types
let myName;
let username;
username = 'jishu';
//Functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (msg) => {
    console.log(msg);
};
logMsg('hello world');
logMsg(add(2, 5));
let substract = function (c, d) {
    return c - d;
};
logMsg(substract(5, 2));
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 5));
// optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// default parameter value
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 5, 4));
logMsg(addAll(2, 5));
logMsg(sumAll(2, 5, 4));
logMsg(sumAll(2, 5));
// Rest Parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4, 5, 6, 7, 8, 9));
logMsg(total(10, 2, 3));
// never type
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i >= 10)
            break;
    }
};
// custom type guard
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
// use of never type
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('Invalid');
};
