'use strict'

function reverseString(str){
    try {
        return str.split('').reverse().join('');
    } catch(err) {
        return err.message;
    }
}

console.log(reverseString('Hello world!'));
console.log(reverseString(123456789));
console.log(reverseString(null));
console.log(reverseString(undefined));
console.log(reverseString(true));