// function simple(){
//     console.log("this is simple function")
// }

// function returnNumber():number{
//     return 100;
// }
// console.log(returnNumber(),typeof returnNumber());
// function returnString():string{
//     return "this is string";
// }
//  console.log(returnString(),typeof returnString());
// function returnBoolean():boolean{
//     return true;
// }
// console.log(returnBoolean(),typeof returnBoolean());
// function returnArray():Array<string>{
//     return ["ram","shyam","hari"];
// }
// console.log(returnArray(),typeof returnArray());
// function returnObject():object{
//     return {
//         name:"Bikram dhami",
//         age:23
//     }
// }
// console.log(returnObject(),typeof returnObject());

// function returnTuple():[string,number]{
//     return ["ram",23];
// }
// console.log(returnTuple(),typeof returnTuple());

// function returnAny():any{
//     return "this is any";
// }
// console.log(returnAny(),typeof returnAny());

// function returnVoid():void{
//     console.log("this is void");
// }
// console.log(returnVoid(),typeof returnVoid());

// function returnNever():never{
//     throw new Error("this is never");
// }

// console.log(returnNever());
function returnNever2():never{
    while(true){
        console.log("this is never");
    }
}

console.log(returnNever2());