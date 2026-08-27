const change = document.getElementById("change")
const logo = document.querySelector("h1")
let theme = "light"
let pointsblue = 0
let pointsred = 0

const displayblue = document.getElementById("displayblue")
const displayred = document.getElementById("displayred")

const plusred = document.getElementById("plusred")
const plusblue = document.getElementById("plusblue")

const minusred = document.getElementById("minusred")
const minusblue = document.getElementById("minusblue")

const reset = document.getElementById("reset")

if(change){
    change.addEventListener("click", function(){
    if(theme == "light"){
        document.getElementById("bg").style.backgroundColor = "#2b2b2b"
        logo.style.color = "#ffffff"
        theme = "dark"
    }
    else if(theme == "dark"){
         document.getElementById("bg").style.backgroundColor = "#ffffff"
        logo.style.color = "#000000"
        theme = "light"
    }
})
}


plusblue.addEventListener("click", function(){
    pointsblue = pointsblue+1
    displayblue.textContent = pointsblue
})

plusred.addEventListener("click", function(){
    pointsred = pointsred+1
    displayred.textContent = pointsred
})

minusred.addEventListener("click", function(){
    pointsred = pointsred-1
    displayred.textContent = pointsred
})

minusblue.addEventListener("click", function(){
    pointsblue = pointsblue-1
    displayblue.textContent = pointsblue
})

reset.addEventListener("click", function(){
    pointsblue = 0
    pointsred = 0
    displayblue.textContent = pointsblue
    displayred.textContent = pointsred
})