"use strict";
var num = 9007199254740991n;
let num2 = num;
const x = 1n;
const y = 10n;
console.log(num + y);
var id = Symbol("abc");
var unID = Symbol("abc");
console.log(unID);
console.log(id === unID);
const user = {
    [id]: 100,
    name: "Bikram dhami"
};
console.log(user[id]);
