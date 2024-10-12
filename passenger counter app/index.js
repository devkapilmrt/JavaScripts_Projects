
let countEl = document.getElementById("count-el")
console.log(countEl)
let count = 0

function increment(){
    count  +=1
    countEl.innerText=count
    
}
let saveEll = document.getElementById("save-el")
console.log(saveEll)
let saveEl = document.getElementById("save-btn")
console.log(saveEl)
let totalEl = document.getElementById("total-el")
console.log(totalEl)
let sum = 0

function save(){
    //save.innerText = count
    saveEll.innerText += " - "+count
    sum+=count
    totalEl.innerText="Total People: " + sum
    count = 0
    countEl.innerText=count
    
    
}
save()


