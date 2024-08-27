/**
 * Type Conversion 
 */

let result;
// Convert Number to String 
// The typeof operator gives the data type of the variable.
result = "3"+2;
console.log(result, " : ",typeof(result));

result = "2" + true;
console.log(result, " : ", typeof(result));

result = "3" + null;
console.log(result, " : ", typeof(result));


// Explicit Conversion 
let myData:any = Number("55");
console.log(myData, " - ",typeof(result));

myData = String(true);
console.log(result," - ",typeof(result));

result = Boolean(0);
console.log(result," - ",typeof(result));

/**
 * Note:
 * ============================================================ 
 * Number("5") changes the string "5" into the number 5.
 * String(true) turns the boolean true into the string "true".
 * Boolean(0) converts the number 0 to the boolean false because 0 is considered a falsy value in JavaScript.
 */