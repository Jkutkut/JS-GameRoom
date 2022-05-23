window.onload = () => {
	fetch("../res/db/games.json")
		.then(response => response.json())
		.then(json => initForm(json));
}


function initForm(json) {
	let gameSelector = document.getElementById("gameSelector");
	let games = json.games;

	for (let game of games) {
		gameSelector.innerHTML += newOption(game.name);
	}

	var now = new Date();
 
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);

    var today = now.getFullYear()+"-"+(month)+"-"+(day) ;
	document.getElementById("datePicker").val(today);
}


function newOption(name) {
	return `<option value="${name}">${name}</option>`;
}