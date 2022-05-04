var gameData;

window.onload = () => {
	gameData = parseParams();

	console.log(gameData);
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
		console.log(`${entry[0]}: ${entry[1]}`);
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