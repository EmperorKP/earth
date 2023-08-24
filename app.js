var bodyvar = document.body
console.log(bodyvar)
var consumption=document.getElementById("consumption")
console.log("consumption",consumption)

var resources=document.getElementById("resources")
console.log("resources",resources)
var people=document.getElementById("people")
console.log("people",people)
var climate = document.getElementById("climate")
console.log("climate",climate)
var savetext= document.getElementById("save")

var frame= document.getElementById("frame")
consumption.onclick=()=>{
    bodyvar.style.background="url(https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/food-wastage-bg%5B1%5D.png)"
    bodyvar.style.backgroundSize=" 100% 100%"
    frame.src="https://www.theworldcounts.com/embed/challenges/107?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
    savetext.innerHTML="Do your bit! Shop only what you need,eat only what you need and always save the leftovers."
    consumption.style.background="#28B864"
    climate.style.background=""
    people.style.background=""
    resources.style.background=""
    

    
}
resources.onclick=()=>{
    bodyvar.style.background="url(https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/natural-resources-bg%5B1%5D.png)"
    bodyvar.style.backgroundSize=" 100% 100%"
    frame.src="https://www.theworldcounts.com/embed/challenges/5?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
    savetext.innerHTML="Do your bit! Avoid all things plastic. Believe in Reduce, Reuse and Recycle"
    resources.style.background="#F39055"
    climate.style.background=""
    people.style.background=""
    
    consumption.style.background=""
    

    
}
people.onclick=()=>{
    bodyvar.style.background="url(https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/poverty-bg%5B1%5D.png)"
    bodyvar.style.backgroundSize=" 100% 100%"
    frame.src="https://www.theworldcounts.com/embed/challenges/2?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
    savetext.innerHTML="Do your bit! Never waste  food.Rather offer it to people or animals who are in need"
    people.style.background="#D84855"
    climate.style.background=""
    
    resources.style.background=""
    consumption.style.background=""

    
}
climate.onclick=()=>{
   
    bodyvar.style.background="url(https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/climate-change-bg%5B1%5D.png)"
    bodyvar.style.backgroundSize=" 100% 100%"
    frame.src="https://www.theworldcounts.com/embed/challenges/23?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
    savetext.innerHTML="Do your bit! Save trees, use renewable energy sources and prefer to travel green"
    climate.style.background="#337BD9"
    people.style.background=""
    resources.style.background=""
    consumption.style.background=""

    

    
}


