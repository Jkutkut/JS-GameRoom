window.onload = () => {
	fetch("../res/db/games.json")
		.then(response => response.json())
		.then(json => initForm(json));

	let btn = document.getElementById("btnSubmit");
	btn.onclick = submitForm;
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


function reportError(div, msg) {
	div.setCustomValidity(msg);
	div.reportValidity();
	return false;
}

const PHONE_REGEX = /^(\+\d{2,3})? ?\d{3} ?(\d{3} ?\d{3}|\d{2} ?\d{2} ?\d{2})$/;
const MAIL_REGEX = /^[a-z][a-z1-9._-]*@[a-z]+\.[a-z]{1,3}$/;

function validateForm() {
	let username = document.getElementById("username");

	if (username.value == "")
		return reportError(
			username,
			"Please enter your username"
		);

	let email = document.getElementById("email");
	console.log(email.value);
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
	



	return true;
}

function submitForm() {
	if (!validateForm())
		return;

	document.forms["bugReport"].submit();
}