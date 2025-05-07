"use strict";
class ProductService {
    name = "bikram dhami";
    email = "bikramdhami334@gmail.com";
    get userName() {
        return this.name;
    }
    set userEmail(emails) {
        this.email = emails;
    }
}
const product = new ProductService();
console.log(product.userName);
product.userEmail = "bikramdhami@gmail.com";
console.log(product.email);
