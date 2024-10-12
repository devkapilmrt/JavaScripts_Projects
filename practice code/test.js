// // const player = "Kapil"
// // const opponent = "Nick"
// // const game = "AmazingFighter"
// // let points = 0
// // let haswon = false

// // points += 100
// // hasWon = false

// // if (hasWon){
// //     console.log(`${player} got ${points} points and won the  ${game}  game!`)
// // }else {
// //     console.log(`The winner is ${opponent}! ${player} lost the game`)
// // }

// // let myCourse = ["Learn css animation","UI design fundamentals", "Intro to clean code" ]

// // function renderArray(Array){
// //     for (let i=0; i<myCourse.length; i++){
// //         console.log(myCourse[i])
// //     }
// // }
// // renderArray(myCourse)
// // localStorage.setItem("mydata", "100")
// // let mydatas = localStorage.getItem("mydata")
// // console.log("myData")
// // let data = [
// //     {
// //         player: "Jane",
// //         score: 52
// //     },
// //     {
// //         player: "Mark",
// //         score: 41
// //     }
// // ]
// // let scoreLog = document.getElementById("log-score")
// // let scoreBtn = document.getElementById("score-btn")

// // scoreBtn.addEventListener("click",function(){
// //    scoreLog.textContent = data[0].score + ", "+ data[1].score
// // })
// let str = ""
// function generateSentence(desc, arr){
//     let lastIndex = arr.length - 1
//     for(let i=0; i<arr.length; i++){
//         if(i===lastIndex){
//             str+=arr[i]

//         }
//         else{
//             str+=arr[i]+ ", "
//         }
        
//     }
//     console.log(`The ${arr.length} ${desc} are ${str}`)
// }
// generateSentence("largest Countries", ["China", "India", "USA"])

// str = ""
// function generateSentence(desc, arr){
//     lastIndex = arr.length - 1
//     for(let i=0; i<arr.length; i++){
//         if(i===lastIndex){
//             str+=arr[i]

//         }
//         else{
//             str+=arr[i]+ ", "
//         }
        
//     }
//     console.log(`The ${arr.length} ${desc} are ${str}`)
// }
// generateSentence("Best Fruits", ["Apples", "Mango"])

const imgs = [
    "celebs1.jpg",
    "celebs2.jpg",
    "celebs3.jpg"
]
const container = document.getElementById("container")
function renderImages(){
    let imgDOM = ""
    for(let i=0; i<imgs.length; i++){
        imgDOM+= `<img class="team-img" src="${imgs[i]}">` 
    }
    container.innerHTML= imgDOM
}
renderImages()