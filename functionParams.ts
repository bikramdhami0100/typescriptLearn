// function parameterFun(name:string|null,age?:number){
//  if(name!=null){
//      console.warn("Hello "+name)
//  } 
// else{
//      console.warn("Hello stranger")
//  }

//  if(age!=null){
//      console.warn("Your age is "+age)
//  }
//  else{
//      console.warn("Your age is unknown")
//  }


// }

// parameterFun(null);
// parameterFun("Bikram dhami")
// parameterFun("bikram",22)

const optionParameter=(name?:string)=>{
   console.log(name);
}

optionParameter("Bikram dhami");
optionParameter();