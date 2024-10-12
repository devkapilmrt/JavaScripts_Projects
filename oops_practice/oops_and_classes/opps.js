// const user = {
//     username: "Kapil",
//     loginCount: 8,
//     signedIn: true,
//     // getUserDeteils: function(){
//     //     console.log("Got user deteils form db")
//     //     console.log(this)
//     // }
// }
// // console.log(user.getUserDeteils())

// const user2 = new Object("Kajal", 9, false)
// console.log(user2)

function user(username, loginCount, isLoggedIn){
    this.username = username,
    this.loginCount = loginCount,
    this.isLoggedIn = isLoggedIn
    // return this
    
}
const userOne = new user("Kapil", 8,false)
const userTwo = new user("Kajal", 9, true)
console.log(userOne.username)