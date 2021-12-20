'use strict'

function gradeLabs(labs) {
    for (let i = 0; i < labs.length; i++) {
        let lab = labs[i];
        let result;
        let noError = true;
        try {
            result = lab.runLab(3);
        } catch(err) {
            noError = false;
        }
        if (noError) console.error(`${lab.student} code worked: ${result === 27}`);
        else console.error("Error thrown");
    }
}
  
let studentLabs = [
    {
        student: "Carly",
        runLab: function (num) {
        return Math.pow(num, num);
        },
    },
    {
        student: "Erica",
        runLab: function (num) {
        return num * num;
        },
    },
];
let studentLabs2 = [
{
    student: "Blake",
    myCode: function (num) {
        return Math.pow(num, num);
    },
},
{
    student: "Jessica",
    runLab: function (num) {
        return Math.pow(num, num);
    },
},
{
    student: "Mya",
    runLab: function (num) {
        return num * num;
    },
},];
  
gradeLabs(studentLabs);
gradeLabs(studentLabs2);