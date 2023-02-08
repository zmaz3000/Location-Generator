var cities = ["Wichita, KS", "Birmingham, AL", "Ave Maria, FL", "Charleston, SC", "St. Louis, MO", "Stay where you are", "Alabaster, AL", "Dallas, TX", "Canada with Cult Mama", "Nashville, TN", "Green Bay, WI"];

var myChoice = Math.random() * 10;
var randomIndexedNumber = Math.round(myChoice, 2);
var btn = document.querySelector(".generatebutton");
var reload = document.querySelector(".reload");
var myInput = document.querySelector(".family");
var myDiv = document.getElementById("myDiv");
reload.style.display = "none";

btn.addEventListener("click", function(){
    if(myInput.value != ""){
        var myElement = document.createElement("h2");
        myElement.innerHTML = cities[randomIndexedNumber];
        myDiv.appendChild(myElement);
        console.log(myDiv);
        btn.disabled = true;
        myInput.disabled = true;
        reload.style.display = "block";
        btn.style.display = "none";
    }
        myInput.value = "";
       
        
      
    
    
})

reload.addEventListener("click", function(){
    location.reload();
})