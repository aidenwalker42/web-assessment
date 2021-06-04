let boxes = document.querySelectorAll(".box");

function whichBox(evt){
    if(evt.target===document.querySelector(".box.a"))
    {
        boxOne()
    }
    if(evt.target===document.querySelector(".box.b"))
    {
        boxTwo();
    }
    if(evt.target===document.querySelector(".box.c"))
    {
        boxThree();
    }
    if(evt.target===document.querySelector(".box.d"))
    {
        boxFour();
    }
    if(evt.target===document.querySelector(".box.e"))
    {
        boxFive();
    }
    if(evt.target===document.querySelector(".box.f"))
    {
        boxSix();
    }
}

function boxOne(){
	document.querySelector(".box.a").textContent = "Dallas, Texas";
    document.querySelector(".box.a").style.backgroundColor = "#F8F2F5";
}
function boxTwo(){
	document.querySelector(".box.b").textContent = "Playing Piano, Drums, and Soccer";
    document.querySelector(".box.b").style.backgroundColor = "#F8F2F5";
}
function boxThree(){
	document.querySelector(".box.c").innerHTML = "<a href=\"https://www.youtube.com/watch?v=0NUX4tW5pps\">Mobb Deep - Shook Ones Part II</a>";
    document.querySelector(".box.c").style.backgroundColor = "#F8F2F5";
}
function boxFour(){
	document.querySelector(".box.d").textContent = "July 26, 1999";
    document.querySelector(".box.d").style.backgroundColor = "#F8F2F5";
}
function boxFive(){
	document.querySelector(".box.e").innerHTML = "<img src=\"jonb.jpg\" id=\"jonb\"><p class=\"jonbtext\">Jon B</p>";
    document.querySelector(".box.e").style.color = "#FFFFFF";
    document.querySelector(".box.e").style.backgroundColor = "#F8F2F5";
}
function boxSix(){
	document.querySelector(".box.f").textContent = "Size: 9";
    document.querySelector(".box.f").style.backgroundColor = "#F8F2F5";
}

for (let i = 0; i<boxes.length; i++)
{
boxes[i].addEventListener("click", whichBox); //adds event listeners
console.log(i);
console.log(boxes[i]);
}