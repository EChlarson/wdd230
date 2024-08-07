// Initialize display element variable
const p1 = document.querySelector("#password");
const p2 = document.querySelector("#cpassword");
const message = document.querySelector("#formmessage");

p2.addEventListener("focusout", checkSame);

//Evaluate to see if fields match
function checkSame() {
	if (p1.value !== p2.value) {
		message.textContent = "Passwords do NOT match.";
		message.style.visibility = "show";
		p2.style.backgroundColor = "#c30010";
		p2.value = "";
		p2.focus();
	} else {
		message.style.display = "none";
		p2.style.backgroundColor = "#fff";
		p2.style.color = "#000";
	}
}

