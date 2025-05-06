"use strict";
var WhoType;
(function (WhoType) {
    WhoType["student"] = "student";
    WhoType["teacher"] = "teacher";
    WhoType["admin"] = "admin";
})(WhoType || (WhoType = {}));
const student = WhoType.student;
console.log(student);
console.log(WhoType.admin);
console.log(WhoType["teacher"]);
var Who;
(function (Who) {
    Who[Who["student"] = 0] = "student";
    Who[Who["teacher"] = 1] = "teacher";
    Who[Who["admin"] = 2] = "admin";
})(Who || (Who = {}));
console.log(Who.student);
console.log(Who.admin);
