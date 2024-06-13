let a = null ; 
let b = undefined ; 
let c = BigInt(240); 
let f = Symbol("Hello i m Symbol");
let RSbool = true; 
let RSString = "hello i am string"

console.log ("Value of a : " , a, '\n', b , '\n', c , '\n', f , '\n', RSbool , '\n', RSString) ; 
/* Find out type of data type */

console.log("type of c:",typeof c, '\n' ,  "Type of f:",typeof f); 

/*Object JS - Key-Value Pairs*/
const RSlist = {
"UP" : "Lucknow" ,
"bool1" : "true" ,
"Rajneesh" : "45" ,
"Inventure" : "IGCSE"
}

console.log("Value of Object:",RSlist["UP"]) ;
console.log("Value of Object:",RSlist["Inventure"]) ;
console.log("Value of Object:",RSlist["bool1"]) ;
console.log("Value of Object:",RSlist["Junk1"]) ;