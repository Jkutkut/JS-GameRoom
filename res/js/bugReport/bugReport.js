window.onload = () => {
	fetch("../res/db/games.json")
		.then(response => response.json())
		.then(json => initForm(json));

	let btn = document.getElementById("btnSubmit");
	btn.onclick = submitForm;

	document.getElementById("bugReport").addEventListener("submit", (e) => {
		e.preventDefault();
	});
}


function initForm(json) {
	let gameSelector = document.getElementById("gameSelector");
	let games = json.games;

	for (let game of games) {
		gameSelector.innerHTML += newOption(game.name);
	}

	var date = new Date();
 
	let today = [
		date.getFullYear(),
		padTo2Digits(date.getMonth() + 1),
		padTo2Digits(date.getDate()),
	].join('-');
	
	document.getElementById("datePicker").value = today;
}


function newOption(name) {
	return `<option value="${name}">${name}</option>`;
}

function padTo2Digits(num) {
	return num.toString().padStart(2, '0');
}


const PHONE_REGEX = /^(\+\d{2,3})? ?\d{3} ?(\d{3} ?\d{3}|\d{2} ?\d{2} ?\d{2})$/;
const MAIL_REGEX = /^[a-z][a-z1-9._-]*@[a-z]+\.[a-z]{1,3}$/;

function validateForm() {
	let reportError = (div, msg) => {
		div.setCustomValidity(msg);
		div.reportValidity();
		return false;
	};
	let clearError = (div) => {
		div.setCustomValidity("");
		div.reportValidity();
	};

	// Bug information

	let dateDiv = document.getElementById("datePicker");
	let date = new Date(dateDiv.value);
	if (date == "Invalid Date")
		return reportError(dateDiv, "Invalid date.");
	if (date > new Date())
		return reportError(dateDiv, "Date must be in the past/present.");
	clearError(dateDiv);

	// Get selected typeofbug inputs
	let typeofbug = document.querySelector(`input[name="typeofbug"]:checked`);
	let typeofbugDiv = document.querySelector(`input[name="typeofbug"]`);
	if (typeofbug == null)
		return reportError(typeofbugDiv, "Please select a type of bug.");
	clearError(typeofbugDiv);

	let txtArea = document.getElementsByTagName("textArea")[0];
	if (txtArea.value == "")
		return reportError(txtArea, "Please enter a description of the bug.");
	clearError(txtArea);

	// User information

	let username = document.getElementById("username");
	if (username.value == "")
		return reportError(
			username,
			"Please enter your username"
		);
	clearError(username);

	let email = document.getElementById("email");
	if (email.value == "")
		return reportError(
			email,
			"Please enter your email"
		);
	if (!MAIL_REGEX.test(email.value))
		return reportError(
			email,
			"Please enter a valid email"
		);
	clearError(email);
	
	let phone = document.getElementById("phone");
	if (phone.value == "")
		return reportError(
			phone,
			"Please enter your phone number"
		);
	if (!PHONE_REGEX.test(phone.value))
		return reportError(
			phone,
			"Please enter a valid phone number"
		);
	clearError(phone);

	let gender = document.querySelector(`input[name="gender"]:checked`);
	let genderDiv = document.querySelector(`input[name="gender"]`);
	if (gender == null)
		return reportError(
			genderDiv,
			"Please, specify your gender"
		);
	clearError(genderDiv);

	return true;
}

function submitForm() {
	if (!validateForm())
		return;
	alert("Thank you for your feedback.");
	location.reload();
}