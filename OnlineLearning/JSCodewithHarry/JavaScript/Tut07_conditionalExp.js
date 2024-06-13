/*to use "Prompt" function in nodejs you have to include package "prompt-sync. 
to do that first install package by :
npm install promtp-sync*
Thereafter you got to include the package/library by "require" command as given below */

const prompt = require('prompt-sync')({sigint: true});
let a = prompt("What's your name :: ");

/*converting to Integer*/
a = Number.parseInt(a) ; 
console.log(a);


/*Note : Nodejs doesn't have ALERT function .. so instead use console.log */
if (a > 18) {
    console.log ("You are eligible to drive")
}
else{
    console.log ("Sorry , You are too young , you got to WAIT")1
}