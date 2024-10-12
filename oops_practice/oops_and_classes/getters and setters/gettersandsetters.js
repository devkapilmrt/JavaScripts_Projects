// class User{
//     constructor(email, password){
//         this.email = email
//         this.password = password
//     }
//     get email(){
//         return this._email.toUpperCase()
//     }
//     set email(value){
//         this._email = value
//     }
//     get password(){
//         return this._password.toUpperCase() + "hjkh"
//     }
//     set password(value){
//         this._password = value
//     }
// }
// const userOne = new User("kk132792",'akdsfnc@123')
// console.log(userOne._email)
// function User(email, password){
//     this._ email = email
//     this._password = password

//     Object.defineProperty(this, "email", {
//         get: function(){
//             return this._email.toUpperCase()
//         },
//         set: function(value){
//             this._email = value
//         }
    

//     })
//     Object.defineProperty(this, "password", {
//         get: function(){
//             return this._password
//         },
//         set: function(value){
//             this._password = value
//         }
//     })
// }
// const userOne = new User("kk132792", "432848kjsd")
// console.log(userOne.email)
function outer(){
    let username = "Kapil"
    function inner(){
        console.log("inner", username)
    }
    console.log(username, "Outer fn")
    inner()
}
outer()
