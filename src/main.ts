// type Aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name?: string;
  active: boolean;
  albums: stringOrNumberArray;
};

type userId = stringOrNumber;

// Literal Types
let myName: 'jigyashu';

let username: 'jishu' | 'verma' | 'jigyashu';
username = 'jishu';

//Functions
const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (msg: any): void => {
  console.log(msg);
};

logMsg('hello world');
logMsg(add(2, 5));

let substract = function (c: number, d: number): number {
  return c - d;
};

logMsg(substract(5, 2));

// type mathFunction = (a: number, b: number) => number;
interface mathFunction {
  (a: number, b: number): number;
}

let multiply: mathFunction = function (c, d) {
  return c * d;
};

logMsg(multiply(2, 5));

// optional parameters
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== 'undefined') {
    return a + b + c;
  }
  return a + b;
};

// default parameter value
const sumAll = (a: number, b: number, c: number = 2): number => {
  return a + b + c;
};

logMsg(addAll(2, 5, 4));
logMsg(addAll(2, 5));
logMsg(sumAll(2, 5, 4));
logMsg(sumAll(2, 5));

// Rest Parameters
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};

logMsg(total(1, 2, 3, 4, 5, 6, 7, 8, 9));
logMsg(total(10, 2, 3));

// never type
const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i >= 10) break;
  }
};

// custom type guard
const isNumber = (value: any): boolean => {
  return typeof value === 'number' ? true : false;
};

// use of never type
const numberOrString = (value: number | string): string => {
  if (typeof value === 'string') return 'string';
  if (isNumber(value)) return 'number';
  return createError('Invalid');
};
