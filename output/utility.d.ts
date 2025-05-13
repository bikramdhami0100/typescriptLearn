type UserTypeData = {
    name: string;
    age: number;
    email: string;
    isStudent: boolean;
};
declare const dataUser: Partial<UserTypeData>;
declare const dataUser2: Required<UserTypeData>;
declare const dataUser3: Readonly<UserTypeData>;
declare const dataUser4: Pick<UserTypeData, "name" | "age" | "email">;
