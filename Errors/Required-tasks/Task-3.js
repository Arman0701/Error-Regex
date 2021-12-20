'use strict'

function reverseString(s){
    try {
        if (typeof s === 'string') return s.split("").reverse().join("");
        else throw new Error('s.split is not a function')
    } catch(err) {
        return err.message;
    }
}

console.log(reverseString(12));
console.log(reverseString('hellow'));