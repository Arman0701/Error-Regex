'use strict'

function myRegExp(value){
    return (/^\d{4}$/.test(value) || /^\d{6}$/.test(value));
}

console.log(myRegExp('1234')); // true
console.log(myRegExp('45135')); //false
console.log(myRegExp('89abc1')); //false
console.log(myRegExp('900876')); // true
console.log(myRegExp(' 1234')); //false