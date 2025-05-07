import { Auth } from "./inheritance";
import UserType from "./types/user";

const userData:UserType={
    name:"Bikram Dhami",
    age:22,
    password:"1234"
}


class NStudnet extends Auth {
    
}

const data=new NStudnet("Bikram dhami","h1234")
if(data?.isValidUser()){
    console.log(data?.name)
}else{
     console.log("Invalid User");
   // console.log("Not a valid user")
}
