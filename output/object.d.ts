declare const userData: {
    name: string;
    age: number;
    email?: string;
};
declare const userNewData: {
    [key: string]: string | number;
};
declare const objectInsideObject: {
    name: string;
    age: number;
    address: {};
};
declare const newObjectInsideObject: {
    name: string;
    age: number;
    address: {
        [key: string]: string;
    };
};
