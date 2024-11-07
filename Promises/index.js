
// let firstPromise=new Promise((resolve,reject)=>{

//     setTimeout(function sayMyName() {
//         console.log("My name is akshay namdev");
//         resolve(1);
//     }, 10000);
// })

// THAN and CATCH in promise object

// let promise1=new Promise((resolve,reject)=>{

//     let success=true; // if we put false inplace of true so we get rejected msg
//     if(success){
//             resolve("promise is fullfilled");
//     } else{
//             reject("promise rejected");
//     }

// });
//  promise1.then((message)=>{
//     console.log("then ka message is:"+ message);
//  }).catch((error)=>{
//     console.log("error is :" + error);
//  });





let promise1=new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"First");
})
let promise2 = new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"Second");
});

let promise3= new Promise((resolve,reject)=>{
    setTimeout(resolve,3000,"Third");
});

Promise.all([promise3,promise2,promise1])
.then((values)=>{
    console.log(values);
})

