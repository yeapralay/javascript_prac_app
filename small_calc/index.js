let num1 = 8 
let num2 = 2

document.getElementById("num-el-1").textContent = num1
document.getElementById("num-el-2").textContent = num2

function add(){
    console.log("Sum clicks----")
    result = num1 + num2
    let opeVar ="SUM: " + result
    document.getElementById("sum-el").textContent = opeVar
}

function substract(){
    console.log("Substract clicks----")
    result = num1 - num2
    let opeVar = "SUBSTRACT: " + result
    document.getElementById("sum-el").textContent = opeVar
}

function multiply(){
    console.log("Multiply clicks----")
    result = num1 * num2
    let opeVar = "MULTIPLY: " + result
    document.getElementById("sum-el").textContent = opeVar
}

function divide(){
    console.log("Divide clicks----")
    result = num1 / num2
    let opeVar = "DIVIDE: " + result
    document.getElementById("sum-el").textContent = opeVar
}

function clearG(){
    console.log("Clear clicks----")
    let opeVar = ''
    document.getElementById("sum-el").textContent = opeVar
}