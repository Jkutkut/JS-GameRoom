var gameData;

window.onload = () => {
	gameData = parseParams();
	fetch("../res/db/games.json")
		.then(response => response.json())
		.then(json => loadGame(json, gameData));

	console.log(gameData);
}

function loadGame(gamesData, gameData) {
	let gameUrl = `../${gamesData.gameLocation}${gameData.game}`;

	let name;
	let description;
	for (let i = 0; i < gamesData.games.length; i++) {
		if (gamesData.games[i].url === gameData.game) {
			name = gamesData.games[i].name;
			description = gamesData.games[i].description;
			break;
		}
	}

	document.getElementById("monitorscreen").src = gameUrl;
	document.getElementById("title").innerHTML = name;
	document.getElementsByTagName("title")[0].innerHTML = name;
	document.getElementById("description").innerHTML = description;
}

function parseParams() {
	let result = {
		"game": null,
		"url": null
	}
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const entries = urlParams.entries();
	for(const entry of entries) {
		switch(entry[0]) {
			case "game":
				result.game = entry[1];
				break;
			case "url":
				result.url = btoa(entry[1]);
				break;
		}
	}
	return result;
}

function stringToBase64(str) {
	return atob(str);
}