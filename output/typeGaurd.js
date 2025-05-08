"use strict";
// let inputData:string|number|Array<string>|object=["ram","shyam","hari"];
// inputData="Bikram dhami";
// if(typeof inputData==="string"){
//  inputData
// }else if(Array.isArray(inputData)){
//     inputData
//     console.log("this is array"+inputData);
// }else if(typeof inputData==="object"){
//     inputData
//     console.log(inputData);
// }else if(typeof inputData==="number"){
//     inputData
//     console.log("this is number"+inputData);
// }
// function checkData(dataInput:string|number) {
//     if(typeof dataInput==="string"){
//         dataInput
//         console.log("this is string"+dataInput);
//     }else if(typeof dataInput==="number"){
//         dataInput
//         console.log("this is number"+dataInput);
//     }
// }
// checkData("Bikram dhami");
// checkData(23);
class Product2 {
    name;
    price;
    pid;
    constructor(name, price, pid) {
        this.name = name;
        this.price = price;
        this.pid = pid;
    }
    showData() {
        console.log(this.name, this.price, this.pid);
    }
}
class Book extends Product2 {
    author;
    constructor(name, price, pid, author) {
        super(name, price, pid);
        this.author = author;
    }
    showData() {
        console.log(this.name, this.price, this.pid, this.author);
    }
}
function showDetails(objects) {
    if (objects instanceof Product2) {
        console.log("This is Products");
    }
    else {
        console.log("This is Book");
    }
}
function checkDataType(data) {
    if (data.name) {
        console.log("This is user Data");
    }
    else {
        console.log("This is user Info");
    }
}
checkDataType({ name: "Bikram dhami", age: 23 });
checkDataType({ email: "example@example.com", phone: "1234567890" });
