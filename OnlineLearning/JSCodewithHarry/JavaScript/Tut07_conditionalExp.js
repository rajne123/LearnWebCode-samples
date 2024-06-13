const prompt = require('prompt-sync')({sigint: true});
let a = prompt("What's your name :: ");

/*converting to Integer*/
a = Number.parseInt(a) ; 
console.log(a);

if (a > 18) {
    console.log ("You are eligible to drive")
}
else{
    console.log ("Sorry , You are too young , you got to WAIT")1
}