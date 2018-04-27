var button = document.querySelector("button");
var isPurple = false;
button.addEventListener("click", function(){
	if(isPurple){
		document.body.style.background = "grey";
	} else {
		document.body.style.background = "pink";
	}
	isPurple =!isPurple;
});
