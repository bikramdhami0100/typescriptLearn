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
class Product {
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
class Book extends Product {
    author;
    constructor(name, price, pid, author) {
        super(name, price, pid);
        this.author = author;
    }
    showData() {
        console.log(this.name, this.price, this.pid, this.author);
    }
}
class Movie extends Product {
    director;
    constructor(name, price, pid, director) {
        super(name, price, pid);
        this.director = director;
    }
    showData() {
        console.log(this.name, this.price, this.pid, this.director);
    }
}
function showProductData(product) {
    if (product instanceof Book) {
        product.showData();
    }
    else if (product instanceof Movie) {
        product.showData();
    }
    else {
        product.showData();
    }
}
const book = new Book("Book 1", 100, 1001, "Author 1");
const movie = new Movie("Movie 1", 200, 2001, "Director 1");
showProductData(book);
showProductData(movie);
