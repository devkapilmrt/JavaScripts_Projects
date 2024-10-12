const randomColor = function(){
    const hex ="0123456789ABCDEF"
    let color = "#"
    for(let i=0;i<6; i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color
}
let intervalId
// console.log(randomColor())
const startChangingColor = function(){
    
        document.body.style.backgroundColor=randomColor()
    
}
// const stopChangingColor = function(){
//     clearInterval(startChangingColor)
// }
document.getElementById('start').addEventListener('click',function(){
    intervalId = setInterval(startChangingColor,1000)
}
    
)
const stopBtn = document.getElementById('stop').addEventListener('click',function(){
    clearInterval(intervalId)
    intervalId = null
})
// console.log(randomColor)