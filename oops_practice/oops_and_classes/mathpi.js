// const discripter = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(discripter)
// for(let [key,value] of Object.entries(discripter)){
//     console.log(`${key}, ${value}`)
// }
const house = {
    name: 'Raj Villa',
    price: false,
    isAvailable: false,
    orderHouse: function(){
        console.log("House was note build")
    }
}
// console.log(Object.getOwnPropertyDescriptor(house, 'name'))
Object.defineProperty(house,'name',{
    writable: true,
    enumerable: false
})
// console.log(Object.getOwnPropertyDescriptor(house, 'name'))
// house.name = "Kumar Villa"
// console.log(Object.getOwnPropertyDescriptor(house, 'name'))
for(let [key,value] of Object.entries(house)){
    if(typeof value!=='function'){
        console.log(`${key}, ${value}`)
    }
}
// console.log(Math.PI)
