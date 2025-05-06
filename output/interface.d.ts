interface UserData {
    name: string;
    age: number;
    email: string;
}
declare const data2: UserData;
interface UserData3 extends UserData {
    address: string;
    phone: number;
}
declare const data3: UserData3;
interface UserData4 {
    name: string;
    age: number;
    email: string;
}
interface User {
    name: string;
    age: number;
    email: string;
}
interface UserMoreDetails {
    address: string;
    phone: number;
    anotherData: User;
}
declare const data4: UserData4 | UserMoreDetails;
