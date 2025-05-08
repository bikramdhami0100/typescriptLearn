declare class Product2 {
    name: string;
    price: number;
    pid: number;
    constructor(name: string, price: number, pid: number);
    showData(): void;
}
declare class Book extends Product2 {
    author: string;
    constructor(name: string, price: number, pid: number, author: string);
    showData(): void;
}
declare function showDetails(objects: Product2 | Book): void;
interface userData {
    name: string;
    age: number;
}
interface userInfo {
    email: string;
    phone: string;
}
declare function checkDataType(data: userData | userInfo): void;
