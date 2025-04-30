const userData:{
    name:string,
    age:number,
    email?:string
}={
    name:"Bikram dhami",
    age:23,
    email:"bikramdhami@gmail.com"
}

const userNewData:{
     [key:string]:string|number
}={
    name:"Bikram dhami",
    age:23,
}


const objectInsideObject:{
    name:string,
    age:number,
    address:{
        // city:string,
        // country:string
    }
}={
    name:"Bikram dhami",
    age:23,
    address:{
        city:"kathmandu",
        country:"nepal"
    }
}

const newObjectInsideObject:{
    name:string,
    age:number,
    address:{
        [key:string]:string
    }
}={
    name:"Bikram dhami",
    age:23,
    address:{
        city:"kathmandu",
        country:"nepal"
    }
}