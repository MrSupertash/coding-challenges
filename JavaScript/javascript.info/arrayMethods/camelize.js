function camelize(str) {
    let arr = str.split('-');
    newArr = arr.map((word, index) =>
                        index === 0 ? word.toLowerCase()
                                    : word[0].toUpperCase() + word.slice(1));
    let newStr = newArr.join('');
    return newStr;
}