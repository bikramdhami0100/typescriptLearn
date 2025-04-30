const marks:number[]=[10,20,30,40,50];
const students:Array<string>=["ram","shyam","hari"];
const readData:ReadonlyArray<number>=[10,20,30,40,50];
// readData.push(100);
marks.push(100);

const empData:[number,string,boolean,string]=[100,"ram",true,"kathmandu"];
empData.push(100);
const empData2:readonly [number,string,boolean,string]=[100,"ram",true,"kathmandu"];
// empData2.push(100);
console.log(empData2[2]);
console.log(empData);