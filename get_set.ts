class ProductService{
   private  name:string="bikram dhami";
    email:string="bikramdhami334@gmail.com";
    get userName(){
        return this.name;
    }
    set userEmail(emails:string){
        this.email=emails;
    }
}

const product=new ProductService();
 console.log(product.userName);
 product.userEmail="bikramdhami@gmail.com";
 console.log(product.email);
