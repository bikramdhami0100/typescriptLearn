"use strict";
class User {
    name;
    age;
    email;
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    showData() {
        // throw new Error("Method not implemented.");
    }
    showDetails() {
        console.log(this.name, this.age, this.email);
    }
}
const users = new User("Bikram dhami", 23, "bikramdhami@gmail.com");
users.showDetails();
