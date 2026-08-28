const button = document.getElementById("knapp")
const clicks = document.getElementById("clicks")
let clp10s = 0
let tid = 10

button.addEventListener("click", function(){
    clp10s = clp10s+1
    clicks.textContent = clp10s 
})

let timer = setInterval(function(){
    tid=tid-1
    document.getElementById("timer").textContent=tid
    if(tid<=0){
        clearInterval(timer);
        document.getElementById("cps").textContent = (clp10s/10)
    }

},1000)



