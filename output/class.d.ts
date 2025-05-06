declare class Product {
    name: string;
    price: number;
    pid: number;
    inCard: boolean;
    constructor(name: string, price: number, pid: number);
    addToCard(): void;
    showData(): void;
}
declare const product1: Product;
declare const product2: Product;
