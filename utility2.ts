interface UserTypeData2{
    name:string,
    age:number,
    email:string,
    isStudent:boolean
}
const userData33:Omit<UserTypeData2,"isStudent"|"email">={
    name:"Bikram dhami",
    age:23,
}
type APIStatus="pending"|"loading"|"error"|"success";

let apiStatus:Extract<APIStatus,"pending"|"loading">="pending";

apiStatus="loading";
apiStatus="pending";
let apiStatus2:Exclude<APIStatus,"pending"|"loading">="error";
apiStatus2="success";
apiStatus2="error";
// apiStatus2="pending";
// apiStatus="error"; // Removed as it is not assignable to the type
type RandomType=string|number|boolean|null|undefined;
type RandomType2=NonNullable<RandomType>;
const data22:RandomType2="Bikram dhami";
const data33:RandomType2=100;
// const data2:RandomType2=null;
// const data3:RandomType2=undefined;
type siteRole="admin"|"user"|"superadmin";
const role:siteRole="superadmin"
const datasss:Record<siteRole,string>={
    admin:"admin",
    user:"user",
    superadmin:"superadmin"
}