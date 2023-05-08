let stringArr = ['one', 'jishu', 'verma'];
let guitars = ['strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];

stringArr[0] = 'John';
stringArr.push('hey');

guitars[0] = 1984;
guitars.unshift('jishu');

let test = [];
let bands: string[] = [];
bands.push('verma');

// Tuple - Defining the structure of the array
let myTuple: [string, number, boolean] = ['jishu', 25, true];

let mixed = ['verma', 20, false];

myTuple[0] = 'jigyashu';

// Objects

let myObj: object;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};

const exObj = {
  prop1: 'jishu',
  prop2: true,
};

exObj.prop1 = 'jigyashu';

// here you can use "interface" in place of "type"
type Guitarist = {
  name?: string;
  active: boolean;
  albums: (string | number)[];
};

let evh: Guitarist = {
  name: 'jigyashu',
  active: true,
  albums: [1997, 'hello world'],
};

let love: Guitarist = {
  name: 'jishu',
  active: false,
  albums: [1997, 'hello world'],
};

console.log(evh);

const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
    return `Hello ${guitarist.name.toUpperCase()}!`;
  }
  return 'Hello!';
};

console.log(greetGuitarist(evh));

//Enums
// Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to language and runtime.

enum Grade {
  U = 4,
  D,
  C,
  B,
  A,
}

console.log(Grade.U);
