let data:string|number;
data="Bikram dhami";
data=23;
console.log(data)

// let myfunction:(a:number|string)=>void
// 
let myfunction=(data:string|Array<string>|object|number)=>{
    if(typeof data==="string"){
        console.log("this is string"+data);
    }else if(Array.isArray(data)){
        console.log("this is array"+data);
    }else if(typeof data==="object"){
        console.log(data);
    }else if(typeof data==="number"){
        console.log("this is number"+data);
    }
    // console.log("first function");
}

myfunction("Bikram dhami");
myfunction(["ram","shyam","hari"]);
myfunction({
    name:"Bikram dhami",
    age:23
})
myfunction(23)