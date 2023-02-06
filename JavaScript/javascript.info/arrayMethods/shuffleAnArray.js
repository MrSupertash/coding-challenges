// Shuffle an array

// Description

// importance: 3
// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

// Multiple runs of shuffle may lead to different orders of elements. For instance:

// let arr = [1, 2, 3];

// shuffle(arr);
// // arr = [3, 2, 1]

// shuffle(arr);
// // arr = [2, 1, 3]

// shuffle(arr);
// // arr = [3, 1, 2]
// // ...
// All element orders should have an equal probability. For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc, with equal probability of each case.


// Solution

// This was my first attempt but I knew whatever would happen here, that it might not have equal probability. However, it doesn't work at all and I have yet to wrap my head around what actuall happens here. Taking a break now.

// function shuffle(arr) {
    

//     for (let i = 0; i < arr.length; i++) {
//         let rand = Math.floor(Math.random() * arr.length);
//         let x = i;
//         arr.splice(i, 1, rand);
//         arr.splice(rand, 1, x);
//     }
// }


// 2nd attempt - I saw the solution before using Fisher-Yates, let's try to recreate. The idea is to swap the last index of the array with a random one before it and iterate over it backwards

let arr = [1, 2, 3];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let x = array[i];
        array[i] = array[j];
        array[j] = x;
    }
}

shuffle(arr);
console.log(arr);
