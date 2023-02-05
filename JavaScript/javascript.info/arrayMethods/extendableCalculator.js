// Description

// Create an extendable calculator

// Create a constructor function Calculator that creates “extendable” calculator objects.

// The task consists of two parts.

// No parentheses or complex expressions in this task.
// The numbers and the operator are delimited with exactly one space.
// There may be error handling if you’d like to add it.


// Part I

// First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.

// Usage example:

// let calc = new Calculator;
// alert( calc.calculate("3 + 7") ); // 10


// Solution part 1 - first attempt

// function Calculator() {
//     this.calculate = function(str) {
//         let array = str.split(' ');
//         let num1 = Number(array[0]);
//         let operator = array[1];
//         let num2 = Number(array[2]);
//         if (operator === '+') {
//             return num1 + num2;
//         } else if (operator === '-') {
//             return num1 - num2
//         }
//     }
// }

// let calc = new Calculator;

// alert( calc.calculate("3 + 7") ); // 10


// Solution part 1 - refactored

// function Calculator() {
//     this.methods = {
//         '+': (a, b) => a + b,
//         '-': (a, b) => a - b,
//     }

//     this.calculate = (str) => {
//         let split = str.split(' ');
//         let num1 = Number(split[0]);
//         let op = split[1];
//         let num2 = Number(split[2]);

//         if ( !this.methods[op] || isNaN(num1) || isNaN(num2) ) {
//             return 'Invalid input!';
//         } else {
//             return this.methods[op](num1, num2);
//         }
//     }
// }

// let calc = new Calculator;

// alert( calc.calculate("3 + 7") ); // 10



// Part II

// Then add the method addMethod(name, func) that teaches the calculator a new operation. It takes the operator name and the two-argument function func(a,b) that implements it.

// For instance, let’s add the multiplication *, division / and power **:

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);


// Solution Part II

function Calculator() {
    this.methods = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
    };

    this.calculate = function (str) {
        let split = str.split(' ');
        let num1 = Number(split[0]);
        let op = split[1];
        let num2 = Number(split[2]);

        if ( !this.methods[op] || isNaN(num1) || isNaN(num2) ) {
            return 'Invalid input!';
        } else {
            return this.methods[op](num1, num2);
        }
    };

    this.addMethod = function (name, func) {
        this.methods[name] = func;
    }
}

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8