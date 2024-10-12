class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`)
    }
    static creatId(){
        return '1234 '
    }
}

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const userOne = new User("Kapil","kk1327")
userOne.logMe()