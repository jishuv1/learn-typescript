"use strict";
// Index Signatures
const todaysTransactions = {
    pizza: -10,
    book: -5,
    job: 50,
};
console.log(todaysTransactions.pizza);
console.log(todaysTransactions['pizza']);
let prop = 'pizza';
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
// todaysTransactions.pizza = 40;
console.log(todaysNet(todaysTransactions));
const student = {
    name: 'Doug',
    GPA: 3.5,
    classes: [100, 200],
};
// console.log(student.test);
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map((key) => {
    console.log(`${key}: ${student[key]}`);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'name');
const monthlyIncomes = {
    salary: 500,
    bonuses: 100,
    sidehustle: 250,
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
