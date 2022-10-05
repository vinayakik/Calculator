
		// Function that display value
		function dis(val) {
			document.getElementById("result").value += val
		}

		function myFunction(event) {
			if (event.key == '0' || event.key == '1'
				|| event.key == '2' || event.key == '3'
				|| event.key == '4' || event.key == '5'
				|| event.key == '6' || event.key == '7'
				|| event.key == '8' || event.key == '9'
				|| event.key == '+' || event.key == '-'
				|| event.key == '*' || event.key == '/')
				document.getElementById("result").value += event.key;
		}

		var cal = document.getElementById("calcu");
		cal.onkeyup = function (event) {
			console.log(event);
			if (event.keyCode === 13) {
				console.log("Enter");
				let x = document.getElementById("result").value
				console.log(x);
				solve();
			}
		}

		// Function that evaluates the digit and return result
		function solve() {
			let x = document.getElementById("result").value
			let y = math.evaluate(x)
			document.getElementById("result").value = y
		}

		// Function that clear the display
		function clr() {
			document.getElementById("result").value = ""
		}

// Dark mode function on button click

function myDark(){
	document.body.classList.toggle("dark");
	document.querySelector("h1").classList.toggle("darkHead")
	document.querySelector("#result").classList.toggle("dark");

	for (var i of document.querySelectorAll(".btn")){
		i.classList.toggle("darkCalc");
		// console.log(i.classList);
	}
	document.querySelector("#darkLight").classList.toggle("lightMode");

}

//To change the text in the Dark mode/Light mode button

document.querySelector("#darkLight").addEventListener("click",toggleText);


function toggleText(){

	var currentText = document.querySelector("#darkLight");
	console.log(currentText.innerHTML);
	if (currentText.innerText ==="Switch to Dark mode"){
		currentText.innerText="Switch to Light mode";
	}
else{
		currentText.innerText="Switch to Dark mode";
	}
}