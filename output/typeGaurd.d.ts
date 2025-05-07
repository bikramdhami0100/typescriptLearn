declare class Product {
    name: string;
    price: number;
    pid: number;
    constructor(name: string, price: number, pid: number);
    showData(): void;
}
declare class Book extends Product {
    author: string;
    constructor(name: string, price: number, pid: number, author: string);
    showData(): void;
}
declare class Movie extends Product {
    director: string;
    constructor(name: string, price: number, pid: number, director: string);
    showData(): void;
}
declare function showProductData(product: Product): void;
declare const book: Book;
declare const movie: Movie;
