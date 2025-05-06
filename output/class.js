"use strict";
class Product {
    name;
    price;
    pid;
    inCard;
    constructor(name, price, pid) {
        if (name && price && pid) {
            this.name = name;
            this.price = price;
            this.pid = pid;
            this.inCard = true;
        }
        else {
            this.inCard = false;
        }
    }
    addToCard() {
        if (this.inCard) {
            console.log("product is add to card");
        }
        else {
            console.log("product is not added");
        }
    }
    showData() {
        console.log(this.name, this.price, this.pid);
    }
}
const product1 = new Product("laptop", 10000, 1001);
product1.addToCard();
product1.showData();
const product2 = new Product("", 0, 0);
// product2.inCard()
product2.addToCard();
product2.showData();
