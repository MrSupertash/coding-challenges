// Description

// Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers.

// Your task is to create a function that, given a proper first and last name, will return the correct alias.

// Notes:
// Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given. See the examples below for further details.

// If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."

// Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.

// These two objects are preloaded, you need to use them in your code
// var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' ...}
// var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst' ...}


function aliasGen(first, surName){
  let alias = '';
  let firstNameInitial = first[0].toUpperCase();
  let lastNameInitial = surName[0].toUpperCase();


  // I had to look up this regex expression and test method. I don't know anything about regex yet.
  if ((/^[a-zA-Z]/.test(firstNameInitial)) && (/^[a-zA-Z]/.test(lastNameInitial))) {

    // The CodeWars challenge provided two preloaded dictionaries firstName and surname
    alias = firstName[firstNameInitial] + ' ' + surname[lastNameInitial];
    return alias;
  } else {
    return 'Your name must start with a letter from A - Z.'    
  }  
}