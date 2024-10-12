class User{
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password
    }
    encryptPassword(){
        return`${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const userOne = new User("Kapil", "kk13@gmail.com", 12345)
console.log(userOne.encryptPassword())
console.log(userOne.changeUsername())