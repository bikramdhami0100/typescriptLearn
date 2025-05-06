interface a {
    name: string;
    address: string;
}
interface b {
    age: number;
    address: string;
}
type c = a & b;
declare var userData1: c;
