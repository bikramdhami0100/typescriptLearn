export class Auth{
      public name:string;
      password:string;
   constructor(name:string,password:string){
    this.name=name,
    this.password=password;

   }
   isValidUser():boolean{
      if(this.name&&this.password){
        return true;
      }
      return false;
   }
  

}

class Student extends Auth{
       
   validStudentData(){
    console.log(`Name is ${this.name} and password is : ${this.password}`)
   }
}

const student1=new Student("Bikram dhami","1234");
 console.log(student1.isValidUser())
 student1.name;
student1.validStudentData();