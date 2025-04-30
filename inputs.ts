const submit = () => {
    const nameInput =document.getElementById("name") as HTMLInputElement;
const names:string=nameInput.value;
const emailInput=document.getElementById("email" ) as HTMLInputElement;
const email:string=emailInput.value;
const ageInput=document.getElementById("age") as HTMLInputElement;
const age:number=parseInt(ageInput.value);
console.log(names,email,age)
}