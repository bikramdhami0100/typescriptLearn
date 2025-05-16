
function showData(target:any,key:string,descriptor:PropertyDescriptor){
    console.log(target);
    console.log(key);
    console.log(descriptor);
}

class SimpleCall{
    @showData
    sum(a:number,b:number){
        return a+b;
    }
}