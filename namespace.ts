export namespace UserAuth{
 export    class UserLogin{
        name:string;
        password:string;
           constructor(name:string,password:string){
            this.name=name;
            this.password=password;
            if(name&&password){
                this.login();
            }
            else {
                this.logout();
            }
           }
           
           login(){
            console.log("User is logged in");
           }
           logout(){
            console.log("User is logged out");
           }
    }

export  function showData(){
    console.log("This is show data");
}
}

export namespace AdminAuth{
 export    class AdminLogin{
        name:string;
        password:string;
           constructor(name:string,password:string){
            this.name=name;
            this.password=password;
            if(name&&password){
                this.login();
            }
            else {
                this.logout();
            }
           }
           
           login(){
            console.log("User is logged in");
           }
           logout(){
            console.log("User is logged out");
           }
    }

export  function showData(){
    console.log("This is show data");
}
}

