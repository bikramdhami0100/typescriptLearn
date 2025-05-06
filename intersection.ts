// type a={name:string,address:string}
// type b={age:number,address:string}
// type c=a&b
// type d=a|b

// var userData1:c={
//     name:"Bikram dhami",
//     age:23,
//     address: "Some Address",
// }

// var userData2:d={
//     name:"Bikram dhami",
//     age:23,
//     address: "Some Address 2",
   
// }
// console.log(userData1)
// console.log(userData2)

// type a extend b ;
interface a{
    name:string,
    address:string
}
interface b{
    age:number,
    address:string
}

// interface c extends a,b{
//     name:string,
//     address:string,
//     age:number,
//     // address:string
// }
// var userData1:c={
//     name:"Bikram dhami",
//     age:23,
//     address: "Some Address",
// }

// console.log(userData1)  

type c=a&b;
var userData1:c={
    name:"Bikram dhami",
    age:23,
    address: "Some Address",
}

console.log(userData1)