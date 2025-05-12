type UserTypeData={
    name:string,
    age:number,
    email:string,
    isStudent:boolean
}

const dataUser:Partial<UserTypeData>={
    name:"Bikram dhami",
    age:23,
    // email:"bikramdhami@gmail.com",
    // isStudent:true
}

const dataUser2:Required<UserTypeData>={
    name:"Bikram dhami",
    age:23,
    email:"bikramdhami@gmail.com",
    isStudent:true
}
dataUser2.email="bikramdhami@gmail.com";

const dataUser3:Readonly<UserTypeData>={
    name:"Bikram dhami",
    age:23,
    email:"bikramdhami@gmail.com",
    isStudent:true
}
// dataUser3.email="bikramdhami@gmail.com";
const dataUser4:Pick<UserTypeData, "name" | "age"|"email">={
    name:"Bikram dhami",
    age:23,
    email:"bikramdhami@gmail.com"
}


