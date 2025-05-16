"use strict";
// const outPutPromise=():Promise<string>=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("4444");
//         },3000)
function fetchApi() {
    return fetch("https://jsonplaceholder.typicode.com/todos").then((response) => {
        return response.json();
    });
}
fetchApi().then((data) => {
    const todoList = data.map((todo) => {
        return todo.completed;
    });
    console.log(todoList);
});
