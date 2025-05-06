"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
class Auth {
    name;
    password;
    constructor(name, password) {
        this.name = name,
            this.password = password;
    }
    isValidUser() {
        if (this.name && this.password) {
            return true;
        }
        return false;
    }
}
exports.Auth = Auth;
class Student extends Auth {
    validStudentData() {
        console.log(`Name is ${this.name} and password is : ${this.password}`);
    }
}
const student1 = new Student("Bikram dhami", "1234");
console.log(student1.isValidUser());
student1.name;
student1.validStudentData();
