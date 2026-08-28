let qts = ["Denis må komme tilbake fra bjørnholt","Zakarias tilbake til f21!!!","Professor vladimir","Respekt for Nicko"]

const button = document.getElementById("refresh")

button.addEventListener("click",function(){document.getElementById("tekst").textContent=qts[Math.floor(Math.random() * qts.length)];})

