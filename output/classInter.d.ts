interface UserTypes {
    name: string;
    age: number;
    email: string;
    showData(): void;
    showDetails(): void;
}
declare class User implements UserTypes {
    name: string;
    age: number;
    email: string;
    constructor(name: string, age: number, email: string);
    showData(): void;
    showDetails(): void;
}
declare const users: User;
