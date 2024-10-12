class React {
    constructor(){
        this.library = "React"
        this.server = "https://localhost:300"


       document.querySelector('button').addEventListener('click',kapil)

       function kapil(){
        console.log("Kapil")
        console.log(this)
       }
    }
    handleClicked(){
        console.log("Button Clickedd")
        console.log(this.server)
        console.log(this.library)

    }

    

}
const app = new React()
console.log(app)