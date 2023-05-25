var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient")
var randomBtn =document.getElementById("random");

function getRgb(){
	var r = Math.round(Math.random()*255);
	var g = Math.round(Math.random()*255);
	var b = Math.round(Math.random()*255);
	return "rgb(" + r + "," + g + "," + b + ")";
}


function color(){
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value + "," 
	+ color2.value + ")";

	css.textContent = body.style.background + ";"
}
color1.addEventListener("input", color)

color2.addEventListener("input", color)


window.addEventListener("load", function(){
	color1.setAttribute("value", "#" + "FF0000");
	color2.setAttribute("value", "#" + "FFFF00");
	css.textContent = "linear-gradient(to right, #FF0000 , #FFFF00)"
});

function randomColor(){
	var randomColor1 = getRgb();
	var randomColor2 = getRgb();
	body.style.background = 
	"linear-gradient(to right, " + randomColor1 + ", " + randomColor2 + ")";
	/*
	Ne mogu promijeniti vrijednosti inputa da budu random jer dobijam rgb() vrijednost boje a color.value mora biti u HEX obliku...?
	color1.value = getRgb();
	color2.setAttribute("value", "#" + "FFFF00");
	*/
	css.textContent = body.style.background + ";";
	
}
randomBtn.addEventListener("click", randomColor);




