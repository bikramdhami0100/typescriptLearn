interface UserTypeData2 {
    name: string;
    age: number;
    email: string;
    isStudent: boolean;
}
declare const userData33: Omit<UserTypeData2, "isStudent" | "email">;
type APIStatus = "pending" | "loading" | "error" | "success";
declare let apiStatus: Extract<APIStatus, "pending" | "loading">;
declare let apiStatus2: Exclude<APIStatus, "pending" | "loading">;
type RandomType = string | number | boolean | null | undefined;
type RandomType2 = NonNullable<RandomType>;
declare const data22: RandomType2;
declare const data33: RandomType2;
type siteRole = "admin" | "user" | "superadmin";
declare const role: siteRole;
declare const datasss: Record<siteRole, string>;
