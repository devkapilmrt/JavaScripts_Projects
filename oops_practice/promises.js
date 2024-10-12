// // const promiseOne = new Promise(function(resolve,reject){
// //     setTimeout(function(){
// //         console.log('Async tast is complete')
// //         resolve()
// //     },1000)

// // })
// // promiseOne.then(function(){
// //     console.log("Promise consumed")
// // })

// // new Promise(function(resolve,reject){
// //     setTimeout(function(){
// //         console.log("Async task two")
// //         resolve()
// //     },1000)
// // }).then(function(){
// //     console.log("async 2 resolved")
// // })

// // const promiseThree = new Promise(function(resolve, reject){
// //     setTimeout(function(){
// //         resolve({username: "Kapil", email: "kapil@example.com"})
        
        
// //     },1000)
// // })

// // promiseThree.then(function(user){
// //     console.log(user)
// // })

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){

//         let error = true
//         if(!error){
//             resolve({username:'Kapil', password:'12345'})
//         }else{
//             reject('something went wrong')
//         }
        
//     },1000)
// })
// promiseFour.then((user)=>{
//     console.log(user)
//     return user.username
// }).then(function(username){
//     console.log(username)
// }).catch(function(error){
//     console.log(error)
// }).finally(()=>console.log("promise is either resolved or rejected"))


// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false
//         if(!error){
//             resolve({username:'JavaScript', password:'123456'})
//         }else{
//             reject('error: js went wrong')
//         }

//     },1000)
// })
// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console .log(response)
//     } catch (error) {
//         console.log(error)
        
//     }
// }
// consumePromiseFive()

// fetch('https://api.github.com/users/devkapilmrt').then(function(response){
//     return response.json()
// })
// .then((response)=>{
//     console.log(response)
// })
// .catch((error)=>console.log(error))

// async function getAllusers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log(error)
        
//     }

// }
// getAllusers()

fetch('https://api.github.com/users/devkapilmrt')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
}).catch((error)=>console.log(error))