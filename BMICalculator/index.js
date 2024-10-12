// const heightEl = document.getElementById("height")
// const weightEl = document.getElementById("weight")
// const button = document.querySelector(".button")
// const resultEl = heightEl/((weightEl ** 2)*100)
// const resultOp = document.getElementById('results')
// conat button = document.querySelector(".button")

// button.addEventListener('onclick', function(resultOp){
//     resultOp.innerContext = resultEl 
// })
const form = document.querySelector("form")
form.addEventListener('submit',function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please enter valid height ${height}`
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please enter valid weight ${weight}`
    }else {
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        if(bmi<18.6){
            results.innerHTML = `<span>${bmi}</span><br>under weight`
        }else if(bmi>=18.6 && bmi<=24){
            results.innerHTML = `<span>${bmi}</span><br>Normal range`
        }else {
            results.innerHTML = `<span>${bmi}</span><br>Overweight`
        }
    }
})