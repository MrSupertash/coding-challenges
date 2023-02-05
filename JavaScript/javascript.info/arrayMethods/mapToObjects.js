// Map to objects

// Description 

// You have an array of user objects, each one has name, surname and id.

// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

// For instance:

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = /* ... your code ... */

// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // John Smith
// So, actually you need to map one array of objects to another. Try using => here. There’s a small catch.


// Solution

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];


// my initial solution didn't work as it didn't use parentheses around the object literal within the arrow function. I had to look up the solution. I didn't understand why they are needed here, since the object is just "one thing", but I guess if I leave the parentheses out, the curly brackets that define the scope of the object will be mistaken for the function body of the arrow function.

// indeed the MDN for arrow function expressions:
// Returning object literals using the concise body syntax (params) => { object: literal } does not work as expected.

// const func = () => { foo: 1 };
// // Calling func() returns undefined!

// const func2 = () => { foo: function () {} };
// // SyntaxError: function statement requires a name

// const func3 = () => { foo() {} };
// // SyntaxError: Unexpected token '{'

// This is because JavaScript only sees the arrow function as having a concise body if the token following the arrow is not a left brace, so the code inside braces ({}) is parsed as a sequence of statements, where foo is a label, not a key in an object literal.

// To fix this, wrap the object literal in parentheses:
// const func = () => ({ foo: 1 });


let usersMapped = users.map(user => ({
        fullName: `${user.name} ${user.surname}`,
        id: user.id,
    }));

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // John Smith