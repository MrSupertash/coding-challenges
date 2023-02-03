// Description

// Translate border-left-width to borderLeftWidth

// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
// That is: removes all dashes, each word after dash becomes uppercased.


// function camelize(str) {
//     // split string into array with removed dashes    
//     let arr = str.split('-');

//     // return a new array with the first word in all lower case and all subsequent words having the first character capitalized
//     let newArr = arr.map((word, index) =>
//                         index === 0 ? word.toLowerCase()
//                                     : word[0].toUpperCase() + word.slice(1));

//     // join the new array into a new string without delimiters
//     let newStr = newArr.join('');

//     // return the new string.
//     return newStr;
// }


// Do it all in one step

const camelize = str => str
                        .split('-')
                        .map((word, index) => index === 0
                                                ? word.toLowerCase()
                                                : word[0].toUpperCase() + word.slice(1).toLowerCase())
                        .join('');