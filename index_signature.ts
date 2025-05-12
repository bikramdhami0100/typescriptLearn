interface UserDataType {
    [key:string]:string|number|boolean
}

const userDatas:UserDataType={
    name:"Bikram dhami",
    age:23,
    email:"bikramdhami@gmail.com",
    isStudent:true
}

console.log(userDatas)