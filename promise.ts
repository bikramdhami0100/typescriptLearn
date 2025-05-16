// const outPutPromise=():Promise<string>=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("4444");
//         },3000)
        
       
//     })
// }

// outPutPromise().then((data:string)=>{
//   console.log(data,typeof data)
// }).catch((error)=>{
//     console.log(error,typeof error)
// })

// interface TodoList{
//     userId:number,
//     id:number,
//     title:string,
//     completed:boolean
// }

type TodoList={
    userId:number,
    id:number,
    title:string,
    completed:boolean
}

function fetchApi():Promise<TodoList[]>{
    return fetch("https://jsonplaceholder.typicode.com/todos").then((response)=>{
        return response.json();
    })
}

fetchApi().then((data:TodoList[])=>{
    const todoList=data.map((todo:TodoList)=>{
        return todo.completed;
    })

    console.log(todoList);
})