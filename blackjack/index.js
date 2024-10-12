let player = {
    name: "Kapil",
    chips: 145,
    sayHello: function(){
        return "Hello, You Won!"
    }
}
let cards = []
let sum = 0
// let cards = [firstCard, secondCard]
let hasblackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")

let sumEl = document.getElementById("sum-el")

let cardsEl = document.getElementById("cards-el")

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips + ", " + player.sayHello()
function getRandomCard(){
    let randomcardvalue = Math.floor(Math.random()*13)+1
    if (randomcardvalue > 10){
        
        return 10
    } else if (randomcardvalue ===1){
        
        return 11
    } else {
        return randomcardvalue
    }
    
}



function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame(){
    cardsEl.textContent = "Cards: "
    for (let i = 0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    
    if (sum < 21){
        message = "Do you want to draw a new card?🙂"
    
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!🥳"
        hasblackjack = true
    
    } else {
        message = "You are out of the game.😭"
        isAlive = false
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    
      

}
function newCard(){
    if ( hasblackjack === false && isAlive === true){
        messagenewcard = "You are drawing a new card from the deck"
        console.log(messagenewcard)
        let newcardel = getRandomCard()
        cards.push(newcardel)
        sum+=newcardel
        renderGame()
    }
   
}

/*let personage = 99

if (personage < 100){
    console.log("Not elegible")
}else if (personage === 100){
    console.log("Here is your birthday card from the king!")

} else {
    console.log("Not eligible, you have already gotten one")
}*/