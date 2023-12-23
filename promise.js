// promise

// let getpromise=new Promise(function(resolve,reject){
//     resolve('promise resolve')

// });
// console.log(getpromise)
// getpromise.then((result)=>{
//     console.log(result)
// }).finally((result)=>{
//     console.log(result)
// })

// Methods
// 1-(All)
// let data=Promise.race([
//     new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             reject("reject in 5 seconds")
//         }, 5000);
//     }),
//     new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("resolve in 10 seconds")
//         }, 5000);
//     }),
//     new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("resolve in 15 seconds")
//         }, 5000);
//     }),
// ])
// data.then((item)  =>{
//     console.log("then block",item)
// }).catch((err)  =>{
//     console.log("catch block",err)
// })

let data=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(10)
    }, 2000);
});
data.then((item)=>{
    console.log("1st",item)
    return item*10
}).then((item)=>{
    console.log("2nd",item)
    return item*10
}).then((item)=>{
    console.log("3rd",item)
    return item*10
}).catch((err)=>{
    console.log(err)
})

