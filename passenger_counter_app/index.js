// document.getElementById("count-el").innerText = 5

// create a variable
// listen the clicks
// increment count var
// change "count-el" or new count

// implement a function

// naming convention in javascript --> camelcase

// DOM: Document Object Model

let countEl = document.getElementById("count-el") //model in javascript
// console.log(countEl)
let saveEl = document.getElementById("save-el")

countElVal = Number(countEl.innerText)
console.log(countElVal)

// let count = 0

function increment(){
    console.log("The button was clicked....")
    countElVal +=  1
    countEl.innerText = countElVal
    // console.log(countElVal)
    // console.log(countEl)
}

function save(){
    let countStr = countElVal + " - " 
    console.log("-----------------save successfull------------")
    saveEl.textContent += countStr // innerText Alternative --> textContent : Source MDN
    // saveEl.innerText += countStr 
    // after clicking to save the value of count should be zero
    countElVal = 0
    countEl.innerText = countElVal
    console.log("logs the value of count",countElVal)
    console.log("logs the value of save",saveEl)
}