// // let featuredPosts = [
// //     "Hi, im kapil.",
// //      "What are you doing now for your carrier.",
// //     "thinking about large element.",
// //     "same here",
// //     "😁"
// // ]
// // let greetingsEl = document.getElementById("greetings-el") 
// // console.log(greetingsEl)
// // function rendersentences(){
// //     for (i = 0; i<featuredPosts.length; i += 1){
// //         greetingsEl.textContent += featuredPosts[i] + ", "
// //     }
    
// // }

// // // // let newMessage = "Same here"
// // // // featuredPosts.push(newMessage)
// // // featuredPosts.pop()
// // // console.log(featuredPosts)

// // // // console.log(featuredPosts[0])

// // // // let arrayfor_ex_and_skills = [
// // // //     "2y experience",
// // // //     "b.tech",
// // // //     "yes i have",
// // // //     "intern at web dev"

// // // // ]
// // // // let newel = document.getElementById("new-el")
// // // // console.log(newel)
// // // // function newfunc() {
// // // //     for ( let i=0; i <= 3; i++)

// // // //         newel.textContent = arrayfor_ex_and_skills[i]
    

// // // // }
// // let sum = 0
// // for (let count = 10; count < 101; count+=10){
// //     console.log(count)
// //     sum = sum + count
// // }
// // console.log(sum)

// let randomnumber = rollDice()
// function rollDice(){
//     return Math.floor(Math.random()*6) + 1 
// }

// console.log(rollDice())

// function getRandomCard(){
//     let randomcardvalue = Math.floor(Math.random()*13)+1
//     if (randomcardvalue > 10){
        
//         console.log(10)
//     } else if (randomcardvalue ===1){
        
//         console.log(11)
//     } else {
//         console.log(randomcardvalue) 
//     }
    
// }
// getRandomCard()
// let hasSolvedChallenge = false
// let hasHintsLeft = false
// function showSolution(){
//     if( hasSolvedChallenge === false && hasHintsLeft === false){
//         console.log("Showing the solutions...")
//     }
// }
// showSolution()
// let airbnb = {
//     hotelName: "Rajmahal",
//     goodRating: true,
//     Price: 5500,
//     roomType: ["AC", "NON-AC"]
// }
// console.log(airbnb.hotelName)
// console.log(airbnb.roomType)
// console.log(airbnb.goodRating)
// let person = {
//     name: "Kapil",
//     age: 26,
//     country: "India"
// }
// function logData(){
//     let persondata = person.name + " is "+person.age + " years old and lives in " + person.country
//     console.log(persondata)
// }
// logData()
// let age = 67
// function renderdiscount(){
//     if ( age <= 6){
//         console.log("Free")
//     }else if ( age > 6 && age < 18 ){
//         console.log("Child Discount")
    
//     }else if (age > 17 && age < 27){
//         console.log("Student Discount")
//     }else if ( age>26 && age < 67){
//         console.log("Full price")
//     }else {
//         console.log("Senior citizen discount")
//     }
// }renderdiscount()
// let largestCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]
// for (let i=0; i<largestCountries.length; i++){
//     console.log("- "+largestCountries[i])
// }
// let largestCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]
// largestCountries.pop()
// largestCountries.push("Pakistan")

// largestCountries.shift()
// largestCountries.unshift("China")
// console.log(largestCountries)
// let dayOfMonth = 13
// let weekday = "Friday"
// if ( dayOfMonth === 13 && weekday === "Friday"){
//     console.log("😱")
// }else{
//     console.log("Don't worry!")
// }
// let hands = ["rock", "paper", "scissor"]
// function randomHands(){
//     let randomIndex = Math.floor(Math.random()*3)
//     console.log(hands[randomIndex])
// }
// randomHands()
let fruits = ["🍎","🍊","🍎","🍎","🍊","🍎","🍎","🍊","🍊"]
let appleShelf = document.getElementById("appleshelf-el")
let orangeShelf = document.getElementById("orangeshelf-el")
let applestr = ""
let orangestr = ""
function renderFruits(){
    for ( let i = 0; i<fruits.length; i++){
        if (fruits[i] === "🍎" ){
            applestr+=fruits[i]
            appleShelf.textContent = "Apples: " + applestr
        }else {
            orangestr+=fruits[i]
            orangeShelf.textContent = "Oranges: " + orangestr
        }
    }
}