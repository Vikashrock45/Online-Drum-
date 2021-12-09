

//Detect Button press

var noOfDrums = document.querySelectorAll(".drum").length;

for(var i = 0; i<noOfDrums; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", function () {
	var buttonInnerHTML = this.innerHTML;

	makeSound(buttonInnerHTML);

	buttonAnimtation(buttonInnerHTML);

});

}

//Detect keyboard press


document.addEventListener("keydown", function(event) {

	makeSound(event.key);

	buttonAnimtation(event.key);

})

//Adding sound to each buttons 

function makeSound(key) {
	switch (key) {
		case "w": var audio = new Audio("sounds/tom-1.mp3");
				  audio.play();
				  break;

	    case "a": var audio = new Audio("sounds/tom-2.mp3");
				  audio.play();
				  break;

		case "s": var audio = new Audio("sounds/tom-3.mp3");
				  audio.play();
				  break;

		case "d": var audio = new Audio("sounds/tom-4.mp3");
				  audio.play();
				  break;

		case "j": var audio = new Audio("sounds/snare.mp3");
				  audio.play();
				  break;

		case "k": var audio = new Audio("sounds/crash.mp3");
				  audio.play();
				  break;

		case "l": var audio = new Audio("sounds/kick-bass.mp3");
				  audio.play();
				  break;

		default: console.log("Refresh it");

	}
}


//Adding animation to the buttons

function buttonAnimtation(currentKey) {

	var actButton = document.querySelector("."+currentKey);

	actButton.classList.add("pressed");

	setTimeout(function() {
		actButton.classList.remove("pressed");
	}, 100);
}














