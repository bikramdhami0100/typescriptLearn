"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inheritance_1 = require("./inheritance");
const userData = {
    name: "Bikram Dhami",
    age: 22,
    password: "1234"
};
class NStudnet extends inheritance_1.Auth {
}
const data = new NStudnet("Bikram dhami", "h1234");
if (data?.isValidUser()) {
    console.log(data?.name);
}
else {
    console.log("Invalid User");
    // console.log("Not a valid user")
}
