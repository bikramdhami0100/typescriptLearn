"use strict";
const submit = () => {
    const nameInput = document.getElementById("name");
    const names = nameInput.value;
    const emailInput = document.getElementById("email");
    const email = emailInput.value;
    const ageInput = document.getElementById("age");
    const age = parseInt(ageInput.value);
    console.log(names, email, age);
};
