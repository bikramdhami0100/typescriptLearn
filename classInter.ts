interface UserTypes{
    name:string,
    age:number,
    email:string,
    showData():void;
    showDetails():void;
}

class User implements UserTypes{
    name:string;
    age:number;
    email:string;
    constructor(name:string,age:number,email:string){
        this.name=name;
        this.age=age;
        this.email=email;
    }
    showData(): void {
        // throw new Error("Method not implemented.");
    }
    showDetails(): void {
        console.log(this.name,this.age,this.email);
    }
  
    
}

const users=new User("Bikram dhami",23,"bikramdhami@gmail.com");
users.showDetails();