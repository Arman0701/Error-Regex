'use strict'

function isPositive(value){
    if (value > 0) return "YES";
    else{
        if (value === 0){
            return new Error('The input value is euqal to Zero !');
        } else return new Error("The input value is Negative !");
    }
}

console.log(isPositive(1));
console.log(isPositive(0));
console.log(isPositive(-1));