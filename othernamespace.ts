import { AdminAuth, UserAuth } from "./namespace";

const datauser=new UserAuth.UserLogin("Bikram dhami","1234");
const adminData=new AdminAuth.AdminLogin("Bikram dhami","1234");
datauser.login();
adminData.login();
